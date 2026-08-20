import React, { useState, useEffect } from 'react';
import { VolumeX, Eye, EyeOff, Sparkles, Play, RotateCcw, AlertTriangle, ShieldCheck, Check } from 'lucide-react';

interface SecretActorCardProps {
  word: string;
  hint?: string;
  explanation?: string;
  category?: string;
  points?: string;
}

export const SecretActorCard: React.FC<SecretActorCardProps> = ({
  word,
  hint,
  explanation,
  category = 'ولا كلمة عامة',
  points = '200'
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(30);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const cleanWord = word ? decodeURIComponent(word) : 'بيبسي (Pepsi)';
  const cleanHint = hint ? decodeURIComponent(hint) : '';
  const cleanExplanation = explanation ? decodeURIComponent(explanation) : '';
  const cleanCategory = category ? decodeURIComponent(category) : 'ولا كلمة عامة';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 dir-rtl" dir="rtl">
      <div className="w-full max-w-md bg-slate-900/95 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-7 space-y-5 relative backdrop-blur-xl">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <VolumeX className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-base font-black text-amber-300">كرت الممثل السري</h1>
              <p className="text-xs text-slate-400 font-medium">{cleanCategory} • {points} نقطة</p>
            </div>
          </div>
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-bold text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            {isRevealed ? <EyeOff className="w-4 h-4 text-amber-400" /> : <Eye className="w-4 h-4 text-emerald-400" />}
            <span>{isRevealed ? 'إخفاء' : 'إظهار'}</span>
          </button>
        </div>

        {/* The Secret Word Section */}
        <div className="text-center py-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            الشيء / الكلمة المطلوب منك تمثيلها:
          </p>

          {isRevealed ? (
            <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-500/20 via-slate-850 to-slate-900 border-2 border-amber-400 shadow-xl shadow-amber-500/10 animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-300 drop-shadow-md tracking-tight leading-tight">
                {cleanWord}
              </h2>
            </div>
          ) : (
            <div
              onClick={() => setIsRevealed(true)}
              className="p-8 rounded-2xl bg-slate-800/80 border-2 border-dashed border-slate-700 hover:border-amber-500/50 cursor-pointer text-slate-400 text-sm font-bold flex flex-col items-center justify-center gap-2 transition-all"
            >
              <Eye className="w-8 h-8 text-amber-400 animate-pulse" />
              <span>انقر هنا لإظهار الكلمة</span>
            </div>
          )}
        </div>

        {/* Hint / Category Guide */}
        {cleanHint && (
          <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 text-sm space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>تلميح وتصنيف الكلمة:</span>
            </div>
            <p className="text-slate-200 text-xs sm:text-sm pr-6">{cleanHint}</p>
          </div>
        )}

        {/* Acting Suggestions */}
        {cleanExplanation && (
          <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 text-sm space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>طريقة مقترحة للتمثيل:</span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pr-6">{cleanExplanation}</p>
          </div>
        )}

        {/* Acting Rules Reminder */}
        <div className="p-3 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-200 space-y-1">
          <div className="flex items-center gap-1.5 font-black text-rose-300">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>قوانين التمثيل الصامت:</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-[11px] text-rose-200/90 pr-1">
            <li>ممنوع الكلام أو الهمس أو إصدار أي أصوات تماماً.</li>
            <li>ممنوع الإشارة إلى أشياء حقيقية موجودة في الغرفة.</li>
            <li>استخدم إشارات اليدين وحركات الجسد لتوصيل المعنى لفريقك.</li>
          </ul>
        </div>

        {/* Practice Timer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">مؤقت التمثيل:</span>
            <span className={`font-mono text-base font-black px-2 py-0.5 rounded-lg border ${
              timer <= 5 ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse' : 'bg-slate-800 text-amber-300 border-slate-700'
            }`}>
              {timer} ث
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1 transition-colors shadow-md"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isTimerRunning ? 'إيقاف' : 'بدء المؤقت'}</span>
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimer(30);
              }}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="إعادة تعيين المؤقت"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-2">
          <button
            onClick={() => {
              if (window.opener) {
                window.close();
              } else {
                window.location.href = window.location.origin + window.location.pathname;
              }
            }}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline"
          >
            العودة إلى اللعبة الرئيسية
          </button>
        </div>

      </div>
    </div>
  );
};
