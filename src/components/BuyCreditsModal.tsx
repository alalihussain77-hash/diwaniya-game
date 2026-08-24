import React, { useState, useEffect } from 'react';
import { Gamepad2, Sparkles, CheckCircle2, X, Key, Gift, ShieldCheck, Check, AlertCircle } from 'lucide-react';
import { sound } from '../utils/sound';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const TEN_GAME_CODES = [
  { code: 'DIWAN-10-Q801', label: 'كود ديوانية 1', games: 10 },
  { code: 'MAJLES-10-KW02', label: 'كود مجلس 2', games: 10 },
  { code: 'CHALLENGE-10-PR03', label: 'كود التحدي 3', games: 10 },
  { code: 'THAKAFY-10-GL04', label: 'كود الثقافة 4', games: 10 },
  { code: 'HEROES-10-ST05', label: 'كود الأبطال 5', games: 10 },
  { code: 'Q8GAME-10-VIP06', label: 'كود كويت جيمز 6', games: 10 },
  { code: 'WINNER-10-PS07', label: 'كود الفائزين 7', games: 10 },
  { code: 'SUPER-10-PL08', label: 'كود سوبر جيم 8', games: 10 },
  { code: 'ROYAL-10-GM09', label: 'كود رويال 9', games: 10 },
  { code: 'MASTER-10-TN10', label: 'كود ماستر 10', games: 10 },
];

export const VALID_ACTIVATION_CODES = [
  ...TEN_GAME_CODES.map((item) => item.code),
  'DIWAN10Q801', 'MAJLES10KW02', 'CHALLENGE10PR03', 'THAKAFY10GL04', 'HEROES10ST05',
  'Q8GAME10VIP06', 'WINNER10PS07', 'SUPER10PL08', 'ROYAL10GM09', 'MASTER10TN10',
  'GAME10-01', 'GAME10-02', 'GAME10-03', 'GAME10-04', 'GAME10-05',
  'GAME10-06', 'GAME10-07', 'GAME10-08', 'GAME10-09', 'GAME10-10',
  'GAME1001', 'GAME1002', 'GAME1003', 'GAME1004', 'GAME1005',
  'GAME1006', 'GAME1007', 'GAME1008', 'GAME1009', 'GAME1010',
  'DWN-1010-Q8A1',
  'DWN-2020-KWT2',
  'DWN-3030-VIP3',
  'DWN-4040-GAME4',
  'DWN-5050-PLAY5',
  'DWN-6060-WIN6',
  'DWN-7070-STAR7',
  'DWN-8080-GOLD8',
  'DWN-9090-PRO9',
  'DWN-1000-TEN10',
  'DWN-9842-X7Q9',
  'Q8-5319-K9M2',
  'DW-7204-P1V8',
  'Q8X-3910-Z4K7',
  'DWN-8192-M5R3',
  'KWT-4721-L9A6',
  'DIW-6038-H2N5',
  'Q8P-1584-W8E3',
  'DWN-3947-C6T1',
  'Q8K-9125-J4D8',
  'DIWANIYA10',
  'MAJRAYAT10',
  'FREE10',
  'Q810',
  'VIP10',
  'DWN10',
  'WELCOME10',
  'GIFT10',
  '1010',
  'DIWANIYA',
  'MAJRAYAT',
];

interface BuyCreditsModalProps {
  currentCredits: number;
  userName?: string;
  onClose: () => void;
  onPurchaseSuccess: (addedGamesCount: number, code?: string) => Promise<void> | void;
}

