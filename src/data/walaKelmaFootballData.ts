import { Question } from '../types';

export const footballQuestions: Record<number, string[]> = {
  // 200 نقطة: أسطورة، لاعبين، وأندية شهيرة جداً ويسهل تمثيلها (الأسهل)
  200: [
    "ميسي", "كريستيانو رونالدو", "نيمار", "محمد صلاح", "نادي ريال مدريد",
    "نادي برشلونة", "نادي الهلال", "نادي النصر", "نادي الاتحاد", "نادي الأهلي المصري",
    "احتفالية السيووو (Siuuu)", "ضربة جزاء", "بطاقة حمراء", "كأس العالم", "حارس مرمى",
    "كيليان إمبابي", "مارادونا", "بيليه", "نادي مانشستر سيتي", "نادي ليفربول"
  ],

  // 400 نقطة: لاعبين، أندية، وحركات كروية بمستوى متوسط
  400: [
    "بنزيما", "مودريتش", "دي بروين", "هالاند", "زين الدين زيدان",
    "رونالدينيو", "زلاتان إبراهيموفيتش", "نادي آرسنال", "نادي تشيلسي", "نادي بايرن ميونخ",
    "نادي باريس سان جيرمان", "نادي يوفنتوس", "نادي القادسية الكويتي", "نادي العربي الكويتي", "هدف ضربة مقصية (دبل كيك)",
    "نطحة زيدان لماتيرازي", "تسديدة فاول من مسافة بعيدة", "المراغمة والكوبري (المقص)", "تسديدة بنتيجة بانتينكا", "هدف باليد (يد مارادونا)"
  ],

  // 600 نقطة: لحظات تاريخية، أهداف، وشخصيات يصعب تمثيلها بالصمت (الأصعب)
  600: [
    "هدف أوريغي الشريع على برشلونة (90+)", "ريمونتادا برشلونة ضد باريس 6-1", "تصدي هيغويتا (ركلة العقرب)", "عضة سواريز لكيليني", "هدف جاريث بيل ضد ليفربول في نهائي الأبطال",
    "هدف كريستيانو في يوفنتوس المقسي", "ركلة جزاء بانيثكا الضائعة", "المدرب بيب جوارديولا", "المدرب جوزيه مورينيو", "ركلة ترجيح ضائعة فوق العارضة",
    "حارس المرمى إيميليانو مارتينيز واحتفاله", "الجمهور وهو يسوي وايف (Wave)", "دخول الفار (VAR) وإلغاء الهدف", "حكم الشراية (حكم الراية)", "إصابة بالرباط الصليبي",
    "نادي بروسيا دورتموند", "نادي إيه سي ميلان", "اللاعب سيرجيو راموس", "اللاعب أندريس إنييستا", "اللاعب تشافي هيرنانديز"
  ]
};

// All football items combined
export const footballList: string[] = [
  ...footballQuestions[200],
  ...footballQuestions[400],
  ...footballQuestions[600]
];

// Helper to generate a Question object
const createFootballQuestion = (item: string, pts: number, idSuffix: string): Question => {
  const pool = footballQuestions[pts] || footballList;
  const otherOptions = pool
    .filter((w) => w !== item)
    .sort(() => (idSuffix.length % 3) - 1)
    .slice(0, 3);

  const options = [item, ...otherOptions].sort(() => (item.length % 2 === 0 ? 1 : -1));

  return {
    id: `wk_ftb_${pts}_${idSuffix}`,
    points: pts,
    category: 'ولا كلمة كروية',
    question: 'امسح الباركود للحصول على السؤال',
    options: options,
    correctAnswer: item, // النص الصريح المباشر Plain Text
    explanation: `العنصر الكروي المطلوب تمثيله: ${item}`,
    hint: `كروي (${item})`
  };
};

// Generate full 100 questions for the 100-bank:
// 34 questions at 200 pts, 33 questions at 400 pts, 33 questions at 600 pts
export const walaKelmaFootballQuestions: Question[] = Array.from({ length: 100 }, (_, index) => {
  const qNum = index + 1;
  let pts = 200;
  let pool = footballQuestions[200];
  if (qNum > 34 && qNum <= 67) {
    pts = 400;
    pool = footballQuestions[400];
  } else if (qNum > 67) {
    pts = 600;
    pool = footballQuestions[600];
  }

  const selectedItem = pool[(qNum - 1) % pool.length];
  return createFootballQuestion(selectedItem, pts, String(qNum).padStart(3, '0'));
});
