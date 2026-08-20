import { Question } from '../types';

export const foreignArtQuestions: Record<number, string[]> = {
  // 200 نقطة: أفلام ومسلسلات وشخصيات أجنبية شهيرة جداً ويسهل تمثيلها (الأسهل)
  200: [
    "فيلم تيتانيك", "شخصية الجوكر", "فيلم هاري بوتر", "شخصية باتمان", "فيلم أفاتار",
    "شخصية سبايدرمان", "مسلسل Squid Game (لعبة الحبار)", "شخصية سوبرمان", "فيلم Home Alone", "مسلسل Wednesday",
    "شخصية جاك سبارو", "فيلم Fast & Furious", "شخصية ثور (Thor)", "مسلسل Stranger Things", "فيلم Jurassic Park",
    "شخصية الأقنع الأخضر (The Mask)", "فيلم The Lion King", "شخصية الشريك (Shrek)", "فيلم Barbie", "شخصية ايرون مان"
  ],

  // 400 نقطة: أعمال وشخصيات معروفة بمستوى متوسط
  400: [
    "مسلسل Game of Thrones", "فيلم The Matrix", "مسلسل Peaky Blinders", "فيلم Inception", "شخصية توماس شيلبي",
    "مسلسل Breaking Bad", "فيلم Pirates of the Caribbean", "شخصية هالك (Hulk)", "مسلسل La Casa De Papel", "فيلم Oppenheimer",
    "شخصية والتر وايت", "فيلم Interstellar", "شخصية مينيون (Minions)", "فيلم Gladiator", "مسلسل Friends", "فيلم The Dark Knight",
    "شخصية كابتن أمريكا", "فيلم Mission Impossible", "شخصية جون ويك (John Wick)", "فيلم Men in Black"
  ],

  // 600 نقطة: أفلام ومسلسلات وشخصيات يصعب تمثيلها أو كلاسيكية (الأصعب)
  600: [
    "فيلم The Godfather (العراب)", "مسلسل Prison Break", "فيلم Fight Club", "شخصية هانيبال ليكتر", "فيلم Pulp Fiction",
    "مسلسل Sherlock", "فيلم The Shining", "شخصية فورست غامب (Forrest Gump)", "فيلم Indiana Jones", "مسلسل The Last of Us",
    "فيلم The Silence of the Lambs", "شخصية فرودو (Lord of the Rings)", "فيلم The Truman Show", "مسلسل Lost", "فيلم Psycho",
    "فيلم A Quiet Place", "شخصية غولوم (Gollum)", "فيلم Cast Away", "مسلسل Dexter", "فيلم Kill Bill"
  ]
};

// All foreign art items combined
export const foreignArtList: string[] = [
  ...foreignArtQuestions[200],
  ...foreignArtQuestions[400],
  ...foreignArtQuestions[600]
];

// Helper to generate a Question object
const createForeignArtQuestion = (item: string, pts: number, idSuffix: string): Question => {
  const pool = foreignArtQuestions[pts] || foreignArtList;
  const otherOptions = pool
    .filter((w) => w !== item)
    .sort(() => (idSuffix.length % 3) - 1)
    .slice(0, 3);

  const options = [item, ...otherOptions].sort(() => (item.length % 2 === 0 ? 1 : -1));

  return {
    id: `wk_for_${pts}_${idSuffix}`,
    points: pts,
    category: 'ولا كلمة فن أجنبي',
    question: 'امسح الباركود للحصول على السؤال',
    options: options,
    correctAnswer: item, // النص الصريح المباشر Plain Text
    explanation: `العمل أو الشخصية الأجنبية المطلوب تمثيلها: ${item}`,
    hint: `عمل أو شخصية عالمية (${item})`
  };
};

// Generate full 100 questions for the 100-bank:
// 34 questions at 200 pts, 33 questions at 400 pts, 33 questions at 600 pts
export const walaKelmaForeignArtQuestions: Question[] = Array.from({ length: 100 }, (_, index) => {
  const qNum = index + 1;
  let pts = 200;
  let pool = foreignArtQuestions[200];
  if (qNum > 34 && qNum <= 67) {
    pts = 400;
    pool = foreignArtQuestions[400];
  } else if (qNum > 67) {
    pts = 600;
    pool = foreignArtQuestions[600];
  }

  const selectedItem = pool[(qNum - 1) % pool.length];
  return createForeignArtQuestion(selectedItem, pts, String(qNum).padStart(3, '0'));
});
