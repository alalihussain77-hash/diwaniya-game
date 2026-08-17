import React, { useEffect, useState } from 'react';
import { Team, Category } from '../types';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Crown,
  RotateCcw,
  Shield,
  RotateCw,
} from 'lucide-react';
import { sound } from '../utils/sound';
import { TEAM_AVATAR_ICONS } from './ScoreBoard';

interface ResultsViewProps {
  team1: Team;
  team2: Team;
  allCategories: Category[];
  onRestartNewDraft: () => void;
  onReplaySameCategories: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  team1,
  team2,
  onRestartNewDraft,
  onReplaySameCategories,
}) => {
  const [animatedScore1, setAnimatedScore1] = useState(0);
  const [animatedScore2, setAnimatedScore2] = useState(0);

  const isTie = team1.score === team2.score;
  const winner = team1.score > team2.score ? team1 : team2;

  const WinnerIcon = TEAM_AVATAR_ICONS[winner.avatar] || Trophy;

  const Team1Icon = TEAM_AVATAR_ICONS[team1.avatar] || Trophy;
  const Team2Icon = TEAM_AVATAR_ICONS[team2.avatar] || Trophy;

  // Trigger celebration sounds & confetti
  const fireConfetti = () => {
    sound.playFanfare();
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 35, spread: 360, ticks: 70, zIndex: 1000 };

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 60 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: 0.2, y: 0.4 } });
      confetti({ ...defaults, particleCount, origin: { x: 0.8, y: 0.4 } });
      confetti({ ...defaults, particleCount, origin: { x: 0.5, y: 0.2 } });
    }, 200);
  };

  useEffect(() => {
    fireConfetti();

    // Animate score increment
    let start1 = 0;
    let start2 = 0;
    const step1 = Math.max(10, Math.ceil(team1.score / 30));
    const step2 = Math.max(10, Math.ceil(team2.score / 30));

    const timer = setInterval(() => {
      let done1 = false;
      let done2 = false;

      if (start1 < team1.score) {
        start1 = Math.min(team1.score, start1 + step1);
        setAnimatedScore1(start1);
      } else {
        done1 = true;
      }

      if (start2 < team2.score) {
        start2 = Math.min(team2.score, start2 + step2);
        setAnimatedScore2(start2);
      } else {
        done2 = true;
      }

      if (done1 && done2) {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [team1.score, team2.score]);

  return (
    <div className="min-h-screen bg-[#070D1E] text-slate-100 py-10 px-4 font-['Cairo',sans-serif] selection:bg-amber-500 selection:text-slate-950 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background Animated Glow Spheres */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/15 via-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto space-y-8 relative z-10">


        {/* WINNER PODIUM SHOWCASE */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, type: 'spring', stiffness: 120 }}
          className="relative"
        >
          {isTie ? (
            /* TIE VIEW */
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 border-2 border-amber-500/60 shadow-2xl text-center space-y-6 relative overflow-hidden">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-600 text-slate-950 flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/30 border-2 border-amber-300">
                <Trophy className="w-10 h-10 stroke-[2.5] animate-bounce" />
              </div>
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30">
                  نتيجة متكافئة
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">تعادل بطلان شقردية! 🤝</h2>
                <p className="text-slate-300 text-sm font-bold">
                  انتهت الجولة بنقاط متساوية بين الفريقين! أداء أسطوري وتنافس عالي!
                </p>
              </div>

              {/* Both Teams Side By Side */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
                <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow">
                    <Team1Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-white text-base truncate">{team1.name}</h3>
                  <p className="text-2xl font-black text-red-400 font-mono mt-1">{team1.score}</p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-500/40 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow">
                    <Team2Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-white text-base truncate">{team2.name}</h3>
                  <p className="text-2xl font-black text-blue-400 font-mono mt-1">{team2.score}</p>
                </div>
              </div>
            </div>
          ) : (
            /* WINNER CHAMPION CARD */
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border-2 border-amber-500/70 shadow-2xl relative overflow-hidden text-center space-y-6">
              {/* Glowing Halo */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Floating Crown Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="inline-block relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 p-2 rounded-full shadow-lg shadow-amber-500/50 z-20">
                  <Crown className="w-6 h-6 fill-amber-400 text-slate-950" />
                </div>
                <div
                  className={`w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-2xl border-4 ${
                    winner.id === 'team1'
                      ? 'bg-gradient-to-br from-red-500 to-rose-700 border-amber-400 shadow-red-600/40'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-700 border-amber-400 shadow-blue-600/40'
                  }`}
                >
                  <WinnerIcon className="w-12 h-12" />
                </div>
              </motion.div>

              <div className="space-y-1">
                <span className="px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/40 inline-flex items-center gap-1.5 shadow-md">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  بطل ديواني 👑
                </span>
              </div>

              {/* BOTH TEAMS SCORES SHOWCASE BOX */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2">
                {/* Team 1 Score Card */}
                <div
                  className={`p-5 rounded-2xl border-2 text-center relative overflow-hidden transition ${
                    team1.id === winner.id
                      ? 'bg-gradient-to-b from-red-950/80 to-slate-900 border-amber-400 shadow-xl shadow-amber-500/10'
                      : 'bg-slate-950/80 border-slate-800 opacity-80'
                  }`}
                >
                  {team1.id === winner.id && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Crown className="w-3 h-3 fill-slate-950" />
                      <span>الفائز</span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <Team1Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-white text-base truncate">{team1.name}</h3>
                  <div className="mt-2">
                    <span className="text-xs text-slate-400 font-bold block">مجموع النقاط</span>
                    <span className="text-3xl sm:text-4xl font-black text-red-400 font-mono tracking-tight">
                      {animatedScore1}
                    </span>
                  </div>
                </div>

                {/* Team 2 Score Card */}
                <div
                  className={`p-5 rounded-2xl border-2 text-center relative overflow-hidden transition ${
                    team2.id === winner.id
                      ? 'bg-gradient-to-b from-blue-950/80 to-slate-900 border-amber-400 shadow-xl shadow-amber-500/10'
                      : 'bg-slate-950/80 border-slate-800 opacity-80'
                  }`}
                >
                  {team2.id === winner.id && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Crown className="w-3 h-3 fill-slate-950" />
                      <span>الفائز</span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <Team2Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-white text-base truncate">{team2.name}</h3>
                  <div className="mt-2">
                    <span className="text-xs text-slate-400 font-bold block">مجموع النقاط</span>
                    <span className="text-3xl sm:text-4xl font-black text-blue-400 font-mono tracking-tight">
                      {animatedScore2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* ACTION BUTTON DIRECTLY UNDERNEATH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => {
              sound.playClick();
              onRestartNewDraft();
            }}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition transform hover:scale-105 active:scale-95 cursor-pointer border border-amber-300/50"
          >
            <RotateCw className="w-6 h-6 stroke-[2.5] text-slate-950" />
            <span>لعبة جديدة 🎮</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onReplaySameCategories();
            }}
            className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-850 text-slate-200 font-black text-base border border-slate-700 shadow-xl flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5 text-amber-400" />
            <span>إعادة اللعب على نفس اللوحة</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

