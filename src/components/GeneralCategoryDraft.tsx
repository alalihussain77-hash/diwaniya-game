import React from 'react';
import { Category, Team } from '../types';
import { ArrowLeft, Layers, CheckCircle2, Dices } from 'lucide-react';
import { sound } from '../utils/sound';
import { CategorizedCategoryGrid } from './CategorizedCategoryGrid';

interface GeneralCategoryDraftProps {
  categories: Category[];
  team1: Team;
  team2: Team;
  onSelectCategory: (categoryId: string, teamId: 'team1' | 'team2' | 'shared') => void;
  onDeselectCategory: (categoryId: string) => void;
  onProceedToSpecific: () => void;
}

export const GeneralCategoryDraft: React.FC<GeneralCategoryDraftProps> = ({
  categories,
  team1,
  team2,
  onSelectCategory,
  onDeselectCategory,
  onProceedToSpecific,
}) => {
  const generalCategories = categories.filter((c) => c.type === 'general');
  const selectedGeneralCategories = generalCategories.filter((c) => Boolean(c.selectedByTeamId));
  const selectedCount = selectedGeneralCategories.length;
  const isDraftComplete = selectedCount >= 4;

  const handleCategoryClick = (category: Category) => {
    if (category.selectedByTeamId) {
      sound.playClick();
      onDeselectCategory(category.id);
      return;
    }

    if (selectedCount >= 4) return;

    sound.playSelectCategory();
    onSelectCategory(category.id, 'shared');
  };

  const handleAutoSelect = () => {
    sound.playSelectCategory();
    const unselected = generalCategories.filter((c) => !c.selectedByTeamId);
    const needed = 4 - selectedCount;
    if (needed <= 0) return;
    const shuffled = [...unselected].sort(() => 0.5 - Math.random());
    shuffled.slice(0, needed).forEach((cat) => {
      onSelectCategory(cat.id, 'shared');
    });
  };

  const handleProceed = () => {
    if (selectedCount < 4) return;
    sound.playClick();
    onProceedToSpecific();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-fadeIn font-['Cairo',sans-serif] text-white">
      {/* Draft Header Banner */}
      <div className="bg-slate-900/90 border border-amber-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xl">
        <div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            المرحلة الأولى: الفئات العامة المشتركة (4 فئات)
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-white mt-2">
            نقوة الفئات العامة
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            اختر <span className="font-extrabold text-amber-400">4 فئات عامة مشتركة (4/4)</span> لجميع الفرق.
          </p>
        </div>

        {/* Counter Badge & Auto Random Pick */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full md:w-auto">
          {selectedCount < 4 && (
            <button
              onClick={handleAutoSelect}
              className="px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 border border-amber-500/30 text-amber-300 font-extrabold text-xs flex items-center gap-2 transition hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              title="اختر عشوائياً بدلاً عنك"
            >
              <Dices className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>اختيار عشوائي 🎲</span>
            </button>
          )}

          <div className="px-3.5 py-2 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-amber-500/30 flex items-center justify-center text-center">
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400">الفئات العامة</p>
              <p className="text-lg sm:text-xl font-black text-amber-400 font-mono">
                {selectedCount} / 4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Info Banner */}
      <div className="p-4 rounded-2xl border bg-amber-950/40 border-amber-500/40 text-amber-200 text-xs sm:text-sm font-bold flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>هذه الفئات عامة ومشتركة لجميع الفرق وليست مخصصة لفريق محدد.</span>
        </div>
        <div className="font-mono bg-slate-900 px-3 py-1 rounded-xl border border-amber-500/30">
          باقي {Math.max(0, 4 - selectedCount)}
        </div>
      </div>

      {/* Categorized Categories Grid */}
      <CategorizedCategoryGrid
        categories={generalCategories}
        team1={team1}
        team2={team2}
        onCategoryClick={handleCategoryClick}
      />

      {/* Progress & Transition Section */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl backdrop-blur-md">
        {/* Progress Info & Selected Badges */}
        <div className="flex-1 space-y-2 text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-xs font-bold text-amber-400">الفئات العامة المختارة</span>
            <span className="text-xs font-black text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-mono">
              {selectedCount} / 4
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 min-h-[32px]">
            {selectedGeneralCategories.length === 0 ? (
              <p className="text-xs text-slate-400">يرجى تحديد 4 فئات عامة لتتمكن من المتابعة</p>
            ) : (
              selectedGeneralCategories.map((cat) => (
                <span
                  key={cat.id}
                  className="px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-300 border border-amber-500/30 text-xs font-extrabold flex items-center gap-1.5 shadow-sm animate-fadeIn"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{cat.name}</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleProceed}
          disabled={!isDraftComplete}
          className={`px-7 py-3.5 rounded-2xl font-black text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2.5 shrink-0 ${
            isDraftComplete
              ? 'bg-gradient-to-l from-amber-400 via-amber-500 to-yellow-600 text-slate-950 hover:scale-105 active:scale-95 cursor-pointer shadow-amber-500/25'
              : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
          }`}
        >
          <span>{isDraftComplete ? 'يلا للفئات الخاصة (4/4)' : `حدد 4 فئات عامة للمتابعة (${selectedCount}/4)`}</span>
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

