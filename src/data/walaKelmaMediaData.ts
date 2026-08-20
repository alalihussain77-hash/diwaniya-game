import { Question } from '../types';

export const mediaQuestions: Record<number, string[]> = {
  // 200 نقطة: أعمال عربية مشهورة جداً ويسهل تمثيلها (الأسهل)
  200: [
    "فيلم اللمبي", "مسرحية مدرسة المشاغبين", "أغنية بابا فين", "مسلسل طاش ما طاش", "فيلم الحريف",
    "مسرحية العيال كبرت", "أغنية الغزالة رايقة", "مسلسل شباب البومب", "فيلم بوحة", "أغنية بنت الجيران",
    "مسرحية باي باي لندن", "فيلم الكيف", "مسلسل باب الحارة", "أغنية الأماكن", "فيلم إكس لارج",
    "مسرحية شاهد ماشفش حاجة", "مسلسل رشاش", "أغنية سألوني الناس", "فيلم الناظر", "مسلسل سكة سفر"
  ],

  // 400 نقطة: أعمال عربية معروفة بمستوى متوسط
  400: [
    "فيلم التجربة الدنماركية", "مسلسل لن أعيش في جلباب أبي", "أغنية هلا بريحة أهلي", "مسرحية الزعيم", "فيلم غبي منه فيه",
    "مسلسل الكبير أوي", "أغنية خطوة", "مسرحية خاربة خاربة", "فيلم صعيدي في الجامعة الأمريكية", "مسلسل سجن النسا",
    "أغنية يتعلموا", "فيلم عسل أسود", "مسلسل الزير سالم", "مسرحية الواد سيد الشغال", "فيلم طباخ الريس",
    "أغنية أنت معلم", "مسلسل درب الزلق", "مسلسل أمر إخلاء", "أغنية قلبي علينا", "فيلم مطب صناعي"
  ],

  // 600 نقطة: أعمال عربية قديمة أو يصعب تمثيلها (الأصعب)
  600: [
    "مسرحية حاميها حراميها", "فيلم الكرنك", "أغنية قارئة الفنجان", "مسلسل رأفت الهجان", "فيلم الإرهاب والكباب",
    "مسرحية على هامان يا فرعون", "مسلسل ليالي الحلمية", "أغنية أيا كان جرحي", "فيلم الفيل الأزرق", "مسلسل بطلوع الروح",
    "أغنية مغروم أنا بيك", "مسرحية صح النوم", "فيلم أرض الخوف", "مسلسل الاختيار", "أغنية سواح",
    "فيلم فول الصين العظيم", "مسلسل ما وراء الطبيعة", "مسرحية لولاكي", "فيلم الجزيرة", "مسرحية فرسان المناخ"
  ]
};

// All media items combined
export const mediaList: string[] = [
  ...mediaQuestions[200],
  ...mediaQuestions[400],
  ...mediaQuestions[600]
];

// Helper to generate a Question object
const createMediaQuestion = (item: string, pts: number, idSuffix: string): Question => {
  const pool = mediaQuestions[pts] || mediaList;
  const otherOptions = pool
    .filter((w) => w !== item)
    .sort(() => (idSuffix.length % 3) - 1)
    .slice(0, 3);

  const options = [item, ...otherOptions].sort(() => (item.length % 2 === 0 ? 1 : -1));

  return {
    id: `wk_med_${pts}_${idSuffix}`,
    points: pts,
    category: 'أفلام، مسلسلات، أغاني، ومسرحيات',
    question: 'امسح الباركود للحصول على السؤال',
    options: options,
    correctAnswer: item, // النص الصريح المباشر Plain Text
    explanation: `العمل المطلوب تمثيله: ${item}`,
    hint: `عمل فني عربي (${item})`
  };
};

// Generate full 100 questions for the 100-bank:
// 34 questions at 200 pts, 33 questions at 400 pts, 33 questions at 600 pts
export const walaKelmaMediaQuestions: Question[] = Array.from({ length: 100 }, (_, index) => {
  const qNum = index + 1;
  let pts = 200;
  let pool = mediaQuestions[200];
  if (qNum > 34 && qNum <= 67) {
    pts = 400;
    pool = mediaQuestions[400];
  } else if (qNum > 67) {
    pts = 600;
    pool = mediaQuestions[600];
  }

  const selectedItem = pool[(qNum - 1) % pool.length];
  return createMediaQuestion(selectedItem, pts, String(qNum).padStart(3, '0'));
});
