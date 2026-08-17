import { Category, Question } from '../types';
import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { get100CategoryQuestions, cleanQuestionText } from '../data/hundredQuestionsBank';

// In-memory runtime state for current user session (No localStorage dependency)
let activeUserId: string | null = null;
let activeSeenIds: string[] = [];

// Get current array of seen question IDs
export function getSeenQuestionIds(): string[] {
  return [...activeSeenIds];
}

// Backward compatibility alias
export function getUsedQuestionIds(): string[] {
  return getSeenQuestionIds();
}

// Explicitly set or clear the active user ID
export function setActiveUserId(userId: string | null): void {
  activeUserId = userId;
  if (!userId) {
    activeSeenIds = [];
  }
}

// 1. Sync seen questions strictly from Firestore under users/{userId} on login/auth-change
export async function syncUsedQuestionsFromFirestore(userId: string | null): Promise<string[]> {
  const targetUid = userId || activeUserId || auth.currentUser?.uid || null;
  activeUserId = targetUid;
  
  if (!targetUid) {
    activeSeenIds = [];
    return [];
  }
  try {
    const userRef = doc(db, 'users', targetUid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      const data = snap.data();
      const rawSeen = Array.isArray(data?.seenQuestionIds) ? data.seenQuestionIds : [];
      const rawPlayed = Array.isArray(data?.playedQuestions) ? data.playedQuestions : [];
      const rawUsed = Array.isArray(data?.usedQuestions) ? data.usedQuestions : [];
      
      const firestoreSeen = Array.from(new Set([...rawSeen, ...rawPlayed, ...rawUsed]));
      activeSeenIds = firestoreSeen;
      return activeSeenIds;
    } else {
      activeSeenIds = [];
      return [];
    }
  } catch (e: any) {
    if (e?.code === 'unavailable' || e?.message?.includes('offline') || e?.message?.includes('client is offline')) {
      console.warn('Firestore is currently offline or unreachable. Using active in-memory seen questions.');
    } else {
      console.warn('Sync seen questions warning:', e?.message || e);
    }
  }
  return activeSeenIds;
}

// 2. Mark a single question ID as used/seen persistently in Firestore under users/{userId}
export async function markQuestionAsSeen(questionId: string, userId?: string | null): Promise<void> {
  if (!questionId) return;
  const targetUid = userId || activeUserId || auth.currentUser?.uid || null;
  if (targetUid) {
    activeUserId = targetUid;
  }

  if (!activeSeenIds.includes(questionId)) {
    activeSeenIds.push(questionId);
  }

  if (targetUid) {
    try {
      const userRef = doc(db, 'users', targetUid);
      await setDoc(
        userRef,
        {
          seenQuestionIds: arrayUnion(questionId),
          playedQuestions: arrayUnion(questionId),
          usedQuestions: arrayUnion(questionId),
        },
        { merge: true }
      );
    } catch (err: any) {
      if (err?.code === 'unavailable' || err?.message?.includes('offline') || err?.message?.includes('client is offline')) {
        console.warn('Firestore offline: question saved in active memory.');
      } else {
        console.warn('Saving seen question warning:', err?.message || err);
      }
    }
  }
}

// Batch mark multiple question IDs as seen persistently in Firestore
export async function markQuestionsAsSeen(questionIds: string[], userId?: string | null): Promise<void> {
  if (!questionIds || questionIds.length === 0) return;
  const targetUid = userId || activeUserId || auth.currentUser?.uid || null;
  if (targetUid) activeUserId = targetUid;
  const currentSet = new Set(activeSeenIds);
  let changed = false;

  questionIds.forEach((id) => {
    if (!currentSet.has(id)) {
      currentSet.add(id);
      changed = true;
    }
  });

  if (changed) {
    activeSeenIds = Array.from(currentSet);

    if (targetUid) {
      try {
        const userRef = doc(db, 'users', targetUid);
        await setDoc(
          userRef,
          {
            seenQuestionIds: activeSeenIds,
            playedQuestions: activeSeenIds,
            usedQuestions: activeSeenIds,
          },
          { merge: true }
        );
      } catch (err: any) {
        if (err?.code === 'unavailable' || err?.message?.includes('offline') || err?.message?.includes('client is offline')) {
          console.warn('Firestore offline: batch questions saved in active memory.');
        } else {
          console.warn('Batch saving seen questions warning:', err?.message || err);
        }
      }
    }
  }
}

// Alias for markQuestionAsSeen
export async function markQuestionAsUsed(questionId: string, userId?: string | null): Promise<void> {
  return markQuestionAsSeen(questionId, userId);
}

// 3. Clear seen question IDs ONLY for a specific category in Firestore when its 100-question pool is exhausted
export async function clearCategorySeenQuestions(catId: string, userId?: string | null): Promise<string[]> {
  const targetUid = userId || activeUserId || auth.currentUser?.uid || null;
  if (targetUid) activeUserId = targetUid;

  // Gather IDs from the category bank
  const catQuestions = get100CategoryQuestions(catId);
  const catQuestionIds = new Set(catQuestions.map((q) => q.id));

  // Remove ONLY IDs belonging to this specific category
  activeSeenIds = activeSeenIds.filter(
    (id) => !catQuestionIds.has(id) && !id.startsWith(`${catId}_`) && !id.startsWith(`${catId}-`) && id !== catId
  );

  if (targetUid) {
    try {
      const userRef = doc(db, 'users', targetUid);
      await setDoc(
        userRef,
        {
          seenQuestionIds: activeSeenIds,
          playedQuestions: activeSeenIds,
          usedQuestions: activeSeenIds,
        },
        { merge: true }
      );
    } catch (e: any) {
      if (e?.code === 'unavailable' || e?.message?.includes('offline') || e?.message?.includes('client is offline')) {
        console.warn('Firestore offline: cleared category in active memory.');
      } else {
        console.warn('Clear category warning:', e?.message || e);
      }
    }
  }

  return activeSeenIds;
}

