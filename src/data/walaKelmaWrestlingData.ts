import { Question } from '../types';

export const wrestlingQuestions: Record<number, string[]> = {
  // 200 نقطة: أسماء مصارعين مشهورين جداً وسهل تمثيلهم (الأسهل)
  200: [
    "جون سينا", "ذا روك", "أندرتايكر", "رومان رينز", "بروك ليسنر", 
    "ستون كولد ستيف أوستن", "تريبل إتش", "كاين", "بيغ شو", "ري ميستيريو", 
    "راندي أورتن", "باتيستا", "إيدج", "سي إم بانك", "جولدبيرج", 
    "هالك هوجان", "سيث رولينز", "جيف هاردي", "مارك هنري", "كودي رودز",
    "أليكسا بليس", "بيكي لينش", "شارلوت فلير", "ريا ريبلي", "بيانكا بيلير", "كريس جيريكو", "بول هيمان", "إيه جاي لي", "بري بيلا", "نيكي بيلا", "دومينيك ميستيريو", "لوجان بول", "آر تروث", "بوبي لاشلي"
  ],

  // 400 نقطة: أسماء مصارعين معروفين بمستوى متوسط
  400: [
    "شاون مايكلز", "بريت هارت", "دانيال براين", "إيه جاي ستايلز", "ريك فلير", 
    "ستينج", "درو ماكنتاير", "شين مكمان", "مات هاردي", "روب فان دام", 
    "كيرت أنجل", "بوكر تي", "جي أووسو", "جيمي أووسو", "سولو سيكوا", 
    "ذا ميز", "شيمس", "فين بالور", "سامي زين", "كيفن أوانز",
    "داميان بريست", "غونثر", "تشاد غيبل", "أوتيس", "أوستن ثيوري", "غرايسون والر", "برون بريكر", "إيليا دراغونوف", "كارميلو هايز", "آسوكا", "إيو سكاي", "بايلي", "ناتاليا"
  ],

  // 600 نقطة: أسماء مصارعين قدامى أو يصعب تمثيلهم (الأصعب)
  600: [
    "أندريه العملاق", "ألتيميت واريور", "راودي رودي بايبير", "يوكوزونا", "أومانجا", 
    "راندي سافاج", "دستي رودز", "ذا جرايت كالي", "شيلتون بنجامين", "بوب باكلاند", 
    "جون موريسون", "ريكوشيه", "براين دانييلسون", "أنطونيو سيزارو", "ألبرتو ديل ريو", 
    "كارليتو", "أومبرتو كاريو", "سانتينو ماريلا", "فينس مكمان", "ذا بوجيمان",
    "جيك ذا سنيك روبرتس", "ريك رود", "تيد ديبياسي", "ذا هونكي تونك مان", "مستر بيرفكت", "إيرثكويك", "تايفون", "بابا شانغو", "دايموند دالاس بيج", "كين شامروك", "مولي هولي", "فيكتوريا", "ميشيل ماكول"
  ]
};

// All wrestlers combined for general references
export const wrestlersList: string[] = [
  ...wrestlingQuestions[200],
  ...wrestlingQuestions[400],
  ...wrestlingQuestions[600]
];

// Helper to generate a Question object
const createWrestlingQuestion = (wrestler: string, pts: number, idSuffix: string): Question => {
  const pool = wrestlingQuestions[pts] || wrestlersList;
  const otherOptions = pool
    .filter((w) => w !== wrestler)
    .sort(() => (idSuffix.length % 3) - 1)
    .slice(0, 3);

  const options = [wrestler, ...otherOptions].sort(() => (wrestler.length % 2 === 0 ? 1 : -1));

  return {
    id: `wk_wre_${pts}_${idSuffix}`,
    points: pts,
    category: 'ولا كلمة مصارعة',
    question: 'امسح الباركود للحصول على السؤال',
    options: options,
    correctAnswer: wrestler, // اسم المصارع حصرياً Plain Text
    explanation: `المصارع المطلوب تمثيله: ${wrestler}`,
    hint: `اسم مصارع (${wrestler})`
  };
};

// Generate full 100 questions:
export const walaKelmaWrestlingQuestions: Question[] = Array.from({ length: 100 }, (_, index) => {
  const qNum = index + 1;
  let pts = 200;
  let pool = wrestlingQuestions[200];
  if (qNum > 34 && qNum <= 67) {
    pts = 400;
    pool = wrestlingQuestions[400];
  } else if (qNum > 67) {
    pts = 600;
    pool = wrestlingQuestions[600];
  }

  const selectedItem = pool[(qNum - 1) % pool.length];
  return createWrestlingQuestion(selectedItem, pts, String(qNum).padStart(3, '0'));
});
