import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Search,
  Plus,
  Car,
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
  ArrowRight
} from 'lucide-react';
import {
  UserCarQuestionInput,
  getAllCarRawQuestions,
  updateCarQuestion,
  deleteCarQuestion,
  resetCarQuestionsToDefaults
} from '../data/carsQuestions';
import { sound } from '../utils/sound';

interface ViewAllCarQuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAddModal: () => void;
}

export const ViewAllCarQuestionsModal: React.FC<ViewAllCarQuestionsModalProps> = ({
  isOpen,
  onClose,
  onOpenAddModal,
}) => {
  const [questions, setQuestions] = useState<UserCarQuestionInput[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPointFilter, setSelectedPointFilter] = useState<number | 'all'>('all');
  
  // Selected question for viewing & editing (null = shows list grid view first)
  const [selectedQuestion, setSelectedQuestion] = useState<UserCarQuestionInput | null>(null);
  
  // Edit form state
  const [editQuestionText, setEditQuestionText] = useState('');
  const [editAnswerText, setEditAnswerText] = useState('');
  const [editPoints, setEditPoints] = useState<number>(200);
  const [editQuestionImage, setEditQuestionImage] = useState('');
  const [editAnswerImage, setEditAnswerImage] = useState('');
  
  const [questionImgType, setQuestionImgType] = useState<'url' | 'file'>('url');
  const [answerImgType, setAnswerImgType] = useState<'url' | 'file'>('url');
  
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const qFileInputRef = useRef<HTMLInputElement>(null);
  const aFileInputRef = useRef<HTMLInputElement>(null);

  // Load questions
  const loadQuestions = () => {
    const list = getAllCarRawQuestions();
    setQuestions(list);
    return list;
  };

  useEffect(() => {
    if (isOpen) {
      loadQuestions();
      // Start in list view first as requested
      setSelectedQuestion(null);
      setSaveSuccessMsg('');
      setErrorMsg('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => {
      const updated = getAllCarRawQuestions();
      setQuestions(updated);
      if (selectedQuestion) {
        const found = updated.find((q) => q.id === selectedQuestion.id);
        if (found) {
          setSelectedQuestion(found);
        }
      }
    };
    window.addEventListener('diwaniya_car_questions_updated', handleUpdate);
    return () => {
      window.removeEventListener('diwaniya_car_questions_updated', handleUpdate);
    };
  }, [selectedQuestion]);

  if (!isOpen) return null;

  const openEditQuestion = (q: UserCarQuestionInput) => {
    sound.playClick();
    setSelectedQuestion(q);
    setEditQuestionText(q.question || '');
    setEditAnswerText(q.answer || '');
    setEditPoints(q.points || 200);
    setEditQuestionImage(q.imageUrl || '');
    setEditAnswerImage(q.answerImageUrl || '');
    setSaveSuccessMsg('');
    setErrorMsg('');
    setShowConfirmDelete(false);
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImageState: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 3 * 1024 * 1024) {
      setErrorMsg('حجم الصورة كبير جداً، يرجى اختيار صورة أقل من 3 ميغابايت');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageState(reader.result);
        setErrorMsg('');
      }
    };
    reader.onerror = () => {
      setErrorMsg('تعذر قراءة ملف الصورة');
    };
    reader.readAsDataURL(file);
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuestion) return;

    const trimmedQ = editQuestionText.trim();
    const trimmedA = editAnswerText.trim();

    if (!trimmedQ) {
      setErrorMsg('يرجى إدخال نص السؤال');
      return;
    }
    if (!trimmedA) {
      setErrorMsg('يرجى إدخال نص الإجابة');
      return;
    }

    try {
      updateCarQuestion(selectedQuestion.id, {
        question: trimmedQ,
        answer: trimmedA,
        points: editPoints,
        imageUrl: editQuestionImage.trim() || '/cars_category_thumb.jpg',
        answerImageUrl: editAnswerImage.trim() || undefined,
      });

      sound.playCorrect();
      setSaveSuccessMsg('تم حفظ التعديلات بنجاح! ✓');
      setErrorMsg('');

      // Refresh list
      loadQuestions();

      setTimeout(() => {
        setSaveSuccessMsg('');
      }, 2500);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('حدث خطأ أثناء حفظ التعديل');
    }
  };

  const handleDelete = () => {
    if (!selectedQuestion) return;
    deleteCarQuestion(selectedQuestion.id);
    sound.playClick();
    setShowConfirmDelete(false);

    loadQuestions();
    // Return to list view
    setSelectedQuestion(null);
  };

  // Filtered questions
  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPoints =
      selectedPointFilter === 'all' || q.points === selectedPointFilter;
    return matchesSearch && matchesPoints;
  });

  const currentIndex = selectedQuestion
    ? filteredQuestions.findIndex((q) => q.id === selectedQuestion.id)
    : -1;

  const goToNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      openEditQuestion(filteredQuestions[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      openEditQuestion(filteredQuestions[currentIndex - 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-6xl h-[94vh] bg-slate-900 border-2 border-amber-500/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        dir="rtl"
      >
        {/* Top Header */}
        <div className="py-3 px-4 sm:py-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20">
              <Car className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base sm:text-xl">
                  جميع أسئلة فئة السيارات 🚗
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-black">
                  {questions.length} سؤال
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                استعرض كافة الأسئلة والصور والإجابات مع إمكانية تعديل أي سؤال وحفظه فوراً
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenAddModal();
              }}
              className="py-1.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-1.5 transition shadow-md cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>إضافة سؤال جديد</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Search & Points Filters */}
        <div className="p-3 sm:px-6 sm:py-3 bg-slate-950/80 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
            <input
              key="car-questions-search-input"
              type="text"
              value={searchQuery || ''}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الأسئلة أو الإجابات أو القطع..."
              className="w-full pr-9 pl-3 py-1.5 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-2 text-slate-500 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Points Filter Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
            <span className="text-[11px] font-bold text-slate-400 ml-1 hidden md:inline">النقاط:</span>
            <button
              type="button"
              onClick={() => setSelectedPointFilter('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition cursor-pointer ${
                selectedPointFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
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
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-extrabold transition cursor-pointer ${
                    selectedPointFilter === pt
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                  }`}
                >
                  {pt} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Body: Two-step Flow (List View First -> Detail/Edit View upon Click) */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-900/90">
          {!selectedQuestion ? (
            /* 1. Questions Grid / Overview View (قائمة الأسئلة تظهر أولاً) */
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-4 px-1">
                <span className="text-sm font-extrabold text-slate-200">
                  قائمة الأسئلة ({filteredQuestions.length})
                </span>
                <span className="text-amber-400">
                  👇 اضغط على أي سؤال لعرض تفاصيله وتعديله
                </span>
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="text-center py-16 px-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-slate-400 space-y-3">
                  <AlertCircle className="w-10 h-10 mx-auto text-amber-400/80" />
                  <p className="text-base font-bold text-slate-200">لا توجد أسئلة تطابق بحثك</p>
                  <p className="text-xs text-slate-400">جرب البحث بكلمة أخرى أو أضف سؤالاً جديداً</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedPointFilter('all');
                    }}
                    className="py-1.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition cursor-pointer"
                  >
                    إعادة تعيين الفلاتر
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {filteredQuestions.map((q, idx) => {
                    return (
                      <div
                        key={q.id}
                        onClick={() => openEditQuestion(q)}
                        className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between gap-3 group shadow-md hover:shadow-amber-500/10 hover:scale-[1.01] active:scale-[0.99]"
                      >
                        {/* Top: Badges */}
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs font-bold">
                            #{idx + 1}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {q.answerImageUrl && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                                صورة إجابة 🖼️
                              </span>
                            )}
                            <span className="px-2 py-0.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-black">
                              {q.points} نقطة
                            </span>
                          </div>
                        </div>

                        {/* Middle: Image + Question Content */}
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0 relative flex items-center justify-center">
                            {q.imageUrl ? (
                              <img
                                src={q.imageUrl}
                                alt="صورة السؤال"
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                            ) : (
                              <ImageIcon className="w-7 h-7 text-slate-600" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs sm:text-sm font-extrabold text-white line-clamp-1 mb-1">
                              {q.question}
                            </h5>
                            <div className="text-xs font-bold text-emerald-400 line-clamp-1 flex items-center gap-1">
                              <span className="text-slate-400 font-normal">الجواب:</span>
                              <span className="truncate">{q.answer}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom: Action Trigger */}
                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-300 font-bold transition">
                          <span>اضغط للتعديل والمراجعة</span>
                          <span className="p-1 rounded-lg bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                            <Edit3 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* 2. Question Detail & Edit View (تفاصيل وتعديل السؤال عند اختياره) */
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar max-w-4xl mx-auto w-full">
              <form onSubmit={handleSaveChanges} className="space-y-4">
                {/* Header of Detail View with Back Button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setSelectedQuestion(null);
                      }}
                      className="py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition cursor-pointer"
                      title="الرجوع إلى قائمة الأسئلة"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>الرجوع لقائمة الأسئلة 🔙</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs">
                        #{currentIndex + 1}
                      </span>
                      <div>
                        <h4 className="font-extrabold text-white text-sm sm:text-base">
                          تفاصيل وتعديل السؤال
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Prev / Next Nav */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={goToPrev}
                      disabled={currentIndex <= 0}
                      className="py-1 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 transition cursor-pointer text-xs font-bold flex items-center gap-1"
                      title="السؤال السابق"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>السابق</span>
                    </button>
                    <span className="text-xs font-mono text-slate-400 px-1.5">
                      {currentIndex + 1} / {filteredQuestions.length}
                    </span>
                    <button
                      type="button"
                      onClick={goToNext}
                      disabled={currentIndex >= filteredQuestions.length - 1}
                      className="py-1 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 transition cursor-pointer text-xs font-bold flex items-center gap-1"
                      title="السؤال التالي"
                    >
                      <span>التالي</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                {saveSuccessMsg && (
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                    <span>{saveSuccessMsg}</span>
                  </div>
                )}

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* 1. نص السؤال */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-extrabold text-slate-300">
                    نص السؤال <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={editQuestionText || ''}
                    onChange={(e) => setEditQuestionText(e.target.value)}
                    placeholder="مثال: شنو اسم هذي القطعة؟"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                {/* 2. صورة السؤال */}
                <div className="space-y-2 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-extrabold text-amber-300 flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-amber-400" />
                      <span>صورة السؤال (قطعة السيارة)</span>
                    </label>

                    {/* Source Tab Toggle */}
                    <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-bold">
                      <button
                        type="button"
                        onClick={() => setQuestionImgType('url')}
                        className={`px-2.5 py-1 rounded-md transition ${
                          questionImgType === 'url'
                            ? 'bg-amber-500 text-slate-950 font-black'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        رابط URL
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuestionImgType('file')}
                        className={`px-2.5 py-1 rounded-md transition ${
                          questionImgType === 'file'
                            ? 'bg-amber-500 text-slate-950 font-black'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        رفع من الجهاز
                      </button>
                    </div>
                  </div>

                  {/* Hidden file input */}
                  <input
                    ref={qFileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, setEditQuestionImage)}
                    className="hidden"
                  />

                  {questionImgType === 'url' ? (
                    <div className="relative">
                      <input
                        key="view-car-edit-question-image-url"
                        type="text"
                        value={editQuestionImage || ''}
                        onChange={(e) => setEditQuestionImage(e.target.value)}
                        placeholder="https://example.com/car-part.jpg"
                        className="w-full pr-8 pl-8 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                      />
                      <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3" />
                      {editQuestionImage && (
                        <button
                          type="button"
                          onClick={() => setEditQuestionImage('')}
                          className="absolute left-2.5 top-2.5 text-slate-400 hover:text-rose-400 text-xs p-0.5 rounded transition"
                          title="مسح رابط الصورة"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => qFileInputRef.current?.click()}
                        className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-dashed border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
                      >
                        <Upload className="w-4 h-4" />
                        <span>اختر صورة بديلة من جهازك</span>
                      </button>
                    </div>
                  )}

                  {/* Image Preview Box & Delete Button */}
                  <div className="mt-2 flex items-center gap-3 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-slate-950 border border-slate-700 shrink-0 flex items-center justify-center relative">
                      {editQuestionImage ? (
                        <img
                          src={editQuestionImage}
                          alt="معاينة صورة السؤال"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <ImageIcon className="w-8 h-8 text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-xs">
                      <p className="font-bold text-white mb-1 truncate">
                        {editQuestionImage ? 'صورة السؤال الحالية' : 'لا توجد صورة للسؤال'}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate mb-1.5">
                        {editQuestionImage || 'تم مسح الصورة (سؤال نصي فقط)'}
                      </p>

                      {editQuestionImage ? (
                        <button
                          type="button"
                          onClick={() => {
                            setEditQuestionImage('');
                            sound.playClick();
                          }}
                          className="py-1 px-2.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 hover:border-rose-400 text-rose-300 hover:text-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer w-fit"
                          title="مسح وحذف صورة السؤال"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>مسح صورة السؤال 🗑️</span>
                        </button>
                      ) : (
                        <span className="text-[11px] text-amber-400/90 font-semibold block">
                          يمكنك اختيار صورة جديدة من الأعلى أو حفظ السؤال بدون صورة
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. الإجابة الصحيحة */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-extrabold text-slate-300">
                    نص الإجابة الصحيحة <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={editAnswerText || ''}
                    onChange={(e) => setEditAnswerText(e.target.value)}
                    placeholder="مثال: فلتر الهواء / Air Filter"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-emerald-400 font-bold placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>

                {/* 4. صورة الإجابة (اختياري) */}
                <div className="space-y-2 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-extrabold text-slate-300 flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-slate-400" />
                      <span>صورة الإجابة (اختياري تظهر عند الكشف)</span>
                    </label>

                    <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-bold">
                      <button
                        type="button"
                        onClick={() => setAnswerImgType('url')}
                        className={`px-2.5 py-1 rounded-md transition ${
                          answerImgType === 'url'
                            ? 'bg-amber-500 text-slate-950 font-black'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        رابط URL
                      </button>
                      <button
                        type="button"
                        onClick={() => setAnswerImgType('file')}
                        className={`px-2.5 py-1 rounded-md transition ${
                          answerImgType === 'file'
                            ? 'bg-amber-500 text-slate-950 font-black'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        رفع من الجهاز
                      </button>
                    </div>
                  </div>

                  <input
                    ref={aFileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, setEditAnswerImage)}
                    className="hidden"
                  />

                  {answerImgType === 'url' ? (
                    <div className="relative">
                      <input
                        key="view-car-edit-answer-image-url"
                        type="text"
                        value={editAnswerImage || ''}
                        onChange={(e) => setEditAnswerImage(e.target.value)}
                        placeholder="https://example.com/answer.jpg (اختياري)"
                        className="w-full pr-8 pl-8 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                      />
                      <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3" />
                      {editAnswerImage && (
                        <button
                          type="button"
                          onClick={() => setEditAnswerImage('')}
                          className="absolute left-2.5 top-2.5 text-slate-400 hover:text-rose-400 text-xs p-0.5 rounded transition"
                          title="مسح رابط الصورة"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => aFileInputRef.current?.click()}
                      className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-dashed border-slate-600 text-slate-300 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      <span>اختر صورة إجابة من جهازك</span>
                    </button>
                  )}

                  {/* Answer Image Preview & Delete Button */}
                  <div className="mt-2 flex items-center gap-3 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-slate-950 border border-slate-700 shrink-0 flex items-center justify-center">
                      {editAnswerImage ? (
                        <img
                          src={editAnswerImage}
                          alt="معاينة صورة الإجابة"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <ImageIcon className="w-8 h-8 text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-xs">
                      <p className="font-bold text-white mb-1 truncate">
                        {editAnswerImage ? 'صورة الإجابة الحالية' : 'لا توجد صورة للإجابة'}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate mb-1.5">
                        {editAnswerImage || 'اختياري: تظهر عند كشف الإجابة'}
                      </p>

                      {editAnswerImage ? (
                        <button
                          type="button"
                          onClick={() => {
                            setEditAnswerImage('');
                            sound.playClick();
                          }}
                          className="py-1 px-2.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 hover:border-rose-400 text-rose-300 hover:text-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer w-fit"
                          title="مسح وحذف صورة الإجابة"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>مسح صورة الإجابة 🗑️</span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* 5. قيمة النقاط */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-extrabold text-slate-300">
                    قيمة النقاط (حسب لوحة اللعب)
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[200, 400, 600].map((pt) => (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => setEditPoints(pt)}
                        className={`py-2.5 rounded-xl text-xs sm:text-sm font-black transition border cursor-pointer flex items-center justify-center gap-1 ${
                          editPoints === pt
                            ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-400/40'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className="font-mono text-sm sm:text-base">{pt}</span>
                        <span className="text-[10px] sm:text-xs">نقطة</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Save & Delete */}
                <div className="pt-3 border-t border-slate-800 flex items-center gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-l from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer active:scale-98"
                  >
                    <Save className="w-4 h-4 stroke-[2.5]" />
                    <span>حفظ التعديلات على السؤال</span>
                  </button>

                  {!showConfirmDelete ? (
                    <button
                      type="button"
                      onClick={() => setShowConfirmDelete(true)}
                      className="py-3 px-3.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-400 font-extrabold text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer"
                      title="حذف هذا السؤال"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">حذف</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 bg-rose-950/80 border border-rose-600/60 p-1 rounded-xl animate-fadeIn">
                      <span className="text-[11px] font-bold text-rose-300 px-1.5">متأكد؟</span>
                      <button
                        type="button"
                        onClick={handleDelete}
                        className="py-1 px-2 rounded-lg bg-rose-600 text-white font-black text-xs hover:bg-rose-500 cursor-pointer"
                      >
                        نعم احذف
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowConfirmDelete(false)}
                        className="py-1 px-2 rounded-lg bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
                      >
                        إلغاء
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="py-2.5 px-4 sm:px-6 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>كافة التعديلات والإضافات تُحفظ في ذاكرة المتصفح تلقائياً</span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (window.confirm('هل تريد بالتأكيد إعادة ضبط أسئلة السيارات إلى القائمة الافتراضية؟')) {
                resetCarQuestionsToDefaults();
                loadQuestions();
                setSelectedQuestion(null);
                sound.playClick();
              }
            }}
            className="text-slate-500 hover:text-amber-400 flex items-center gap-1 transition cursor-pointer text-[10px]"
          >
            <RotateCcw className="w-3 h-3" />
            <span>إعادة الضبط للافتراضي</span>
          </button>
        </div>
      </div>
    </div>
  );
};
