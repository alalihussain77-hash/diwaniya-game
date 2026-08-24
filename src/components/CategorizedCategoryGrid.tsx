import React, { useState, useEffect } from 'react';
import { Category, Team } from '../types';
import { getCategoryRemainingCount, getCategoryTotalCount } from '../utils/questionBank';
import { AddCategoryQuestionModal } from './AddCategoryQuestionModal';
import { ViewAllCategoryQuestionsModal } from './ViewAllCategoryQuestionsModal';
import {
  Brain,
  Landmark,
  Atom,
  Globe,
  Trophy,
  CheckCircle2,
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
  Flame,
  Star,
  Award,
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
  Flag,
  ShoppingBag,
  Tag,
  Box,
  Car,
  MicOff,
  VolumeX,
  PlusCircle
} from 'lucide-react';

interface CategorizedCategoryGridProps {
  categories: Category[];
  team1: Team;
  team2: Team;
  onCategoryClick: (category: Category) => void;
  gridColsOverride?: string;
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
  Flame,
  Star,
  Award,
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
  Flag,
  ShoppingBag,
  Tag,
  Box,
  Car,
  MicOff,
  VolumeX
};

export const CategorizedCategoryGrid: React.FC<CategorizedCategoryGridProps> = ({
  categories,
  team1,
  team2,
  onCategoryClick,
  gridColsOverride,
}) => {
  const [selectedCategoryForManage, setSelectedCategoryForManage] = useState<Category | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewAllModalOpen, setIsViewAllModalOpen] = useState(false);
  const [, setRefreshTick] = useState(0);

  useEffect(() => {
    const handleUpdate = () => {
      setRefreshTick((prev) => prev + 1);
    };
    window.addEventListener('diwaniya_category_questions_updated', handleUpdate);
    window.addEventListener('diwaniya_car_questions_updated', handleUpdate);
    return () => {
      window.removeEventListener('diwaniya_category_questions_updated', handleUpdate);
      window.removeEventListener('diwaniya_car_questions_updated', handleUpdate);
    };
  }, []);

  // Group categories by section
  const groupedCategories = categories
    .filter((cat) => !cat.hidden)
    .reduce((acc: Record<string, Category[]>, cat) => {
    const sectionName = cat.section || '✨ فئات متنوعة';
    if (!acc[sectionName]) {
      acc[sectionName] = [];
    }
    acc[sectionName].push(cat);
    return acc;
  }, {});

  const sectionKeys = Object.keys(groupedCategories);

  return (
    <div className="space-y-8 animate-fadeIn">
      {sectionKeys.map((sectionName) => {
        const sectionCategories = groupedCategories[sectionName];
        const selectedCount = sectionCategories.filter((c) => c.selectedByTeamId).length;

        return (
          <div
            key={sectionName}
            className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900/95 border-2 border-slate-750 shadow-2xl relative backdrop-blur-md transition-all duration-300 hover:border-slate-700"
          >
            {/* Centered Capsule / Pill Badge Header */}
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div
                className={`px-5 sm:px-8 py-2 sm:py-2.5 rounded-full shadow-xl flex items-center gap-2 sm:gap-3 transition-all ${
                  sectionName.includes('ولا كلمة') || sectionName.includes('ولاكلمة')
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white border-2 border-orange-400 shadow-orange-500/30 ring-2 ring-orange-500/20'
                    : 'bg-slate-800/90 border border-amber-500/30'
                }`}
              >
                <span
                  className={`text-sm sm:text-lg font-black tracking-tight ${
                    sectionName.includes('ولا كلمة') || sectionName.includes('ولاكلمة')
                      ? 'text-white drop-shadow-sm'
                      : 'text-amber-300'
                  }`}
                >
                  {sectionName}
                </span>
                {selectedCount > 0 && (
                  <span className="text-[11px] sm:text-xs font-black text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2 sm:px-2.5 py-0.5 rounded-full">
                    {selectedCount}
                  </span>
                )}
              </div>
            </div>

            {/* Grid Layout inside Container */}
            <div
              className={
                gridColsOverride ||
                'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4'
              }
            >
              {sectionCategories.map((cat) => {
                  const IconComponent = CATEGORY_ICONS[cat.iconName] || Brain;
                  const isSelectedShared = cat.selectedByTeamId === 'shared' || cat.selectedByTeamId === 'general' || (cat.type === 'general' && Boolean(cat.selectedByTeamId));
                  const isSelectedByTeam1 = cat.selectedByTeamId === 'team1';
                  const isSelectedByTeam2 = cat.selectedByTeamId === 'team2';

                  return (
                    <div
                      key={cat.id}
                      onClick={() => onCategoryClick(cat)}
                      className={`rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer group border-2 relative overflow-hidden ${
                        isSelectedShared
                          ? 'bg-amber-950/90 border-amber-500 ring-2 ring-amber-500/50 shadow-xl shadow-amber-950/60'
                          : isSelectedByTeam1
                          ? 'bg-red-950/90 border-red-500 ring-2 ring-red-500/50 shadow-xl shadow-red-950/60'
                          : isSelectedByTeam2
                          ? 'bg-blue-950/90 border-blue-500 ring-2 ring-blue-500/50 shadow-xl shadow-blue-950/60'
                          : 'bg-slate-800/90 hover:bg-slate-750 border-slate-700/80 hover:border-amber-400/60 hover:scale-[1.02] shadow-md hover:shadow-xl hover:shadow-amber-500/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div
                          className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black shadow-md ${
                            isSelectedShared
                              ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950'
                              : isSelectedByTeam1
                              ? 'bg-red-500 text-white'
                              : isSelectedByTeam2
                              ? 'bg-blue-500 text-white'
                              : 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950'
                          }`}
                        >
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                        </div>

                        {isSelectedShared && (
                          <span className="text-[9px] sm:text-[10px] font-extrabold bg-amber-500 text-slate-950 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl shadow border border-amber-300 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="hidden sm:inline">فئة عامة</span> مشتركة
                          </span>
                        )}
                        {isSelectedByTeam1 && (
                          <span className="text-[9px] sm:text-[10px] font-extrabold bg-red-600 text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl shadow border border-red-400 flex items-center gap-1 truncate max-w-[90px] sm:max-w-none">
                            <CheckCircle2 className="w-3 h-3 shrink-0" />
                            <span className="truncate">{team1.name}</span>
                          </span>
                        )}
                        {isSelectedByTeam2 && (
                          <span className="text-[9px] sm:text-[10px] font-extrabold bg-blue-600 text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl shadow border border-blue-400 flex items-center gap-1 truncate max-w-[90px] sm:max-w-none">
                            <CheckCircle2 className="w-3 h-3 shrink-0" />
                            <span className="truncate">{team2.name}</span>
                          </span>
                        )}
                      </div>

                      {/* Featured Illustration Image (if available) */}
                      {cat.imageUrl && (
                        <div className="mb-2 sm:mb-3.5 w-full h-24 sm:h-44 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center p-2 sm:p-3 overflow-hidden shadow-inner group-hover:border-amber-500/40 transition-colors">
                          <img
                            src={cat.imageUrl}
                            alt={cat.name}
                            className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const parent = e.currentTarget.parentElement;
                              if (parent) parent.style.display = 'none';
                            }}
                          />
                        </div>
                      )}

                      <div className="flex-1">
                        <h4 className="font-extrabold text-sm sm:text-lg text-white group-hover:text-amber-300 transition-colors">
                          {cat.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 mt-0.5 sm:mt-1 leading-snug font-medium">
                          {cat.description}
                        </p>
                      </div>

                      {/* Remaining Questions Counter Badge & Universal Actions for EVERY Category */}
                      {(() => {
                        const rem = getCategoryRemainingCount(cat.id, cat.name);
                        const total = getCategoryTotalCount(cat.id, cat.name);
                        return (
                          <div className="mt-2.5 pt-2 sm:pt-2.5 border-t border-slate-700/60 flex flex-col gap-1.5">
                            <div className="flex flex-col gap-1.5">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedCategoryForManage(cat);
                                  setIsViewAllModalOpen(true);
                                }}
                                className="w-full py-1.5 px-2 rounded-xl bg-gradient-to-l from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition shadow-sm hover:scale-[1.02] active:scale-98 cursor-pointer"
                                title={`عرض وتعديل كافة أسئلة فئة ${cat.name}`}
                              >
                                <span>👁️ عرض جميع الأسئلة</span>
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedCategoryForManage(cat);
                                  setIsAddModalOpen(true);
                                }}
                                className="w-full py-1 px-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-300 font-extrabold text-[10px] sm:text-[11px] flex items-center justify-center gap-1 transition cursor-pointer"
                                title={`إضافة سؤال جديد لفئة ${cat.name}`}
                              >
                                <PlusCircle className="w-3 h-3 text-amber-400" />
                                <span>+ إضافة سؤال جديد</span>
                              </button>
                            </div>

                            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-extrabold">
                              <span className="text-slate-300">المتبقي:</span>
                              <span
                                className={`px-2 py-0.5 rounded-full font-mono text-[10px] sm:text-[11px] font-black shadow-sm ${
                                  rem > 50
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                    : rem > 10
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                }`}
                              >
                                {rem} / {total}
                              </span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  );
                })}
              </div>
          </div>
        );
      })}

      {/* Universal Add Question Modal Form for Any Category */}
      <AddCategoryQuestionModal
        isOpen={isAddModalOpen}
        category={selectedCategoryForManage}
        onClose={() => setIsAddModalOpen(false)}
        onQuestionAdded={() => {
          setRefreshTick((prev) => prev + 1);
        }}
        onOpenViewAllModal={() => {
          setIsAddModalOpen(false);
          setIsViewAllModalOpen(true);
        }}
      />

      {/* Universal View & Edit All Questions Modal for Any Category */}
      <ViewAllCategoryQuestionsModal
        isOpen={isViewAllModalOpen}
        category={selectedCategoryForManage}
        onClose={() => setIsViewAllModalOpen(false)}
        onOpenAddModal={() => {
          setIsViewAllModalOpen(false);
          setIsAddModalOpen(true);
        }}
      />
    </div>
  );
};
