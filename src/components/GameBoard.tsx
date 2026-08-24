import React, { useMemo } from 'react';
import { Category, Question, Team } from '../types';
import { getCategoryRemainingCount, getCategoryTotalCount, getFreshQuestionsForCategory } from '../utils/questionBank';
import {
  Brain,
  Landmark,
  Atom,
  Globe,
  Trophy,
  Film,
  FlaskConical,
  ShieldAlert,
  Wand2,
  Tv,
  Gamepad2,
  CassetteTape,
  Check,
  Music,
  Cpu,
  Sparkles,
  BookOpen,
  Users,
  Palette,
  ArrowLeft,
  Lock,
  Layers,
  Star,
  CheckCircle2,
  Utensils,
  MapPin,
  Building2,
  Coffee,
  Moon,
  Book,
  Scroll,
  Crown,
  Skull,
  Swords,
  Target,
  Flame,
  Flag,
  ShoppingBag,
  Tag,
  Box,
  Car,
  MicOff,
  VolumeX
} from 'lucide-react';
import { sound } from '../utils/sound';

interface GameBoardProps {
  allCategories: Category[];
  gamePhase: 'general' | 'specific';
  team1: Team;
  team2: Team;
  activeTurnTeamId: 'team1' | 'team2';
  onSelectQuestion: (category: Category, question: Question) => void;
  onSwitchPhase: (phase: 'general' | 'specific') => void;
  onProceedToSpecificPhase: () => void;
  onFinishGame?: () => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Atom,
  Landmark,
  Globe,
  Trophy,
  Brain,
  Sparkles,
  Palette,
  Users,
  BookOpen,
  Cpu,
  Film,
  FlaskConical,
  ShieldAlert,
  Wand2,
  Tv,
  Gamepad2,
  CassetteTape,
  Music,
  Utensils,
  MapPin,
  Building2,
  Coffee,
  Moon,
  Book,
  Scroll,
  Crown,
  Skull,
  Swords,
  Target,
  Flame,
  Flag,
  ShoppingBag,
  Tag,
  Box,
  Car,
  MicOff,
  VolumeX
};

