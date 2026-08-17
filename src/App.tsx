import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { collection, addDoc, doc, updateDoc, setDoc, getDoc, increment, onSnapshot, arrayUnion } from 'firebase/firestore';
import { auth, db } from './lib/firebase';
import { GameStage, Category, Team, GameSettings, Question } from './types';
import { INITIAL_CATEGORIES } from './data/categories';
import { getRandomizedCategories, markQuestionAsUsed, syncUsedQuestionsFromFirestore } from './utils/questionBank';
import { Navbar } from './components/Navbar';
import { TeamSetupScreen } from './components/TeamSetupScreen';
import { GeneralCategoryDraft } from './components/GeneralCategoryDraft';
import { SpecificCategoryDraft } from './components/SpecificCategoryDraft';
import { ScoreBoard } from './components/ScoreBoard';
import { GameBoard } from './components/GameBoard';
import { QuestionModal } from './components/QuestionModal';
import { ResultsView } from './components/ResultsView';
import { RulesModal } from './components/RulesModal';
import { AuthScreen } from './components/AuthScreen';
import { BuyCreditsModal } from './components/BuyCreditsModal';
import { sound } from './utils/sound';
import { Sparkles, Layers, Zap, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [stage, setStage] = useState<GameStage>('team-setup');
  const [categories, setCategories] = useState<Category[]>(() => getRandomizedCategories(INITIAL_CATEGORIES || []));

  // Teams State
  const [team1, setTeam1] = useState<Team>({
    id: 'team1',
    name: 'الفريق الأول',
    color: 'red',
    avatar: 'shield',
    usedPowerups: [],
    score: 0,
    selectedGeneralCategories: [],
    selectedSpecificCategories: [],
    correctAnswersCount: 0,
    wrongAnswersCount: 0,
  });

  const [team2, setTeam2] = useState<Team>({
    id: 'team2',
    name: 'الفريق الثاني',
    color: 'blue',
    avatar: 'flame',
    usedPowerups: [],
    score: 0,
    selectedGeneralCategories: [],
    selectedSpecificCategories: [],
    correctAnswersCount: 0,
    wrongAnswersCount: 0,
  });

  // Settings
  const [settings, setSettings] = useState<GameSettings>({
    timerDuration: 30,
    soundEnabled: false,
    multipleChoiceMode: true,
  });

  // Active turn & Active Question Modal State
  const [activeTurnTeamId, setActiveTurnTeamId] = useState<'team1' | 'team2'>('team1');
  const [activeQuestion, setActiveQuestion] = useState<{ category: Category; question: Question } | null>(null);
  
  // Game Phase state ('general' for Phase 1, 'specific' for Phase 2)
  const [gamePhase, setGamePhase] = useState<'general' | 'specific'>('general');
  const [showPhase1IntroModal, setShowPhase1IntroModal] = useState(false);
  const [showPhaseTransitionModal, setShowPhaseTransitionModal] = useState(false);

  // Rules & Games Balance Modal State
  const [showRules, setShowRules] = useState(false);
  const [gamesBalance, setGamesBalance] = useState<number>(0);
  const [showBuyCreditsModal, setShowBuyCreditsModal] = useState<boolean>(false);

  // Auth Listener & Used Questions Sync
  useEffect(() => {
    // 1. Initial check for local user session if any
    const savedLocal = localStorage.getItem('diwaniya_current_user') || localStorage.getItem('diwaniya_local_guest_user');
    if (savedLocal) {
      try {
        const parsed = JSON.parse(savedLocal);
        if (parsed && parsed.uid) {
          setUser(parsed);
          const savedBal = localStorage.getItem(`diwaniya_games_balance_${parsed.uid}`);
          if (savedBal !== null) {
            setGamesBalance(parseInt(savedBal, 10));
          }
        }
      } catch (e) {
        console.warn('Error reading local user fallback:', e);
      }
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          const savedBal = localStorage.getItem(`diwaniya_games_balance_${currentUser.uid}`);
          if (savedBal !== null) {
            setGamesBalance(parseInt(savedBal, 10));
          }
          await syncUsedQuestionsFromFirestore(currentUser.uid);
        } else {
          // If no firebase user, check if we had a local fallback session
          const localUserStr = localStorage.getItem('diwaniya_current_user') || localStorage.getItem('diwaniya_local_guest_user');
          if (!localUserStr) {
            setUser(null);
            setGamesBalance(0);
            await syncUsedQuestionsFromFirestore(null);
          }
        }

        // Restore active game session if page was refreshed during playing
        const savedSession = localStorage.getItem('diwaniya_active_game_session');
        if (savedSession) {
          try {
            const parsed = JSON.parse(savedSession);
            if (parsed && parsed.stage && Array.isArray(parsed.categories)) {
              setStage(parsed.stage);
              if (parsed.gamePhase) setGamePhase(parsed.gamePhase);
              if (parsed.team1) setTeam1(parsed.team1);
              if (parsed.team2) setTeam2(parsed.team2);
              if (parsed.categories) setCategories(parsed.categories);
              if (parsed.activeTurnTeamId) setActiveTurnTeamId(parsed.activeTurnTeamId);
            } else {
              setCategories(getRandomizedCategories(INITIAL_CATEGORIES || [], currentUser?.uid));
            }
          } catch (e) {
            setCategories(getRandomizedCategories(INITIAL_CATEGORIES || [], currentUser?.uid));
          }
        } else {
          setCategories(getRandomizedCategories(INITIAL_CATEGORIES || [], currentUser?.uid));
        }

        setAuthLoading(false);
      },
      (error) => {
        console.warn('Auth state listener error handled gracefully:', error?.message || error);
        setAuthLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Real-time Games Balance Listener directly from Firestore User Document
  useEffect(() => {
    if (!user) {
      setGamesBalance(0);
      return;
    }

    const localKey = `diwaniya_games_balance_${user.uid}`;
    const savedBal = localStorage.getItem(localKey);
    if (savedBal !== null) {
      setGamesBalance(parseInt(savedBal, 10));
    }

    try {
      const userRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(
        userRef,
        (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (typeof data.gamesBalance === 'number') {
              const bal = Math.max(0, data.gamesBalance);
              setGamesBalance(bal);
              localStorage.setItem(localKey, bal.toString());
            }
          }
        },
        (error) => {
          console.warn('Firestore gamesBalance listener handled:', error?.message || error);
        }
      );

      return () => unsubscribe();
    } catch (e) {
      console.warn('Error setting up gamesBalance listener:', e);
    }
  }, [user]);

  // Persist Active Game Session on State Updates
  useEffect(() => {
    if (stage === 'playing') {
      const sessionData = {
        stage,
        gamePhase,
        team1,
        team2,
        categories,
        activeTurnTeamId,
      };
      localStorage.setItem('diwaniya_active_game_session', JSON.stringify(sessionData));
    } else if (stage === 'game-over' || stage === 'team-setup') {
      localStorage.removeItem('diwaniya_active_game_session');
    }
  }, [stage, gamePhase, team1, team2, categories, activeTurnTeamId]);

  const handleSignOut = async () => {
    try {
      localStorage.removeItem('diwaniya_active_game_session');
      localStorage.removeItem('diwaniya_local_guest_user');
      localStorage.removeItem('diwaniya_current_user');
      setUser(null);
      setGamesBalance(0);
      await signOut(auth);
      await syncUsedQuestionsFromFirestore(null);
      setCategories(getRandomizedCategories(INITIAL_CATEGORIES || [], null));
    } catch (e) {
      console.warn('Handled sign out error gracefully:', e);
      setUser(null);
      setGamesBalance(0);
    }
  };

  // Save score and match history directly to Firestore
  const saveGameToFirestore = async () => {
    if (!user) return;
    try {
      const winnerName = team1.score > team2.score 
        ? (team1.name || 'الفريق الأول') 
        : team2.score > team1.score 
          ? (team2.name || 'الفريق الثاني') 
          : 'تعادل';

      // Save match session document to Firestore
      await addDoc(collection(db, 'gameSessions'), {
        userId: user.uid,
        userEmail: user.email || '',
        team1Name: team1.name || 'الفريق الأول',
        team2Name: team2.name || 'الفريق الثاني',
        team1Score: team1.score,
        team2Score: team2.score,
        winner: winnerName,
        completedAt: new Date().toISOString(),
        gamePhase: gamePhase,
      });

      // Update user aggregate stats in Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        gamesPlayed: increment(1),
        totalScore: increment(team1.score + team2.score),
        lastMatchAt: new Date().toISOString(),
      }, { merge: true });
    } catch (e) {
      console.warn('Error saving match history to Firestore:', e);
    }
  };

  // ---------------- HANDLERS ----------------
  const handleUpdateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleSelectCategory = (categoryId: string, teamId: 'team1' | 'team2' | 'shared') => {
    const category = (categories || []).find((c) => c?.id === categoryId);
    if (!category) return;

    // Update category object owner
    setCategories((prev) =>
      (prev || []).map((c) => (c?.id === categoryId ? { ...c, selectedByTeamId: teamId } : c))
    );

    // Update team selection arrays
    if (teamId === 'team1') {
      setTeam1((prev) => ({
        ...prev,
        selectedGeneralCategories:
          category.type === 'general' ? [...(prev.selectedGeneralCategories || []), categoryId] : (prev.selectedGeneralCategories || []),
        selectedSpecificCategories:
          category.type === 'specific' ? [...(prev.selectedSpecificCategories || []), categoryId] : (prev.selectedSpecificCategories || []),
      }));
    } else if (teamId === 'team2') {
      setTeam2((prev) => ({
        ...prev,
        selectedGeneralCategories:
          category.type === 'general' ? [...(prev.selectedGeneralCategories || []), categoryId] : (prev.selectedGeneralCategories || []),
        selectedSpecificCategories:
          category.type === 'specific' ? [...(prev.selectedSpecificCategories || []), categoryId] : (prev.selectedSpecificCategories || []),
      }));
    }
  };

  const handleDeselectCategory = (categoryId: string) => {
    const category = (categories || []).find((c) => c?.id === categoryId);
    if (!category) return;

    const currentOwner = category.selectedByTeamId;

    setCategories((prev) =>
      (prev || []).map((c) => (c?.id === categoryId ? { ...c, selectedByTeamId: null } : c))
    );

    if (currentOwner === 'team1') {
      setTeam1((prev) => ({
        ...prev,
        selectedGeneralCategories: (prev.selectedGeneralCategories || []).filter((id) => id !== categoryId),
        selectedSpecificCategories: (prev.selectedSpecificCategories || []).filter((id) => id !== categoryId),
      }));
    } else if (currentOwner === 'team2') {
      setTeam2((prev) => ({
        ...prev,
        selectedGeneralCategories: (prev.selectedGeneralCategories || []).filter((id) => id !== categoryId),
        selectedSpecificCategories: (prev.selectedSpecificCategories || []).filter((id) => id !== categoryId),
      }));
    }
  };

  const handleUsePowerup = (teamId: 'team1' | 'team2', powerupId: string) => {
    if (teamId === 'team1') {
      setTeam1((prev) => {
        const currentPowerups = Array.isArray(prev.usedPowerups) ? prev.usedPowerups : [];
        return {
          ...prev,
          usedPowerups: currentPowerups.includes(powerupId) ? currentPowerups : [...currentPowerups, powerupId],
        };
      });
    } else {
      setTeam2((prev) => {
        const currentPowerups = Array.isArray(prev.usedPowerups) ? prev.usedPowerups : [];
        return {
          ...prev,
          usedPowerups: currentPowerups.includes(powerupId) ? currentPowerups : [...currentPowerups, powerupId],
        };
      });
    }
  };

  const handleAwardPoints = (teamId: 'team1' | 'team2' | null, points: number, isSteal: boolean = false) => {
    if (!activeQuestion) return;

    const { category, question } = activeQuestion;

    // Track question as used/answered
    if (question?.id) {
      markQuestionAsUsed(question.id, user?.uid);
    }

    // Mark question as answered
    setCategories((prev) =>
      (prev || []).map((cat) => {
        if (cat?.id === category?.id) {
          return {
            ...cat,
            questions: (cat?.questions || []).map((q) =>
              q?.id === question?.id ? { ...q, isAnswered: true, answeredByTeamId: teamId } : q
            ),
          };
        }
        return cat;
      })
    );

    // Update score
    if (teamId === 'team1') {
      setTeam1((prev) => ({
        ...prev,
        score: (prev.score || 0) + points,
        correctAnswersCount: (prev.correctAnswersCount || 0) + 1,
      }));
      if (isSteal) {
        setTeam2((prev) => ({
          ...prev,
          score: Math.max(0, (prev.score || 0) - points),
        }));
      }
    } else if (teamId === 'team2') {
      setTeam2((prev) => ({
        ...prev,
        score: (prev.score || 0) + points,
        correctAnswersCount: (prev.correctAnswersCount || 0) + 1,
      }));
      if (isSteal) {
        setTeam1((prev) => ({
          ...prev,
          score: Math.max(0, (prev.score || 0) - points),
        }));
      }
    } else {
      // Pass or wrong answer: increment wrong count for active team
      if (activeTurnTeamId === 'team1') {
        setTeam1((prev) => ({ ...prev, wrongAnswersCount: (prev.wrongAnswersCount || 0) + 1 }));
      } else {
        setTeam2((prev) => ({ ...prev, wrongAnswersCount: (prev.wrongAnswersCount || 0) + 1 }));
      }
    }

    // Toggle active turn to alternate team
    setActiveTurnTeamId((prev) => (prev === 'team1' ? 'team2' : 'team1'));
    setActiveQuestion(null);
  };

  // Monitor automatic game completion
  useEffect(() => {
    if (stage !== 'playing') return;

    const safeCats = Array.isArray(categories) ? categories : [];

    // Selected played categories
    const selectedCats = safeCats.filter((c) => Boolean(c?.selectedByTeamId));
    const allPlayedQuestions = selectedCats.flatMap((c) => Array.isArray(c?.questions) ? c.questions : []);
    const totalUnanswered = allPlayedQuestions.filter((q) => !q?.isAnswered).length;

    // General phase
    const generalCats = safeCats.filter((c) => c?.type === 'general' && Boolean(c?.selectedByTeamId));
    const generalQuestions = generalCats.flatMap((c) => Array.isArray(c?.questions) ? c.questions : []);
    const generalUnanswered = generalQuestions.filter((q) => !q?.isAnswered).length;

    // Specific phase
    const specificCats = safeCats.filter(
      (c) => c?.type === 'specific' && (c?.selectedByTeamId === 'team1' || c?.selectedByTeamId === 'team2')
    );
    const specificQuestions = specificCats.flatMap((c) => Array.isArray(c?.questions) ? c.questions : []);
    const specificUnanswered = specificQuestions.filter((q) => !q?.isAnswered).length;

    if (allPlayedQuestions.length > 0 && totalUnanswered === 0) {
      sound.playFanfare();
      setStage('game-over');
    } else if (gamePhase === 'general' && generalQuestions.length > 0 && generalUnanswered === 0) {
      sound.playFanfare();
      setShowPhaseTransitionModal(true);
    } else if (gamePhase === 'specific' && specificQuestions.length > 0 && specificUnanswered === 0) {
      sound.playFanfare();
      setStage('game-over');
    }
  }, [categories, gamePhase, stage]);

  const handleProceedToSpecificPhase = () => {
    if (!showPhaseTransitionModal) {
      sound.playClick();
      setShowPhaseTransitionModal(true);
      return;
    }
    sound.playClick();
    setShowPhaseTransitionModal(false);
    setGamePhase('specific');
  };

  const handleAdjustScore = (teamId: 'team1' | 'team2', delta: number) => {
    if (teamId === 'team1') {
      setTeam1((prev) => ({ ...prev, score: Math.max(0, (prev.score || 0) + delta) }));
    } else {
      setTeam2((prev) => ({ ...prev, score: Math.max(0, (prev.score || 0) + delta) }));
    }
  };

  const handleBackStep = () => {
    if (stage === 'draft-general') {
      setStage('team-setup');
    } else if (stage === 'draft-specific') {
      setStage('draft-general');
    } else if (stage === 'playing') {
      setStage('draft-specific');
      setGamePhase('general');
      setShowPhaseTransitionModal(false);
    }
  };

  const handleEditSelections = () => {
    setStage('draft-general');
    setGamePhase('general');
    setShowPhaseTransitionModal(false);
  };

  const handleResetGame = () => {
    sound.playClick();
    setStage('team-setup');
    setGamePhase('general');
    setShowPhaseTransitionModal(false);
    setCategories(getRandomizedCategories(INITIAL_CATEGORIES || [], user?.uid));
    setTeam1((prev) => ({
      ...prev,
      score: 0,
      selectedGeneralCategories: [],
      selectedSpecificCategories: [],
      correctAnswersCount: 0,
      wrongAnswersCount: 0,
      usedPowerups: [],
    }));
    setTeam2((prev) => ({
      ...prev,
      score: 0,
      selectedGeneralCategories: [],
      selectedSpecificCategories: [],
      correctAnswersCount: 0,
      wrongAnswersCount: 0,
      usedPowerups: [],
    }));
    setActiveQuestion(null);
  };

  // Games Balance Purchase Handler
  const handlePurchaseSuccess = async (addedGamesCount: number, redeemedCode?: string) => {
    if (!user) return;

    setGamesBalance((prev) => {
      const nextBal = prev + addedGamesCount;
      localStorage.setItem(`diwaniya_games_balance_${user.uid}`, nextBal.toString());
      return nextBal;
    });

    try {
      const userRef = doc(db, 'users', user.uid);
      const updatePayload: any = {
        gamesBalance: increment(addedGamesCount),
      };
      if (redeemedCode) {
        updatePayload.usedCodes = arrayUnion(redeemedCode);
      }
      await setDoc(userRef, updatePayload, { merge: true });
    } catch (e) {
      // Local storage already updated
    }
  };

  // Deduct 1 game from gamesBalance helper
  const deductOneGameBalance = () => {
    if (!user) {
      setGamesBalance(0);
      return;
    }

    setGamesBalance((prev) => {
      const nextBal = Math.max(0, prev - 1);
      localStorage.setItem(`diwaniya_games_balance_${user.uid}`, nextBal.toString());
      return nextBal;
    });

    try {
      const userRef = doc(db, 'users', user.uid);
      updateDoc(userRef, { gamesBalance: increment(-1) }).catch(() => {});
    } catch (e) {
      // Local storage already updated
    }
  };

  // Start Game Handler with Balance Check (Game credit is ONLY deducted upon game completion!)
  const handleStartGameWithCreditCheck = () => {
    if (gamesBalance > 0) {
      sound.playFanfare();

      const safeCats = Array.isArray(categories) ? categories : [];
      // Ensure that if fewer than 4 general categories are marked, 4 general categories are set
      const generalSelectedCount = safeCats.filter((c) => c?.type === 'general' && Boolean(c?.selectedByTeamId)).length;
      if (generalSelectedCount < 4) {
        const unselectedGeneral = safeCats.filter((c) => c?.type === 'general' && !c?.selectedByTeamId && !c?.hidden);
        const needed = 4 - generalSelectedCount;
        const autoSelectedIds = new Set((unselectedGeneral || []).slice(0, needed).map((c) => c?.id).filter(Boolean));

        setCategories((prev) =>
          (prev || []).map((c) => (autoSelectedIds.has(c?.id) || (c?.type === 'general' && Boolean(c?.selectedByTeamId)) ? { ...c, selectedByTeamId: c?.selectedByTeamId || 'shared' } : c))
        );
      }

      setStage('playing');
      setGamePhase('general');
      setShowPhase1IntroModal(true);
    } else {
      // gamesBalance === 0 -> prevent starting & show package purchase modal
      sound.playWrong();
      setShowBuyCreditsModal(true);
    }
  };

  const handleReplaySameCategories = () => {
    if (gamesBalance <= 0) {
      sound.playWrong();
      setShowBuyCreditsModal(true);
      return;
    }

    // Generate fresh randomized questions for the categories
    const freshCategories = getRandomizedCategories(INITIAL_CATEGORIES || [], user?.uid);
    setCategories((prev) =>
      (freshCategories || []).map((freshCat) => {
        const oldCat = (prev || []).find((c) => c?.id === freshCat?.id);
        return {
          ...freshCat,
          selectedByTeamId: oldCat ? oldCat.selectedByTeamId : null,
        };
      })
    );
    setTeam1((prev) => ({ ...prev, score: 0, correctAnswersCount: 0, wrongAnswersCount: 0, usedPowerups: [] }));
    setTeam2((prev) => ({ ...prev, score: 0, correctAnswersCount: 0, wrongAnswersCount: 0, usedPowerups: [] }));
    setStage('playing');
    setGamePhase('general');
    setShowPhaseTransitionModal(false);
    setActiveQuestion(null);
  };

  // Save game score and deduct exactly 1 game credit when game ends and results are shown
  const [hasSavedGameResults, setHasSavedGameResults] = useState(false);

  useEffect(() => {
    if (stage === 'playing') {
      setHasSavedGameResults(false);
    }

    if (stage === 'game-over' && !hasSavedGameResults) {
      setHasSavedGameResults(true);

      // Deduct exactly 1 game credit now upon full match completion
      deductOneGameBalance();

      // Save game session and stats to Firestore
      saveGameToFirestore();
    }
  }, [stage, hasSavedGameResults, user]);

  // Filter 8 drafted categories for game board
  const draftedCategories = (categories || []).filter(
    (c) => c && (c.selectedByTeamId === 'team1' || c.selectedByTeamId === 'team2')
  );

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0B132B] flex items-center justify-center text-amber-400 font-['Cairo',sans-serif]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
          <p className="font-bold text-sm">جاري التحقق من تسجيل الدخول...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 flex flex-col font-['Cairo',sans-serif] selection:bg-amber-500 selection:text-slate-950">
      {/* Auth Gate Screen */}
      {!user && <AuthScreen onSuccess={(localUser) => { if (localUser) setUser(localUser); }} />}

      {/* Top Header Navigation */}
      <Navbar
        stage={stage}
        team1={team1}
        team2={team2}
        settings={settings}
        user={user}
        gamesBalance={gamesBalance}
        onOpenBuyCredits={() => setShowBuyCreditsModal(true)}
        onSignOut={handleSignOut}
        onUpdateSettings={handleUpdateSettings}
        onResetGame={handleResetGame}
        onOpenRules={() => setShowRules(true)}
        onBackStep={handleBackStep}
        onEditSelections={handleEditSelections}
        onFinishGame={() => setStage('game-over')}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full py-6">
        {/* STAGE 1: TEAM SETUP */}
        {stage === 'team-setup' && (
          <TeamSetupScreen
            team1={team1}
            team2={team2}
            settings={settings}
            onUpdateTeam1={(data) => setTeam1((prev) => ({ ...prev, ...data }))}
            onUpdateTeam2={(data) => setTeam2((prev) => ({ ...prev, ...data }))}
            onUpdateSettings={handleUpdateSettings}
            onStartDrafting={() => setStage('draft-general')}
          />
        )}

        {/* STAGE 2: DRAFT GENERAL CATEGORIES */}
        {stage === 'draft-general' && (
          <GeneralCategoryDraft
            categories={categories}
            team1={team1}
            team2={team2}
            onSelectCategory={handleSelectCategory}
            onDeselectCategory={handleDeselectCategory}
            onProceedToSpecific={() => setStage('draft-specific')}
          />
        )}

        {/* STAGE 3: DRAFT SPECIFIC CATEGORIES */}
        {stage === 'draft-specific' && (
          <SpecificCategoryDraft
            categories={categories}
            team1={team1}
            team2={team2}
            onSelectCategory={handleSelectCategory}
            onDeselectCategory={handleDeselectCategory}
            onBackToGeneral={() => setStage('draft-general')}
            onStartGame={handleStartGameWithCreditCheck}
          />
        )}

        {/* STAGE 4: LIVE GAME BOARD */}
        {stage === 'playing' && (
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 space-y-4 sm:space-y-6 md:space-y-8 animate-fadeIn">
            <div className="w-full">
              <ScoreBoard
                team1={team1}
                team2={team2}
                activeTurnTeamId={activeTurnTeamId}
                onSwitchTurn={(tId) => setActiveTurnTeamId(tId)}
                onAdjustScore={handleAdjustScore}
              />
            </div>

            <GameBoard
              allCategories={categories}
              gamePhase={gamePhase}
              team1={team1}
              team2={team2}
              activeTurnTeamId={activeTurnTeamId}
              onSelectQuestion={(cat, q) => {
                markQuestionAsUsed(q.id, user?.uid);
                setActiveQuestion({ category: cat, question: q });
              }}
              onSwitchPhase={(phase) => setGamePhase(phase)}
              onProceedToSpecificPhase={handleProceedToSpecificPhase}
              onFinishGame={() => setStage('game-over')}
            />
          </div>
        )}

        {/* STAGE 5: GAME OVER RESULTS PAGE */}
        {stage === 'game-over' && (
          <ResultsView
            team1={team1}
            team2={team2}
            allCategories={categories}
            onRestartNewDraft={handleResetGame}
            onReplaySameCategories={handleReplaySameCategories}
          />
        )}
      </main>

      {/* PHASE 1 INTRO MODAL (At Game Start) */}
      {showPhase1IntroModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn font-['Cairo',sans-serif]">
          <div className="bg-slate-900 border-2 border-amber-500 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-slate-950 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/30">
              <Layers className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                بداية اللعبة - الشوط الأول
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                الشوط الأول: الفئات العامة المشتركة 🌟
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                في هذا الشوط، تم تفعيل <span className="text-amber-400 font-extrabold">الفئات العامة الأربع (4 فئات)</span> التي تم اختيارها. هذه الفئات مشتركة وتنافسية بين الفريقين، وأي فريق يمكنه الإجابة عليها لكسب النقاط!
              </p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setShowPhase1IntroModal(false);
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>فهمت، يلا نبدأ الشوط الأول! 🔥</span>
            </button>
          </div>
        </div>
      )}

      {/* PHASE TRANSITION MODAL (End of Phase 1 - General Categories Intro to Phase 2) */}
      {showPhaseTransitionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn font-['Cairo',sans-serif]">
          <div className="bg-slate-900 border-2 border-indigo-500 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-indigo-500/30">
              <Zap className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black border border-indigo-500/30 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                بداية اللعبة - الشوط الثاني
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                الشوط الثاني: الفئات الخاصة لكل فريق 🔥
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                في هذا الشوط، تم تفعيل <span className="text-indigo-400 font-extrabold">الفئات الخاصة (4 فئات)</span> التي اختارها كل فريق بنفسه في مرحلة النقوة. كل فريق سيلعب في فئاته المخصصة لمجالات شغفه لجمع أعلى النقاط وحسم نتيجة المباراة!
              </p>
            </div>

            {/* Current Scores Summary */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-center p-2 rounded-xl bg-red-950/40 border border-red-500/30">
                <p className="text-xs font-bold text-red-300">{team1.name}</p>
                <p className="text-xl font-black text-white font-mono mt-0.5">
                  {team1.score} <span className="text-xs text-amber-400">نقطة</span>
                </p>
              </div>
              <div className="text-center p-2 rounded-xl bg-blue-950/40 border border-blue-500/30">
                <p className="text-xs font-bold text-blue-300">{team2.name}</p>
                <p className="text-xl font-black text-white font-mono mt-0.5">
                  {team2.score} <span className="text-xs text-amber-400">نقطة</span>
                </p>
              </div>
            </div>

            <button
              onClick={handleProceedToSpecificPhase}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white font-black text-base shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>فهمت، يلا نبدأ الشوط الثاني! 🚀</span>
            </button>
          </div>
        </div>
      )}

      {/* ACTIVE QUESTION MODAL */}
      {activeQuestion && (
        <QuestionModal
          category={activeQuestion.category}
          question={activeQuestion.question}
          team1={team1}
          team2={team2}
          activeTurnTeamId={activeTurnTeamId}
          timerDuration={settings.timerDuration}
          onAwardPoints={handleAwardPoints}
          onUsePowerup={handleUsePowerup}
          onClose={() => setActiveQuestion(null)}
        />
      )}

      {/* RULES MODAL */}
      {showRules && <RulesModal userId={user?.uid} onClose={() => setShowRules(false)} />}

      {/* BUY GAME CREDITS / RECHARGE MODAL */}
      {showBuyCreditsModal && (
        <BuyCreditsModal
          currentCredits={gamesBalance}
          userName={user?.displayName || user?.email || undefined}
          onClose={() => setShowBuyCreditsModal(false)}
          onPurchaseSuccess={handlePurchaseSuccess}
        />
      )}
    </div>
  );
}
