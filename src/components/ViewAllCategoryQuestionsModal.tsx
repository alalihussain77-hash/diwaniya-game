import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Search,
  Plus,
  Image as ImageIcon,
  Edit3,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Link as LinkIcon,
  Upload,
  ChevronRight,
  ChevronLeft,
  Save,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle,
  Code,
  Copy,
  Download,
  Check
} from 'lucide-react';
import { Category } from '../types';
import {
  CategoryQuestionItem,
  getCategoryRawQuestions,
  updateCategoryQuestion,
  deleteCategoryQuestion,
  resetCategoryQuestions,
  generateCategoryTypeScriptCode
} from '../utils/categoryQuestionsManager';
import { sound } from '../utils/sound';
import { compressImageFile } from '../utils/imageCompressor';

interface ViewAllCategoryQuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onOpenAddModal: () => void;
}

export const ViewAllCategoryQuestionsModal: React.FC<ViewAllCategoryQuestionsModalProps> = ({
  isOpen,
  onClose,
  category,
  onOpenAddModal,
}) => {
  const [questions, setQuestions] = useState<CategoryQuestionItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPointFilter, setSelectedPointFilter] = useState<number | 'all'>('all');
  
  // Selected question for viewing & editing (null = shows list grid view)
  const [selectedQuestion, setSelectedQuestion] = useState<CategoryQuestionItem | null>(null);
  
  // Edit form state
  const [editQuestionText, setEditQuestionText] = useState('');
  const [editAnswerText, setEditAnswerText] = useState('');
  const [editPoints, setEditPoints] = useState<number>(200);
  const [editQuestionImage, setEditQuestionImage] = useState('');
  const [editAnswerImage, setEditAnswerImage] = useState('');
  const [editHint, setEditHint] = useState('');
  const [editExplanation, setEditExplanation] = useState('');
  
  const [questionImgType, setQuestionImgType] = useState<'url' | 'file'>('url');
  const [answerImgType, setAnswerImgType] = useState<'url' | 'file'>('url');
  const [activeImageTab, setActiveImageTab] = useState<'question' | 'answer'>('question');
  const [isCompressing, setIsCompressing] = useState(false);
  
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const qFileInputRef = useRef<HTMLInputElement>(null);
  const aFileInputRef = useRef<HTMLInputElement>(null);

  // Load questions for the active category
  const loadQuestions = () => {
    if (!category) return [];
    const list = getCategoryRawQuestions(category.id, category.name);
    setQuestions(list);
    return list;
  };

  useEffect(() => {
    if (isOpen && category) {
      loadQuestions();
      setSelectedQuestion(null);
      setSaveSuccessMsg('');
      setErrorMsg('');
      setShowConfirmDelete(false);
      setShowConfirmReset(false);
    }
  }, [isOpen, category]);

  useEffect(() => {
    if (!category) return;
    const handleUpdate = () => {
      const updated = getCategoryRawQuestions(category.id, category.name);
      setQuestions(updated);
      if (selectedQuestion) {
        const found = updated.find((q) => q.id === selectedQuestion.id);
        if (found) {
          setSelectedQuestion(found);
        }
      }
    };
    window.addEventListener('diwaniya_category_questions_updated', handleUpdate);
    window.addEventListener('diwaniya_car_questions_updated', handleUpdate);
    return () => {
      window.removeEventListener('diwaniya_category_questions_updated', handleUpdate);
      window.removeEventListener('diwaniya_car_questions_updated', handleUpdate);
    };
  }, [category, selectedQuestion]);

  if (!isOpen || !category) return null;

  const openEditQuestion = (q: CategoryQuestionItem) => {
    setSelectedQuestion(q);
    setEditQuestionText(q.question || '');
    setEditAnswerText(q.answer || '');
    setEditPoints(q.points || 200);
    setEditQuestionImage(q.imageUrl || '');
    setEditAnswerImage(q.answerImageUrl || q.imageUrl || '');
    setEditHint(q.hint || '');
    setEditExplanation(q.explanation || '');
    setSaveSuccessMsg('');
    setErrorMsg('');
    setShowConfirmDelete(false);
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setImageState: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('حجم الصورة كبير جداً (الحد الأقصى 10 ميغابايت)');
      return;
    }

    try {
      setIsCompressing(true);
      setErrorMsg('');
      const compressedData = await compressImageFile(file, 800, 0.82);
      setImageState(compressedData);
    } catch (err) {
      console.error('Error compressing image:', err);
      setErrorMsg('تعذر معالجة وضغط الصورة');
    } finally {
      setIsCompressing(false);
    }
  };

  const handleCopyCode = () => {
    if (!category) return;
    try {
      const code = generateCategoryTypeScriptCode(category.id, category.name);
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadCodeFile = () => {
    if (!category) return;
    try {
      const code = generateCategoryTypeScriptCode(category.id, category.name);
      const blob = new Blob([code], { type: 'text/typescript;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${category.id}_questions.ts`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuestion) return;

    const trimmedQ = editQuestionText.trim();
    const trimmedA = editAnswerText.trim();

    if (!trimmedQ) {
      setErrorMsg('يرجى كتابة نص السؤال');
      return;
    }
    if (!trimmedA) {
      setErrorMsg('يرجى كتابة نص الإجابة');
      return;
    }

    try {
      updateCategoryQuestion(category.id, selectedQuestion.id, {
        question: trimmedQ,
        answer: trimmedA,
        points: editPoints,
        imageUrl: editQuestionImage ? editQuestionImage.trim() : '',
        answerImageUrl: editAnswerImage ? editAnswerImage.trim() : '',
        hint: editHint.trim() || undefined,
        explanation: editExplanation.trim() || undefined,
      });

      sound.playCorrect();
      setSaveSuccessMsg('تم حفظ وتثبيت الصور والتعديلات بنجاح في النظام والكود البرمجي! ✓');
      setErrorMsg('');

      // Refresh list
      loadQuestions();

      setTimeout(() => {
        setSaveSuccessMsg('');
      }, 2500);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('حدث خطأ أثناء حفظ التعديل.');
    }
  };

  const handleDeleteQuestion = () => {
    if (!selectedQuestion) return;
    try {
      deleteCategoryQuestion(category.id, selectedQuestion.id);
      sound.playWrong();
      setShowConfirmDelete(false);
      setSelectedQuestion(null);
      loadQuestions();
    } catch (err: any) {
      console.error(err);
      setErrorMsg('حدث خطأ أثناء حذف السؤال.');
    }
  };

  const handleResetToDefaults = () => {
    try {
      resetCategoryQuestions(category.id);
      sound.playCorrect();
      setShowConfirmReset(false);
      setSelectedQuestion(null);
      loadQuestions();
    } catch (err: any) {
      console.error(err);
      setErrorMsg('حدث خطأ أثناء استعادة الأسئلة.');
    }
  };

  // Filter questions by query & points
  const filteredQuestions = questions.filter((q) => {
    const matchesPoint =
      selectedPointFilter === 'all' || q.points === selectedPointFilter;
    const cleanSearch = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !cleanSearch ||
      q.question.toLowerCase().includes(cleanSearch) ||
      q.answer.toLowerCase().includes(cleanSearch) ||
      q.id.toLowerCase().includes(cleanSearch);

    return matchesPoint && matchesSearch;
  });

  // Calculate question index within filtered or all
  const currentIndex = selectedQuestion
    ? questions.findIndex((q) => q.id === selectedQuestion.id)
    : -1;

  const goToPrevQuestion = () => {
    if (currentIndex > 0) {
      openEditQuestion(questions[currentIndex - 1]);
    }
  };

  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      openEditQuestion(questions[currentIndex + 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-5xl bg-slate-900 border-2 border-amber-500/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[92vh] max-h-[92vh]"
        dir="rtl"
      >
        {/* Top Header */}
        <div className="py-3 px-4 sm:py-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black shadow-md shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white truncate">
                  بنك أسئلة: {category.name}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-bold shrink-0">
                  {questions.length} سؤال
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                تصفح، تعديل، وحذف أسئلة الفئة أو إضافة أسئلة جديدة
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowExportModal(true)}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition border border-amber-500/30 cursor-pointer shadow-sm"
              title="تصدير كود الأسئلة كملف برمجياً"
            >
              <Code className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">تصدير الكود البرمجي</span>
              <span className="md:hidden">كود</span>
            </button>
            <button
              type="button"
              onClick={onOpenAddModal}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span className="hidden sm:inline">+ إضافة سؤال جديد</span>
              <span className="sm:hidden">إضافة</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition cursor-pointer"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Sub Navigation Bar when in Edit Mode */}
          {selectedQuestion && (
            <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-2 flex items-center justify-between gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedQuestion(null)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                <span>العودة لقائمة الأسئلة</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">
                  السؤال {currentIndex + 1} من {questions.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={goToPrevQuestion}
                    disabled={currentIndex <= 0}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition cursor-pointer"
                    title="السابق"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNextQuestion}
                    disabled={currentIndex >= questions.length - 1}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition cursor-pointer"
                    title="التالي"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* List Mode or Edit Mode */}
          {!selectedQuestion ? (
            /* =================== LIST MODE =================== */
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-3 sm:gap-4">
              {/* Search & Filter Bar */}
              <div className="bg-slate-950/60 p-2.5 sm:p-3.5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 shrink-0">
                {/* Search */}
                <div className="relative w-full sm:flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery || ''}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث في الأسئلة أو الإجابات..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pr-9 pl-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Point Filter Pills */}
                <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                  <button
                    type="button"
                    onClick={() => setSelectedPointFilter('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      selectedPointFilter === 'all'
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    الكل ({questions.length})
                  </button>
                  {[200, 400, 600].map((pt) => {
                    const count = questions.filter((q) => q.points === pt).length;
                    return (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => setSelectedPointFilter(pt)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                          selectedPointFilter === pt
                            ? 'bg-amber-500 text-slate-950 shadow-md'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {pt} نقطة ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Questions Grid */}
              {filteredQuestions.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-950/40 rounded-2xl border border-slate-800/80">
                  <AlertCircle className="w-12 h-12 text-slate-600 mb-2" />
                  <p className="text-slate-300 font-bold text-sm sm:text-base">
                    لم يتم العثور على أي أسئلة تطابق البحث
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    جرب تغيير كلمات البحث أو تصفية النقاط
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedPointFilter('all');
                    }}
                    className="mt-3 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold transition"
                  >
                    إلغاء التصفية
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 pb-2">
                  {filteredQuestions.map((q, idx) => (
                    <div
                      key={q.id}
                      onClick={() => openEditQuestion(q)}
                      className="group relative bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/60 rounded-2xl p-3 sm:p-4 flex flex-col gap-2.5 transition-all shadow-sm hover:shadow-lg cursor-pointer hover:scale-[1.01]"
                    >
                      {/* Top row: Points badge & ID */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-black font-mono shadow-sm ${
                            q.points === 200
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : q.points === 400
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          }`}
                        >
                          {q.points} نقطة
                        </span>

                        <div className="flex items-center gap-1.5">
                          {q.imageUrl && (
                            <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-medium flex items-center gap-1">
                              <ImageIcon className="w-2.5 h-2.5" />
                              <span>صورة</span>
                            </span>
                          )}
                          <span className="text-[10px] text-slate-500 font-mono">
                            #{idx + 1}
                          </span>
                        </div>
                      </div>

                      {/* Image Thumbnail if available */}
                      {q.imageUrl && (
                        <div className="w-full h-24 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-1">
                          <img
                            src={q.imageUrl}
                            alt="Question preview"
                            className="max-h-full max-w-full object-contain drop-shadow"
                            loading="lazy"
                            onError={(e) => {
                              const parent = e.currentTarget.parentElement;
                              if (parent) parent.style.display = 'none';
                            }}
                          />
                        </div>
                      )}

                      {/* Question text */}
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
                          {q.question}
                        </p>
                      </div>

                      {/* Answer box */}
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800/90">
                        <span className="text-[10px] text-amber-400/90 font-bold block mb-0.5">
                          الإجابة:
                        </span>
                        <p className="text-[11px] sm:text-xs text-slate-200 font-extrabold line-clamp-1">
                          {q.answer}
                        </p>
                      </div>

                      {/* Hover Edit action */}
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-amber-400 font-bold">
                        <span className="flex items-center gap-1 text-slate-400 group-hover:text-amber-400 transition">
                          <Edit3 className="w-3 h-3" />
                          <span>اضغط للتعديل</span>
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {q.id.startsWith('car_custom') || q.id.startsWith('custom_') ? 'سؤال مضاف' : 'أصلي'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* =================== EDIT MODE =================== */
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
              {/* Feedback messages */}
              {saveSuccessMsg && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-2xl flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{saveSuccessMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-3 bg-rose-500/20 border border-rose-500/50 rounded-2xl flex items-center gap-2 text-rose-300 text-xs sm:text-sm font-bold animate-fadeIn">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSaveChanges} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column: Details */}
                  <div className="flex flex-col gap-3.5">
                    {/* Points Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        نقاط السؤال:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[200, 400, 600].map((pt) => (
                          <button
                            key={pt}
                            type="button"
                            onClick={() => setEditPoints(pt)}
                            className={`py-2 rounded-xl text-xs font-black transition cursor-pointer border ${
                              editPoints === pt
                                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-[1.02]'
                                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
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
                        نص السؤال:
                      </label>
                      <textarea
                        rows={3}
                        value={editQuestionText || ''}
                        onChange={(e) => setEditQuestionText(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                        placeholder="أدخل نص السؤال هنا..."
                        required
                      />
                    </div>

                    {/* Answer Text */}
                    <div>
                      <label className="block text-xs font-bold text-amber-400 mb-1.5">
                        الإجابة الصحيحة:
                      </label>
                      <input
                        type="text"
                        value={editAnswerText || ''}
                        onChange={(e) => setEditAnswerText(e.target.value)}
                        className="w-full bg-slate-950 border border-amber-500/50 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-amber-400 shadow-inner"
                        placeholder="أدخل نص الإجابة الصحيحة..."
                        required
                      />
                    </div>

                    {/* Hint / Explanation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 mb-1">
                          تلميح اختياري:
                        </label>
                        <input
                          type="text"
                          value={editHint || ''}
                          onChange={(e) => setEditHint(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                          placeholder="تلميح للمتسابقين..."
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 mb-1">
                          توضيح الإجابة (Explanation):
                        </label>
                        <input
                          type="text"
                          value={editExplanation || ''}
                          onChange={(e) => setEditExplanation(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                          placeholder="معلومات إضافية..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Image Preview & Upload (Question & Answer Tabs) */}
                  <div className="flex flex-col gap-3 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
                    {/* Main Image Switcher Tabs */}
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
                        {editQuestionImage && (
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
                        {editAnswerImage && (
                          <span className={`w-2 h-2 rounded-full ${activeImageTab === 'answer' ? 'bg-slate-950' : 'bg-emerald-400'}`} />
                        )}
                      </button>
                    </div>

                    {/* Hidden file inputs */}
                    <input
                      ref={qFileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, setEditQuestionImage)}
                      className="hidden"
                    />
                    <input
                      ref={aFileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, setEditAnswerImage)}
                      className="hidden"
                    />

                    {/* Active Image Tab Content */}
                    {activeImageTab === 'question' ? (
                      /* QUESTION IMAGE SECTION */
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-amber-400">
                            صورة السؤال (تعرض أثناء طرح السؤال):
                          </span>
                          <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                            <button
                              type="button"
                              onClick={() => setQuestionImgType('url')}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                                questionImgType === 'url'
                                  ? 'bg-amber-500 text-slate-950'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              رابط URL
                            </button>
                            <button
                              type="button"
                              onClick={() => setQuestionImgType('file')}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                                questionImgType === 'file'
                                  ? 'bg-amber-500 text-slate-950'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              رفع من الجهاز
                            </button>
                          </div>
                        </div>

                        {questionImgType === 'url' ? (
                          <div className="flex items-center gap-2">
                            <input
                              key="view-cat-edit-question-image-url"
                              type="url"
                              value={editQuestionImage || ''}
                              onChange={(e) => setEditQuestionImage(e.target.value)}
                              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                              placeholder="https://... أو رابط صورة"
                            />
                            {editQuestionImage && (
                              <button
                                type="button"
                                onClick={() => setEditQuestionImage('')}
                                className="px-2.5 py-2 bg-rose-950/80 hover:bg-rose-900 text-rose-300 rounded-xl text-xs font-bold transition cursor-pointer"
                              >
                                حذف
                              </button>
                            )}
                          </div>
                        ) : (
                          <div>
                            <button
                              type="button"
                              onClick={() => qFileInputRef.current?.click()}
                              disabled={isCompressing}
                              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-dashed border-amber-500/40 hover:border-amber-400 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
                            >
                              <Upload className="w-4 h-4 text-amber-400" />
                              <span>{isCompressing ? 'جاري معالجة الصورة...' : 'اختر صورة السؤال من جهازك'}</span>
                            </button>
                          </div>
                        )}

                        {/* Preview Box */}
                        <div className="relative w-full h-40 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2 overflow-hidden">
                          {editQuestionImage ? (
                            <>
                              <img
                                src={editQuestionImage}
                                alt="Question Preview"
                                className="max-h-full max-w-full object-contain rounded-lg drop-shadow"
                                onError={(e) => {
                                  const target = e.currentTarget;
                                  target.style.display = 'none';
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => setEditQuestionImage('')}
                                className="absolute top-2 left-2 p-1 px-2 bg-rose-600/90 hover:bg-rose-600 text-white rounded-lg text-[10px] font-bold shadow-lg transition cursor-pointer"
                              >
                                حذف الصورة
                              </button>
                            </>
                          ) : (
                            <div className="flex flex-col items-center gap-1 text-slate-600">
                              <ImageIcon className="w-8 h-8 opacity-60" />
                              <span className="text-[11px]">لا توجد صورة للسؤال</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* ANSWER IMAGE SECTION */
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-emerald-400">
                            صورة الإجابة (تظهر فور كشف الحل):
                          </span>
                          <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                            <button
                              type="button"
                              onClick={() => setAnswerImgType('url')}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                                answerImgType === 'url'
                                  ? 'bg-emerald-500 text-slate-950'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              رابط URL
                            </button>
                            <button
                              type="button"
                              onClick={() => setAnswerImgType('file')}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                                answerImgType === 'file'
                                  ? 'bg-emerald-500 text-slate-950'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              رفع من الجهاز
                            </button>
                          </div>
                        </div>

                        {answerImgType === 'url' ? (
                          <div className="flex items-center gap-2">
                            <input
                              key="view-cat-edit-answer-image-url"
                              type="url"
                              value={editAnswerImage || ''}
                              onChange={(e) => setEditAnswerImage(e.target.value)}
                              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                              placeholder="https://... أو رابط صورة الإجابة"
                            />
                            {editAnswerImage && (
                              <button
                                type="button"
                                onClick={() => setEditAnswerImage('')}
                                className="px-2.5 py-2 bg-rose-950/80 hover:bg-rose-900 text-rose-300 rounded-xl text-xs font-bold transition cursor-pointer"
                              >
                                حذف
                              </button>
                            )}
                          </div>
                        ) : (
                          <div>
                            <button
                              type="button"
                              onClick={() => aFileInputRef.current?.click()}
                              disabled={isCompressing}
                              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-dashed border-emerald-500/40 hover:border-emerald-400 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
                            >
                              <Upload className="w-4 h-4 text-emerald-400" />
                              <span>{isCompressing ? 'جاري معالجة الصورة...' : 'اختر صورة الإجابة من جهازك'}</span>
                            </button>
                          </div>
                        )}

                        {/* Preview Box */}
                        <div className="relative w-full h-40 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2 overflow-hidden">
                          {editAnswerImage ? (
                            <>
                              <img
                                src={editAnswerImage}
                                alt="Answer Preview"
                                className="max-h-full max-w-full object-contain rounded-lg drop-shadow"
                                onError={(e) => {
                                  const target = e.currentTarget;
                                  target.style.display = 'none';
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => setEditAnswerImage('')}
                                className="absolute top-2 left-2 p-1 px-2 bg-rose-600/90 hover:bg-rose-600 text-white rounded-lg text-[10px] font-bold shadow-lg transition cursor-pointer"
                              >
                                حذف الصورة
                              </button>
                            </>
                          ) : (
                            <div className="flex flex-col items-center gap-1 text-slate-600">
                              <Sparkles className="w-8 h-8 opacity-60 text-emerald-500" />
                              <span className="text-[11px]">لا توجد صورة مخصصة للإجابة</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-l from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition cursor-pointer hover:scale-[1.02] active:scale-98"
                    >
                      <Save className="w-4 h-4" />
                      <span>حفظ التعديلات</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedQuestion(null)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
                    >
                      إلغاء
                    </button>
                  </div>

                  <div>
                    {!showConfirmDelete ? (
                      <button
                        type="button"
                        onClick={() => setShowConfirmDelete(true)}
                        className="px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>حذف السؤال</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-rose-950/80 p-1.5 rounded-xl border border-rose-600">
                        <span className="text-[11px] text-rose-200 font-bold px-1">
                          تأكيد الحذف؟
                        </span>
                        <button
                          type="button"
                          onClick={handleDeleteQuestion}
                          className="px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-lg text-xs transition cursor-pointer"
                        >
                          نعم، احذف
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowConfirmDelete(false)}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition cursor-pointer"
                        >
                          تراجع
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="py-2.5 px-4 sm:px-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div>
            {!showConfirmReset ? (
              <button
                type="button"
                onClick={() => setShowConfirmReset(true)}
                className="text-[11px] text-slate-500 hover:text-amber-400 flex items-center gap-1 transition cursor-pointer"
                title="استعادة بنك الأسئلة الافتراضي لهذه الفئة"
              >
                <RotateCcw className="w-3 h-3" />
                <span>استعادة الأسئلة الأصلية</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-amber-300 font-bold">
                  هل تريد مسح التعديلات واستعادة الأسئلة الأصلية لهذه الفئة؟
                </span>
                <button
                  type="button"
                  onClick={handleResetToDefaults}
                  className="px-2 py-0.5 bg-amber-500 text-slate-950 text-[11px] font-black rounded-lg transition cursor-pointer"
                >
                  تأكيد
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmReset(false)}
                  className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[11px] rounded-lg transition cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>

      {/* Export TypeScript Code Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    تصدير الكود البرمجي لفئة: {category.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    كود TypeScript جاهز بالكامل يحتوي على جميع الأسئلة والصور المحفوظة
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              <div className="relative">
                <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-[11px] sm:text-xs font-mono text-emerald-300 overflow-x-auto max-h-[50vh] leading-relaxed select-all">
                  {generateCategoryTypeScriptCode(category.id, category.name)}
                </pre>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                يمكنك نسخ الكود ووضعه في ملفات المشروع البرمجية لتثبيت الصور والأسئلة دائماً.
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleDownloadCodeFile}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border border-slate-700"
                >
                  <Download className="w-4 h-4" />
                  <span>تحميل كملف .ts</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black flex items-center gap-1.5 transition cursor-pointer shadow-lg"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-950" />
                      <span>تم نسخ الكود! ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>نسخ الكود بالكامل</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
