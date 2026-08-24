import { Question } from '../types';
import { get100CategoryQuestions, cleanQuestionText } from '../data/hundredQuestionsBank';
import {
  getAllCarRawQuestions,
  addCustomCarQuestion,
  updateCarQuestion,
  deleteCarQuestion,
  resetCarQuestionsToDefaults,
  UserCarQuestionInput
} from '../data/carsQuestions';
import { persistentStorage } from './persistentStorage';

export interface CategoryQuestionItem {
  id: string;
  question: string;
  answer: string;
  points: number;
  options?: string[];
  imageUrl?: string;
  answerImageUrl?: string;
  hint?: string;
  explanation?: string;
}

// Helpers for storage keys
export function getCustomQuestionsStorageKey(catId: string): string {
  return `diwaniya_cat_custom_${catId}`;
}

export function getOverridesStorageKey(catId: string): string {
  return `diwaniya_cat_overrides_${catId}`;
}

export function getDeletedStorageKey(catId: string): string {
  return `diwaniya_cat_deleted_${catId}`;
}

// Get saved custom questions for a category
export function getSavedCustomCategoryQuestions(catId: string): CategoryQuestionItem[] {
  if (typeof window === 'undefined') return [];
  if (catId === 'gen-cars' || catId === 'cars') {
    const carList = getAllCarRawQuestions();
    return carList.map(c => ({
      id: c.id,
      question: c.question,
      answer: c.answer,
      points: c.points,
      imageUrl: c.imageUrl,
      answerImageUrl: c.answerImageUrl,
    }));
  }
  try {
    const raw = persistentStorage.getItem(getCustomQuestionsStorageKey(catId));
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error loading custom questions for category:', catId, e);
    return [];
  }
}

// Get overrides for built-in questions of a category
export function getCategoryQuestionOverrides(catId: string): Record<string, Partial<CategoryQuestionItem>> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = persistentStorage.getItem(getOverridesStorageKey(catId));
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Error loading overrides for category:', catId, e);
    return {};
  }
}

// Get deleted question IDs for a category
export function getDeletedCategoryQuestionIds(catId: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = persistentStorage.getItem(getDeletedStorageKey(catId));
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error loading deleted question IDs for category:', catId, e);
    return [];
  }
}

// Get all questions (Base + Custom - Deleted + Overrides) for any category
export function getCategoryRawQuestions(catId: string, catName: string = ''): CategoryQuestionItem[] {
  if (!catId && !catName) return [];

  // Special handling for cars category to maintain compatibility
  if (catId === 'gen-cars' || catId === 'cars' || catName.includes('سيارات')) {
    const carList = getAllCarRawQuestions();
    return carList.map(c => ({
      id: c.id,
      question: c.question,
      answer: c.answer,
      points: c.points,
      imageUrl: c.imageUrl,
      answerImageUrl: c.answerImageUrl,
      hint: 'قطعة/جزء في ميكانيكا السيارات',
      explanation: `الإجابة الصحيحة هي: ${c.answer}`,
    }));
  }

  // 1. Fetch base 100 questions for this category
  const baseQuestions = get100CategoryQuestions(catId, catName);
  const deletedIds = new Set(getDeletedCategoryQuestionIds(catId));
  const overrides = getCategoryQuestionOverrides(catId);
  const customQuestions = getSavedCustomCategoryQuestions(catId);

  // 2. Map and apply overrides to base questions that are not deleted
  const processedBase: CategoryQuestionItem[] = baseQuestions
    .filter(q => q && !deletedIds.has(q.id))
    .map(q => {
      const override = overrides[q.id] || {};
      const baseImg = q.imageUrl || (q as any).image || '';
      const baseAnswerImg = q.answerImageUrl || baseImg || '';
      return {
        id: q.id,
        question: override.question || q.question,
        answer: override.answer || q.correctAnswer,
        points: override.points || q.points || 200,
        options: override.options || q.options || [],
        imageUrl: override.imageUrl !== undefined ? override.imageUrl : baseImg,
        answerImageUrl: override.answerImageUrl !== undefined ? override.answerImageUrl : baseAnswerImg,
        hint: override.hint !== undefined ? override.hint : q.hint,
        explanation: override.explanation !== undefined ? override.explanation : q.explanation,
      };
    });

  // 3. Filter custom questions not in deleted set and apply overrides if any
  const processedCustom: CategoryQuestionItem[] = customQuestions
    .filter(q => q && !deletedIds.has(q.id))
    .map(q => {
      const override = overrides[q.id] || {};
      const baseImg = q.imageUrl || (q as any).image || '';
      const baseAnswerImg = q.answerImageUrl || baseImg || '';
      return {
        ...q,
        imageUrl: override.imageUrl !== undefined ? override.imageUrl : baseImg,
        answerImageUrl: override.answerImageUrl !== undefined ? override.answerImageUrl : baseAnswerImg,
        ...override,
      };
    });

  return [...processedCustom, ...processedBase];
}

