import React, { useState, useEffect } from 'react';
import { Category, Question, Team } from '../types';
import { Clock, CheckCircle2, X, Eye, ArrowLeft, Zap, VolumeX, Repeat, PhoneCall, ShieldAlert, AlertTriangle, Flag, Image as ImageIcon, Smartphone, QrCode, RotateCcw } from 'lucide-react';
import { sound } from '../utils/sound';
import { PhoneCallModal } from './PhoneCallModal';
import { ReportQuestionModal } from './ReportQuestionModal';
import { markQuestionAsUsed } from '../utils/questionBank';
import { cleanQuestionText } from '../data/hundredQuestionsBank';
import { auth } from '../lib/firebase';
import { CarPartSvg } from './CarPartSvg';
import { OldFlagSvg } from './OldFlagSvg';
import { QrCodeDisplay } from './QrCodeDisplay';

interface QuestionModalProps {
  category: Category;
  question: Question;
  team1: Team;
  team2: Team;
  activeTurnTeamId: 'team1' | 'team2';
  timerDuration: number;
  onAwardPoints: (teamId: 'team1' | 'team2' | null, points: number, isSteal?: boolean) => void;
  onUsePowerup: (teamId: 'team1' | 'team2', powerupId: string) => void;
  onClose: () => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  category,
  question,
  team1,
  team2,
  activeTurnTeamId,
  timerDuration,
  onAwardPoints,
  onUsePowerup,
  onClose,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showScoringStep, setShowScoringStep] = useState(false);
  const [stopwatchSeconds, setStopwatchSeconds] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

  // Power-ups state for current question
  const [isDoubleActive, setIsDoubleActive] = useState<boolean>(false);
  const [isSilenceActive, setIsSilenceActive] = useState<boolean>(false);
  const [isStealActive, setIsStealActive] = useState<boolean>(false);
  const [showPhoneCallModal, setShowPhoneCallModal] = useState<boolean>(false);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);

  const activeTeam = activeTurnTeamId === 'team1' ? team1 : team2;
  const opponentTeam = activeTurnTeamId === 'team1' ? team2 : team1;

  const usedPowerups = activeTeam.usedPowerups || [];

  useEffect(() => {
    setShowAnswer(false);
    setShowScoringStep(false);
    setStopwatchSeconds(0);
    setIsTimerActive(true);
    setIsDoubleActive(false);
    setIsSilenceActive(false);
    setIsStealActive(false);
  }, [question?.id]);

  // Mark question as used immediately upon being displayed
  useEffect(() => {
    if (question?.id) {
      markQuestionAsUsed(question.id, auth.currentUser?.uid);
    }
  }, [question?.id]);

  // Stopwatch Timer (Count-up from 0)
  useEffect(() => {
    if (!isTimerActive) return;

    const timer = setInterval(() => {
      setStopwatchSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerActive]);

  const handleRevealAnswer = () => {
    sound.playClick();
    setShowAnswer(true);
    setIsTimerActive(false);
  };

  const handleNextToScoring = () => {
    sound.playClick();
    setShowScoringStep(true);
  };

  const team1Points = activeTurnTeamId === 'team1' ? question.points * (isDoubleActive ? 2 : 1) : question.points;
  const team1IsSteal = activeTurnTeamId === 'team1' ? isStealActive : false;

  const team2Points = activeTurnTeamId === 'team2' ? question.points * (isDoubleActive ? 2 : 1) : question.points;
  const team2IsSteal = activeTurnTeamId === 'team2' ? isStealActive : false;

  const activeTeamPoints = activeTurnTeamId === 'team1' ? team1Points : team2Points;

  // Robust image resolver ensuring an image is always displayed with accurate matching
  const resolveFallbackImage = (): string | null => {
    const catId = (category?.id || '').toLowerCase();
    const catName = (category?.name || '').toLowerCase();
    const qId = (question.id || '').toLowerCase();
    const qCategory = (question.category || '').toLowerCase();
    const qText = (question.question || question.questionText || '').toLowerCase();

    // 1. Specific Series & Anime Checks First (Highest Priority)
    if (catId.includes('onepiece') || catName.includes('one piece') || catName.includes('ون بيس') || catName.includes('ونبيس') || qId.includes('onepiece') || qCategory.includes('ون بيس') || qText.includes('ون بيس') || qText.includes('قبعة القش') || qText.includes('لوفي')) {
      return '/one_piece/onepiece_1.jpg';
    }
    if (catId.includes('pokemon') || catName.includes('pokémon') || catName.includes('pokemon') || catName.includes('بوكيمون') || qId.includes('pokemon') || qCategory.includes('بوكيمون') || qText.includes('بوكيمون') || qText.includes('بيكاتشو')) {
      return '/pokemon/pokemon_1.jpg';
    }
    if (catId.includes('characters') || catName.includes('شخصيات أنمي') || catName.includes('شخصيات انمي') || (catName.includes('شخصيات') && !catName.includes('تاريخ'))) {
      return '/anime/anime_2.jpg';
    }
    if (catId.includes('anime') || catName.includes('أنمي') || catName.includes('انمي') || qId.includes('anime') || qCategory.includes('أنمي') || qCategory.includes('انمي') || qText.includes('أنمي') || qText.includes('انمي') || qText.includes('ديث نوت') || qText.includes('death note') || qText.includes('ناروتو') || qText.includes('دراغون بول') || qText.includes('attack on titan') || qText.includes('الشينيغامي') || qText.includes('الشينغامي')) {
      return '/anime/anime_1.jpg';
    }

    // 2. Turkish Drama Series
    if (catId.includes('esref') || catName.includes('أشرف') || catName.includes('اشرف') || catName.includes('ruya') || catName.includes('rüya') || qId.includes('esref') || qText.includes('أشرف') || qText.includes('اشرف') || qText.includes('رويا') || qText.includes('رؤيا')) {
      return '/esref_ruya/esref_1.jpg';
    }
    if (catId.includes('cukur') || catName.includes('الحفرة') || qId.includes('cukur') || qCategory.includes('الحفرة') || qText.includes('الحفرة') || qText.includes('كوتشوفالي') || qText.includes('ياماش')) {
      return '/cukur/cukur_1.jpg';
    }
    if (catId.includes('osman') || catName.includes('عثمان') || qId.includes('osman') || qCategory.includes('عثمان') || qText.includes('عثمان') || qText.includes('بالا خاتون') || qText.includes('مالخون')) {
      return '/kurulus_osman/osman_1.jpg';
    }
    if (catId.includes('ertugrul') || catName.includes('أرطغرل') || catName.includes('ارطغرل') || qId.includes('ertugrul') || qCategory.includes('أرطغرل') || qText.includes('أرطغرل') || qText.includes('ارطغرل') || qText.includes('حليمة خاتون') || qText.includes('تورغوت')) {
      return '/ertugrul/ertugrul_1.jpg';
    }
    if (catId.includes('turkish') || catName.includes('تركي') || catName.includes('تركية') || qId.includes('tr_') || qText.includes('تركي') || qCategory.includes('تركي')) {
      return '/turkish_drama/turkish_1.jpg';
    }

    // 3. Western Series & Pop Culture
    if (catId.includes('bb') || catName.includes('breaking') || catName.includes('بريكنج') || qId.includes('bb') || qCategory.includes('breaking') || qText.includes('والتر وايت') || qText.includes('هايزنبيرغ') || qText.includes('بريكنج باد')) {
      return '/breaking_bad/bb_1.jpg';
    }
    if (catId.includes('peaky') || catName.includes('بيكي') || qId.includes('peaky') || qCategory.includes('peaky') || qText.includes('تومي شيلبي') || qText.includes('بيكي بلايندرز')) {
      return '/peaky_blinders/peaky_1.jpg';
    }
    if (catId.includes('twd') || catName.includes('walking') || catName.includes('الموتى') || qId.includes('twd') || qCategory.includes('walking') || qText.includes('ريك غرايمز') || qText.includes('الموتى السائرون')) {
      return '/the_walking_dead/twd_1.jpg';
    }
    if (catId.includes('got') || catName.includes('صراع العروش') || catName.includes('game of thrones') || qId.includes('got') || qCategory.includes('thrones') || qText.includes('جون سنو') || qText.includes('دنيرس') || qText.includes('عرش الحديد')) {
      return '/game_of_thrones/got_1.jpg';
    }
    if (catId.includes('marvel') || catName.includes('مارفل') || qId.includes('marvel') || qCategory.includes('مارفل') || qText.includes('المنتقمون') || qText.includes('آيرون مان') || qText.includes('ثانوس')) {
      return '/marvel/marvel_1.jpg';
    }

    // 4. Check explicit question image if present
    if (question.imageUrl && !question.imageUrl.includes('unsplash.com')) return question.imageUrl;
    if ((question as any).image && !(question as any).image.includes('unsplash.com')) return (question as any).image;
    if (question.answerImageUrl && !question.answerImageUrl.includes('unsplash.com')) return question.answerImageUrl;

    // 5. General Visual Categories
    if (catId.includes('cars') || catName.includes('سيارات') || qId.includes('car')) return '/cars_category_thumb.jpg';
    if (catId.includes('sports') || catName.includes('رياضة') || catName.includes('كروية')) return '/sports_thumb.jpg';
    if (catId.includes('geography') || catName.includes('جغرافيا')) return '/geography_thumb.jpg';
    if (catId.includes('product') || catName.includes('منتجات')) return '/products_thumb.jpg';
    if (category?.imageUrl && !category.imageUrl.includes('unsplash.com')) return category.imageUrl;
    if (question.imageUrl) return question.imageUrl;

    return null;
  };

  const effectiveImageUrl = resolveFallbackImage();

  // Question Image: explicit imageUrl or fallback
  const questionImageUrl = 
    question.imageUrl && question.imageUrl.trim() !== '' && !question.hideImageUntilAnswer
      ? question.imageUrl.trim()
      : effectiveImageUrl;

  // Answer image resolution: explicit answerImageUrl or question image fallback
  const answerImageUrl = 
    question.answerImageUrl && question.answerImageUrl.trim() !== ''
      ? question.answerImageUrl.trim()
      : question.imageUrl && question.imageUrl.trim() !== ''
      ? question.imageUrl.trim()
      : effectiveImageUrl;

  // Visual check: true if image exists or category is visual
  const isVisual = Boolean(
    effectiveImageUrl ||
    questionImageUrl ||
    question.id?.startsWith('car_') ||
    category?.name?.includes('سيارات') ||
    category?.id === 'gen-cars' ||
    question.id?.startsWith('old_flags_') ||
    category?.name?.includes('أعلام') ||
    category?.id === 'hist-flags' ||
    category?.id === 'old_flags'
  );

  const isWalaKelma =
    category.id?.startsWith('wk-') ||
    category.name?.includes('ولا كلمة') ||
    question.category?.includes('ولا كلمة') ||
    question.question?.includes('امسح الباركود');

  const isWalaKelmaWrestling =
    category.id === 'wk-wrestling' ||
    category.name?.includes('مصارعة') ||
    question.category?.includes('مصارعة');

  const isWalaKelmaAnime =
    category.id === 'wk-anime' ||
    category.name?.includes('أنمي') ||
    category.name?.includes('انمي') ||
    question.category?.includes('أنمي');

  const isWalaKelmaMedia =
    category.id === 'wk-classic' ||
    category.name?.includes('أفلام') ||
    category.name?.includes('مسلسلات') ||
    category.name?.includes('أغاني') ||
    category.name?.includes('مسرحيات') ||
    question.category?.includes('أفلام') ||
    question.category?.includes('مسلسلات');

  const isWalaKelmaForeignArt =
    category.id === 'wk-foreign-art' ||
    category.name?.includes('فن أجنبي') ||
    category.name?.includes('أجنبي') ||
    question.category?.includes('فن أجنبي') ||
    question.category?.includes('أجنبي');

  const isWalaKelmaProverbs =
    category.id === 'wk-proverbs' ||
    category.name?.includes('أمثال') ||
    category.name?.includes('امثال') ||
    question.category?.includes('أمثال') ||
    question.category?.includes('امثال');

  const isWalaKelmaFootball =
    category.id === 'wk-sports' ||
    category.name?.includes('كروية') ||
    question.category?.includes('كروية');

  const handleAward = (teamId: 'team1' | 'team2' | null) => {
    if (teamId === 'team1') {
      sound.playCorrect();
      onAwardPoints('team1', team1Points, team1IsSteal);
    } else if (teamId === 'team2') {
      sound.playCorrect();
      onAwardPoints('team2', team2Points, team2IsSteal);
    } else {
      sound.playWrong();
      onAwardPoints(null, 0, false);
    }
  };

  const handleTogglePowerup = (powerupId: string) => {
    if (usedPowerups.includes(powerupId)) return;

    sound.playClick();

    if (powerupId === 'double') {
      setIsDoubleActive(true);
      onUsePowerup(activeTurnTeamId, 'double');
    } else if (powerupId === 'silence') {
      setIsSilenceActive(true);
      onUsePowerup(activeTurnTeamId, 'silence');
    } else if (powerupId === 'steal') {
      setIsStealActive(true);
      onUsePowerup(activeTurnTeamId, 'steal');
    } else if (powerupId === 'call') {
      setShowPhoneCallModal(true);
      onUsePowerup(activeTurnTeamId, 'call');
    }
  };

  const formatStopwatch = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins > 0) {
      return `${mins}:${secs < 10 ? '0' : ''}${secs} دقيقة`;
    }
    return `${secs} ثانية`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn font-['Cairo',sans-serif]">
      {showPhoneCallModal && (
        <PhoneCallModal
          teamName={activeTeam.name}
          onClose={() => setShowPhoneCallModal(false)}
        />
      )}

      {showReportModal && (
        <ReportQuestionModal
          question={question}
          categoryName={category.name}
          onClose={() => setShowReportModal(false)}
        />
      )}

      <div
        className={`w-full max-w-2xl bg-slate-900 border-2 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh] transition-all duration-300 ${
          activeTurnTeamId === 'team1'
            ? 'border-red-500/90 ring-4 ring-red-500/30 shadow-red-900/30'
            : 'border-blue-500/90 ring-4 ring-blue-500/30 shadow-blue-900/30'
        }`}
      >
        {/* Header Bar */}
        <div className="py-2.5 px-3.5 sm:py-3.5 sm:px-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span
              className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-black text-xs sm:text-sm tracking-wide shadow-md transition-all shrink-0 ${
                isDoubleActive
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 ring-2 ring-amber-300 animate-pulse'
                  : 'bg-amber-400 text-slate-950'
              }`}
            >
              {activeTeamPoints} نقطة {isDoubleActive && '🔥'}
            </span>
            <div className="min-w-0">
              <h3 className="font-extrabold text-white text-xs sm:text-base leading-tight truncate">{category.name}</h3>
            </div>
          </div>

          {/* Stopwatch Timer, Reset Time, Report & Close Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-black text-xs sm:text-sm border font-mono bg-slate-800 text-amber-300 border-slate-700 shadow-inner">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{formatStopwatch(stopwatchSeconds)}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  setStopwatchSeconds(0);
                }}
                title="إعادة ضبط الوقت إلى الصفر"
                className="mr-1 p-0.5 rounded-full hover:bg-slate-700 text-amber-400/80 hover:text-amber-300 transition cursor-pointer flex items-center justify-center"
              >
                <RotateCcw className="w-3 h-3 hover:rotate-[-45deg] transition-transform" />
              </button>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setShowReportModal(true);
              }}
              title="إبلاغ عن خطأ في السؤال"
              className="p-1 sm:p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500/20 text-slate-400 hover:text-amber-400 border border-slate-700/60 transition cursor-pointer flex items-center justify-center gap-1 text-xs"
            >
              <Flag className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1 sm:p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Body */}
        <div className="p-3 sm:p-4 overflow-y-auto space-y-2.5 sm:space-y-3.5 flex-1 custom-scrollbar">
          {/* Active Powerups Banners */}
          {isDoubleActive && (
            <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-[11px] sm:text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400" />
              <span>
                تم تفعيل خاصية <strong>الدبل</strong> لـ (<strong>{activeTeam.name}</strong>)! قيمة السؤال أصبحت ({activeTeamPoints} نقطة)!
              </span>
            </div>
          )}

          {isSilenceActive && (
            <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-[11px] sm:text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <VolumeX className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>
                تم تفعيل خاصية <strong>اسكت</strong>! الفريق الخصم (<strong>{opponentTeam.name}</strong>) ممنوع من الكلام نهائياً! 🔇
              </span>
            </div>
          )}

          {isStealActive && (
            <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-purple-500/10 border border-purple-500/40 text-purple-300 text-[11px] sm:text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <Repeat className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>
                تم تفعيل خاصية <strong>الحرامي</strong> لـ (<strong>{activeTeam.name}</strong>)! سرقة ({activeTeamPoints} نقطة) من الخصم! 🏴‍☠️
              </span>
            </div>
          )}

          {/* Question Box */}
          <div
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 border-2 text-center space-y-2 sm:space-y-3 shadow-inner transition-all ${
              activeTurnTeamId === 'team1'
                ? 'border-red-500/50 shadow-red-950/40 ring-1 ring-red-500/20'
                : 'border-blue-500/50 shadow-blue-950/40 ring-1 ring-blue-500/20'
            }`}
          >
            {isWalaKelma ? (
              <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-2.5 py-0.5 animate-fadeIn">
                {/* 1. Clear Header Prompt Text */}
                <div className="flex items-center justify-center gap-1.5">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-bounce" />
                  <h2 className="text-base sm:text-lg font-black text-amber-300 tracking-wide drop-shadow-md">
                    امسح الباركود للحصول على السؤال
                  </h2>
                </div>

                {/* 2. QR Code generated programmatically with Plain Text */}
                <div className="my-0.5">
                  <QrCodeDisplay
                    value={
                      question.correctAnswer ||
                      (isWalaKelmaWrestling
                        ? 'أندرتايكر'
                        : isWalaKelmaAnime
                        ? 'ون بيس'
                        : isWalaKelmaForeignArt
                        ? 'فيلم تيتانيك'
                        : isWalaKelmaMedia
                        ? 'مسرحية مدرسة المشاغبين'
                        : isWalaKelmaProverbs
                        ? 'حبل الكذب قصير'
                        : isWalaKelmaFootball
                        ? 'ميسي'
                        : 'بيبسي')
                    }
                    size={175}
                    className="mx-auto"
                  />
                </div>

                {/* 3. Small instructions prompt */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/80 text-slate-300 text-[11px] sm:text-xs font-medium shadow-sm">
                  <span>
                    🤫 {isWalaKelmaWrestling
                      ? 'وجّه كاميرا الهاتف نحو الباركود لمعرفة اسم المصارع والبدء بالتمثيل'
                      : isWalaKelmaAnime
                      ? 'وجّه كاميرا الهاتف نحو الباركود لمعرفة اسم المسلسل أو الشخصية والبدء بالتمثيل'
                      : isWalaKelmaForeignArt
                      ? 'وجّه كاميرا الهاتف نحو الباركود لمعرفة اسم العمل أو الشخصية والبدء بالتمثيل'
                      : isWalaKelmaMedia
                      ? 'وجّه كاميرا الهاتف نحو الباركود لمعرفة اسم العمل الفني والبدء بالتمثيل'
                      : isWalaKelmaProverbs
                      ? 'وجّه كاميرا الهاتف نحو الباركود لقراءة المثل والبدء بالتمثيل'
                      : isWalaKelmaFootball
                      ? 'وجّه كاميرا الهاتف نحو الباركود لمعرفة اللاعب أو الحركة الكروية والبدء بالتمثيل'
                      : 'وجّه كاميرا الهاتف نحو الباركود لقراءة الكلمة والبدء بالتمثيل'}
                  </span>
                </div>
              </div>
            ) : (
              <>
                {/* 1. Question Text */}
                <p className="text-base sm:text-xl font-black text-white leading-relaxed">
                  "{cleanQuestionText(question.question || question.questionText || '')}"
                </p>

                {/* 2. Image / Visual Representation UNDER Question Text */}
                {isVisual && (
                  <div className="w-full flex justify-center items-center my-2 max-h-40 sm:max-h-48 overflow-hidden rounded-xl bg-slate-950/90 p-2 border border-slate-700/60 shadow-xl">
                    {questionImageUrl ? (
                      <img
                        src={questionImageUrl}
                        alt="صورة السؤال"
                        className="max-h-36 sm:max-h-44 w-auto max-w-full block mx-auto object-contain my-1 rounded shadow-lg"
                        loading="eager"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.parentElement) target.parentElement.style.display = 'none';
                        }}
                      />
                    ) : question.id?.startsWith('car_') && question.imageUrl !== '' ? (
                      <CarPartSvg id={question.id || 'car_16'} className="max-h-36 sm:max-h-44 w-auto max-w-full object-contain mx-auto rounded drop-shadow-md transition-transform duration-300 hover:scale-105" />
                    ) : question.id?.startsWith('old_flags_') && question.imageUrl !== '' ? (
                      <OldFlagSvg
                        id={question.id}
                        answer={question.correctAnswer}
                        className="max-h-36 sm:max-h-44 w-auto max-w-full block mx-auto object-contain my-1 rounded shadow-lg transition-transform duration-300 hover:scale-105"
                      />
                    ) : null}
                  </div>
                )}
              </>
            )}
          </div>

          {/* POWER-UPS BAR (Under Question Card - Hidden when answer is revealed) */}
          {!showAnswer && (
            <div className="p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {/* Double */}
                <button
                  type="button"
                  disabled={usedPowerups.includes('double') || isDoubleActive}
                  onClick={() => handleTogglePowerup('double')}
                  className={`py-2 px-2 rounded-lg border text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
                    isDoubleActive
                      ? 'bg-amber-500 text-slate-950 border-amber-300 ring-2 ring-amber-400/50 shadow-lg'
                      : usedPowerups.includes('double')
                      ? 'bg-slate-900/50 text-slate-600 border-slate-800/60 cursor-not-allowed line-through'
                      : 'bg-slate-800/90 hover:bg-amber-500/20 text-amber-300 border-amber-500/30 hover:border-amber-400'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 shrink-0 text-amber-400 fill-amber-400" />
                  <span>{isDoubleActive ? 'دبل 🔥' : usedPowerups.includes('double') ? 'مستخْدَم' : 'دبل النقاط'}</span>
                </button>

                {/* Silence */}
                <button
                  type="button"
                  disabled={usedPowerups.includes('silence') || isSilenceActive}
                  onClick={() => handleTogglePowerup('silence')}
                  className={`py-2 px-2 rounded-lg border text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
                    isSilenceActive
                      ? 'bg-rose-500 text-white border-rose-300 ring-2 ring-rose-400/50 shadow-lg'
                      : usedPowerups.includes('silence')
                      ? 'bg-slate-900/50 text-slate-600 border-slate-800/60 cursor-not-allowed line-through'
                      : 'bg-slate-800/90 hover:bg-rose-500/20 text-rose-300 border-rose-500/30 hover:border-rose-400'
                  }`}
                >
                  <VolumeX className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                  <span>{isSilenceActive ? 'اسكت 🔇' : usedPowerups.includes('silence') ? 'مستخْدَم' : 'اسكت الخصم'}</span>
                </button>

                {/* Steal */}
                <button
                  type="button"
                  disabled={usedPowerups.includes('steal') || isStealActive}
                  onClick={() => handleTogglePowerup('steal')}
                  className={`py-2 px-2 rounded-lg border text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
                    isStealActive
                      ? 'bg-purple-500 text-white border-purple-300 ring-2 ring-purple-400/50 shadow-lg'
                      : usedPowerups.includes('steal')
                      ? 'bg-slate-900/50 text-slate-600 border-slate-800/60 cursor-not-allowed line-through'
                      : 'bg-slate-800/90 hover:bg-purple-500/20 text-purple-300 border-purple-500/30 hover:border-purple-400'
                  }`}
                >
                  <Repeat className="w-3.5 h-3.5 shrink-0 text-purple-400" />
                  <span>{isStealActive ? 'الحرامي 🏴‍☠️' : usedPowerups.includes('steal') ? 'مستخْدَم' : 'الحرامي'}</span>
                </button>

                {/* Phone Call */}
                <button
                  type="button"
                  disabled={usedPowerups.includes('call')}
                  onClick={() => handleTogglePowerup('call')}
                  className={`py-2 px-2 rounded-lg border text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
                    usedPowerups.includes('call')
                      ? 'bg-slate-900/50 text-slate-600 border-slate-800/60 cursor-not-allowed line-through'
                      : 'bg-slate-800/90 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:border-emerald-400'
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span>{usedPowerups.includes('call') ? 'مستخْدَم' : 'اتصال (دقيقة)'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Revealed Answer Box */}
          {showAnswer && (
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-emerald-950/90 border-2 border-emerald-500/80 text-white text-center space-y-1.5 sm:space-y-2 animate-fadeIn shadow-2xl">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-black text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />{' '}
                {isWalaKelmaWrestling
                  ? 'المصارع المطلوب تمثيله'
                  : isWalaKelmaAnime
                  ? 'الأنمي / الشخصية المطلوب تمثيلها'
                  : isWalaKelmaForeignArt
                  ? 'العمل الفني / الشخصية المطلوب تمثيلها'
                  : isWalaKelmaMedia
                  ? 'العمل الفني المطلوب تمثيله'
                  : isWalaKelmaProverbs
                  ? 'المثل المطلوب تمثيله'
                  : isWalaKelmaFootball
                  ? 'العنصر الكروي المطلوب تمثيله'
                  : isWalaKelma
                  ? 'الكلمة / المطلوب تمثيله'
                  : 'الإجابة الصحيحة'}
              </div>

              {/* Show Answer Image only if provided */}
              {answerImageUrl && (
                <div className="flex justify-center items-center my-2 max-h-36 sm:max-h-48 overflow-hidden rounded-xl bg-slate-950/90 p-2 border border-emerald-500/50 shadow-xl">
                  <img
                    src={answerImageUrl}
                    alt="صورة الإجابة"
                    referrerPolicy="no-referrer"
                    className="max-h-32 sm:max-h-44 max-w-full object-contain rounded-lg drop-shadow-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.parentElement) {
                        target.parentElement.style.display = 'none';
                      }
                    }}
                  />
                </div>
              )}

              <p className="text-lg sm:text-2xl font-black text-emerald-200 py-0.5">
                {question.correctAnswer}
              </p>
            </div>
          )}
        </div>

        {/* Footer Action Controls */}
        <div className="py-2.5 px-3.5 sm:py-3.5 sm:px-5 bg-slate-950 border-t border-slate-800 space-y-2">
          {!showAnswer ? (
            <button
              onClick={handleRevealAnswer}
              className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-l from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-black text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer hover:scale-[1.01]"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              <span>كشف الإجابة الصحيحة</span>
            </button>
          ) : !showScoringStep ? (
            <button
              onClick={handleNextToScoring}
              className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-l from-emerald-400 to-teal-500 text-slate-950 font-black text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 cursor-pointer hover:scale-[1.01]"
            >
              <span>التالي</span>
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          ) : (
            <div className="space-y-1.5 animate-fadeIn">
              <p className="text-xs font-bold text-amber-400 text-center">
                حدد الفريق الفائز بالنصيب:
              </p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleAward('team1')}
                  className="py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center shadow-lg shadow-red-600/30 cursor-pointer hover:scale-[1.02] truncate"
                >
                  <span className="truncate">{team1.name}</span>
                </button>

                <button
                  onClick={() => handleAward('team2')}
                  className="py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center shadow-lg shadow-blue-600/30 cursor-pointer hover:scale-[1.02] truncate"
                >
                  <span className="truncate">{team2.name}</span>
                </button>

                <button
                  onClick={() => handleAward(null)}
                  className="py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition flex flex-col items-center justify-center gap-0.5 border border-slate-700 cursor-pointer hover:scale-[1.02]"
                >
                  <span>إلغاء</span>
                  <span className="text-[9px] text-slate-400">بدون نقاط</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

