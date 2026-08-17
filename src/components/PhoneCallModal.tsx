import React, { useState, useEffect } from 'react';
import { PhoneCall, Play, Pause, X, AlertCircle } from 'lucide-react';
import { sound } from '../utils/sound';

interface PhoneCallModalProps {
  teamName: string;
  onClose: () => void;
}

export const PhoneCallModal: React.FC<PhoneCallModalProps> = ({ teamName, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(60); // 1 minute = 60 seconds
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const percentLeft = (secondsLeft / 60) * 100;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn font-['Cairo',sans-serif]">
      <div className="w-full max-w-md bg-slate-900 border-2 border-emerald-500/80 rounded-3xl p-6 shadow-2xl shadow-emerald-950/50 space-y-6 text-center relative overflow-hidden">
        {/* Top Glow Background */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/20 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
            <PhoneCall className="w-5 h-5 animate-pulse" />
            <span>خاصية اتصال بحليف (دقيقة واحدة)</span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calling Animation & Team Badge */}
        <div className="space-y-3">
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></div>
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-slate-950 flex items-center justify-center shadow-xl border-2 border-emerald-300">
              <PhoneCall className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-black text-white">{teamName}</h3>
            <p className="text-xs text-emerald-300 font-bold mt-0.5">جاري التواصل مع الخبير الخارجي...</p>
          </div>
        </div>

        {/* Digital Countdown Timer */}
        <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/30 space-y-2">
          <div className="text-5xl font-black text-emerald-400 font-mono tracking-wider">
            {formatTime(secondsLeft)}
          </div>
          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000"
              style={{ width: `${percentLeft}%` }}
            ></div>
          </div>
        </div>

        {secondsLeft === 0 && (
          <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs font-bold flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>انتهى الوقت المحدد للمكالمة (دقيقة واحدة)!</span>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              sound.playClick();
              setIsRunning(!isRunning);
            }}
            disabled={secondsLeft === 0}
            className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 font-bold text-xs transition flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                <span>إيقاف مؤقت</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>استئناف العداد</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer"
          >
            <span>إنهاء المكالمة</span>
          </button>
        </div>
      </div>
    </div>
  );
};
