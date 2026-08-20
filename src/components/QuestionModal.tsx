import React, { useState, useEffect } from 'react';
import { Category, Question, Team } from '../types';
import { Clock, CheckCircle2, X, Eye, ArrowLeft, Zap, VolumeX, Repeat, PhoneCall, ShieldAlert, AlertTriangle, Flag, Image as ImageIcon, Smartphone, QrCode } from 'lucide-react';
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

  // Check if image is integral to asking the question (e.g., asking to identify flag/logo/product shown)
  const effectiveImageUrl = question.imageUrl || question.image;

  const isVisualQuestion = (): boolean => {
    if (question.id.startsWith('car_') || category.name === 'سيارات') return true;
    if (question.hideImageUntilAnswer === true) return false;
    if (question.hideImageUntilAnswer === false) return true;
    if (effectiveImageUrl) return true;

    const text = question.question.toLowerCase();
    const visualKeywords = [
      'بالصورة',
      'في الصورة',
      'هذا الشعار',
      'هذا العلم',
      'هذا المنتج',
      'هذه الصورة',
      'الموضح',
      'الموضحة',
      'الظاهر',
      'الظاهرة',
      'يمثله هذا',
      'يمثلها هذا',
      'شنو هذا',
      'ما هذا',
      'ما اسم هذا',
      'ما هو هذا'
    ];
    return visualKeywords.some((kw) => text.includes(kw));
  };

  const isVisual = isVisualQuestion();

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
        className={`w-full max-w-2xl bg-slate-900 border-2 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 ${
          activeTurnTeamId === 'team1'
            ? 'border-red-500/90 ring-4 ring-red-500/30 shadow-red-900/30'
            : 'border-blue-500/90 ring-4 ring-blue-500/30 shadow-blue-900/30'
        }`}
      >
        {/* Header Bar */}
        <div className="p-3 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span
              className={`px-2.5 sm:px-3 py-1 rounded-full font-black text-xs sm:text-sm tracking-wide shadow-md transition-all shrink-0 ${
                isDoubleActive
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 ring-2 ring-amber-300 animate-pulse'
                  : 'bg-amber-400 text-slate-950'
              }`}
            >
              {activeTeamPoints} نقطة {isDoubleActive && '🔥'}
            </span>
            <div className="min-w-0">
              <h3 className="font-extrabold text-white text-xs sm:text-lg leading-tight truncate">{category.name}</h3>
            </div>
          </div>

          {/* Stopwatch Timer, Report & Close Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-black text-xs sm:text-sm border font-mono bg-slate-800 text-amber-300 border-slate-700 shadow-inner">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{formatStopwatch(stopwatchSeconds)}</span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setShowReportModal(true);
              }}
              title="إبلاغ عن خطأ في السؤال"
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-amber-500/20 text-slate-400 hover:text-amber-400 border border-slate-700/60 transition cursor-pointer flex items-center justify-center gap-1 text-xs"
            >
              <Flag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Question Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto space-y-3 sm:space-y-5 flex-1 custom-scrollbar">
          {/* Active Powerups Banners */}
          {isDoubleActive && (
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-[11px] sm:text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
              <span>
                تم تفعيل خاصية <strong>الدبل</strong> لـ (<strong>{activeTeam.name}</strong>)! قيمة السؤال أصبحت ({activeTeamPoints} نقطة)!
              </span>
            </div>
          )}

          {isSilenceActive && (
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-[11px] sm:text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <VolumeX className="w-4 h-4 text-rose-400 shrink-0" />
              <span>
                تم تفعيل خاصية <strong>اسكت</strong>! الفريق الخصم (<strong>{opponentTeam.name}</strong>) ممنوع من الكلام نهائياً! 🔇
              </span>
            </div>
          )}

          {isStealActive && (
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-purple-500/10 border border-purple-500/40 text-purple-300 text-[11px] sm:text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <Repeat className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                تم تفعيل خاصية <strong>الحرامي</strong> لـ (<strong>{activeTeam.name}</strong>)! سرقة ({activeTeamPoints} نقطة) من الخصم! 🏴‍☠️
              </span>
            </div>
          )}

          {/* Question Box */}
          <div
            className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 border-2 text-center space-y-3 sm:space-y-4 shadow-inner transition-all ${
              activeTurnTeamId === 'team1'
                ? 'border-red-500/50 shadow-red-950/40 ring-1 ring-red-500/20'
                : 'border-blue-500/50 shadow-blue-950/40 ring-1 ring-blue-500/20'
            }`}
          >
            {isWalaKelma ? (
              <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 py-1 animate-fadeIn">
                {/* 1. Clear Header Prompt Text */}
                <div className="flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 animate-bounce" />
                  <h2 className="text-lg sm:text-2xl font-black text-amber-300 tracking-wide drop-shadow-md">
                    امسح الباركود للحصول على السؤال
                  </h2>
                </div>

                {/* 2. QR Code generated programmatically with Plain Text */}
                <div className="my-1 sm:my-2">
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
                    size={250}
                    className="mx-auto"
                  />
                </div>

                {/* 3. Small instructions prompt */}
                <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-950/80 border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-medium shadow-sm">
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
                <p className="text-lg sm:text-2xl font-black text-white leading-relaxed sm:leading-relaxed">
                  "{cleanQuestionText(question.question)}"
                </p>

                {/* 2. Image / Visual Representation UNDER Question Text */}
                {isVisual && (
                  <div className="w-full flex justify-center items-center my-3 max-h-60 overflow-hidden rounded-xl bg-slate-950/90 p-2 sm:p-3 border border-slate-700/60 shadow-xl">
                    {question.id?.startsWith('car_') || category.name?.includes('سيارات') || category.id === 'gen-cars' ? (
                      <CarPartSvg id={question.id || effectiveImageUrl || 'car_16'} className="max-h-48 w-auto max-w-full object-contain mx-auto rounded drop-shadow-md transition-transform duration-300 hover:scale-105" />
                    ) : question.id?.startsWith('old_flags_') || category.name?.includes('أعلام') || category.id === 'hist-flags' || category.id === 'old_flags' ? (
                      <OldFlagSvg
                        id={question.id}
                        answer={question.correctAnswer}
                        fallbackUrl={question.image || question.imageUrl}
                        className="max-h-48 w-auto max-w-full block mx-auto object-contain my-2 rounded shadow-lg transition-transform duration-300 hover:scale-105"
                      />
                    ) : (question.image || question.imageUrl) ? (
                      <img
                        src={question.image || question.imageUrl}
                        alt="علم الدولة"
                        className="max-h-48 w-auto max-w-full block mx-auto object-contain my-2 rounded shadow-lg"
                        loading="eager"
                      />
                    ) : null}
                  </div>
                )}
              </>
            )}
          </div>

          {/* POWER-UPS BAR (Under Question Card - Hidden when answer is revealed) */}
          {!showAnswer && (
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {/* Double */}
                <button
                  type="button"
                  disabled={usedPowerups.includes('double') || isDoubleActive}
                  onClick={() => handleTogglePowerup('double')}
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border text-[11px] sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
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
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border text-[11px] sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
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
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border text-[11px] sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
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
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border text-[11px] sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
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
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-emerald-950/90 border-2 border-emerald-500/80 text-white text-center space-y-2 sm:space-y-3 animate-fadeIn shadow-2xl">
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

              {/* Show logo/flag/product image in answer box when revealing answer for non-visual factual questions */}
              {question.imageUrl && !isVisual && (
                <div className="flex justify-center items-center my-2 max-h-40 sm:max-h-52 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950/80 p-2 sm:p-3 border border-emerald-500/40 shadow-xl">
                  <img
                    src={question.imageUrl}
                    alt="صورة الإجابة"
                    referrerPolicy="no-referrer"
                    className="max-h-32 sm:max-h-44 max-w-full object-contain rounded-lg sm:rounded-xl drop-shadow-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.parentElement) {
                        target.parentElement.style.display = 'none';
                      }
                    }}
                  />
                </div>
              )}

              <p className="text-xl sm:text-3xl font-black text-emerald-200 py-1">
                {question.correctAnswer}
              </p>
            </div>
          )}
        </div>

        {/* Footer Action Controls */}
        <div className="p-3.5 sm:p-5 bg-slate-950 border-t border-slate-800 space-y-2.5">
          {!showAnswer ? (
            <button
              onClick={handleRevealAnswer}
              className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-l from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-black text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer hover:scale-[1.01]"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              <span>كشف الإجابة الصحيحة</span>
            </button>
          ) : !showScoringStep ? (
            <button
              onClick={handleNextToScoring}
              className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-l from-emerald-400 to-teal-500 text-slate-950 font-black text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 cursor-pointer hover:scale-[1.01]"
            >
              <span>التالي</span>
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          ) : (
            <div className="space-y-2 animate-fadeIn">
              <p className="text-xs font-bold text-amber-400 text-center">
                حدد الفريق الفائز بالنصيب:
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  onClick={() => handleAward('team1')}
                  className="py-3 sm:py-3.5 px-2 sm:px-3 rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-base transition flex items-center justify-center shadow-lg shadow-red-600/30 cursor-pointer hover:scale-[1.02] truncate"
                >
                  <span className="truncate">{team1.name}</span>
                </button>

                <button
                  onClick={() => handleAward('team2')}
                  className="py-3 sm:py-3.5 px-2 sm:px-3 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-base transition flex items-center justify-center shadow-lg shadow-blue-600/30 cursor-pointer hover:scale-[1.02] truncate"
                >
                  <span className="truncate">{team2.name}</span>
                </button>

                <button
                  onClick={() => handleAward(null)}
                  className="py-3 sm:py-3.5 px-2 sm:px-3 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm transition flex flex-col items-center justify-center gap-0.5 border border-slate-700 cursor-pointer hover:scale-[1.02]"
                >
                  <span>إلغاء</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400">بدون نقاط</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

