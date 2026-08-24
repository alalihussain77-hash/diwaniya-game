import React, { useState, useRef } from 'react';
import {
  PlusCircle,
  Image as ImageIcon,
  Upload,
  CheckCircle2,
  X,
  AlertCircle,
  Link,
  Layers,
  Sparkles
} from 'lucide-react';
import { Category } from '../types';
import {
  CategoryQuestionItem,
  addCustomCategoryQuestion
} from '../utils/categoryQuestionsManager';
import { sound } from '../utils/sound';
import { compressImageFile } from '../utils/imageCompressor';

interface AddCategoryQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onQuestionAdded: (newQuestion: CategoryQuestionItem) => void;
  onOpenViewAllModal?: () => void;
}

export const AddCategoryQuestionModal: React.FC<AddCategoryQuestionModalProps> = ({
  isOpen,
  onClose,
  category,
  onQuestionAdded,
  onOpenViewAllModal,
}) => {
  const [questionText, setQuestionText] = useState('');
  const [questionImage, setQuestionImage] = useState('');
  const [questionImageUploadType, setQuestionImageUploadType] = useState<'url' | 'file'>('url');
  
  const [answerText, setAnswerText] = useState('');
  const [answerImage, setAnswerImage] = useState('');
  const [answerImageUploadType, setAnswerImageUploadType] = useState<'url' | 'file'>('url');

  const [activeImageTab, setActiveImageTab] = useState<'question' | 'answer'>('question');
  const [isCompressing, setIsCompressing] = useState(false);

  const [points, setPoints] = useState<number>(200);
  const [hint, setHint] = useState('');
  const [explanation, setExplanation] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const questionFileInputRef = useRef<HTMLInputElement>(null);
  const answerFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen || !category) return null;

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setImageState: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('حجم الصورة كبير جداً، يرجى اختيار صورة أقل من 10 ميغابايت');
      return;
    }

    try {
      setErrorMsg('');
      const compressedData = await compressImageFile(file, 800, 0.82);
      setImageState(compressedData);
    } catch (err) {
      console.error('Error compressing image:', err);
      setErrorMsg('تعذر معالجة وضغط ملف الصورة');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedQuestion = questionText.trim();
    const trimmedAnswer = answerText.trim();
    const trimmedQImage = questionImage.trim();
    const trimmedAImage = answerImage.trim();
    const trimmedHint = hint.trim();
    const trimmedExplanation = explanation.trim();

    if (!trimmedQuestion) {
      setErrorMsg('يرجى إدخال نص السؤال');
      return;
    }

    if (!trimmedAnswer) {
      setErrorMsg('يرجى إدخال نص الإجابة الصحيحة');
      return;
    }

    const newQuestionItem: CategoryQuestionItem = {
      id: `custom_${category.id}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      question: trimmedQuestion,
      answer: trimmedAnswer,
      points: points || 200,
      imageUrl: trimmedQImage || undefined,
      answerImageUrl: trimmedAImage || undefined,
      hint: trimmedHint || undefined,
      explanation: trimmedExplanation || `الإجابة الصحيحة هي: ${trimmedAnswer}`,
    };

    try {
      addCustomCategoryQuestion(category.id, newQuestionItem);
      sound.playCorrect();
      setSuccessMsg(`تمت إضافة السؤال بنجاح إلى فئة ${category.name}! 🎉`);

      setTimeout(() => {
        onQuestionAdded(newQuestionItem);
        onClose();
        // Reset fields
        setQuestionText('');
        setQuestionImage('');
        setAnswerText('');
        setAnswerImage('');
        setHint('');
        setExplanation('');
        setSuccessMsg('');
      }, 800);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('حدث خطأ أثناء حفظ السؤال.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-xl bg-slate-900 border-2 border-amber-500/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        dir="rtl"
      >
        {/* Header */}
        <div className="py-3 px-4 sm:py-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 text-slate-950 flex items-center justify-center font-black shadow-md">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white">
                إضافة سؤال جديد - {category.name}
              </h3>
              <p className="text-[11px] text-slate-400">
                أضف سؤالاً مخصصاً يظهر في تحديات هذه الفئة
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center gap-2 text-rose-400 text-xs sm:text-sm font-bold animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-bold animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Points Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              نقاط السؤال:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[200, 400, 600].map((pt) => (
                <button
                  key={pt}
                  type="button"
                  onClick={() => setPoints(pt)}
                  className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer border ${
                    points === pt
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-[1.02]'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {pt} نقطة
                </button>
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              نص السؤال <span className="text-amber-400">*</span>
            </label>
            <textarea
              rows={2}
              value={questionText || ''}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="مثال: من هو بطل رواية كذا؟ أو ما هي عاصمة كذا؟"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              required
            />
          </div>

          {/* Question & Answer Images Tabs (Optional) */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2.5">
            {/* Top Switcher Tabs */}
            <div className="grid grid-cols-2 gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveImageTab('question')}
                className={`py-1.5 px-2 rounded-lg text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeImageTab === 'question'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>صورة السؤال</span>
                {questionImage && (
                  <span className={`w-2 h-2 rounded-full ${activeImageTab === 'question' ? 'bg-slate-950' : 'bg-amber-400'}`} />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveImageTab('answer')}
                className={`py-1.5 px-2 rounded-lg text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeImageTab === 'answer'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>صورة الإجابة</span>
                {answerImage && (
                  <span className={`w-2 h-2 rounded-full ${activeImageTab === 'answer' ? 'bg-slate-950' : 'bg-emerald-400'}`} />
                )}
              </button>
            </div>

            {/* Hidden file inputs */}
            <input
              ref={questionFileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setQuestionImage)}
              className="hidden"
            />
            <input
              ref={answerFileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setAnswerImage)}
              className="hidden"
            />

            {activeImageTab === 'question' ? (
              /* Question Image Controls */
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-400">
                    صورة السؤال (تعرض أثناء طرح السؤال):
                  </span>
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setQuestionImageUploadType('url')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                        questionImageUploadType === 'url'
                          ? 'bg-amber-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      رابط URL
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuestionImageUploadType('file')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                        questionImageUploadType === 'file'
                          ? 'bg-amber-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      رفع ملف
                    </button>
                  </div>
                </div>

                {questionImageUploadType === 'url' ? (
                  <div className="relative">
                    <input
                      key="add-cat-question-image-url"
                      type="url"
                      value={questionImage || ''}
                      onChange={(e) => setQuestionImage(e.target.value)}
                      placeholder="https://... أو رابط صورة السؤال"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pr-3 pl-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <Link className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() => questionFileInputRef.current?.click()}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-dashed border-amber-500/40 hover:border-amber-400 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-400" />
                      <span>اختر صورة السؤال من جهازك</span>
                    </button>
                  </div>
                )}

                {questionImage && (
                  <div className="relative w-full h-28 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center p-1">
                    <img
                      src={questionImage}
                      alt="Question Preview"
                      className="max-h-full max-w-full object-contain rounded drop-shadow"
                      onError={() => setQuestionImage('')}
                    />
                    <button
                      type="button"
                      onClick={() => setQuestionImage('')}
                      className="absolute top-1.5 left-1.5 p-1 px-2 bg-rose-600/90 hover:bg-rose-600 text-white rounded-md text-[10px] font-bold cursor-pointer transition shadow"
                    >
                      حذف الصورة
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Answer Image Controls */
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-400">
                    صورة الإجابة (تظهر فور كشف الحل):
                  </span>
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setAnswerImageUploadType('url')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                        answerImageUploadType === 'url'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      رابط URL
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnswerImageUploadType('file')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                        answerImageUploadType === 'file'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      رفع ملف
                    </button>
                  </div>
                </div>

                {answerImageUploadType === 'url' ? (
                  <div className="relative">
                    <input
                      key="add-cat-answer-image-url"
                      type="url"
                      value={answerImage || ''}
                      onChange={(e) => setAnswerImage(e.target.value)}
                      placeholder="https://... أو رابط صورة الإجابة"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pr-3 pl-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                    <Link className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() => answerFileInputRef.current?.click()}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-dashed border-emerald-500/40 hover:border-emerald-400 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-emerald-400" />
                      <span>اختر صورة الإجابة من جهازك</span>
                    </button>
                  </div>
                )}

                {answerImage && (
                  <div className="relative w-full h-28 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center p-1">
                    <img
                      src={answerImage}
                      alt="Answer Preview"
                      className="max-h-full max-w-full object-contain rounded drop-shadow"
                      onError={() => setAnswerImage('')}
                    />
                    <button
                      type="button"
                      onClick={() => setAnswerImage('')}
                      className="absolute top-1.5 left-1.5 p-1 px-2 bg-rose-600/90 hover:bg-rose-600 text-white rounded-md text-[10px] font-bold cursor-pointer transition shadow"
                    >
                      حذف الصورة
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Correct Answer */}
          <div>
            <label className="block text-xs font-bold text-amber-400 mb-1.5">
              الإجابة الصحيحة <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              value={answerText || ''}
              onChange={(e) => setAnswerText(e.target.value)}
              placeholder="مثال: الإجابة الدقيقة أو الأسماء المعتمدة"
              className="w-full bg-slate-950 border border-amber-500/50 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-inner"
              required
            />
          </div>

          {/* Hint & Explanation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">
                تلميح اختياري:
              </label>
              <input
                type="text"
                value={hint || ''}
                onChange={(e) => setHint(e.target.value)}
                placeholder="تلميح يساعد المتسابقين..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">
                توضيح إضافي (Explanation):
              </label>
              <input
                type="text"
                value={explanation || ''}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="معلومات إضافية تظهر عند الحل..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-l from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition cursor-pointer hover:scale-[1.02] active:scale-98"
              >
                <PlusCircle className="w-4 h-4" />
                <span>حفظ وإضافة السؤال</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-bold transition cursor-pointer"
              >
                إلغاء
              </button>
            </div>

            {onOpenViewAllModal && (
              <button
                type="button"
                onClick={onOpenViewAllModal}
                className="text-[11px] text-amber-400 hover:underline font-bold"
              >
                عرض وتعديل كافة الأسئلة
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
