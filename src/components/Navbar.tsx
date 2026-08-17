import React from 'react';
import { GameStage, GameSettings, Team } from '../types';
import { Volume2, VolumeX, HelpCircle, Trophy, ArrowRight, LogOut, User, Gamepad2 } from 'lucide-react';
import { sound } from '../utils/sound';
import { User as FirebaseUser } from 'firebase/auth';

interface NavbarProps {
  stage: GameStage;
  team1: Team;
  team2: Team;
  settings: GameSettings;
  user?: FirebaseUser | null;
  gamesBalance?: number;
  onOpenBuyCredits?: () => void;
  onSignOut?: () => void;
  onUpdateSettings: (settings: Partial<GameSettings>) => void;
  onResetGame: () => void;
  onOpenRules: () => void;
  onBackStep?: () => void;
  onEditSelections?: () => void;
  onFinishGame?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  stage,
  team1,
  team2,
  settings,
  user,
  gamesBalance = 0,
  onOpenBuyCredits,
  onSignOut,
  onUpdateSettings,
  onResetGame,
  onOpenRules,
  onBackStep,
  onEditSelections,
  onFinishGame,
}) => {
  const toggleSound = () => {
    const nextSound = !settings.soundEnabled;
    sound.enabled = nextSound;
    onUpdateSettings({ soundEnabled: nextSound });
    if (nextSound) sound.playClick();
  };

  const getStageStepNumber = () => {
    switch (stage) {
      case 'team-setup':
        return 1;
      case 'draft-general':
        return 2;
      case 'draft-specific':
        return 3;
      case 'playing':
      case 'game-over':
        return 4;
      default:
        return 1;
    }
  };

  const currentStep = getStageStepNumber();

  const steps = [
    { num: 1, label: 'أسماء الفرق' },
    { num: 2, label: 'الفئات العامة' },
    { num: 3, label: 'الفئات الخاصة' },
    { num: 4, label: 'شبكة الأسئلة' },
  ];

  const team1Total = (team1?.selectedGeneralCategories || []).length + (team1?.selectedSpecificCategories || []).length;
  const team2Total = (team2?.selectedGeneralCategories || []).length + (team2?.selectedSpecificCategories || []).length;

  return (
    <header className="sticky top-0 z-40 bg-[#0B132B]/95 backdrop-blur-md border-b border-amber-500/20 text-white shadow-xl shadow-slate-950/40 px-2 sm:px-6 py-2.5 sm:py-3.5 font-['Cairo',sans-serif] w-full max-w-full overflow-hidden">
      {/* Top Bar with Brand & Global Controls */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-3">
        {/* Brand Header */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 bg-slate-900/80 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl border border-amber-500/30 shadow-lg shrink-0">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-slate-950 flex items-center justify-center font-black text-sm sm:text-lg shadow-md shadow-amber-500/30 border border-amber-300/50">
            <Trophy className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-base sm:text-2xl font-black tracking-wider sm:tracking-widest leading-none">
              <span className="animate-logo-shine inline-block">
                ديوانية
              </span>
            </h1>
          </div>
        </div>

        {/* Action Controls & Navigation Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* User Profile Badge, Credits Badge & Logout */}
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-900/90 border border-slate-800 rounded-xl sm:rounded-2xl px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs">
            {user ? (
              <>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-amber-400" />
                ) : (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold text-[9px] sm:text-[10px]">
                    <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                )}
                <span className="hidden lg:inline font-bold text-slate-200 max-w-[100px] truncate">
                  {user.displayName || user.email || 'اللاعب'}
                </span>
              </>
            ) : (
              <div className="hidden sm:flex items-center gap-1 text-slate-300 font-bold">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">تجريبي</span>
              </div>
            )}

            {/* Games Balance Badge (Always Visible) */}
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenBuyCredits) onOpenBuyCredits();
              }}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition cursor-pointer border shadow-sm ${
                gamesBalance > 0
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                  : 'bg-rose-500/20 text-rose-300 border-rose-500/40 hover:bg-rose-500/30 animate-pulse'
              }`}
              title="تفعيل وتعبئة رصيد الألعاب"
            >
              <span>🎮</span>
              <span>{gamesBalance} <span className="hidden sm:inline">{gamesBalance === 1 ? 'لعبة' : 'ألعاب'}</span></span>
            </button>

            {user && onSignOut && (
              <button
                onClick={onSignOut}
                className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
                title="تسجيل الخروج"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Safe Back Button (Only in drafting stages) */}
          {(stage === 'draft-general' || stage === 'draft-specific') && onBackStep && (
            <button
              onClick={() => {
                sound.playClick();
                onBackStep();
              }}
              className="px-2 sm:px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1 border border-slate-700 transition cursor-pointer"
              title="الرجوع للخطوة السابقة"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">رجوع</span>
            </button>
          )}

          {/* Rules Modal */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenRules();
            }}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition cursor-pointer"
            title="تعليمات وقواعد اللعبة"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-1.5 sm:p-2 rounded-xl border transition cursor-pointer ${
              settings.soundEnabled
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                : 'bg-slate-900 text-slate-500 border-slate-800'
            }`}
            title={settings.soundEnabled ? 'كتم الصوت' : 'تفعيل الصوت'}
          >
            {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* End Game Button (When playing) */}
          {stage === 'playing' && onFinishGame && (
            <button
              onClick={() => {
                sound.playClick();
                onFinishGame();
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-extrabold text-xs border border-amber-500/40 transition flex items-center gap-1 sm:gap-1.5 cursor-pointer shadow-md"
              title="إنهاء اللعبة وإعلان النتائج الرسمية"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400 stroke-[2.5]" />
              <span className="hidden sm:inline">إنهاء اللعبة والنتائج</span>
              <span className="sm:hidden">النتائج</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