export const GameBoard: React.FC<GameBoardProps> = ({
  allCategories = [],
  gamePhase,
  team1,
  team2,
  activeTurnTeamId,
  onSelectQuestion,
  onSwitchPhase,
  onProceedToSpecificPhase,
  onFinishGame,
}) => {
  const activeTeam = activeTurnTeamId === 'team1' ? team1 : team2;

  // Filter categories for the current phase with intelligent fallbacks
  const phaseCategories = useMemo(() => {
    if (!allCategories || allCategories.length === 0) return [];

    if (gamePhase === 'general') {
      let selectedGeneral = allCategories.filter((cat) => {
        const isGeneralType = cat.type === 'general';
        const isSelected =
          Boolean(cat.selectedByTeamId) ||
          team1?.selectedGeneralCategories?.includes(cat.id) ||
          team2?.selectedGeneralCategories?.includes(cat.id);
        return isGeneralType && isSelected;
      });

      // If fewer than 4 general categories are selected, fill up to 4 with available general categories
      if (selectedGeneral.length < 4) {
        const selectedIds = new Set(selectedGeneral.map((c) => c.id));
        const extraGeneral = allCategories.filter(
          (cat) => cat.type === 'general' && !cat.hidden && !selectedIds.has(cat.id)
        );
        selectedGeneral = [...selectedGeneral, ...extraGeneral.slice(0, 4 - selectedGeneral.length)];
      }

      return selectedGeneral.map((c) => ({
        ...c,
        selectedByTeamId: 'shared',
      }));
    } else {
      // Phase 2: Specific Categories
      let selectedSpecific = allCategories.filter((cat) => {
        const isSpecificType = cat.type === 'specific';
        const isSelected =
          cat.selectedByTeamId === 'team1' ||
          cat.selectedByTeamId === 'team2' ||
          cat.selectedByTeamId === team1?.name ||
          cat.selectedByTeamId === team2?.name ||
          team1?.selectedSpecificCategories?.includes(cat.id) ||
          team2?.selectedSpecificCategories?.includes(cat.id);
        return isSpecificType && isSelected;
      });

      // Normalize owner on each specific category
      selectedSpecific = selectedSpecific.map((c) => {
        let owner: 'team1' | 'team2' | 'shared' | null = c.selectedByTeamId as any;
        if (team1?.selectedSpecificCategories?.includes(c.id) || c.selectedByTeamId === team1?.name || c.selectedByTeamId === 'team1') {
          owner = 'team1';
        } else if (team2?.selectedSpecificCategories?.includes(c.id) || c.selectedByTeamId === team2?.name || c.selectedByTeamId === 'team2') {
          owner = 'team2';
        }
        return {
          ...c,
          selectedByTeamId: owner || 'team1',
        };
      });

      // If fewer than 4 specific categories exist, fill up to 4 from available specific categories
      if (selectedSpecific.length < 4) {
        const selectedIds = new Set(selectedSpecific.map((c) => c.id));
        const extraSpecific = allCategories.filter(
          (cat) => cat.type === 'specific' && !cat.hidden && !selectedIds.has(cat.id)
        );
        const needed = 4 - selectedSpecific.length;
        const filledExtra = extraSpecific.slice(0, needed).map((c, idx) => ({
          ...c,
          selectedByTeamId: (idx % 2 === 0 ? 'team1' : 'team2') as 'team1' | 'team2',
        }));
        selectedSpecific = [...selectedSpecific, ...filledExtra];
      }

      return selectedSpecific;
    }
  }, [allCategories, gamePhase, team1, team2]);

  // Ensure every category has valid populated questions
  const displayPhaseCategories = useMemo(() => {
    const seenSet = new Set<string>();
    return phaseCategories.map((cat) => {
      let qList = cat.questions;
      if (!qList || !Array.isArray(qList) || qList.length === 0) {
        qList = getFreshQuestionsForCategory(cat, seenSet);
      }
      return {
        ...cat,
        questions: qList,
      };
    });
  }, [phaseCategories]);

  // Calculate phase completions safely
  const generalCats = displayPhaseCategories.filter((c) => c.type === 'general' || c.selectedByTeamId === 'shared');
  const generalQuestions = generalCats.flatMap((c) => c.questions || []);
  const generalAnsweredCount = generalQuestions.filter((q) => q.isAnswered).length;
  const isGeneralPhaseComplete = generalQuestions.length > 0 && generalAnsweredCount === generalQuestions.length;

  const specificCats = displayPhaseCategories.filter(
    (c) => c.type === 'specific' || c.selectedByTeamId === 'team1' || c.selectedByTeamId === 'team2'
  );
  const specificQuestions = specificCats.flatMap((c) => c.questions || []);
  const specificAnsweredCount = specificQuestions.filter((q) => q.isAnswered).length;
  const isSpecificPhaseComplete = specificQuestions.length > 0 && specificAnsweredCount === specificQuestions.length;

  return (
    <div className="w-full space-y-6 font-['Cairo',sans-serif]">
      {/* Phase 1 Completion Alert / Transition Action Banner */}
      {gamePhase === 'general' && isGeneralPhaseComplete && (
        <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-950/90 via-yellow-950/80 to-amber-950/90 border-2 border-amber-500 text-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl animate-pulse">
          <div className="flex items-center gap-3 text-center sm:text-right">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shrink-0 shadow-lg">
              <Star className="w-6 h-6 fill-slate-950" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                اكتمل الشوط الأول بنجاح (جميع أسئلة الفئات العامة)!
              </h3>
              <p className="text-xs sm:text-sm text-amber-300/90 font-bold mt-0.5">
                جاهزين للتحدي الحاسم؟ انتقل الآن إلى الشوط الثاني لعرض الفئات الخاصة بكل فريق.
              </p>
            </div>
          </div>
          <button
            onClick={onProceedToSpecificPhase}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <span>الانتقال للشوط الثاني (الفئات الخاصة)</span>
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* Grid Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-2.5 bg-slate-900/60 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 text-sm font-extrabold text-slate-300">
          <Layers className="w-4 h-4 text-amber-400" />
          {gamePhase === 'general' ? (
            <span>أسئلة الشوط الأول: الفئات العامة المشتركة (4 فئات)</span>
          ) : (
            <span>أسئلة الشوط الثاني: الفئات الخاصة للفرق (دور: {activeTeam.name})</span>
          )}
        </div>

        <div className="flex items-center gap-3 justify-between sm:justify-end">
          {gamePhase === 'general' && (
            <button
              onClick={() => {
                sound.playClick();
                onSwitchPhase('specific');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            >
              <span>تخطي الشوط الأول ⏩</span>
            </button>
          )}

          <div className="text-xs font-bold text-slate-400">
            {gamePhase === 'general'
              ? 'جميع الفرق تشارك في هذه الفئات'
              : `🎯 دور (${activeTeam.name}): يمكنه اختيار فئاته الخاصة فقط`}
          </div>
        </div>
      </div>

      {/* 4-Column Grid for Current Phase (2x2 on Mobile, 4x1 on Tablet & Desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {displayPhaseCategories.map((cat) => {
          const IconComponent = CATEGORY_ICONS[cat.iconName] || Brain;
          
          const belongsToTeam1 =
            cat.selectedByTeamId === 'team1' ||
            team1?.selectedSpecificCategories?.includes(cat.id) ||
            cat.selectedByTeamId === team1?.name;

          const belongsToTeam2 =
            cat.selectedByTeamId === 'team2' ||
            team2?.selectedSpecificCategories?.includes(cat.id) ||
            cat.selectedByTeamId === team2?.name;

          let ownerTeamId: 'team1' | 'team2' | 'shared' = 'shared';
          if (belongsToTeam1 && !belongsToTeam2) {
            ownerTeamId = 'team1';
          } else if (belongsToTeam2 && !belongsToTeam1) {
            ownerTeamId = 'team2';
          } else if (cat.selectedByTeamId === 'team1') {
            ownerTeamId = 'team1';
          } else if (cat.selectedByTeamId === 'team2') {
            ownerTeamId = 'team2';
          }

          const isTeam1 = ownerTeamId === 'team1';
          const isTeam2 = ownerTeamId === 'team2';

          const isOwnerTurn = gamePhase === 'general' || ownerTeamId === 'shared' || ownerTeamId === activeTurnTeamId;
          const isOpponentCategoryInSpecificPhase = gamePhase === 'specific' && !isOwnerTurn;

          return (
            <div key={cat.id} className="space-y-2 sm:space-y-3 flex flex-col">
              {/* Category Column Header Tile */}
              <div
                className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border flex flex-col justify-between items-center text-center min-h-[120px] sm:min-h-[148px] relative overflow-hidden shadow-xl transition-all ${
                  isTeam1
                    ? 'bg-gradient-to-b from-red-950/90 via-slate-900 to-slate-900 border-red-500/60 shadow-red-950/30'
                    : isTeam2
                    ? 'bg-gradient-to-b from-blue-950/90 via-slate-900 to-slate-900 border-blue-500/60 shadow-blue-950/30'
                    : 'bg-gradient-to-b from-amber-950/90 via-slate-900 to-slate-900 border-amber-500/40 shadow-amber-950/30'
                } ${isOpponentCategoryInSpecificPhase ? 'opacity-60' : ''}`}
              >
                {/* Team / Shared Ownership Badge */}
                <div className="flex items-center justify-between w-full text-[10px] sm:text-xs font-extrabold mb-0.5 sm:mb-1">
                  <span
                    className={`px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] ${
                      cat.type === 'specific'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {cat.type === 'specific' ? 'خاصة' : 'عامة'}
                  </span>

                  <span
                    className={`px-1.5 sm:px-2.5 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-black flex items-center gap-1 truncate max-w-[85px] sm:max-w-none ${
                      isTeam1
                        ? 'bg-red-600 text-white shadow-sm shadow-red-500/50'
                        : isTeam2
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/50'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {isOpponentCategoryInSpecificPhase && <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white shrink-0" />}
                    <span className="truncate">{isTeam1 ? team1.name : isTeam2 ? team2.name : 'مشتركة'}</span>
                  </span>
                </div>

                <div
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl flex items-center justify-center font-black shadow-md my-0.5 overflow-hidden ${
                    isTeam1
                      ? 'bg-red-500 text-white'
                      : isTeam2
                      ? 'bg-blue-500 text-white'
                      : 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950'
                  }`}
                >
                  {cat.imageUrl ? (
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      className="w-full h-full object-contain p-0.5 bg-slate-950/40"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                  )}
                </div>

                <div className="space-y-0.5 w-full">
                  <h3 className="font-extrabold text-xs sm:text-sm text-white line-clamp-1 leading-tight">{cat.name}</h3>
                  {cat.description && (
                    <p className="text-[9px] sm:text-[10px] text-slate-300/80 font-medium line-clamp-1 leading-snug">
                      {cat.description}
                    </p>
                  )}
                  {(() => {
                    const rem = getCategoryRemainingCount(cat.id, cat.name);
                    const total = getCategoryTotalCount(cat.id, cat.name);
                    return (
                      <div className="mt-1 text-[9px] sm:text-[10px] font-black text-amber-300/90 bg-slate-950/80 px-1.5 sm:px-2 py-0.5 rounded-lg border border-amber-500/30 inline-flex items-center justify-center gap-1 shadow-sm w-full">
                        <span className="text-slate-400 font-extrabold hidden sm:inline">المتبقي:</span>
                        <span className="font-mono font-black text-amber-300 text-[10px] sm:text-[11px]">{rem}/{total}</span>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Question Point Cards */}
              <div className="space-y-1.5 sm:space-y-2 flex-1">
                {(cat.questions || []).map((q) => {
                  const isAnswered = q.isAnswered;
                  const isDisabled = isAnswered || isOpponentCategoryInSpecificPhase;

                  return (
                    <button
                      key={q.id}
                      disabled={isDisabled}
                      onClick={() => {
                        sound.playClick();
                        onSelectQuestion(cat, q);
                      }}
                      className={`w-full py-2.5 sm:py-3.5 px-1.5 sm:px-2 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all flex items-center justify-center border shadow-md relative overflow-hidden ${
                        isAnswered
                          ? 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed opacity-60'
                          : isOpponentCategoryInSpecificPhase
                          ? 'bg-slate-950/60 border-slate-800/80 text-slate-600 cursor-not-allowed opacity-40'
                          : 'bg-gradient-to-b from-slate-800/90 to-slate-900 border-slate-700/80 text-amber-400 hover:text-white hover:border-amber-400 hover:bg-amber-500/20 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-amber-500/5'
                      }`}
                    >
                      {isAnswered ? (
                        <div className="flex items-center gap-1 text-slate-500 text-[10px] sm:text-xs font-bold">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 stroke-[3]" />
                          <span>مجابة</span>
                        </div>
                      ) : isOpponentCategoryInSpecificPhase ? (
                        <div className="flex items-center gap-1 text-slate-500 text-[10px] sm:text-xs font-bold">
                          <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" />
                          <span className="font-mono">{q.points}</span>
                        </div>
                      ) : (
                        <span className="tracking-tight font-mono">{q.points}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Finish Game Control Bar */}
      {onFinishGame && (
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => {
              sound.playClick();
              onFinishGame();
            }}
            className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/20 flex items-center gap-2.5 transition transform hover:scale-105 active:scale-95 cursor-pointer border border-amber-300/50"
          >
            <Trophy className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            <span>إنهاء اللعبة وإعلان النتائج الرسمية 🏁</span>
          </button>
        </div>
      )}
    </div>
  );
};