export const BuyCreditsModal: React.FC<BuyCreditsModalProps> = ({
  currentCredits,
  userName,
  onClose,
  onPurchaseSuccess,
}) => {
  const [inputCode, setInputCode] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [usedCodes, setUsedCodes] = useState<string[]>([]);

  // Load used codes from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('diwaniya_used_promo_codes');
      if (saved) {
        setUsedCodes(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const handleRedeemCode = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setError(null);

    const formatted = inputCode.trim().toUpperCase();
    const cleanCode = formatted.replace(/[^A-Z0-9]/g, '');

    if (!formatted && !cleanCode) {
      setError('يرجى إدخال كود التفعيل المكون من رمز');
      sound.playWrong();
      return;
    }

    if (usedCodes.includes(formatted) || (cleanCode && usedCodes.includes(cleanCode))) {
      setError('لقد قمت باستخدام هذا الكود من قبل!');
      sound.playWrong();
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Check local predefined codes list (matching exact string or stripped alphanumeric)
      let isValid = VALID_ACTIVATION_CODES.some((code) => {
        const uppercaseCode = code.toUpperCase();
        const strippedCode = uppercaseCode.replace(/[^A-Z0-9]/g, '');
        return uppercaseCode === formatted || (cleanCode.length > 0 && strippedCode === cleanCode);
      });

      // 2. If not found in predefined list, check Firestore activationCodes collection with 2.5s timeout
      if (!isValid && db) {
        try {
          const timeoutPromise = new Promise<null>((res) => setTimeout(() => res(null), 2500));
          const docRef = doc(db, 'activationCodes', formatted);
          const snap = await Promise.race([getDoc(docRef), timeoutPromise]);
          if (snap && snap.exists()) {
            isValid = true;
          } else if (cleanCode) {
            const cleanDocRef = doc(db, 'activationCodes', cleanCode);
            const cleanSnap = await Promise.race([getDoc(cleanDocRef), timeoutPromise]);
            if (cleanSnap && cleanSnap.exists()) {
              isValid = true;
            }
          }
        } catch (dbErr) {
          console.warn('Firestore code check skipped or timed out:', dbErr);
        }
      }

      if (!isValid) {
        setIsSubmitting(false);
        setError('كود التفعيل غير صحيح. يرجى التأكد من الكود وإعادة المحاولة.');
        sound.playWrong();
        return;
      }

      // Code is valid! Mark as used locally
      const updatedUsedCodes = Array.from(new Set([...usedCodes, formatted, cleanCode].filter(Boolean)));
      setUsedCodes(updatedUsedCodes);
      localStorage.setItem('diwaniya_used_promo_codes', JSON.stringify(updatedUsedCodes));

      // Add 10 game credits immediately
      await Promise.resolve(onPurchaseSuccess(10, formatted));

      sound.playFanfare();
      setIsSubmitting(false);
      setSuccessMessage(`تم تفعيل الكود (${formatted}) بنجاح! تم إضافة 10 ألعاب جديدة لرصيدك 🎉`);
      setInputCode('');

      // Auto-close modal after 2 seconds or let user click button
      setTimeout(() => {
        onClose();
      }, 2200);
    } catch (err) {
      console.error('Error redeeming code:', err);
      setIsSubmitting(false);
      setError('حدث خطأ أثناء تفعيل الكود، يرجى المحاولة مرة أخرى.');
      sound.playWrong();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto font-['Cairo',sans-serif] text-white animate-fadeIn">
      <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-5 sm:p-7 max-w-xl w-full shadow-2xl relative my-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 left-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-slate-950 shadow-lg shadow-amber-500/20">
            <Key className="w-8 h-8 stroke-[2.5]" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            تفعيل كود الألعاب 🔑
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            {userName ? `أهلاً بك يا ${userName}، ` : ''}أدخل كود التفعيل المكون من رمز للحصول على 10 ألعاب جديدة وحصرية
          </p>

          {/* Current Credits Display Pill */}
          <div className="inline-flex items-center gap-2 bg-slate-950 px-4 py-1.5 rounded-full border border-amber-500/40 text-xs font-black text-amber-300 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>رصيدك الحالي:</span>
            <span className="text-sm font-mono text-amber-200">🎮 {currentCredits} ألعاب</span>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successMessage ? (
          <div className="p-6 rounded-2xl bg-emerald-950/90 border-2 border-emerald-500 text-center space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/40">
              <CheckCircle2 className="w-7 h-7 stroke-[3]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-emerald-200">{successMessage}</h3>
              <p className="text-xs text-emerald-300 mt-1">يمكنك الآن الانطلاق مباشرة في اللعبة والاستمتاع بتحدي الأسئلة!</p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-black text-sm hover:bg-emerald-400 transition cursor-pointer shadow-lg"
            >
              الانطلاق للعب الآن 🔥
            </button>
          </div>
        ) : (
          <form onSubmit={handleRedeemCode} className="space-y-5">
            {/* Activation Code Input */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-amber-300 flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>أدخل كود التفعيل (يُعطي 10 ألعاب):</span>
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={inputCode || ''}
                  onChange={(e) => {
                    setInputCode(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="مثال: DIWANIYA10"
                  className="w-full bg-slate-950 border-2 border-amber-500/40 rounded-2xl px-4 py-3.5 text-center text-lg font-mono font-black text-amber-200 placeholder-slate-600 focus:outline-none focus:border-amber-400 tracking-wider dir-ltr"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-950/90 border border-rose-500/60 text-rose-300 text-xs font-bold text-center flex items-center justify-center gap-2 animate-shake">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Quick Promo Code Suggestion Pills & 10 Game Codes Grid */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Gift className="w-4 h-4 text-amber-400" />
                  قائمة 10 أكواد متوفرة (كل كود يُعطي 10 ألعاب):
                </span>
                <span className="text-[10px] text-slate-400">انقر للتعبئة التلقائية</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 max-h-36 overflow-y-auto p-1 bg-slate-950/70 rounded-xl border border-slate-800">
                {TEN_GAME_CODES.map((item, idx) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setInputCode(item.code);
                      setError(null);
                    }}
                    className={`p-1.5 rounded-lg border text-center transition cursor-pointer text-xs font-mono font-bold ${
                      inputCode === item.code
                        ? 'bg-amber-500 text-slate-950 border-amber-300 font-black shadow-md'
                        : 'bg-slate-900 border-amber-500/30 text-amber-300 hover:bg-slate-800 hover:border-amber-400'
                    }`}
                  >
                    <div className="text-[10px] text-slate-400 font-sans">كود {idx + 1}</div>
                    <div className="truncate">{item.code}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Redeem Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition transform hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>جاري التحقق وتفعيل الكود...</span>
                </div>
              ) : (
                <>
                  <Key className="w-5 h-5 text-slate-950 fill-slate-950" />
                  <span>تفعيل الكود 🎮</span>
                </>
              )}
            </button>

            {/* Security note removed */}
          </form>
        )}

      </div>
    </div>
  );
};

