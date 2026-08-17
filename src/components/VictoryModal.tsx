import React, { useEffect } from 'react';
import { Team } from '../types';
import confetti from 'canvas-confetti';
import { Trophy, Crown, RotateCcw, Layers } from 'lucide-react';
import { sound } from '../utils/sound';

interface VictoryModalProps {
  team1: Team;
  team2: Team;
  onRestartNewDraft: () => void;
  onReplaySameCategories: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  team1,
  team2,
  onRestartNewDraft,
  onReplaySameCategories,
}) => {
  const isTie = team1.score === team2.score;
  const winner = team1.score > team2.score ? team1 : team2;

  useEffect(() => {
    sound.playFanfare();

    // Trigger confetti cannon
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: 0.2, y: 0.5 } });
      confetti({ ...defaults, particleCount, origin: { x: 0.8, y: 0.5 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-fadeIn font-['Cairo',sans-serif]">
      <div className="w-full max-w-xl bg-slate-900 border-2 border-amber-500/50 rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-6 relative overflow-hidden">
        {/* Glowing Background Effect */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-600 text-slate-950 shadow-2xl shadow-amber-500/30 border-2 border-amber-300">
          <Trophy className="w-10 h-10 stroke-[2.5] animate-pulse" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          {isTie ? (
            <div>
              <h2 className="text-3xl font-black text-white">تعادل بطلان شقردية!</h2>
              <p className="text-sm text-slate-300 font-bold">خلصت الجولة ونقاطكم متساوية بالتمام والكمال!</p>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
                <Crown className="w-4 h-4 text-amber-400" /> بطل ديوانية
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-yellow-400 to-amber-500">
                كفو يا بطل! الفائز: {winner.name}!
              </h2>
            </div>
          )}
        </div>

        {/* Score Breakdown Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 rounded-2xl border ${winner.id === team1.id && !isTie ? 'bg-red-950/80 border-red-500 shadow-lg' : 'bg-slate-800/80 border-slate-700'}`}>
            <h4 className="font-extrabold text-red-400 text-sm truncate">{team1.name || 'الفريق الأول'}</h4>
            <div className="text-3xl font-black text-white my-1 font-mono">{team1.score}</div>
            <p className="text-[11px] text-slate-300 font-bold">{team1.correctAnswersCount} إجابات صحيحة</p>
          </div>

          <div className={`p-4 rounded-2xl border ${winner.id === team2.id && !isTie ? 'bg-blue-950/80 border-blue-500 shadow-lg' : 'bg-slate-800/80 border-slate-700'}`}>
            <h4 className="font-extrabold text-blue-400 text-sm truncate">{team2.name || 'الفريق الثاني'}</h4>
            <div className="text-3xl font-black text-white my-1 font-mono">{team2.score}</div>
            <p className="text-[11px] text-slate-300 font-bold">{team2.correctAnswersCount} إجابات صحيحة</p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => {
              sound.playClick();
              onRestartNewDraft();
            }}
            className="py-3.5 px-4 rounded-2xl bg-gradient-to-l from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-black text-sm shadow-xl hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Layers className="w-4 h-4 stroke-[2.5]" />
            <span>تحدي جديد (اختيار فئات)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onReplaySameCategories();
            }}
            className="py-3.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>إعادة اللعب على نفس اللوحة</span>
          </button>
        </div>
      </div>
    </div>
  );
};
