import { Question } from '../types';

export const animeQuestions: Record<number, string[]> = {
  // 200 نقطة: أنميات وشخصيات شهيرة جداً ويسهل تمثيلها (الأسهل)
  200: [
    "ون بيس", "ناروتو", "هجوم العمالقة", "دراغون بول", "محقق كونان",
    "لوفي", "زورو", "سانجي", "ناروتو أوزوماكي", "ساسكي",
    "إيتاشي", "غوكو", "فيجيتا", "ليفاي", "إيرين ييغر",
    "كونان إيدوجاوا", "سينشي كودو", "كيلوا", "غون", "قراصنة قبعة القش"
  ],

  // 400 نقطة: أنميات وشخصيات معروفة بمستوى متوسط
  400: [
    "قاتل الشياطين", "أكاديمية بطلتي", "هنتر x هنتر", "مذكرة الموت", "جوجوتسو كايسن",
    "تانجيرو", "نيزوكو", "غوجو ساتورو", "سوكونا", "ميدوريا (ديكو)",
    "باكوغو", "إل (L)", "لايت ياغامي", "كورابيكا", "هيسوكا",
    "نامي", "تشوبر", "ترافلغار لو", "كاكاشي", "غارا"
  ],

  // 600 نقطة: أنميات وشخصيات يصعب تمثيلها أو قديمة (الأصعب)
  600: [
    "فل ميتال ألكيمست", "بليتش", "سايتاما (رجل اللكمة الواحدة)", "كود غياس", "فينلاند ساغا",
    "إدوارد إلريك", "إيتشيغو كوروساكي", "ليلوش", "ثورفين", "أسكيلات",
    "مادارا أوتشيها", "أيزن", "كينغدوم", "سيلفر رايلي", "بوكو نو هيرو",
    "جينتاما", "ساكاتا جينتوكي", "شينتشي أوكازاكي", "أوروتشيمارو", "ميرويم"
  ]
};

// All anime items combined for general references
export const animeList: string[] = [
  ...animeQuestions[200],
  ...animeQuestions[400],
  ...animeQuestions[600]
];

// Helper to generate a Question object
const createAnimeQuestion = (item: string, pts: number, idSuffix: string): Question => {
  const pool = animeQuestions[pts] || animeList;
  const otherOptions = pool
    .filter((w) => w !== item)
    .sort(() => (idSuffix.length % 3) - 1)
    .slice(0, 3);

  const options = [item, ...otherOptions].sort(() => (item.length % 2 === 0 ? 1 : -1));

  return {
    id: `wk_ani_${pts}_${idSuffix}`,
    points: pts,
    category: 'أنمي - مسلسلات وشخصيات',
    question: 'امسح الباركود للحصول على السؤال',
    options: options,
    correctAnswer: item, // النص الصريح المباشر Plain Text
    explanation: `الأنمي أو الشخصية المطلوب تمثيلها: ${item}`,
    hint: `مسلسل أو شخصية أنمي شهيرة (${item})`
  };
};

// Generate full 100 questions:
export const walaKelmaAnimeQuestions: Question[] = Array.from({ length: 100 }, (_, index) => {
  const qNum = index + 1;
  let pts = 200;
  let pool = animeQuestions[200];
  if (qNum > 34 && qNum <= 67) {
    pts = 400;
    pool = animeQuestions[400];
  } else if (qNum > 67) {
    pts = 600;
    pool = animeQuestions[600];
  }

  const selectedItem = pool[(qNum - 1) % pool.length];
  return createAnimeQuestion(selectedItem, pts, String(qNum).padStart(3, '0'));
});
