import React, { useState, useRef } from 'react';
import { PlusCircle, Image as ImageIcon, Upload, CheckCircle2, X, Car, AlertCircle, Link, Eye, Trash2 } from 'lucide-react';
import { UserCarQuestionInput, addCustomCarQuestion } from '../data/carsQuestions';
import { compressImageFile } from '../utils/imageCompressor';
import { sound } from '../utils/sound';

interface AddCarQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuestionAdded: (newQuestion: UserCarQuestionInput) => void;
  onOpenViewAllModal?: () => void;
}

export const AddCarQuestionModal: React.FC<AddCarQuestionModalProps> = ({
  isOpen,
  onClose,
  onQuestionAdded,
  onOpenViewAllModal,
}) => {
  const [questionText, setQuestionText] = useState('شنو اسم هذي القطعة؟');
  const [questionImage, setQuestionImage] = useState('');
  const [questionImageUploadType, setQuestionImageUploadType] = useState<'url' | 'file'>('url');
  
  const [answerText, setAnswerText] = useState('');
  const [answerImage, setAnswerImage] = useState('');
  const [answerImageUploadType, setAnswerImageUploadType] = useState<'url' | 'file'>('url');

  const [points, setPoints] = useState<number>(200);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isCompressing, setIsCompressing] = useState(false);

  const questionFileInputRef = useRef<HTMLInputElement>(null);
  const answerFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setImageState: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('يرجى اختيار ملف صورة صالح (JPG, PNG, WebP)');
      return;
    }

    try {
      setIsCompressing(true);
      setErrorMsg('');
      const compressed = await compressImageFile(file);
      setImageState(compressed);
    } catch (err) {
      console.error('Error compressing image:', err);
      setErrorMsg('تعذر معالجة وضغط الصورة، يرجى المحاولة مرة أخرى');
    } finally {
      setIsCompressing(false);
      e.target.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedQuestion = questionText.trim();
    const trimmedAnswer = answerText.trim();
    const trimmedQImage = questionImage.trim();
    const trimmedAImage = answerImage.trim();

    if (!trimmedQuestion) {
      setErrorMsg('يرجى إدخال نص السؤال');
      return;
    }

    if (!trimmedAnswer) {
      setErrorMsg('يرجى إدخال نص الإجابة الصحيحة');
      return;
    }

    const newQuestionInput: UserCarQuestionInput = {
      id: `car_custom_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      question: trimmedQuestion,
      answer: trimmedAnswer,
      points: points || 200,
      imageUrl: trimmedQImage || '/cars_category_thumb.jpg',
      answerImageUrl: trimmedAImage || undefined,
    };

    try {
      addCustomCarQuestion(newQuestionInput);
      sound.playCorrect();
      setSuccessMsg('تم حفظ وإضافة السؤال إلى بنك أسئلة السيارات بنجاح! 🎉');
      
      setTimeout(() => {
        onQuestionAdded(newQuestionInput);
        onClose();
        // Reset fields
        setQuestionText('شنو اسم هذي القطعة؟');
        setQuestionImage('');
        setAnswerText('');
        setAnswerImage('');
        setSuccessMsg('');
      }, 900);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('حدث خطأ أثناء حفظ السؤال في الذاكرة المحلية.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-xl bg-slate-900 border-2 border-amber-500/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        dir="rtl"
      >
        {/* Header */}
        <div className="py-3 px-4 sm:py-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md">
              <Car className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-sm sm:text-lg">
                إضافة سؤال جديد لفئة السيارات 🚗
              </h3>
              <p className="text-[11px] sm:text-xs text-amber-300">
                سيتم حفظ السؤال في المتصفح وزيادة عداد الأسئلة فوراً
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenViewAllModal && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                  onOpenViewAllModal();
                }}
                className="py-1.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 hover:text-amber-200 font-extrabold text-xs flex items-center gap-1.5 transition cursor-pointer"
                title="عرض وتعديل كافة أسئلة فئة السيارات"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">عرض وتعديل جميع الأسئلة</span>
                <span className="sm:hidden">عرض الكل</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 custom-scrollbar">
          {errorMsg && (
            <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-200 text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* 1. نص السؤال */}
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-extrabold text-slate-200">
              نص السؤال <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              value={questionText || ''}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="مثال: شنو اسم هذي القطعة؟ أو ما وظيفة هذا الجزء؟"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              required
            />
          </div>

          {/* 2. صورة السؤال (Image Upload / URL Input) */}
          <div className="space-y-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-extrabold text-amber-300 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span>صورة السؤال (قطعة السيارة)</span>
              </label>

              <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-[10px]">
                <button
                  type="button"
                  onClick={() => setQuestionImageUploadType('url')}
                  className={`px-2 py-1 rounded-md transition ${
                    questionImageUploadType === 'url'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  رابط URL
                </button>
                <button
                  type="button"
                  onClick={() => setQuestionImageUploadType('file')}
                  className={`px-2 py-1 rounded-md transition ${
                    questionImageUploadType === 'file'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  رفع ملف
                </button>
              </div>
            </div>

            {/* Hidden file input always mounted separately */}
            <input
              ref={questionFileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setQuestionImage)}
              className="hidden"
            />

            {questionImageUploadType === 'url' ? (
              <div className="relative">
                <input
                  key="question-image-url-input"
                  type="url"
                  value={questionImage || ''}
                  onChange={(e) => setQuestionImage(e.target.value)}
                  placeholder="https://example.com/car-part-photo.jpg"
                  className="w-full pr-8 pl-8 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                />
                <Link className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3" />
                {questionImage && (
                  <button
                    type="button"
                    onClick={() => setQuestionImage('')}
                    className="absolute left-2.5 top-2.5 text-slate-400 hover:text-rose-400 text-xs p-0.5 rounded transition"
                    title="مسح رابط الصورة"
                  >
                    ✕
                  </button>
                )}
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => questionFileInputRef.current?.click()}
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-dashed border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer hover:border-amber-400"
                >
                  <Upload className="w-4 h-4" />
                  <span>اختر صورة من جهازك</span>
                </button>
              </div>
            )}

            {questionImage && (
              <div className="mt-2 flex items-center gap-2.5 p-2 bg-slate-900 rounded-xl border border-slate-800">
                <img
                  src={questionImage}
                  alt="معاينة صورة السؤال"
                  className="w-12 h-12 rounded-lg object-cover border border-slate-700 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-emerald-400 font-bold block truncate">
                    ✓ تم تعيين صورة السؤال
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {questionImage.startsWith('data:') ? 'صورة مرفوعة من الجهاز' : questionImage}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setQuestionImage('');
                    sound.playClick();
                  }}
                  className="py-1 px-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 hover:text-rose-200 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  title="مسح وحذف الصورة"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>مسح الصورة</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. نص الإجابة */}
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-extrabold text-slate-200">
              نص الإجابة الصحيحة <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              value={answerText || ''}
              onChange={(e) => setAnswerText(e.target.value)}
              placeholder="مثال: دينامو / المولد الكهربائي / Alternator"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              required
            />
          </div>

          {/* 4. صورة الإجابة (Image Upload / URL Input - Optional) */}
          <div className="space-y-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-extrabold text-slate-300 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-slate-400" />
                <span>صورة الإجابة (اختياري - تظهر عند كشف الإجابة)</span>
              </label>

              <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-[10px]">
                <button
                  type="button"
                  onClick={() => setAnswerImageUploadType('url')}
                  className={`px-2 py-1 rounded-md transition ${
                    answerImageUploadType === 'url'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  رابط URL
                </button>
                <button
                  type="button"
                  onClick={() => setAnswerImageUploadType('file')}
                  className={`px-2 py-1 rounded-md transition ${
                    answerImageUploadType === 'file'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  رفع ملف
                </button>
              </div>
            </div>

            {/* Hidden answer file input always mounted separately */}
            <input
              ref={answerFileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setAnswerImage)}
              className="hidden"
            />

            {answerImageUploadType === 'url' ? (
              <div className="relative">
                <input
                  key="answer-image-url-input"
                  type="url"
                  value={answerImage || ''}
                  onChange={(e) => setAnswerImage(e.target.value)}
                  placeholder="https://example.com/answer-photo.jpg (اختياري)"
                  className="w-full pr-8 pl-8 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                />
                <Link className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3" />
                {answerImage && (
                  <button
                    type="button"
                    onClick={() => setAnswerImage('')}
                    className="absolute left-2.5 top-2.5 text-slate-400 hover:text-rose-400 text-xs p-0.5 rounded transition"
                    title="مسح رابط الصورة"
                  >
                    ✕
                  </button>
                )}
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => answerFileInputRef.current?.click()}
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-dashed border-slate-600 text-slate-300 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer hover:border-amber-400"
                >
                  <Upload className="w-4 h-4" />
                  <span>اختر صورة توضيحية للإجابة</span>
                </button>
              </div>
            )}

            {answerImage && (
              <div className="mt-2 flex items-center gap-2.5 p-2 bg-slate-900 rounded-xl border border-slate-800">
                <img
                  src={answerImage}
                  alt="معاينة صورة الإجابة"
                  className="w-12 h-12 rounded-lg object-cover border border-slate-700 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-emerald-400 font-bold block truncate">
                    ✓ تم تعيين صورة الإجابة
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {answerImage.startsWith('data:') ? 'صورة مرفوعة من الجهاز' : answerImage}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAnswerImage('');
                    sound.playClick();
                  }}
                  className="py-1 px-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 hover:text-rose-200 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  title="مسح وحذف الصورة"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>مسح الصورة</span>
                </button>
              </div>
            )}
          </div>

          {/* Points Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-extrabold text-slate-300">
              قيمة النقاط (حسب لوحة اللعب)
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[200, 400, 600].map((pt) => (
                <button
                  key={pt}
                  type="button"
                  onClick={() => setPoints(pt)}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-black transition border cursor-pointer flex items-center justify-center gap-1 ${
                    points === pt
                      ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-400/40'
                      : 'bg-slate-950 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-sm sm:text-base">{pt}</span>
                  <span className="text-[10px] sm:text-xs">نقطة</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={Boolean(successMsg)}
              className="w-full py-3 rounded-xl bg-gradient-to-l from-amber-400 via-amber-500 to-yellow-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer active:scale-98"
            >
              <PlusCircle className="w-5 h-5 stroke-[2.5]" />
              <span>حفظ وإضافة السؤال للسيارات</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
