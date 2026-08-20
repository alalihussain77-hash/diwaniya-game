import { Question } from '../types';

export const generalQuestions: Record<number, string[]> = {
  // 200 نقطة: منتجات وماركات ومطاعم معروفة جداً ويسهل تمثيلها (الأسهل)
  200: [
    "آيفون", "بلايستيشن 5", "ساعة أبل الذكية", "سماعة بلوتوث أبل", "ماكينة قهوة",
    "تلفزيون سمارت", "قلاية هوائية", "نايوكي", "أديداس", "زارا",
    "كوكاكولا", "بيبسي", "نوتلا", "شيبس ليز", "شوكولاتة كيت كات",
    "ريد بول", "اندومي", "أوريو", "بطاطس دوريتوس", "شوكولاتة جالاكسي",
    "ماكدونالدز", "كنتاكي", "ستاربكس", "دانكن دونتس", "البيك",
    "مرسيدس بنز", "بي إم دبليو", "تويوتا لاندكروزر", "تسلا", "نيسان باترول"
  ],

  // 400 نقطة: ماركات عالمية وأجهزة ومشروبات بمستوى متوسط في التمثيل
  400: [
    "نظارة الواقع الافتراضي", "كمبيوتر جيمنج", "راوتر واي فاي", "كاميرا كانون", "نينتندو سويتش",
    "ثلاجة ذكية", "مكنسة روبوت", "خلاط نينجا", "غوتشي", "لويس فيتون",
    "رولكس", "شانيل", "بوما", "هيرمس", "كالفن كلاين",
    "كروكس", "راي بان", "برينجلز", "اندومي كورية حارة", "حليب نيدو",
    "معجون أسنان سيجنال", "شامبو هيد أند شولدرز", "صابون دوف", "شوكولاتة فيريرو روشيه", "آيس كريم باسكن روبنز",
    "جيب رانجلر", "رينج روفر", "سكوتر كهربائي", "بيتزا هت", "سينابون"
  ],

  // 600 نقطة: ماركات وأجهزة وأماكن معقدة يصعب تمثيلها بالصمت (الأصعب)
  600: [
    "ماك بوك", "طابعة ليزر", "شاحن متأرجح", "كيندل قراءة الكتب", "إتش أند إم",
    "أمريكان إيجل", "لاكوست", "فيرساتشي", "بالنسياغا", "ديور",
    "طومي هيلفيغر", "كارتييه", "مياه إيفيان", "كيندر جوي", "بسكويت دايجستف",
    "شاي ليبتون", "قهوة نسكافيه", "ديتول", "كريم نيفيا", "مسحوق غسيل أرييل",
    "مناديل كلينكس", "غازيات كينزا", "فورد موستانج", "بورش", "فراري",
    "لامبورغيني", "لكزس", "شيفروليه كابريس", "ايكيا", "مكتبة جرير"
  ]
};

// All items combined
export const wordList: string[] = [
  ...generalQuestions[200],
  ...generalQuestions[400],
  ...generalQuestions[600]
];

export const rawQrCodeQuestions: string[] = wordList;

// Helper to generate a Question object
const createGeneralQuestion = (item: string, pts: number, idSuffix: string): Question => {
  const pool = generalQuestions[pts] || wordList;
  const otherOptions = pool
    .filter((w) => w !== item)
    .sort(() => (idSuffix.length % 3) - 1)
    .slice(0, 3);

  const options = [item, ...otherOptions].sort(() => (item.length % 2 === 0 ? 1 : -1));

  return {
    id: `wk_gen_${pts}_${idSuffix}`,
    points: pts,
    category: 'ولا كلمة عامة',
    question: 'امسح الباركود للحصول على السؤال',
    options: options,
    correctAnswer: item, // النص الصريح المباشر Plain Text
    explanation: `الكلمة أو المنتج المطلوب تمثيله: ${item}`,
    hint: `منتج أو شيء شهير (${item})`
  };
};

// Generate full 100 questions for the 100-bank:
// 34 questions at 200 pts, 33 questions at 400 pts, 33 questions at 600 pts
export const walaKelmaGeneralQuestions: Question[] = Array.from({ length: 100 }, (_, index) => {
  const qNum = index + 1;
  let pts = 200;
  let pool = generalQuestions[200];
  if (qNum > 34 && qNum <= 67) {
    pts = 400;
    pool = generalQuestions[400];
  } else if (qNum > 67) {
    pts = 600;
    pool = generalQuestions[600];
  }

  const selectedItem = pool[(qNum - 1) % pool.length];
  return createGeneralQuestion(selectedItem, pts, String(qNum).padStart(3, '0'));
});
