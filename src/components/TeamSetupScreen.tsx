import React, { useState } from 'react';
import { Team, GameSettings } from '../types';
import { Shield, Flame, Crown, Swords, Bomb, Bird, Rocket, Skull, Zap, Target, Ghost, Trophy, Users, ArrowLeft, AlertCircle, Edit3, X, Check } from 'lucide-react';
import { sound } from '../utils/sound';

interface TeamSetupScreenProps {
  team1: Team;
  team2: Team;
  settings: GameSettings;
  onUpdateTeam1: (team: Partial<Team>) => void;
  onUpdateTeam2: (team: Partial<Team>) => void;
  onUpdateSettings: (settings: Partial<GameSettings>) => void;
  onStartDrafting: () => void;
}

const TEAM_AVATAR_OPTIONS = [
  { id: 'shield', name: 'درع', icon: Shield, bg: 'from-amber-500 to-yellow-600' },
  { id: 'flame', name: 'نار', icon: Flame, bg: 'from-orange-500 to-red-600' },
  { id: 'crown', name: 'تاج', icon: Crown, bg: 'from-amber-400 to-yellow-500' },
  { id: 'swords', name: 'سيفين', icon: Swords, bg: 'from-rose-500 to-red-600' },
  { id: 'bomb', name: 'قنبلة', icon: Bomb, bg: 'from-slate-700 to-slate-900' },
  { id: 'bird', name: 'صقر', icon: Bird, bg: 'from-cyan-500 to-blue-600' },
  { id: 'rocket', name: 'صاروخ', icon: Rocket, bg: 'from-purple-500 to-indigo-600' },
  { id: 'skull', name: 'جمجمة', icon: Skull, bg: 'from-slate-600 to-zinc-800' },
  { id: 'zap', name: 'برق', icon: Zap, bg: 'from-yellow-400 to-amber-500' },
  { id: 'target', name: 'هدف', icon: Target, bg: 'from-emerald-500 to-teal-600' },
  { id: 'ghost', name: 'شبح', icon: Ghost, bg: 'from-indigo-400 to-purple-600' },
  { id: 'trophy', name: 'كأس', icon: Trophy, bg: 'from-yellow-300 to-amber-500' },
];

