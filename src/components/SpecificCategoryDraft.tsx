import React, { useState } from 'react';
import { Category, Team } from '../types';
import { Sparkles, ArrowLeft, Dices } from 'lucide-react';
import { sound } from '../utils/sound';
import { CategorizedCategoryGrid } from './CategorizedCategoryGrid';

interface SpecificCategoryDraftProps {
  categories: Category[];
  team1: Team;
  team2: Team;
  onSelectCategory: (categoryId: string, teamId: 'team1' | 'team2' | 'shared') => void;
  onDeselectCategory: (categoryId: string) => void;
  onBackToGeneral: () => void;
  onStartGame: () => void;
}

export const SpecificCategoryDraft: React.FC<SpecificCategoryDraftProps> = ({
  categories,
  team1,
  team2,
  onSelectCategory,
  onDeselectCategory,
  onStartGame,
}) => {
  const [activeTeamId, setActiveTeamId] = useState<'team1' | 'team2'>('team1');

  const specificCategories = categories.filter((c) => c.type === 'specific');

  const team1SpecificCount = team1.selectedSpecificCategories.length;
  const team2SpecificCount = team2.selectedSpecificCategories.length;
  const totalSpecificSelected = team1SpecificCount + team2SpecificCount;

  const isTeam1Complete = team1SpecificCount >= 2;
  const isTeam2Complete = team2SpecificCount >= 2;
  const isDraftComplete = isTeam1Complete && isTeam2Complete;

  const team1SelectedSpecific = specificCategories.filter((c) => c.selectedByTeamId === 'team1');
  const team2SelectedSpecific = specificCategories.filter((c) => c.selectedByTeamId === 'team2');

  const handleCategoryClick = (category: Category) => {
    // Deselect if already selected
    if (category.selectedByTeamId === 'team1') {
      sound.playClick();
      onDeselectCategory(category.id);
      return;
    }
    if (category.selectedByTeamId === 'team2') {
      sound.playClick();
      onDeselectCategory(category.id);
      return;
    }

    // Determine target team
    let targetTeam: 'team1' | 'team2' = activeTeamId;
    if (activeTeamId === 'team1' && isTeam1Complete) {
      targetTeam = 'team2';
    } else if (activeTeamId === 'team2' && isTeam2Complete) {
      targetTeam = 'team1';
    }

    if (targetTeam === 'team1' && isTeam1Complete) return;
    if (targetTeam === 'team2' && isTeam2Complete) return;

    sound.playSelectCategory();
    onSelectCategory(category.id, targetTeam);

    // Auto-switch active team if current team finished 2 picks
    if (targetTeam === 'team1' && team1SpecificCount + 1 >= 2 && !isTeam2Complete) {
      setActiveTeamId('team2');
    } else if (targetTeam === 'team2' && team2SpecificCount + 1 >= 2 && !isTeam1Complete) {
      setActiveTeamId('team1');
    }
  };

  const handleAutoSelectSpecific = () => {
    sound.playSelectCategory();
    const unselectedSpecific = specificCategories.filter((c) => !c.selectedByTeamId);
    const shuffled = [...unselectedSpecific].sort(() => 0.5 - Math.random());
    let idx = 0;

    let neededTeam1 = 2 - team1SpecificCount;
    for (let i = 0; i < neededTeam1 && idx < shuffled.length; i++) {
      onSelectCategory(shuffled[idx].id, 'team1');
      idx++;
    }

    let neededTeam2 = 2 - team2SpecificCount;
    for (let i = 0; i < neededTeam2 && idx < shuffled.length; i++) {
      onSelectCategory(shuffled[idx].id, 'team2');
      idx++;
    }
  };

  const handleStartGameClick = () => {
    if (!isDraftComplete) return;
    sound.playFanfare();
    onStartGame();
  };

  const totalSelectedCategories = totalSpecificSelected;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-fadeIn font-['Cairo',sans-serif] text-white">
      {/* Clean Header Banner */}
      <div className="bg-slate-900/90 border border-amber-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xl">
        <div>
          <h2 className="text-xl sm:text-3xl font-black text-white">
            نقوة الفئات الخاصة والمجالات
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            كل فريق ينقي <span className="font-extrabold text-amber-400">فئتين خاصة (2/2)</span>.
          </p>
        </div>

        {/* Team Category Counter Capsules & Auto Pick */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">
          {!isDraftComplete && (
            <button
              onClick={handleAutoSelectSpecific}
              className="col-span-2 sm:col-span-1 px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 border border-amber-500/30 text-amber-300 font-extrabold text-xs flex items-center justify-center gap-2 transition hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              title="اختر عشوائياً بدلاً عنك"
            >
              <Dices className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>اختيار عشوائي 🎲</span>
            </button>
          )}
          <button
            onClick={() => {
              sound.playClick();
              setActiveTeamId('team1');
            }}
            className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border text-right transition-all flex items-center justify-between sm:justify-start gap-2 sm:gap-3 cursor-pointer ${
              activeTeamId === 'team1'
                ? 'bg-red-950/80 border-red-500 ring-2 ring-red-500/40 shadow-lg shadow-red-950/50'
                : 'bg-slate-800/60 border-slate-700 opacity-70 hover:opacity-100'
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50 shrink-0"></span>
              <p className="text-[10px] sm:text-[11px] font-bold text-red-300 truncate">{team1.name || 'الفريق الأول'}</p>
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-white shrink-0">
              {team1SpecificCount}/2
            </p>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTeamId('team2');
            }}
            className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border text-right transition-all flex items-center justify-between sm:justify-start gap-2 sm:gap-3 cursor-pointer ${
              activeTeamId === 'team2'
                ? 'bg-blue-950/80 border-blue-500 ring-2 ring-blue-500/40 shadow-lg shadow-blue-950/50'
                : 'bg-slate-800/60 border-slate-700 opacity-70 hover:opacity-100'
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50 shrink-0"></span>
              <p className="text-[10px] sm:text-[11px] font-bold text-blue-300 truncate">{team2.name || 'الفريق الثاني'}</p>
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-white shrink-0">
              {team2SpecificCount}/2
            </p>
          </button>
        </div>
      </div>

      {/* Special Categories Grid - Full Width */}
      <CategorizedCategoryGrid
        categories={specificCategories}
        team1={team1}
        team2={team2}
        onCategoryClick={handleCategoryClick}
      />

      {/* Launch Game Bottom Action Bar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl backdrop-blur-md">
        {/* Progress Info & Team Badges */}
        <div className="flex-1 space-y-2 text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-xs font-bold text-amber-400">الفئات الخاصة المختارة</span>
            <span className="text-xs font-black text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-mono">
              {totalSelectedCategories} / 4
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 min-h-[32px]">
            {/* Team 1 Selected Specific Tags */}
            {team1SelectedSpecific.map((cat) => (
              <span
                key={cat.id}
                className="px-3 py-1 rounded-xl bg-red-950/60 text-red-300 border border-red-500/40 text-xs font-extrabold flex items-center gap-1.5 shadow-sm animate-fadeIn"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500"></span>
                <span>{team1.name || 'الفريق الأول'}: {cat.name}</span>
              </span>
            ))}

            {/* Team 2 Selected Specific Tags */}
            {team2SelectedSpecific.map((cat) => (
              <span
                key={cat.id}
                className="px-3 py-1 rounded-xl bg-blue-950/60 text-blue-300 border border-blue-500/40 text-xs font-extrabold flex items-center gap-1.5 shadow-sm animate-fadeIn"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500"></span>
                <span>{team2.name || 'الفريق الثاني'}: {cat.name}</span>
              </span>
            ))}

            {team1SelectedSpecific.length === 0 && team2SelectedSpecific.length === 0 && (
              <p className="text-xs text-slate-400">يرجى اختيار فئتين لكل فريق لبدء اللعبة</p>
            )}
          </div>
        </div>

        {/* Start Game Button */}
        <button
          onClick={handleStartGameClick}
          disabled={!isDraftComplete}
          className={`px-7 py-3.5 rounded-2xl font-black text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2.5 shrink-0 ${
            isDraftComplete
              ? 'bg-gradient-to-l from-amber-400 via-amber-500 to-yellow-600 text-slate-950 hover:scale-105 active:scale-95 cursor-pointer shadow-amber-500/30 animate-pulse'
              : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
          }`}
        >
          <Sparkles className={`w-5 h-5 ${isDraftComplete ? 'text-amber-950' : 'text-slate-600'}`} />
          <span>{isDraftComplete ? 'شغّل التحدي والأسئلة (4/4)!' : `اختر فئتين لكل فريق للبدء (${totalSpecificSelected}/4)`}</span>
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
