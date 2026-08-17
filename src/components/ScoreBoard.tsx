import React from 'react';
import { Team } from '../types';
import { Shield, Flame, Crown, Swords, Bomb, Bird, Rocket, Skull, Zap, Target, Ghost, Trophy, VolumeX, Repeat, PhoneCall } from 'lucide-react';
import { sound } from '../utils/sound';

interface ScoreBoardProps {
  team1: Team;
  team2: Team;
  activeTurnTeamId: 'team1' | 'team2';
  onSwitchTurn: (teamId: 'team1' | 'team2') => void;
  onAdjustScore: (teamId: 'team1' | 'team2', delta: number) => void;
}

const POWERUP_ICONS = [
  { id: 'double', name: 'دبل', icon: Zap, activeColor: 'text-amber-400 bg-amber-400/20 border-amber-400/40' },
  { id: 'silence', name: 'اسكت', icon: VolumeX, activeColor: 'text-rose-400 bg-rose-400/20 border-rose-400/40' },
  { id: 'steal', name: 'الحرامي', icon: Repeat, activeColor: 'text-purple-400 bg-purple-400/20 border-purple-400/40' },
  { id: 'call', name: 'اتصال', icon: PhoneCall, activeColor: 'text-emerald-400 bg-emerald-400/20 border-emerald-400/40' },
];

export const TEAM_AVATAR_ICONS: Record<string, React.ElementType> = {
  shield: Shield,
  flame: Flame,
  crown: Crown,
  swords: Swords,
  bomb: Bomb,
  bird: Bird,
  rocket: Rocket,
  skull: Skull,
  zap: Zap,
  target: Target,
  ghost: Ghost,
  trophy: Trophy,
};

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  team1,
  team2,
  activeTurnTeamId,
  onSwitchTurn,
  onAdjustScore,
}) => {
  const Team1Icon = TEAM_AVATAR_ICONS[team1.avatar] || Shield;
  const Team2Icon = TEAM_AVATAR_ICONS[team2.avatar] || Flame;

  return (
    <div className="w-full font-['Cairo',sans-serif]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        {/* TEAM 1 (RED) CARD */}
        <div
          onClick={() => {
            sound.playClick();
            onSwitchTurn('team1');
          }}
          className={`p-3 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex items-center justify-between gap-2 ${
            activeTurnTeamId === 'team1'
              ? 'bg-red-950/80 border-red-500 ring-2 ring-red-500/50 shadow-xl shadow-red-950/60'
              : 'bg-slate-850/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-lg shadow-red-600/30 border border-red-400/40 shrink-0">
              <Team1Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h3 className="font-extrabold text-white text-sm sm:text-lg tracking-tight truncate max-w-[110px] sm:max-w-none">{team1.name || 'الفريق الأول'}</h3>
                {activeTurnTeamId === 'team1' && (
                  <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[9px] sm:text-[10px] font-black tracking-wider animate-pulse shadow">
                    دورهم
                  </span>
                )}
              </div>
              {/* Powerups Badges */}
              <div className="flex items-center gap-1 mt-1">
                {POWERUP_ICONS.map((p) => {
                  const Icon = p.icon;
                  const isUsed = team1.usedPowerups?.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      title={`${p.name} ${isUsed ? '(مستخْدَم)' : '(متاح)'}`}
                      className={`p-0.5 sm:p-1 rounded-md sm:rounded-lg border text-[9px] sm:text-[10px] font-bold flex items-center justify-center transition-all ${
                        isUsed
                          ? 'bg-slate-900/80 text-slate-600 border-slate-800 line-through opacity-40'
                          : p.activeColor
                      }`}
                    >
                      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="text-left font-mono">
              <span className="text-2xl sm:text-4xl font-black text-red-400 tracking-tight">
                {team1.score}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  onAdjustScore('team1', 100);
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 hover:bg-red-600 active:bg-red-700 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center border border-slate-700 shadow cursor-pointer"
                title="إضافة 100 نقطة"
              >
                +
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  onAdjustScore('team1', -100);
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 hover:bg-rose-600 active:bg-rose-700 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center border border-slate-700 shadow cursor-pointer"
                title="خصم 100 نقطة"
              >
                -
              </button>
            </div>
          </div>
        </div>

        {/* TEAM 2 (BLUE) CARD */}
        <div
          onClick={() => {
            sound.playClick();
            onSwitchTurn('team2');
          }}
          className={`p-3 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex items-center justify-between gap-2 ${
            activeTurnTeamId === 'team2'
              ? 'bg-blue-950/80 border-blue-500 ring-2 ring-blue-500/50 shadow-xl shadow-blue-950/60'
              : 'bg-slate-850/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-lg shadow-blue-600/30 border border-blue-400/40 shrink-0">
              <Team2Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h3 className="font-extrabold text-white text-sm sm:text-lg tracking-tight truncate max-w-[110px] sm:max-w-none">{team2.name || 'الفريق الثاني'}</h3>
                {activeTurnTeamId === 'team2' && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-[9px] sm:text-[10px] font-black tracking-wider animate-pulse shadow">
                    دورهم
                  </span>
                )}
              </div>
              {/* Powerups Badges */}
              <div className="flex items-center gap-1 mt-1">
                {POWERUP_ICONS.map((p) => {
                  const Icon = p.icon;
                  const isUsed = team2.usedPowerups?.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      title={`${p.name} ${isUsed ? '(مستخْدَم)' : '(متاح)'}`}
                      className={`p-0.5 sm:p-1 rounded-md sm:rounded-lg border text-[9px] sm:text-[10px] font-bold flex items-center justify-center transition-all ${
                        isUsed
                          ? 'bg-slate-900/80 text-slate-600 border-slate-800 line-through opacity-40'
                          : p.activeColor
                      }`}
                    >
                      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="text-left font-mono">
              <span className="text-2xl sm:text-4xl font-black text-blue-400 tracking-tight">
                {team2.score}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  onAdjustScore('team2', 100);
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 hover:bg-blue-600 active:bg-blue-700 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center border border-slate-700 shadow cursor-pointer"
                title="إضافة 100 نقطة"
              >
                +
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  onAdjustScore('team2', -100);
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 hover:bg-rose-600 active:bg-rose-700 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center border border-slate-700 shadow cursor-pointer"
                title="خصم 100 نقطة"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
