import React, { useState } from 'react';
import { HelpCircle, X, Users, Layers, Trophy, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';
import { getUsedQuestionsCount, clearUsedQuestions } from '../utils/questionBank';

interface RulesModalProps {
  userId?: string | null;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ userId, onClose }) => {
  const [usedCount, setUsedCount] = useState<number>(getUsedQuestionsCount());
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  const handleClearHistory = async () => {
    sound.playClick();
    if (window.confirm('هل أنت تأكد من إعادة تصفير سجل الأسئلة المستخدمة؟ سيمكنك ذلك من رؤية جميع الأسئلة مجدداً.')) {
      await clearUsedQuestions(userId);
      setUsedCount(0);
      setResetMessage('تم تصفير سجل الأسئلة بنجاح! ستظهر لك الأسئلة مجدداً.');
      setTimeout(() => setResetMessage(null), 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn font-['Cairo',sans-serif]">
      <div className="w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl p-6 space-y-5 relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-lg">
            <HelpCircle className="w-5 h-5" />
            <span>قوانين وميزات برنامج ديوانية</span>
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

        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
            <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 font-black flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-0.5">المرحلة الأولى: الفئات العامة</h4>
              <p className="text-slate-300 leading-relaxed">كل فريق ينقي فئتين عامتين (إجمالي 4 فئات عامة باللوحة).</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 font-black flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-0.5">المرحلة الثانية: الفئات الخاصة</h4>
              <p className="text-slate-300 leading-relaxed">تنقون الفئات الخاصة التخصصية (Breaking Bad، مسلسلات تركية، كورة، أنمي...) فئتين حق كل فريق.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-black flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-0.5">نظام 1000+ سؤال لكل فئة وعدم التكرار 🎯</h4>
              <p className="text-slate-300 leading-relaxed">
                تحتوي اللعبة على بنك ضخم يضم 1000 سؤال متجدد لكل فئة. الأسئلة التي تراها لا تظهر لك مرة أخرى مطلقاً، وعند إكمال جميع الأسئلة يتم إعادة تصفير الفئة تلقائياً لاستمرار اللعب دون توقف!
              </p>
            </div>
          </div>

          {/* Used Questions Stats Card */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-800/90 to-slate-800/90 border border-amber-500/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="font-extrabold text-white text-xs">عدد الأسئلة المستعملة لديك:</div>
                <div className="text-amber-300 text-sm font-black">{usedCount} سؤال مر عليك سابقاً</div>
              </div>
            </div>
            <button
              onClick={handleClearHistory}
              className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>تصفير الأسئلة</span>
            </button>
          </div>

          {resetMessage && (
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold text-center">
              {resetMessage}
            </div>
          )}
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-l from-amber-400 to-yellow-500 text-slate-950 font-black text-sm transition hover:scale-[1.01] cursor-pointer shadow-lg shadow-amber-500/20"
          >
            تم، جهزنا للتحدي!
          </button>
        </div>
      </div>
    </div>
  );
};
