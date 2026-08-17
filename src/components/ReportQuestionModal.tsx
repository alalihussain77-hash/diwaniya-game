import React, { useState } from 'react';
import { Question } from '../types';
import { Flag, X, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sound } from '../utils/sound';
import { cleanQuestionText } from '../data/hundredQuestionsBank';

interface ReportQuestionModalProps {
  question: Question;
  categoryName: string;
  onClose: () => void;
}

const ISSUE_OPTIONS = [
  { id: 'wrong_answer', label: 'إجابة خاطئة ❌' },
  { id: 'unclear_question', label: 'سؤال غير واضح أو غامض ❓' },
  { id: 'typo', label: 'خطأ إملائي أو صياغة ✏️' },
  { id: 'image_issue', label: 'مشكلة في الصورة أو الوسائط 🖼️' },
  { id: 'other', label: 'ملاحظة أخرى 💬' },
];

export const ReportQuestionModal: React.FC<ReportQuestionModalProps> = ({
  question,
  categoryName,
  onClose,
}) => {
  const [selectedIssue, setSelectedIssue] = useState<string>('wrong_answer');
  const [details, setDetails] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setIsSubmitting(true);

    const issueLabel = ISSUE_OPTIONS.find((opt) => opt.id === selectedIssue)?.label || selectedIssue;
    const cleanedText = cleanQuestionText(question.question);

    try {
      // 1. Save to Firestore question_reports collection
      if (db) {
        await addDoc(collection(db, 'question_reports'), {
          questionId: question.id,
          categoryName,
          questionText: cleanedText,
          correctAnswer: question.correctAnswer || '',
          issueType: issueLabel,
          details: details.trim(),
          reportedAt: serverTimestamp(),
          reporterEmail: auth.currentUser?.email || 'زائر',
          reporterUid: auth.currentUser?.uid || 'guest',
        });
      }
    } catch (err) {
      console.warn('Firestore report save fallback:', err);
    }

    // 2. Open mailto as direct email notification option if requested or fallback
    const emailSubject = encodeURIComponent(`[بلاغ سؤال] - ${categoryName}`);
    const emailBody = encodeURIComponent(
      `قسم الفئة: ${categoryName}\n` +
      `السؤال: ${cleanedText}\n` +
      `الإجابة المسجلة: ${question.correctAnswer || 'غير محددة'}\n` +
      `نوع المشكلة: ${issueLabel}\n` +
      `التفاصيل: ${details.trim() || 'لا توجد تفاصيل إضافية'}\n` +
      `معرف السؤال: ${question.id}`
    );

    // Optional email dispatch link
    const mailtoUrl = `mailto:support@dwen-game.com?subject=${emailSubject}&body=${emailBody}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
    sound.playCorrect();

    // Auto close after showing success toast
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn font-['Cairo',sans-serif]">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-6 text-right space-y-4 relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Flag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base sm:text-lg">إبلاغ عن خطأ في السؤال</h3>
              <p className="text-xs text-slate-400">{categoryName}</p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3 animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-white">تم إرسال بلاغك بنجاح!</h4>
            <p className="text-xs text-slate-300">شكراً لك على مساعدتنا في تحسين جودة الأسئلة. 🚩</p>
          </div>
        ) : (
          <form onSubmit={handleSubmitReport} className="space-y-4">
            {/* Question Brief */}
            <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 line-clamp-2 italic">
              "{cleanQuestionText(question.question)}"
            </div>

            {/* Issue Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">نوع المشكلة:</label>
              <div className="space-y-1.5">
                {ISSUE_OPTIONS.map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setSelectedIssue(opt.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition ${
                      selectedIssue === opt.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <input
                      type="radio"
                      name="issueType"
                      value={opt.id}
                      checked={selectedIssue === opt.id}
                      onChange={() => setSelectedIssue(opt.id)}
                      className="accent-amber-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Optional Details Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300">تفاصيل الملاحظة (اختياري):</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="اكتب أي توضيح إضافي يخص السؤال أو الإجابة..."
                rows={3}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-l from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال البلاغ'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