export async function clearCategoryUsedQuestions(catId: string, userId?: string | null): Promise<string[]> {
  return clearCategorySeenQuestions(catId, userId);
}

// Get remaining unseen question count out of 100 strictly for a specific category
export function getCategoryRemainingCount(catId: string, catName: string = ''): number {
  const rawPool = get100CategoryQuestions(catId, catName);
  const pool = Array.isArray(rawPool) ? rawPool : [];
  const seenSet = new Set(activeSeenIds);
  const unused = pool.filter((q) => q && !seenSet.has(q.id));
  return unused.length;
}

// 4. Reset all seen questions history globally for current user in Firestore
export async function clearUsedQuestions(userId?: string | null): Promise<void> {
  const targetUid = userId || activeUserId || auth.currentUser?.uid || null;
  if (targetUid) activeUserId = targetUid;
  activeSeenIds = [];

  if (targetUid) {
    try {
      const userRef = doc(db, 'users', targetUid);
      await setDoc(userRef, { seenQuestionIds: [], playedQuestions: [], usedQuestions: [] }, { merge: true });
    } catch (e: any) {
      if (e?.code === 'unavailable' || e?.message?.includes('offline') || e?.message?.includes('client is offline')) {
        console.warn('Firestore offline: reset used questions in active memory.');
      } else {
        console.warn('Clear used questions warning:', e?.message || e);
      }
    }
  }
}

// Get total count of seen questions across all categories
export function getUsedQuestionsCount(): number {
  return activeSeenIds.length;
}

// Fisher-Yates shuffle helper
function shuffleArray<T>(arr?: T[] | null): T[] {
  if (!arr || !Array.isArray(arr)) return [];
  const res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

// 5. Strict Exclusion Filter & Question Sampler:
// Samples 6 fresh UNSEEN questions (2x 200, 2x 400, 2x 600) for a category
// ONLY marks questions as used when they are actually shown/selected by player in game!
export function getFreshQuestionsForCategory(
  category: Category,
  seenIdsSet: Set<string>,
  userId?: string | null
): Question[] {
  if (!category) return [];
  const catId = category.id;
  const rawPool = get100CategoryQuestions(catId, category.name); // Full 100-question bank for this category
  const pool = Array.isArray(rawPool) ? rawPool : [];

  // Strict exclusion filter: availableQuestions = categoryQuestions.filter(q => !seenQuestionIds.includes(q.id))
  let availableQuestions = pool.filter((q) => q && !seenIdsSet.has(q.id));

  // Reset ONLY this category when its bank of 100 questions is exhausted/completed (< 6 remaining)
  if (availableQuestions.length < 6) {
    clearCategorySeenQuestions(catId, userId);
    // Remove all IDs of this category from active seen set so all 100 questions of this category open up again
    pool.forEach((q) => {
      if (q && q.id) seenIdsSet.delete(q.id);
    });
    availableQuestions = pool;
  }

  // Shuffle available questions to pick randomly from unused questions
  const shuffledAvailable = shuffleArray(availableQuestions);
  const selectedQuestions: Question[] = [];
  const selectedIds = new Set<string>();

  // Targeted points allocation for board cards: [200, 200, 400, 400, 600, 600]
  const targetPoints = [200, 200, 400, 400, 600, 600];

  targetPoints.forEach((pts) => {
    // Try to find an available question matching target points that hasn't been selected yet for this board
    let candidate = shuffledAvailable.find(
      (q) => q && q.points === pts && !selectedIds.has(q.id)
    );

    // If no exact point match left, pick any remaining available question
    if (!candidate) {
      candidate = shuffledAvailable.find((q) => q && !selectedIds.has(q.id));
    }

    // Fallback to pool if exhausted in current draw
    if (!candidate) {
      candidate = pool.find((q) => q && !selectedIds.has(q.id)) || pool[0];
    }

    if (candidate && candidate.id) {
      selectedIds.add(candidate.id);
      const cleanText = cleanQuestionText(candidate.question);

      selectedQuestions.push({
        ...candidate,
        points: pts,
        question: cleanText,
        options: shuffleArray(candidate.options),
        hideImageUntilAnswer: candidate.hideImageUntilAnswer,
      });
    }
  });

  return selectedQuestions;
}

// 6. Get randomized categories for a game round
export function getRandomizedCategories(categories: Category[], userId?: string | null): Category[] {
  if (!categories || !Array.isArray(categories)) return [];
  const seenIdsSet = new Set(activeSeenIds);

  return categories
    .filter((cat) => cat && !cat.hidden)
    .map((cat) => {
      const freshQuestions = getFreshQuestionsForCategory(cat, seenIdsSet, userId);
      return {
        ...cat,
        questions: freshQuestions,
        selectedByTeamId: null,
      };
    });
}