// Add a custom question to a category
export function addCustomCategoryQuestion(catId: string, item: CategoryQuestionItem): void {
  if (typeof window === 'undefined') return;

  if (catId === 'gen-cars' || catId === 'cars') {
    const carInput: UserCarQuestionInput = {
      id: item.id,
      question: item.question,
      answer: item.answer,
      points: item.points,
      imageUrl: item.imageUrl || '/cars_category_thumb.jpg',
      answerImageUrl: item.answerImageUrl,
    };
    addCustomCarQuestion(carInput);
    window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
    return;
  }

  const customList = getSavedCustomCategoryQuestions(catId);
  // Add to top of list
  customList.unshift(item);

  try {
    persistentStorage.setItem(getCustomQuestionsStorageKey(catId), JSON.stringify(customList));
  } catch (e) {
    console.error('Error saving custom question:', e);
  }

  window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
}

// Update / Edit a question in a category
export function updateCategoryQuestion(
  catId: string,
  questionId: string,
  updatedData: Partial<CategoryQuestionItem>
): void {
  if (typeof window === 'undefined') return;

  if (catId === 'gen-cars' || catId === 'cars') {
    updateCarQuestion(questionId, {
      question: updatedData.question,
      answer: updatedData.answer,
      points: updatedData.points,
      imageUrl: updatedData.imageUrl,
      answerImageUrl: updatedData.answerImageUrl,
    });
    window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
    return;
  }

  const customList = getSavedCustomCategoryQuestions(catId);
  const customIdx = customList.findIndex(q => q.id === questionId);

  if (customIdx >= 0) {
    customList[customIdx] = {
      ...customList[customIdx],
      ...updatedData,
      id: questionId,
    };
    try {
      persistentStorage.setItem(getCustomQuestionsStorageKey(catId), JSON.stringify(customList));
    } catch (e) {
      console.error('Error saving custom question update:', e);
    }
  } else {
    // Save as override for built-in question
    const overrides = getCategoryQuestionOverrides(catId);
    overrides[questionId] = {
      ...(overrides[questionId] || {}),
      ...updatedData,
    };
    try {
      persistentStorage.setItem(getOverridesStorageKey(catId), JSON.stringify(overrides));
    } catch (e) {
      console.error('Error saving question override:', e);
    }
  }

  window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
}

// Delete a question in a category
export function deleteCategoryQuestion(catId: string, questionId: string): void {
  if (typeof window === 'undefined') return;

  if (catId === 'gen-cars' || catId === 'cars') {
    deleteCarQuestion(questionId);
    window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
    return;
  }

  // Remove from custom list if present
  const customList = getSavedCustomCategoryQuestions(catId).filter(q => q.id !== questionId);
  try {
    persistentStorage.setItem(getCustomQuestionsStorageKey(catId), JSON.stringify(customList));
  } catch (e) {
    console.error('Error updating custom list after delete:', e);
  }

  // Add to deleted IDs list
  const deleted = getDeletedCategoryQuestionIds(catId);
  if (!deleted.includes(questionId)) {
    deleted.push(questionId);
    try {
      persistentStorage.setItem(getDeletedStorageKey(catId), JSON.stringify(deleted));
    } catch (e) {
      console.error('Error saving deleted question ID:', e);
    }
  }

  window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
}

// Reset category questions to initial state
export function resetCategoryQuestions(catId: string): void {
  if (typeof window === 'undefined') return;

  if (catId === 'gen-cars' || catId === 'cars') {
    resetCarQuestionsToDefaults();
    window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
    return;
  }

  try {
    persistentStorage.removeItem(getCustomQuestionsStorageKey(catId));
    persistentStorage.removeItem(getOverridesStorageKey(catId));
    persistentStorage.removeItem(getDeletedStorageKey(catId));
  } catch (e) {
    console.error('Error resetting category questions:', e);
  }

  window.dispatchEvent(new CustomEvent('diwaniya_category_questions_updated', { detail: { catId } }));
}

/**
 * Generate TypeScript code export for the questions of a category
 * Allows user to copy or download as actual code file in the repository
 */
export function generateCategoryTypeScriptCode(catId: string, catName: string = ''): string {
  const list = getCategoryRawQuestions(catId, catName);
  const varName = (catId.replace(/[^a-zA-Z0-9]/g, '_') || 'category') + 'Questions';

  const formattedQuestions = list.map((q) => {
    const obj: Record<string, any> = {
      id: q.id,
      points: q.points || 200,
      question: q.question,
      correctAnswer: q.answer,
    };
    if (q.imageUrl && q.imageUrl.trim() !== '') obj.imageUrl = q.imageUrl.trim();
    if (q.answerImageUrl && q.answerImageUrl.trim() !== '') obj.answerImageUrl = q.answerImageUrl.trim();
    if (q.options && q.options.length > 0) obj.options = q.options;
    if (q.hint && q.hint.trim() !== '') obj.hint = q.hint.trim();
    if (q.explanation && q.explanation.trim() !== '') obj.explanation = q.explanation.trim();
    return obj;
  });

  return `import { Question } from '../types';

export const ${varName}: Question[] = ${JSON.stringify(formattedQuestions, null, 2)};
`;
}

