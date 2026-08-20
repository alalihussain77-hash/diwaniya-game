import { Question } from '../types';
import { walaKelmaGeneralQuestions, rawQrCodeQuestions, generalQuestions, wordList } from './walaKelmaGeneralData';
import { walaKelmaWrestlingQuestions, wrestlersList, wrestlingQuestions } from './walaKelmaWrestlingData';
import { walaKelmaAnimeQuestions, animeList, animeQuestions } from './walaKelmaAnimeData';
import { walaKelmaMediaQuestions, mediaList, mediaQuestions } from './walaKelmaMediaData';
import { walaKelmaForeignArtQuestions, foreignArtList, foreignArtQuestions } from './walaKelmaForeignArtData';
import { walaKelmaProverbsQuestions, proverbsList, proverbsQuestions } from './walaKelmaProverbsData';
import { walaKelmaFootballQuestions, footballList, footballQuestions } from './walaKelmaFootballData';
export {
  walaKelmaGeneralQuestions,
  rawQrCodeQuestions,
  generalQuestions,
  wordList,
  walaKelmaWrestlingQuestions,
  wrestlersList,
  wrestlingQuestions,
  walaKelmaAnimeQuestions,
  animeList,
  animeQuestions,
  walaKelmaMediaQuestions,
  mediaList,
  mediaQuestions,
  walaKelmaForeignArtQuestions,
  foreignArtList,
  foreignArtQuestions,
  walaKelmaProverbsQuestions,
  proverbsList,
  proverbsQuestions,
  walaKelmaFootballQuestions,
  footballList,
  footballQuestions
};

// 1. ولا كلمة كروية
export const walaKelmaSportsQuestions: Question[] = [
  {
    id: 'wk_spo_200_001',
    points: 200,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: اسم اللاعب الأسطوري (كريستيانو رونالدو) مع احتفاليته الشهيرة "Siuuu"!',
    options: ['كريستيانو رونالدو', 'ليونيل ميسي', 'نيمار دا سيلفا', 'كريم بنزيما'],
    correctAnswer: 'كريستيانو رونالدو',
    explanation: 'كريستيانو رونالدو النجم البرتغالي واحتفاليته الشهيرة بالقفز والدوران وصرخة Siuuu.',
    hint: 'الدون واحتفالية القفز الشهيرة'
  },
  {
    id: 'wk_spo_200_002',
    points: 200,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: حركة (ضربة مقصية هوائية - دبل كيك) في كرة القدم!',
    options: ['ضربة مقصية (دبل كيك)', 'ضربة جزاء', 'ركلة حرة مباشرة', 'رمية تماس'],
    correctAnswer: 'ضربة مقصية (دبل كيك)',
    explanation: 'الضربة الهوائية المزدوجة بالقفز في الهواء وركل الكرة بالخلف.',
    hint: 'حركة بهلوانية في الهواء لتسجيل هدف'
  },
  {
    id: 'wk_spo_300_003',
    points: 300,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: اسم النجم الأرجنتيني (ليونيل ميسي) وهو يراوغ ويرفع يديه للسماء!',
    options: ['ليونيل ميسي', 'دييغو مارادونا', 'لوكا مودريتش', 'أنخيل دي ماريا'],
    correctAnswer: 'ليونيل ميسي',
    explanation: 'البرغوث الأرجنتيني واحتفاليته برفع السبابتين إلى السماء إهداءً لجدته.',
    hint: 'البرغوث ورفع الأصابع للسماء'
  },
  {
    id: 'wk_spo_300_004',
    points: 300,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: وظيفة (حكم المباراة وهو يشهر البطاقة الحمراء ويطرد اللاعب)!',
    options: ['إشهار البطاقة الحمراء والطرد', 'احتساب تسلل', 'تنفيذ ركلة ركنية', 'تقنية الفار VAR'],
    correctAnswer: 'إشهار البطاقة الحمراء والطرد',
    explanation: 'يقوم الحكم بالركض نحو اللاعب وإخراج البطاقة الحمراء من جيبه والإشارة للخارج.',
    hint: 'كرت أحمر وإشارة بالخروج من الملعب'
  },
  {
    id: 'wk_spo_400_005',
    points: 400,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: المدرب الشهير (بيب غوارديولا) وهو يوجه بحرارة ويتحسر ممسكاً برأسه الصلعاء!',
    options: ['بيب غوارديولا', 'جوزيه مورينيو', 'يورغن كلوب', 'كارلو أنشيلوتي'],
    correctAnswer: 'بيب غوارديولا',
    explanation: 'بيب غوارديولا وتوجيهاته العصبية المستمرة على خط التماس ولمس رأسه.',
    hint: 'مدرب مانشستر سيتي الأصلع وتوجيهاته الدائمة'
  },
  {
    id: 'wk_spo_400_006',
    points: 400,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: حركة (نطحة زين الدين زيدان لماتيراتزي) في نهائي كأس العالم 2006!',
    options: ['نطحة زيدان', 'يد مارادونا', 'عضة سواريز', 'تصدي الحارس هيغيتا'],
    correctAnswer: 'نطحة زيدان',
    explanation: 'اللقطة التاريخية عندما التفت زيدان ونطح ماتيراتزي برأسه في صدره.',
    hint: 'نهائي مونديال 2006 ونطحة بالرأس'
  },
  {
    id: 'wk_spo_500_007',
    points: 500,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: المهاجم (لويس سواريز) وهو يقوم بحركة (العضة الشهيرة في الكتف)!',
    options: ['عضة لويس سواريز', 'غمزة كريستيانو', 'تمثيل نيمار', 'رقصة غريزمان'],
    correctAnswer: 'عضة لويس سواريز',
    explanation: 'عضة سواريز الشهيرة لمدافع إيطاليا كيليني في كأس العالم 2014.',
    hint: 'حركة بالأسنان على كتف الخصم'
  },
  {
    id: 'wk_spo_600_008',
    points: 600,
    category: 'ولا كلمة كروية',
    question: 'مثّل بالصامت: حركة الحارس الكولومبي رينيه هيغيتا (صدة العقرب)!',
    options: ['صدة العقرب (هيغيتا)', 'رمية التماس البهلوانية', 'ركلة بانينكا', 'تصدى بوجدار دفاعي'],
    correctAnswer: 'صدة العقرب (هيغيتا)',
    explanation: 'القفز للأمام ورفع القدمين من الخلف لصد الكرة مثل ذيل العقرب.',
    hint: 'حركة حارس المرمى الكولومبي الشبيهة بذيل الحشرة السامة'
  }
];