export const TeamSetupScreen: React.FC<TeamSetupScreenProps> = ({
  team1,
  team2,
  settings,
  onUpdateTeam1,
  onUpdateTeam2,
  onUpdateSettings,
  onStartDrafting,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activePickerTeam, setActivePickerTeam] = useState<'team1' | 'team2' | null>(null);

  const isFormValid = team1.name.trim() !== '' && team2.name.trim() !== '';

  const handleProceed = () => {
    if (!team1.name.trim()) {
      onUpdateTeam1({ name: 'الفريق الأول' });
    }
    if (!team2.name.trim()) {
      onUpdateTeam2({ name: 'الفريق الثاني' });
    }
    setErrorMessage(null);
    sound.playClick();
    onStartDrafting();
  };

  const getAvatarInfo = (id: string) => {
    const found = TEAM_AVATAR_OPTIONS.find((t) => t.id === id);
    return found || TEAM_AVATAR_OPTIONS[0];
  };

  const team1Avatar = getAvatarInfo(team1.avatar);
  const team2Avatar = getAvatarInfo(team2.avatar);

  const Team1Icon = team1Avatar.icon;
  const Team2Icon = team2Avatar.icon;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn font-['Cairo',sans-serif]">
      {/* Header Logo Banner */}
      <div className="text-center py-2 relative flex flex-col items-center justify-center">
        <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-yellow-500/20 to-amber-500/10 px-8 py-3 rounded-3xl border border-amber-500/30 shadow-2xl backdrop-blur-md">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/30 border border-amber-300/50 animate-bounce-slow">
            <Trophy className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-widest my-1">
            <span className="animate-logo-shine inline-block">
              ديوانية
            </span>
          </h2>
        </div>
      </div>

      {/* Validation Error Alert */}
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/60 text-rose-200 text-xs sm:text-sm font-bold flex items-center gap-3 animate-shake">
          <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Rules & Flow Overview */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-amber-500/20 shadow-xl space-y-4">
        <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Users className="w-4 h-4 text-amber-400" />
          مراحل التحدي بـ ديوانية:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <span className="inline-block font-extrabold text-amber-400 text-sm">1. الفئات العامة</span>
            <p className="text-slate-300 leading-relaxed">كل فريق ينقي فئتين عامتين (علوم، تاريخ، رياضة...)</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <span className="inline-block font-extrabold text-amber-400 text-sm">2. الفئات الخاصة</span>
            <p className="text-slate-300 leading-relaxed">كل فريق ينقي فئتين خاصة (Breaking Bad، كرة قدم، أنمي...)</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <span className="inline-block font-extrabold text-amber-400 text-sm">3. اللوحة الحية (800 - 4000 نقطة)</span>
            <p className="text-slate-300 leading-relaxed">تنافسوا بـ 8 أعمدة تفاعلية مع العداد الزمني واجمعوا أعلى النقاط!</p>
          </div>
        </div>
      </div>

      {/* Team Input Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* TEAM 1 CARD */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-red-500/50 shadow-2xl space-y-6 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all"></div>

          {/* Avatar Clickable Square Box Above Name */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActivePickerTeam('team1');
              }}
              className="relative p-4 rounded-3xl bg-slate-800/90 border-2 border-red-500/60 hover:border-red-400 transition-all flex flex-col items-center justify-center gap-2 group/avatar cursor-pointer shadow-xl hover:scale-105 active:scale-95"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team1Avatar.bg} text-slate-950 flex items-center justify-center font-black shadow-lg shadow-red-950/50`}>
                <Team1Icon className="w-9 h-9 stroke-[2.3]" />
              </div>

              <div className="flex items-center gap-1.5 text-xs font-black text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-500/30">
                <Edit3 className="w-3.5 h-3.5" />
                <span>اختر رمز الفريق ({team1Avatar.name})</span>
              </div>
            </button>
          </div>

          {/* Team Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300">اسم الفريق الأول <span className="text-red-400">*</span></label>
            <input
              type="text"
              value={team1.name || ''}
              onChange={(e) => {
                onUpdateTeam1({ name: e.target.value });
                if (errorMessage) setErrorMessage(null);
              }}
              className="w-full px-4 py-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 text-white font-bold text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              placeholder="اسم الفريق الأول"
            />
          </div>
        </div>

        {/* TEAM 2 CARD */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-blue-500/50 shadow-2xl space-y-6 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all"></div>

          {/* Avatar Clickable Square Box Above Name */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActivePickerTeam('team2');
              }}
              className="relative p-4 rounded-3xl bg-slate-800/90 border-2 border-blue-500/60 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-2 group/avatar cursor-pointer shadow-xl hover:scale-105 active:scale-95"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team2Avatar.bg} text-slate-950 flex items-center justify-center font-black shadow-lg shadow-blue-950/50`}>
                <Team2Icon className="w-9 h-9 stroke-[2.3]" />
              </div>

              <div className="flex items-center gap-1.5 text-xs font-black text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-500/30">
                <Edit3 className="w-3.5 h-3.5" />
                <span>اختر رمز الفريق ({team2Avatar.name})</span>
              </div>
            </button>
          </div>

          {/* Team Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300">اسم الفريق الثاني <span className="text-blue-400">*</span></label>
            <input
              type="text"
              value={team2.name || ''}
              onChange={(e) => {
                onUpdateTeam2({ name: e.target.value });
                if (errorMessage) setErrorMessage(null);
              }}
              className="w-full px-4 py-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 text-white font-bold text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              placeholder="اسم الفريق الثاني"
            />
          </div>
        </div>
      </div>

      {/* AVATAR SELECTOR MODAL */}
      {activePickerTeam && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>اختر رمز</span>
                <span className={activePickerTeam === 'team1' ? 'text-red-400' : 'text-blue-400'}>
                  {activePickerTeam === 'team1' ? team1.name || 'الفريق الأول' : team2.name || 'الفريق الثاني'}
                </span>
              </h3>
              <button
                type="button"
                onClick={() => setActivePickerTeam(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {TEAM_AVATAR_OPTIONS.map((item) => {
                const IconComp = item.icon;
                const currentAvatarId = activePickerTeam === 'team1' ? team1.avatar : team2.avatar;
                const isSelected = currentAvatarId === item.id;
                const activeColorClass = activePickerTeam === 'team1' ? 'border-red-500 ring-2 ring-red-500/50 bg-red-950/60' : 'border-blue-500 ring-2 ring-blue-500/50 bg-blue-950/60';

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      if (activePickerTeam === 'team1') {
                        onUpdateTeam1({ avatar: item.id });
                      } else {
                        onUpdateTeam2({ avatar: item.id });
                      }
                      setActivePickerTeam(null);
                    }}
                    className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center gap-2 cursor-pointer relative ${
                      isSelected
                        ? `${activeColorClass} scale-105 shadow-xl`
                        : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-slate-500 hover:scale-102'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.bg} text-slate-950 flex items-center justify-center font-black shadow-md`}>
                      <IconComp className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-black text-slate-100">{item.name}</span>

                    {isSelected && (
                      <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Action Submit Button */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={handleProceed}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl font-black text-lg shadow-2xl transition-all bg-gradient-to-l from-amber-400 via-amber-500 to-yellow-600 text-slate-950 shadow-amber-500/30 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>امش لاختيار الفئات العامة</span>
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