// 4. ولا كلمة (الفن الكويتي والعربي الأصيل)
export const walaKelmaOriginalQuestions: Question[] = [
  {
    id: 'wk_cla_200_001',
    points: 200,
    category: 'ولا كلمة',
    question: 'مثّل بالصامت المسلسل الكويتي الأسطوري: (درب الزلق)!',
    options: ['درب الزلق', 'خالتي قماشة', 'رقية وسبيكة', 'الأقدار'],
    correctAnswer: 'درب الزلق',
    explanation: 'مسلسل درب الزلق (عبدالحسين عبدالرضا وسعد الفرج وشراء لحم الكلاب والأهرامات).',
    hint: 'طريق فيه زحلقة ومسلسل كويتي شهير بحسين بن عاقول'
  },
  {
    id: 'wk_cla_200_002',
    points: 200,
    category: 'ولا كلمة',
    question: 'مثّل بالصامت المسرحية الكويتية الشهيرة: (باي باي لندن)!',
    options: ['باي باي لندن', 'سيف العرب', 'فرسان المناخ', 'حامي الديار'],
    correctAnswer: 'باي باي لندن',
    explanation: 'مسرحية باي باي لندن (شاشتين وبشت وبرد لندن وساعة بيغ بن).',
    hint: 'تلويح باليد وداعا وعاصمة الضباب وساعة بيغ بن'
  },
  {
    id: 'wk_cla_300_003',
    points: 300,
    category: 'ولا كلمة',
    question: 'مثّل بالصامت المسلسل الكوميدي: (خالتي قماشة) وكاميرات المراقبة في البيت!',
    options: ['خالتي قماشة', 'خرج ولم يعد', 'على الدنيا السلام', 'سليمان الطيب'],
    correctAnswer: 'خالتي قماشة',
    explanation: 'خالتي قماشة وشاشات المراقبة السرية لزوجات أولادها.',
    hint: 'قطعة قماش وشاشات تجسس ومراقبة'
  },
  {
    id: 'wk_cla_300_004',
    points: 300,
    category: 'ولا كلمة',
    question: 'مثّل بالصامت المسرحية الكوميدية الخالدة: (مدرسة المشاغبين)!',
    options: ['مدرسة المشاغبين', 'العيال كبرت', 'الزعيم', 'شاهد ماشفش حاجة'],
    correctAnswer: 'مدرسة المشاغبين',
    explanation: 'مسرحية مدرسة المشاغبين (عادل إمام وسعيد صالح ويونس شلبي وأحمد زكي مع المعلمة).',
    hint: 'فصل دراسي وطلاب يرمون الأوراق ويشاغبون'
  },
  {
    id: 'wk_cla_400_005',
    points: 400,
    category: 'ولا كلمة',
    question: 'مثّل بالصامت المسرحية الشهيرة: (العيال كبرت) وشخصية سلطان ورمضان السكري!',
    options: ['العيال كبرت', 'المتزوجون', 'الواد سيد الشغال', 'هاللو شلبي'],
    correctAnswer: 'العيال كبرت',
    explanation: 'مسرحية العيال كبرت ومحاولة الأبناء منع والدهم رمضان السكري من الزواج والهروب.',
    hint: 'أطفال صغار يكبرون ويمنعون والدهم من السفر'
  },
  {
    id: 'wk_cla_500_006',
    points: 500,
    category: 'ولا كلمة',
    question: 'مثّل بالصامت المسلسل الكويتي الكلاسيكي: (خرج ولم يعد) وسفرة غنيمة والحمام المحشي!',
    options: ['خرج ولم يعد', 'إلى أبي وأمي مع التحية', 'درس خصوصي', 'الغرباء (كامل الأوصاف)'],
    correctAnswer: 'خرج ولم يعد',
    explanation: 'مسلسل خرج ولم يعد والأكل الفلاحي الدسم والحياة البسيطة مع دلال وزوجها.',
    hint: 'خروج من الباب وعدم الرجوع وأكل بط ودجاج بكثرة'
  },
  {
    id: 'wk_cla_600_007',
    points: 600,
    category: 'ولا كلمة',
    question: 'مثّل بالصامت المسلسل الكوميدي: (رقية وسبيكة) ومشروع بوسطة وسيارات وذهب وفساتين!',
    options: ['رقية وسبيكة', 'سوق المقاصيص', 'قاصد خير', 'عتيج الصوف'],
    correctAnswer: 'رقية وسبيكة',
    explanation: 'سعاد عبدالله وحياة الفهد في رقية وسبيكة والثراء المفاجئ ثم الخسارة.',
    hint: 'أختان تبيعان الملابس ثم تصبحان مليونيرتين'
  }
];
