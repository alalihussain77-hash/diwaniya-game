import { Question } from '../types';
import { persistentStorage } from '../utils/persistentStorage';
import { INITIAL_CATEGORIES } from './categories';
import { historyBatch1 } from './historyBatch1';
import { historyBatch2 } from './historyBatch2';
import { historyBatch3 } from './historyBatch3';
import { historyBatch4 } from './historyBatch4';
import { generalKnowledgeBatch1 } from './generalKnowledgeBatch1';
import { generalKnowledgeBatch2 } from './generalKnowledgeBatch2';
import { generalKnowledgeBatch3 } from './generalKnowledgeBatch3';
import { generalKnowledgeBatch4 } from './generalKnowledgeBatch4';
import { breakingBad100Questions } from './breakingBad100Questions';
import { breakingBadPart2 } from './breakingBadPart2';
import { turkishDramaQuestions } from './turkishDramaQuestions';
import { turkishDramaQuestionsBatch2 } from './turkishDramaQuestionsBatch2';
import { cukur100Questions } from './cukurQuestions';
import { kurulusOsman100Questions } from './kurulusOsmanQuestions';
import { esrefRuya100Questions } from './esrefRuyaQuestions';
import { ertugrul100Questions } from './ertugrulQuestions';
import { flags100Questions } from './flagsQuestions';
import { capitals100Questions } from './capitalsQuestions';
import { oldFlags100Questions } from './oldFlagsQuestions';
import { sports100Questions } from './sportsQuestions';
import { riddles100Questions } from './riddlesQuestions';
import { carsQuestionDataList, cars100Questions, getAllCarQuestions } from './carsQuestions';
import { seerah100Questions } from './seerahQuestions';
import { theWalkingDead100Questions } from './theWalkingDeadQuestions';
import { gameOfThrones100Questions } from './gameOfThronesQuestions';
import { peakyBlinders100Questions } from './peakyBlinders100Questions';
import { marvel100Questions } from './marvel100Questions';
import { onePiece100Questions } from './onePiece100Questions';
import { pokemon100Questions } from './pokemon100Questions';
import { anime100Questions } from './anime100Questions';
import {
  walaKelmaGeneralQuestions,
  wordList,
  generalQuestions,
} from './walaKelmaGeneralData';
import {
  wrestlersList,
  wrestlingQuestions,
} from './walaKelmaWrestlingData';
import {
  animeList,
  animeQuestions,
} from './walaKelmaAnimeData';
import {
  mediaList,
  mediaQuestions,
  walaKelmaMediaQuestions,
} from './walaKelmaMediaData';
import {
  foreignArtList,
  foreignArtQuestions,
  walaKelmaForeignArtQuestions,
} from './walaKelmaForeignArtData';
import {
  footballList,
  footballQuestions,
  walaKelmaFootballQuestions,
} from './walaKelmaFootballData';
import {
  proverbsList,
  proverbsQuestions,
  walaKelmaProverbsQuestions,
} from './walaKelmaProverbsData';
import { products100Questions } from './productsQuestions';
import {
  walaKelmaSportsQuestions,
  walaKelmaOriginalQuestions,
  walaKelmaAnimeQuestions,
  walaKelmaWrestlingQuestions,
} from './walaKelmaQuestions';

export { seerah100Questions, oldFlags100Questions, capitals100Questions, theWalkingDead100Questions, gameOfThrones100Questions };

// =========================================================================
// 100 QUESTIONS: ISLAMIC (إسلامي) - INLINE
// =========================================================================
export const islamic100Questions: Question[] = [
  // --- 200 نقطة (40 سؤالاً) ---
  { id: 'islamic_200_001', points: 200, category: 'إسلامي', question: 'ما هي أطول سورة في القرآن الكريم؟', correctAnswer: 'سورة البقرة', explanation: 'الإجابة الصحيحة هي: سورة البقرة', hint: 'تضم آية الكرسي وآية الدين وعدد آياتها 286 آية' },
  { id: 'islamic_200_002', points: 200, category: 'إسلامي', question: 'ما هي أقصر سورة في القرآن الكريم؟', correctAnswer: 'سورة الكوثر', explanation: 'الإجابة الصحيحة هي: سورة الكوثر', hint: 'عدد آياتها 3 آيات فقط' },
  { id: 'islamic_200_003', points: 200, category: 'إسلامي', question: 'كم عدد سور القرآن الكريم؟', correctAnswer: '114 سورة', explanation: 'الإجابة الصحيحة هي: 114 سورة', hint: 'تبدأ بسورة الفاتحة وتنتهي بسورة الناس' },
  { id: 'islamic_200_004', points: 200, category: 'إسلامي', question: 'ما هي السورة التي تسمى "عروس القرآن"؟', correctAnswer: 'سورة الرحمن', explanation: 'الإجابة الصحيحة هي: سورة الرحمن', hint: 'فيها الآية المكررة "فبأي آلاء ربكما تكذبان"' },
  { id: 'islamic_200_005', points: 200, category: 'إسلامي', question: 'ما هي السورة التي تعدل ثلث القرآن الكريم؟', correctAnswer: 'سورة الإخلاص', explanation: 'الإجابة الصحيحة هي: سورة الإخلاص', hint: 'سورة "قل هو الله أحد"' },
  { id: 'islamic_200_006', points: 200, category: 'إسلامي', question: 'من هو أول الأنبياء والرسل؟', correctAnswer: 'آدم عليه السلام', explanation: 'الإجابة الصحيحة هي: آدم عليه السلام', hint: 'أبو البشر وخلقه الله من طين' },
  { id: 'islamic_200_007', points: 200, category: 'إسلامي', question: 'من هو خليل الله؟', correctAnswer: 'إبراهيم عليه السلام', explanation: 'الإجابة الصحيحة هي: إبراهيم عليه السلام', hint: 'باني الكعبة المشرفة وأبو الأنبياء' },
  { id: 'islamic_200_008', points: 200, category: 'إسلامي', question: 'من هو النبي الذي لُقب بـ "كليم الله"؟', correctAnswer: 'موسى عليه السلام', explanation: 'الإجابة الصحيحة هي: موسى عليه السلام', hint: 'الذي كلمه الله تعالى عند جبل الطور' },
  { id: 'islamic_200_009', points: 200, category: 'إسلامي', question: 'ما اسم المرضعة التي أرضعت النبي محمد ﷺ؟', correctAnswer: 'حليمة السعدية', explanation: 'الإجابة الصحيحة هي: حليمة السعدية', hint: 'من بني سعد' },
  { id: 'islamic_200_010', points: 200, category: 'إسلامي', question: 'من هي أول زوجات النبي محمد ﷺ؟', correctAnswer: 'خديجة بنت خويلد رضي الله عنها', explanation: 'الإجابة الصحيحة هي: خديجة بنت خويلد رضي الله عنها', hint: 'أم المؤمنين وأول من آمن بالنبي ﷺ من النساء' },
  { id: 'islamic_200_011', points: 200, category: 'إسلامي', question: 'من هو الصحابي الملقب بـ "الصديق"؟', correctAnswer: 'أبو بكر الصديق رضي الله عنه', explanation: 'الإجابة الصحيحة هي: أبو بكر الصديق رضي الله عنه', hint: 'أول الخلفاء الراشدين ورفيق الهجرة' },
  { id: 'islamic_200_012', points: 200, category: 'إسلامي', question: 'من هو الفاروق؟', correctAnswer: 'عمر بن الخطاب رضي الله عنه', explanation: 'الإجابة الصحيحة هي: عمر بن الخطاب رضي الله عنه', hint: 'ثاني الخلفاء الراشدين الذي فرق الله به بين الحق والباطل' },
  { id: 'islamic_200_013', points: 200, category: 'إسلامي', question: 'من هو الصحابي الملقب بـ "ذو النورين"؟', correctAnswer: 'عثمان بن عفان رضي الله عنه', explanation: 'الإجابة الصحيحة هي: عثمان بن عفان رضي الله عنه', hint: 'ثالث الخلفاء الراشدين وتزوج ابنتي النبي ﷺ رقية وأم كلثوم' },
  { id: 'islamic_200_014', points: 200, category: 'إسلامي', question: 'من هو باب مدينة العلم وعليها لُقب كرم الله وجهه؟', correctAnswer: 'علي بن أبي طالب رضي الله عنه', explanation: 'الإجابة الصحيحة هي: علي بن أبي طالب رضي الله عنه', hint: 'رابع الخلفاء الراشدين وابن عم النبي وزوج فاطمة الزهراء' },
  { id: 'islamic_200_015', points: 200, category: 'إسلامي', question: 'كم عدد أركان الإسلام؟', correctAnswer: '5 أركان', explanation: 'الإجابة الصحيحة هي: 5 أركان', hint: 'بني الإسلام على خمس' },
  { id: 'islamic_200_016', points: 200, category: 'إسلامي', question: 'كم عدد أركان الإيمان؟', correctAnswer: '6 أركان', explanation: 'الإجابة الصحيحة هي: 6 أركان', hint: 'الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره' },
  { id: 'islamic_200_017', points: 200, category: 'إسلامي', question: 'ما هي القبلة الأولى للمسلمين؟', correctAnswer: 'المسجد الأقصى', explanation: 'الإجابة الصحيحة هي: المسجد الأقصى', hint: 'يقع في القدس الشريف قبل تحويل القبلة إلى الكعبة' },
  { id: 'islamic_200_018', points: 200, category: 'إسلامي', question: 'في أي مدينة يوجد المسجد النبوي؟', correctAnswer: 'المدينة المنورة', explanation: 'الإجابة الصحيحة هي: المدينة المنورة', hint: 'طيبة الطيبة ومدينة الرسول ﷺ' },
  { id: 'islamic_200_019', points: 200, category: 'إسلامي', question: 'ما هو أكبر مسجد في العالم؟', correctAnswer: 'المسجد الحرام بمكة المكرمة', explanation: 'الإجابة الصحيحة هي: المسجد الحرام بمكة المكرمة', hint: 'المسجد الذي تتوسطه الكعبة المشرفة' },
  { id: 'islamic_200_020', points: 200, category: 'إسلامي', question: 'ما هي السورة التي تسمى "قلب القرآن"؟', correctAnswer: 'سورة يس', explanation: 'الإجابة الصحيحة هي: سورة يس', hint: 'سورة تبدأ بحرفي "يس"' },
  { id: 'islamic_200_021', points: 200, category: 'إسلامي', question: 'كم سنة استمرت الدعوة الإسلامية في مكة المكرمة قبل الهجرة؟', correctAnswer: '13 سنة', explanation: 'الإجابة الصحيحة هي: 13 سنة', hint: 'من البعثة وحتى الهجرة النبوية للمدينة' },
  { id: 'islamic_200_022', points: 200, category: 'إسلامي', question: 'ما هي أول صلاة فرضت على المسلمين؟', correctAnswer: 'صلاة الظهر', explanation: 'الإجابة الصحيحة هي: صلاة الظهر', hint: 'صلاها جبريل عليه السلام بالنبي ﷺ بعد الإسراء والمعراج في منتصف النهار' },
  { id: 'islamic_200_023', points: 200, category: 'إسلامي', question: 'كم عدد الصلوات المفروضة في اليوم والليلة؟', correctAnswer: '5 صلوات', explanation: 'الإجابة الصحيحة هي: 5 صلوات', hint: 'الفجر والظهر والعصر والمغرب والعشاء' },
  { id: 'islamic_200_024', points: 200, category: 'إسلامي', question: 'ما هي معجزة النبي صالح عليه السلام؟', correctAnswer: 'الناقة', explanation: 'الإجابة الصحيحة هي: الناقة', hint: 'ناقة الله وسقياها لقوم ثمود' },
  { id: 'islamic_200_025', points: 200, category: 'إسلامي', question: 'ما هو شهر الصيام عند المسلمين؟', correctAnswer: 'شهر رمضان', explanation: 'الإجابة الصحيحة هي: شهر رمضان', hint: 'الشهر التاسع في التقويم الهجري وفيه ليلة القدر' },
  { id: 'islamic_200_026', points: 200, category: 'إسلامي', question: 'ما هي السورة التي تُقرأ في كل ركعة من الصلاة؟', correctAnswer: 'سورة الفاتحة', explanation: 'الإجابة الصحيحة هي: سورة الفاتحة', hint: 'السبع المثاني وافتتاحية المصحف الشريف' },
  { id: 'islamic_200_027', points: 200, category: 'إسلامي', question: 'ما هي المعجزة الخالدة للنبي محمد ﷺ؟', correctAnswer: 'القرآن الكريم', explanation: 'الإجابة الصحيحة هي: القرآن الكريم', hint: 'كلام الله المعجز المحفوظ إلى يوم القيامة' },
  { id: 'islamic_200_028', points: 200, category: 'إسلامي', question: 'من هو النبي الذي ابتلعه الحوت؟', correctAnswer: 'يونس عليه السلام', explanation: 'الإجابة الصحيحة هي: يونس عليه السلام', hint: 'صاحب الحوت وذو النون الذي سبح في بطن الحوت' },
  { id: 'islamic_200_029', points: 200, category: 'إسلامي', question: 'من هو النبي الذي بنى السفينة؟', correctAnswer: 'نوح عليه السلام', explanation: 'الإجابة الصحيحة هي: نوح عليه السلام', hint: 'نبي الله ونجا مع المؤمنين من الطوفان' },
  { id: 'islamic_200_030', points: 200, category: 'إسلامي', question: 'ما هو عيد المسلمين الذي يأتي بعد شهر رمضان مباشرة؟', correctAnswer: 'عيد الفطر', explanation: 'الإجابة الصحيحة هي: عيد الفطر', hint: 'يوافق أول أيام شهر شوال' },
  { id: 'islamic_200_031', points: 200, category: 'إسلامي', question: 'ما هو الشهر الهجري الذي يؤدى فيه مناسك الحج؟', correctAnswer: 'ذو الحجة', explanation: 'الإجابة الصحيحة هي: ذو الحجة', hint: 'الشهر الثاني عشر والأخير من السنة الهجرية' },
  { id: 'islamic_200_032', points: 200, category: 'إسلامي', question: 'من هي أم النبي محمد ﷺ؟', correctAnswer: 'آمنة بنت وهب', explanation: 'الإجابة الصحيحة هي: آمنة بنت وهب', hint: 'توفيت والنبي في صغره بالأبواء' },
  { id: 'islamic_200_033', points: 200, category: 'إسلامي', question: 'من هو والد النبي محمد ﷺ؟', correctAnswer: 'عبد الله بن عبد المطلب', explanation: 'الإجابة الصحيحة هي: عبد الله بن عبد المطلب', hint: 'توفي قبل ولادة النبي ﷺ' },
  { id: 'islamic_200_034', points: 200, category: 'إسلامي', question: 'ما هو جبل الذي وقوف الحجاج عليه يعد الركن الأكبر في الحج؟', correctAnswer: 'جبل عرفات', explanation: 'الإجابة الصحيحة هي: جبل عرفات', hint: 'الحج عرفة في اليوم التاسع من ذي الحجة' },
  { id: 'islamic_200_035', points: 200, category: 'إسلامي', question: 'كم عدد أجزاء القرآن الكريم؟', correctAnswer: '30 جزءاً', explanation: 'الإجابة الصحيحة هي: 30 جزءاً', hint: 'كل جزء يضم حزبين (60 حزباً إجمالاً)' },
  { id: 'islamic_200_036', points: 200, category: 'إسلامي', question: 'ما هي السورة التي تبدأ بدون "بسملة"؟', correctAnswer: 'سورة التوبة', explanation: 'الإجابة الصحيحة هي: سورة التوبة', hint: 'تسمى أيضاً سورة براءة' },
  { id: 'islamic_200_037', points: 200, category: 'إسلامي', question: 'ما هي السورة التي تحتوي على بسملتين؟', correctAnswer: 'سورة النمل', explanation: 'الإجابة الصحيحة هي: سورة النمل', hint: 'في بدايتها وفي الآية "إنه من سليمان وإنه بسم الله الرحمن الرحيم"' },
  { id: 'islamic_200_038', points: 200, category: 'إسلامي', question: 'من هو النبي الذي كان يفهم لغة الطير والحيوانات؟', correctAnswer: 'سليمان عليه السلام', explanation: 'الإجابة الصحيحة هي: سليمان عليه السلام', hint: 'ابن داود وسخرت له الرياح والجن' },
  { id: 'islamic_200_039', points: 200, category: 'إسلامي', question: 'ما اسم الخندق الذي حفره المسلمون في غزوة الأحزاب؟', correctAnswer: 'خندق المدينة', explanation: 'الإجابة الصحيحة هي: خندق المدينة', hint: 'حفر في شمال المدينة المنورة لحمايتها من الأحزاب' },
  { id: 'islamic_200_040', points: 200, category: 'إسلامي', question: 'ما هي السورة الملقبة بـ "أم الكتاب"؟', correctAnswer: 'سورة الفاتحة', explanation: 'الإجابة الصحيحة هي: سورة الفاتحة', hint: 'فاتحة الكتاب وأول سورة بالمصحف' },

  // --- 400 نقطة (35 سؤالاً) ---
  { id: 'islamic_400_041', points: 400, category: 'إسلامي', question: 'ما هي الغزوة الأولى في الإسلام؟', correctAnswer: 'غزوة الأبواء', explanation: 'الإجابة الصحيحة هي: غزوة الأبواء', hint: 'تسمى أيضاً غزوة ودّان' },
  { id: 'islamic_400_042', points: 400, category: 'إسلامي', question: 'ما هي أول غزوة كبرى بين المسلمين والمشركين؟', correctAnswer: 'غزوة بدر الكبرى', explanation: 'الإجابة الصحيحة هي: غزوة بدر الكبرى', hint: 'وقعت في 17 رمضان 2 هـ وسميت يوم الفرقان' },
  { id: 'islamic_400_043', points: 400, category: 'إسلامي', question: 'من هو الصحابي الذي أشار على النبي ﷺ بحفر الخندق؟', correctAnswer: 'سلمان الفارسي رضي الله عنه', explanation: 'الإجابة الصحيحة هي: سلمان الفارسي رضي الله عنه', hint: 'الباحث عن الحقيقة ومن أهل فارس' },
  { id: 'islamic_400_044', points: 400, category: 'إسلامي', question: 'من هو سيّف الله المسلول؟', correctAnswer: 'خالد بن الوليد رضي الله عنه', explanation: 'الإجابة الصحيحة هي: خالد بن الوليد رضي الله عنه', hint: 'القائد العسكري العظيم فاتح الشام واليرموك' },
  { id: 'islamic_400_045', points: 400, category: 'إسلامي', question: 'من هو الصحابي الملقب بـ "أمين هذه الأمة"؟', correctAnswer: 'أبو عبيدة بن الجراح رضي الله عنه', explanation: 'الإجابة الصحيحة هي: أبو عبيدة بن الجراح رضي الله عنه', hint: 'أحد العشرة المبشرين بالجنة وقائد جيوش الشام' },
  { id: 'islamic_400_046', points: 400, category: 'إسلامي', question: 'من هو الصحابي الملقب بـ "شاعر الرسول"؟', correctAnswer: 'حسان بن ثابت رضي الله عنه', explanation: 'الإجابة الصحيحة هي: حسان بن ثابت رضي الله عنه', hint: 'كان ينافح بشعره عن رسول الله ﷺ' },
  { id: 'islamic_400_047', points: 400, category: 'إسلامي', question: 'كم كان عمر النبي ﷺ عندما نزل عليه الوحي؟', correctAnswer: '40 سنة', explanation: 'الإجابة الصحيحة هي: 40 سنة', hint: 'في غار حراء ونزل عليه جبريل بأول الآيات' },
  { id: 'islamic_400_048', points: 400, category: 'إسلامي', question: 'في أي غار كان يتعبد النبي ﷺ عندما نزل عليه الوحي؟', correctAnswer: 'غار حراء', explanation: 'الإجابة الصحيحة هي: غار حراء', hint: 'يقع في جبل النور بمكة المكرمة' },
  { id: 'islamic_400_049', points: 400, category: 'إسلامي', question: 'ما اسم الغار الذي اختبأ فيه النبي ﷺ وأبو بكر أثناء الهجرة؟', correctAnswer: 'غار ثور', explanation: 'الإجابة الصحيحة هي: غار ثور', hint: 'مكثا فيه ثلاثة أيام أثناء رحلة الهجرة إلى المدينة' },
  { id: 'islamic_400_050', points: 400, category: 'إسلامي', question: 'من هو النبي الذي عُرف بـ "ذو النون"؟', correctAnswer: 'يونس عليه السلام', explanation: 'الإجابة الصحيحة هي: يونس عليه السلام', hint: 'النون هو الحوت وصاحب دعاء "لا إله إلا أنت سبحانك"' },
  { id: 'islamic_400_051', points: 400, category: 'إسلامي', question: 'من هي الصحابية الملقبة بـ "ذات النطاقين"؟', correctAnswer: 'أسماء بنت أبي بكر رضي الله عنها', explanation: 'الإجابة الصحيحة هي: أسماء بنت أبي بكر رضي الله عنها', hint: 'شقت نطاقها لحمل الزاد للنبي ﷺ وأبيها في الغار' },
  { id: 'islamic_400_052', points: 400, category: 'إسلامي', question: 'من هو أول من أمّ المسلمين في الصلاة بعد وفاة النبي ﷺ؟', correctAnswer: 'أبو بكر الصديق رضي الله عنه', explanation: 'الإجابة الصحيحة هي: أبو بكر الصديق رضي الله عنه', hint: 'أمره النبي بالصلاة في مرضه وبايعه الصحابة خليفة' },
  { id: 'islamic_400_053', points: 400, category: 'إسلامي', question: 'ما هي السورة التي ذكرت فيها آية الكرسي؟', correctAnswer: 'سورة البقرة', explanation: 'الإجابة الصحيحة هي: سورة البقرة', hint: 'الآية رقم 255 من السورة' },
  { id: 'islamic_400_054', points: 400, category: 'إسلامي', question: 'كم عدد الأحرف المقطعة في بداية سور القرآن؟', correctAnswer: '14 حرفاً', explanation: 'الإجابة الصحيحة هي: 14 حرفاً', hint: 'مجموعة في عبارة "نص حكيم قاطع له سر"' },
  { id: 'islamic_400_055', points: 400, category: 'إسلامي', question: 'ما هي السورة التي تنتهي جميع آياتها بحرف دال؟', correctAnswer: 'سورة الإخلاص', explanation: 'الإجابة الصحيحة هي: سورة الإخلاص', hint: 'أحد، الصمد، يلد، ولم يولد، كفواً أحد' },
  { id: 'islamic_400_056', points: 400, category: 'إسلامي', question: 'من هو المَلَك الموكل بالوحي؟', correctAnswer: 'جبريل عليه السلام', explanation: 'الإجابة الصحيحة هي: جبريل عليه السلام', hint: 'الروح الأمين ورسول الملائكة إلى الرسل' },
  { id: 'islamic_400_057', points: 400, category: 'إسلامي', question: 'من هو المَلَك الموكل بالنفخ في الصور؟', correctAnswer: 'إسرافيل عليه السلام', explanation: 'الإجابة الصحيحة هي: إسرافيل عليه السلام', hint: 'ينفخ نفخة الصعق ونفخة البعث والنشور' },
  { id: 'islamic_400_058', points: 400, category: 'إسلامي', question: 'ما هي أطول آية في القرآن الكريم؟', correctAnswer: 'آية الدين', explanation: 'الإجابة الصحيحة هي: آية الدين', hint: 'الآية 282 في سورة البقرة "يا أيها الذين آمنوا إذا تداينتم بدين..."' },
  { id: 'islamic_400_059', points: 400, category: 'إسلامي', question: 'ما هي السورة التي تسمى سورة "بني إسرائيل"؟', correctAnswer: 'سورة الإسراء', explanation: 'الإجابة الصحيحة هي: سورة الإسراء', hint: 'تبدأ بـ "سبحان الذي أسرى بعبده ليلاً من المسجد الحرام إلى المسجد الأقصى"' },
  { id: 'islamic_400_060', points: 400, category: 'إسلامي', question: 'من هو النبي الذي أعطي شطر الحسن؟', correctAnswer: 'يوسف عليه السلام', explanation: 'الإجابة الصحيحة هي: يوسف عليه السلام', hint: 'ابن يعقوب وصاحب الرؤيا وإخوته ألقوه في الجب' },
  { id: 'islamic_400_061', points: 400, category: 'إسلامي', question: 'من هو المؤذن الأول في الإسلام؟', correctAnswer: 'بلال بن رباح رضي الله عنه', explanation: 'الإجابة الصحيحة هي: بلال بن رباح رضي الله عنه', hint: 'مؤذن الرسول ﷺ وصاحب "أحد أحد"' },
  { id: 'islamic_400_062', points: 400, category: 'إسلامي', question: 'في أي سنة هجرية وقعت غزوة بدر؟', correctAnswer: 'السنة 2 هجرية', explanation: 'الإجابة الصحيحة هي: السنة 2 هجرية', hint: 'في 17 رمضان للسنة الثانية من الهجرة' },
  { id: 'islamic_400_063', points: 400, category: 'إسلامي', question: 'في أي سنة هجرية تم فتح مكة؟', correctAnswer: 'السنة 8 هجرية', explanation: 'الإجابة الصحيحة هي: السنة 8 هجرية', hint: 'في شهر رمضان للسنة الثامنة للهجرة' },
  { id: 'islamic_400_064', points: 400, category: 'إسلامي', question: 'ما اسم ناقة النبي محمد ﷺ التي هاجر عليها؟', correctAnswer: 'القصواء', explanation: 'الإجابة الصحيحة هي: القصواء', hint: 'بركت عند موضع المسجد النبوي الشريف' },
  { id: 'islamic_400_065', points: 400, category: 'إسلامي', question: 'من هو الصحابي الذي تستحي منه الملائكة؟', correctAnswer: 'عثمان بن عفان رضي الله عنه', explanation: 'الإجابة الصحيحة هي: عثمان بن عفان رضي الله عنه', hint: 'قال عنه النبي ﷺ: "ألا أستحي من رجل تستحي منه الملائكة"' },
  { id: 'islamic_400_066', points: 400, category: 'إسلامي', question: 'من هو النبي الذي صام عن الكلام ثلاثة أيام؟', correctAnswer: 'زكريا عليه السلام', explanation: 'الإجابة الصحيحة هي: زكريا عليه السلام', hint: 'آية ولادة ابنه يحيى عليه السلام' },
  { id: 'islamic_400_067', points: 400, category: 'إسلامي', question: 'من هي المرأة التي نزلت فيها سورة المجادلة؟', correctAnswer: 'خولة بنت ثعلبة', explanation: 'الإجابة الصحيحة هي: خولة بنت ثعلبة', hint: 'قد سمع الله قول التي تجادلك في زوجها وتشتكي إلى الله' },
  { id: 'islamic_400_068', points: 400, category: 'إسلامي', question: 'كم عدد السجدات في القرآن الكريم؟', correctAnswer: '15 سجدة', explanation: 'الإجابة الصحيحة هي: 15 سجدة', hint: 'سجدات التلاوة في المصحف الشريف' },
  { id: 'islamic_400_069', points: 400, category: 'إسلامي', question: 'ما هو الاسم الثاني لمدينة يثرب بعد هجرة النبي إليها؟', correctAnswer: 'المدينة المنورة', explanation: 'الإجابة الصحيحة هي: المدينة المنورة', hint: 'طيبة الطيبة ومدينة رسول الله ﷺ' },
  { id: 'islamic_400_070', points: 400, category: 'إسلامي', question: 'من هو الصحابي الذي أمره أبو بكر بجمع القرآن الكريم؟', correctAnswer: 'زيد بن ثابت رضي الله عنه', explanation: 'الإجابة الصحيحة هي: زيد بن ثابت رضي الله عنه', hint: 'كاتب الوحي وجامع القرآن في عهد أبي بكر وعثمان' },
  { id: 'islamic_400_071', points: 400, category: 'إسلامي', question: 'كم كان عدد المسلمين في غزوة بدر؟', correctAnswer: '313 رجلاً', explanation: 'الإجابة الصحيحة هي: 313 رجلاً', hint: 'بضعة عشر وثلاثمائة مقاتل' },
  { id: 'islamic_400_072', points: 400, category: 'إسلامي', question: 'ما اسم المكان الذي جمع فيه الرسول المسلمين في خطبة الوداع؟', correctAnswer: 'جبل عرفة', explanation: 'الإجابة الصحيحة هي: جبل عرفة', hint: 'في صعيد عرفات وبطن وادي عُرنة' },
  { id: 'islamic_400_073', points: 400, category: 'إسلامي', question: 'من هي آخر زوجات النبي ﷺ وفاةً؟', correctAnswer: 'أم سلمة رضي الله عنها', explanation: 'الإجابة الصحيحة هي: أم سلمة رضي الله عنها', hint: 'هند بنت أبي أمية وتوفيت سنة 62 هـ' },
  { id: 'islamic_400_074', points: 400, category: 'إسلامي', question: 'ما اسم المعركة التي لقبت بـ "فتح الفتوح"؟', correctAnswer: 'معركة نهاوند', explanation: 'الإجابة الصحيحة هي: معركة نهاوند', hint: 'وقعت سنة 21 هـ وأنهت الوجود الساساني الفارس' },
  { id: 'islamic_400_075', points: 400, category: 'إسلامي', question: 'من هو النبي الذي دعا ربه "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ"؟', correctAnswer: 'أيوب عليه السلام', explanation: 'الإجابة الصحيحة هي: أيوب عليه السلام', hint: 'ضرب به المثل في الصبر على البلاء والمرض' },

  // --- 600 نقطة (25 سؤالاً) ---
  { id: 'islamic_600_076', points: 600, category: 'إسلامي', question: 'من هو الصحابي الوحيد الذي ذُكر اسمه صراحة في القرآن الكريم؟', correctAnswer: 'زيد بن حارثة رضي الله عنه', explanation: 'الإجابة الصحيحة هي: زيد بن حارثة رضي الله عنه', hint: 'في سورة الأحزاب: "فلما قضى زيد منها وطراً زوجناكها"' },
  { id: 'islamic_600_077', points: 600, category: 'إسلامي', question: 'ما هي السورة التي تسمى "سورة القتال"؟', correctAnswer: 'سورة محمد', explanation: 'الإجابة الصحيحة هي: سورة محمد', hint: 'سورة مدنية سميت باسم النبي الكريم' },
  { id: 'islamic_600_078', points: 600, category: 'إسلامي', question: 'ما هي السورة التي تسمى "سورة الحواريين"؟', correctAnswer: 'سورة الصف', explanation: 'الإجابة الصحيحة هي: سورة الصف', hint: 'فيها "يا أيها الذين آمنوا كونوا أنصار الله كما قال عيسى ابن مريم للحواريين"' },
  { id: 'islamic_600_079', points: 600, category: 'إسلامي', question: 'من هو الصحابي الذي اهتز لوفاته عرش الرحمن؟', correctAnswer: 'سعد بن معاذ رضي الله عنه', explanation: 'الإجابة الصحيحة هي: سعد بن معاذ رضي الله عنه', hint: 'سيد الأوس وحكم في بني قريظة بحكم الله ورسوله' },
  { id: 'islamic_600_080', points: 600, category: 'إسلامي', question: 'ما هما السورتان اللتان تسميان "الزهراوان"؟', correctAnswer: 'البقرة وآل عمران', explanation: 'الإجابة الصحيحة هي: البقرة وآل عمران', hint: 'تأتيان يوم القيامة كأنهما غمامتان تظلان صاحبهما' },
  { id: 'islamic_600_081', points: 600, category: 'إسلامي', question: 'ما هما السورتان اللتان تسميان "المعوذتين"؟', correctAnswer: 'الفلق والناس', explanation: 'الإجابة الصحيحة هي: الفلق والناس', hint: 'آخر سورتين في ترتيب المصحف الشريف' },
  { id: 'islamic_600_082', points: 600, category: 'إسلامي', question: 'من هو الغسيل الذي غسلته الملائكة عند شهادته؟', correctAnswer: 'حنظلة بن أبي عامر رضي الله عنه', explanation: 'الإجابة الصحيحة هي: حنظلة بن أبي عامر رضي الله عنه', hint: 'استشهد في غزوة أحد وهو جنب فغسلته الملائكة بين السماء والأرض' },
  { id: 'islamic_600_083', points: 600, category: 'إسلامي', question: 'من هو أول سفير في الإسلام؟', correctAnswer: 'مصعب بن عمير رضي الله عنه', explanation: 'الإجابة الصحيحة هي: مصعب بن عمير رضي الله عنه', hint: 'أرسله النبي ﷺ إلى يثرب (المدينة) ليعلم أهلها القرآن قبل الهجرة' },
  { id: 'islamic_600_084', points: 600, category: 'إسلامي', question: 'ما هي السورة التي نزلت لدفاع عن عائشة رضي الله عنها؟', correctAnswer: 'سورة النور', explanation: 'الإجابة الصحيحة هي: سورة النور', hint: 'في حادثة الإفك وبراءتها من فوق سبع سماوات' },
  { id: 'islamic_600_085', points: 600, category: 'إسلامي', question: 'كم عدد السور المكية في القرآن الكريم؟', correctAnswer: '86 سورة', explanation: 'الإجابة الصحيحة هي: 86 سورة', hint: 'التي نزلت قبل الهجرة النبوية إلى المدينة' },
  { id: 'islamic_600_086', points: 600, category: 'إسلامي', question: 'كم عدد السور المدنية في القرآن الكريم؟', correctAnswer: '28 سورة', explanation: 'الإجابة الصحيحة هي: 28 سورة', hint: 'التي نزلت بعد الهجرة النبوية إلى المدينة' },
  { id: 'islamic_600_087', points: 600, category: 'إسلامي', question: 'من هو الصحابي الملقب بـ "ترجمان القرآن" و "حبر الأمة"؟', correctAnswer: 'عبد الله بن عباس رضي الله عنهما', explanation: 'الإجابة الصحيحة هي: عبد الله بن عباس رضي الله عنهما', hint: 'ابن عم النبي ﷺ ودعا له: اللهم فقهه في الدين وعلمه التأويل' },
  { id: 'islamic_600_088', points: 600, category: 'إسلامي', question: 'من هو الصحابي الذي اقترح تقويم الهجرة النبوية؟', correctAnswer: 'عمر بن الخطاب رضي الله عنه', explanation: 'الإجابة الصحيحة هي: عمر بن الخطاب رضي الله عنه', hint: 'الفاروق وثاني الخلفاء الراشدين في عام 16 هـ' },
  { id: 'islamic_600_089', points: 600, category: 'إسلامي', question: 'ما اسم قائد المسلمين في معركة القادسية؟', correctAnswer: 'سعد بن أبي وقاص رضي الله عنه', explanation: 'الإجابة الصحيحة هي: سعد بن أبي وقاص رضي الله عنه', hint: 'خال النبي ﷺ وأحد العشرة المبشرين بالجنة' },
  { id: 'islamic_600_090', points: 600, category: 'إسلامي', question: 'ما اسم قائد المسلمين في معركة اليرموك؟', correctAnswer: 'خالد بن الوليد رضي الله عنه', explanation: 'الإجابة الصحيحة هي: خالد بن الوليد رضي الله عنه', hint: 'سيف الله المسلول وقاد المعركة الحاسمة ضد الروم' },
  { id: 'islamic_600_091', points: 600, category: 'إسلامي', question: 'ما هي السنة التي سميت بـ "عام الحزن"؟', correctAnswer: 'السنة التي توفي فيها أبو طالب والسيدة خديجة', explanation: 'الإجابة الصحيحة هي: السنة التي توفي فيها أبو طالب والسيدة خديجة', hint: 'العام العاشر من البعثة النبوية بمكة' },
  { id: 'islamic_600_092', points: 600, category: 'إسلامي', question: 'ما هي السورة التي عاتبت النبي ﷺ في صحابي أعمى؟', correctAnswer: 'سورة عبس', explanation: 'الإجابة الصحيحة هي: سورة عبس', hint: 'في الصحابي الجليل عبد الله بن أم مكتوم' },
  { id: 'islamic_600_093', points: 600, category: 'إسلامي', question: 'من هو خطيب النبي ﷺ؟', correctAnswer: 'ثابت بن قيس رضي الله عنه', explanation: 'الإجابة الصحيحة هي: ثابت بن قيس رضي الله عنه', hint: 'خطيب الأنصار وخطيب رسول الله ﷺ' },
  { id: 'islamic_600_094', points: 600, category: 'إسلامي', question: 'من هو النبي الذي بنى المسجد الأقصى بعد إبراهيم عليه السلام؟', correctAnswer: 'سليمان عليه السلام', explanation: 'الإجابة الصحيحة هي: سليمان عليه السلام', hint: 'جدد بناءه ودعا الله بثلاث' },
  { id: 'islamic_600_095', points: 600, category: 'إسلامي', question: 'ما اسم الملكين الموكلين بسؤال الميت في القبر؟', correctAnswer: 'منكر ونكير', explanation: 'الإجابة الصحيحة هي: منكر ونكير', hint: 'يسألان الميت: من ربك؟ وما دينك؟ ومن نبيك؟' },
  { id: 'islamic_600_096', points: 600, category: 'إسلامي', question: 'ما هي السورة التي حث النبي النساء على تعلمها؟', correctAnswer: 'سورة النور', explanation: 'الإجابة الصحيحة هي: سورة النور', hint: 'لما فيها من آداب الحجاب والبيوت والعفاف' },
  { id: 'islamic_600_097', points: 600, category: 'إسلامي', question: 'كم عدد رسل وأنبياء المذكورين بالاسم في القرآن الكريم؟', correctAnswer: '25 نبياً ورسولاً', explanation: 'الإجابة الصحيحة هي: 25 نبياً ورسولاً', hint: 'منهم آدم ونوح وإبراهيم وموسى وعيسى ومحمد عليهم الصلاة والسلام' },
  { id: 'islamic_600_098', points: 600, category: 'إسلامي', question: 'ما هي السورة التي تحوي آية تجمعت فيها كافة حروف اللغة العربية؟', correctAnswer: 'سورة الفتح (الآية 29)', explanation: 'الإجابة الصحيحة هي: سورة الفتح (الآية 29)', hint: 'آية "مُحَمَّدٌ رَسُولُ اللَّهِ وَالَّذِينَ مَعَهُ أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ..."' },
  { id: 'islamic_600_099', points: 600, category: 'إسلامي', question: 'ما هي أول أية نزلت من القرآن الكريم؟', correctAnswer: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', explanation: 'الإجابة الصحيحة هي: اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', hint: 'بداية سورة العلق في غار حراء' },
  { id: 'islamic_600_100', points: 600, category: 'إسلامي', question: 'ما اسم الصحابي الذي رافق النبي ﷺ في رحلة الهجرة النبوية؟', correctAnswer: 'أبو بكر الصديق رضي الله عنه', explanation: 'الإجابة الصحيحة هي: أبو بكر الصديق رضي الله عنه', hint: 'ثاني اثنين إذ هما في الغار' },
];

// =========================================================================
// 100 QUESTIONS: QURAN (القرآن الكريم) - INLINE
// =========================================================================
export const quran100Questions: Question[] = [
  // --- 200 نقطة (40 سؤالاً) ---
  { id: 'quran_200_001', points: 200, category: 'القرآن الكريم', question: 'ما هي أعظم آية في القرآن الكريم؟', correctAnswer: 'آية الكرسي', explanation: 'الإجابة الصحيحة هي: آية الكرسي', hint: 'الآية 255 من سورة البقرة (الله لا إله إلا هو الحي القيوم)' },
  { id: 'quran_200_002', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "أم الكتاب"؟', correctAnswer: 'سورة الفاتحة', explanation: 'الإجابة الصحيحة هي: سورة الفاتحة', hint: 'فاتحة الكتاب والسبع المثاني' },
  { id: 'quran_200_003', points: 200, category: 'القرآن الكريم', question: 'كم عدد أجزاء القرآن الكريم؟', correctAnswer: '30 جزءاً', explanation: 'الإجابة الصحيحة هي: 30 جزءاً', hint: 'كل جزء يحتوي على حزبين (60 حزباً إجمالاً)' },
  { id: 'quran_200_004', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تعدل ربع القرآن؟', correctAnswer: 'سورة الكافرون', explanation: 'الإجابة الصحيحة هي: سورة الكافرون', hint: 'سورة "قل يا أيها الكافرون"' },
  { id: 'quran_200_005', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تعدل ثلث القرآن؟', correctAnswer: 'سورة الإخلاص', explanation: 'الإجابة الصحيحة هي: سورة الإخلاص', hint: 'سورة "قل هو الله أحد"' },
  { id: 'quran_200_006', points: 200, category: 'القرآن الكريم', question: 'كم عدد أحزاب القرآن الكريم؟', correctAnswer: '60 حزباً', explanation: 'الإجابة الصحيحة هي: 60 حزباً', hint: 'كل جزء من الـ 30 جزءاً يضم حزبين' },
  { id: 'quran_200_007', points: 200, category: 'القرآن الكريم', question: 'ما هي أطول سورة في القرآن الكريم؟', correctAnswer: 'سورة البقرة', explanation: 'الإجابة الصحيحة هي: سورة البقرة', hint: 'عدد آياتها 286 آية' },
  { id: 'quran_200_008', points: 200, category: 'القرآن الكريم', question: 'ما هي أقصر سورة في القرآن الكريم؟', correctAnswer: 'سورة الكوثر', explanation: 'الإجابة الصحيحة هي: سورة الكوثر', hint: 'عدد آياتها 3 آيات فقط' },
  { id: 'quran_200_009', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تبدأ بدون بسملة؟', correctAnswer: 'سورة التوبة', explanation: 'الإجابة الصحيحة هي: سورة التوبة', hint: 'تسمى أيضاً سورة براءة' },
  { id: 'quran_200_010', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تحتوي على بسملتين؟', correctAnswer: 'سورة النمل', explanation: 'الإجابة الصحيحة هي: سورة النمل', hint: 'في بدايتها وفي الآية 30 في كتاب سليمان عليه السلام' },
  { id: 'quran_200_011', points: 200, category: 'القرآن الكريم', question: 'كم عدد سور القرآن الكريم؟', correctAnswer: '114 سورة', explanation: 'الإجابة الصحيحة هي: 114 سورة', hint: 'تبدأ بالفاتحة وتنتهي بالناس' },
  { id: 'quran_200_012', points: 200, category: 'القرآن الكريم', question: 'ما هي أطول آية في القرآن الكريم؟', correctAnswer: 'آية الدين (في سورة البقرة)', explanation: 'الإجابة الصحيحة هي: آية الدين (في سورة البقرة)', hint: 'الآية رقم 282 من سورة البقرة' },
  { id: 'quran_200_013', points: 200, category: 'القرآن الكريم', question: 'في أي سورة توجد "آية الكرسي"؟', correctAnswer: 'سورة البقرة', explanation: 'الإجابة الصحيحة هي: سورة البقرة', hint: 'الآية رقم 255 من سورة البقرة' },
  { id: 'quran_200_014', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "قلب القرآن"؟', correctAnswer: 'سورة يس', explanation: 'الإجابة الصحيحة هي: سورة يس', hint: 'تبدأ بالحرفين المقطعين "يس"' },
  { id: 'quran_200_015', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "عروس القرآن"؟', correctAnswer: 'سورة الرحمن', explanation: 'الإجابة الصحيحة هي: سورة الرحمن', hint: 'فيها "فبأي آلاء ربكما تكذبان"' },
  { id: 'quran_200_016', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة بني إسرائيل"؟', correctAnswer: 'سورة الإسراء', explanation: 'الإجابة الصحيحة هي: سورة الإسراء', hint: 'تبدأ بـ "سبحان الذي أسرى بعبده ليلاً"' },
  { id: 'quran_200_017', points: 200, category: 'القرآن الكريم', question: 'ما هما السورتان اللتان تسميان "المعوذتين"؟', correctAnswer: 'الفلق والناس', explanation: 'الإجابة الصحيحة هي: الفلق والناس', hint: 'آخر سورتين في ترتيب المصحف الشريف' },
  { id: 'quran_200_018', points: 200, category: 'القرآن الكريم', question: 'ما هي أول سورة نزلت في القرآن الكريم؟', correctAnswer: 'سورة العلق', explanation: 'الإجابة الصحيحة هي: سورة العلق', hint: 'نزلت أول خمس آيات منها في غار حراء (اقرأ باسم ربك الذي خلق)' },
  { id: 'quran_200_019', points: 200, category: 'القرآن الكريم', question: 'ما اسم الغار الذي نزل فيه القرآن لأول مرة؟', correctAnswer: 'غار حراء', explanation: 'الإجابة الصحيحة هي: غار حراء', hint: 'يقع في جبل النور بمكة المكرمة' },
  { id: 'quran_200_020', points: 200, category: 'القرآن الكريم', question: 'كم عدد السجدات المفروضة في القرآن الكريم؟', correctAnswer: '15 سجدة', explanation: 'الإجابة الصحيحة هي: 15 سجدة', hint: 'سجدات التلاوة في المصحف الشريف' },
  { id: 'quran_200_021', points: 200, category: 'القرآن الكريم', question: 'في أي شهر نزل القرآن الكريم؟', correctAnswer: 'شهر رمضان', explanation: 'الإجابة الصحيحة هي: شهر رمضان', hint: 'شهر رمضان الذي أنزل فيه القرآن هدى للناس' },
  { id: 'quran_200_022', points: 200, category: 'القرآن الكريم', question: 'ما هي الليلة التي نزل فيها القرآن الكريم؟', correctAnswer: 'ليلة القدر', explanation: 'الإجابة الصحيحة هي: ليلة القدر', hint: 'إنا أنزلناه في ليلة القدر' },
  { id: 'quran_200_023', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة التوحيد"؟', correctAnswer: 'سورة الإخلاص', explanation: 'الإجابة الصحيحة هي: سورة الإخلاص', hint: 'قل هو الله أحد، الله الصمد' },
  { id: 'quran_200_024', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي سميت باسم امرأة؟', correctAnswer: 'سورة مريم', explanation: 'الإجابة الصحيحة هي: سورة مريم', hint: 'أم النبي عيسى عليه السلام' },
  { id: 'quran_200_025', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تبدأ بـ "تبارك الذي بيده الملك"؟', correctAnswer: 'سورة الملك', explanation: 'الإجابة الصحيحة هي: سورة الملك', hint: 'المنجية من عذاب القبر' },
  { id: 'quran_200_026', points: 200, category: 'القرآن الكريم', question: 'سورة المسبحات تبدأ بـ؟', correctAnswer: 'التسبيح (سبح، يسبح، سبحان)', explanation: 'الإجابة الصحيحة هي: التسبيح (سبح، يسبح، سبحان)', hint: 'السور التي تبتدئ بألفاظ تنزيه الله وتسبيحه' },
  { id: 'quran_200_027', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي سميت باسم معدن؟', correctAnswer: 'سورة الحديد', explanation: 'الإجابة الصحيحة هي: سورة الحديد', hint: 'وأنزلنا الحديد فيه بأس شديد ومنافع للناس' },
  { id: 'quran_200_028', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي سميت باسم ثمرة؟', correctAnswer: 'سورة التين', explanation: 'الإجابة الصحيحة هي: سورة التين', hint: 'والتين والزيتون وطور سينين' },
  { id: 'quran_200_029', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي سميت باسم وقت من أوقات اليوم؟', correctAnswer: 'سورة الفجر (أو العصر/الضحى)', explanation: 'الإجابة الصحيحة هي: سورة الفجر (أو العصر/الضحى)', hint: 'مثل الفجر والضحى والعصر والليل' },
  { id: 'quran_200_030', points: 200, category: 'القرآن الكريم', question: 'ما اسم السورة التي سميت باسم ظاهرة جوية؟', correctAnswer: 'سورة الرعد', explanation: 'الإجابة الصحيحة هي: سورة الرعد', hint: 'ويسبح الرعد بحمده والملائكة من خيفته' },
  { id: 'quran_200_031', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة السبع المثاني"؟', correctAnswer: 'سورة الفاتحة', explanation: 'الإجابة الصحيحة هي: سورة الفاتحة', hint: 'ولقد آتيناك سبعاً من المثاني والقرآن العظيم' },
  { id: 'quran_200_032', points: 200, category: 'القرآن الكريم', question: 'ما هي أول كلمة نزلت من القرآن الكريم؟', correctAnswer: 'اقرأ', explanation: 'الإجابة الصحيحة هي: اقرأ', hint: 'أول أمر بالتعلم والقراءة في غار حراء' },
  { id: 'quran_200_033', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي سميت باسم حشرة تنتج العسل؟', correctAnswer: 'سورة النحل', explanation: 'الإجابة الصحيحة هي: سورة النحل', hint: 'وأوحى ربك إلى النحل أن اتخذي من الجبال بيوتاً' },
  { id: 'quran_200_034', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي سميت باسم أكبر حشرة ذكرت في القرآن؟', correctAnswer: 'سورة النمل', explanation: 'الإجابة الصحيحة هي: سورة النمل', hint: 'قالت نملة يا أيها النمل ادخلوا مساكنكم' },
  { id: 'quran_200_035', points: 200, category: 'القرآن الكريم', question: 'ما اسم السورة التي سميت باسم طائر؟', correctAnswer: 'سورة الهدهد (أو الطير)', explanation: 'الإجابة الصحيحة هي: سورة الهدهد (أو الطير)', hint: 'ورد ذكره مع نبي الله سليمان عليه السلام' },
  { id: 'quran_200_036', points: 200, category: 'القرآن الكريم', question: 'كم عدد السور التي سميت بأسماء أوقات وأيام؟', correctAnswer: 'مثل الجمعة، الفجر، الليل، الضحى، العصر', explanation: 'الإجابة الصحيحة هي: مثل الجمعة، الفجر، الليل، الضحى، العصر', hint: 'سور كالفجر والعصر والجمعة والليل والضحى' },
  { id: 'quran_200_037', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي وردت فيها قصة أصحاب الكهف؟', correctAnswer: 'سورة الكهف', explanation: 'الإجابة الصحيحة هي: سورة الكهف', hint: 'يستحب قراءتها يوم الجمعة' },
  { id: 'quran_200_038', points: 200, category: 'القرآن الكريم', question: 'ما اسم الملك الموكل بنزول القرآن؟', correctAnswer: 'جبريل عليه السلام', explanation: 'الإجابة الصحيحة هي: جبريل عليه السلام', hint: 'الروح الأمين ورسول الوحي' },
  { id: 'quran_200_039', points: 200, category: 'القرآن الكريم', question: 'كم عدد سنوات نزول القرآن الكريم؟', correctAnswer: '23 سنة', explanation: 'الإجابة الصحيحة هي: 23 سنة', hint: '13 سنة بمكة و10 سنوات بالمدينة المنورة' },
  { id: 'quran_200_040', points: 200, category: 'القرآن الكريم', question: 'ما هي السورة التي تنتهي جميع آياتها بحرف السين؟', correctAnswer: 'سورة الناس', explanation: 'الإجابة الصحيحة هي: سورة الناس', hint: 'الناس، الخناس، الناس، الناس، والناس' },

  // --- 400 نقطة (35 سؤالاً) ---
  { id: 'quran_400_041', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تنجي صاحبها من عذاب القبر؟', correctAnswer: 'سورة الملك (التبارك)', explanation: 'الإجابة الصحيحة هي: سورة الملك (التبارك)', hint: 'سورة ثلاثون آية شفعت لرجل حتى غفر له' },
  { id: 'quran_400_042', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تشفع لمن قرأها حتى يغفر له؟', correctAnswer: 'سورة الملك', explanation: 'الإجابة الصحيحة هي: سورة الملك', hint: 'تبارك الذي بيده الملك' },
  { id: 'quran_400_043', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة القتال"؟', correctAnswer: 'سورة محمد', explanation: 'الإجابة الصحيحة هي: سورة محمد', hint: 'سورة مدنية سميت باسم الرسول الكريم ﷺ' },
  { id: 'quran_400_044', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة النعم" لكثرة النعم المذكورة فيها؟', correctAnswer: 'سورة النحل', explanation: 'الإجابة الصحيحة هي: سورة النحل', hint: 'وإن تعدوا نعمة الله لا تحصوها' },
  { id: 'quran_400_045', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تنتهي بأسماء نبيين؟', correctAnswer: 'سورة الأعلى (إبراهيم وموسى)', explanation: 'الإجابة الصحيحة هي: سورة الأعلى (إبراهيم وموسى)', hint: 'صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ' },
  { id: 'quran_400_046', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسميها الملائكة "المنجية"؟', correctAnswer: 'سورة الملك', explanation: 'الإجابة الصحيحة هي: سورة الملك', hint: 'المانعة والمنجية من عذاب القبر' },
  { id: 'quran_400_047', points: 400, category: 'القرآن الكريم', question: 'كم عدد السور المكية في القرآن الكريم؟', correctAnswer: '86 سورة', explanation: 'الإجابة الصحيحة هي: 86 سورة', hint: 'التي نزلت قبل الهجرة إلى المدينة' },
  { id: 'quran_400_048', points: 400, category: 'القرآن الكريم', question: 'كم عدد السور المدنية في القرآن الكريم؟', correctAnswer: '28 سورة', explanation: 'الإجابة الصحيحة هي: 28 سورة', hint: 'التي نزلت بعد الهجرة النبوية إلى المدينة' },
  { id: 'quran_400_049', points: 400, category: 'القرآن الكريم', question: 'ما هي آخر سورة نزلت كاملة من القرآن؟', correctAnswer: 'سورة النصر', explanation: 'الإجابة الصحيحة هي: سورة النصر', hint: 'إذا جاء نصر الله والفتح' },
  { id: 'quran_400_050', points: 400, category: 'القرآن الكريم', question: 'ما هي آخر آية نزلت من القرآن الكريم على الأرجح؟', correctAnswer: '﴿وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ﴾', explanation: 'الإجابة الصحيحة هي: ﴿وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ﴾', hint: 'الآية 281 من سورة البقرة' },
  { id: 'quran_400_051', points: 400, category: 'القرآن الكريم', question: 'ما اسم القارئ الذي أمره النبي ﷺ أن يقرأ عليه القرآن وقال "إني أحب أن أسمعه من غيري"؟', correctAnswer: 'عبد الله بن مسعود رضي الله عنه', explanation: 'الإجابة الصحيحة هي: عبد الله بن مسعود رضي الله عنه', hint: 'فقرأ عليه من أول سورة النساء حتى بكى النبي ﷺ' },
  { id: 'quran_400_052', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تحوي آية سجدة في آخر آية منها؟', correctAnswer: 'سورة الأعراف (أو العلق/النجم)', explanation: 'الإجابة الصحيحة هي: سورة الأعراف (أو العلق/النجم)', hint: 'مثل آخر سورة الأعراف والنجم والعلق (واسجد واقترب)' },
  { id: 'quran_400_053', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تبدأ بكلمة "ويل"؟', correctAnswer: 'سورة المطففين (أو الهمزة)', explanation: 'الإجابة الصحيحة هي: سورة المطففين (أو الهمزة)', hint: 'ويل للمطففين، أو ويل لكل همزة لمزة' },
  { id: 'quran_400_054', points: 400, category: 'القرآن الكريم', question: 'كم عدد الأحرف المقطعة في فواتح السور؟', correctAnswer: '14 حرفاً', explanation: 'الإجابة الصحيحة هي: 14 حرفاً', hint: 'مجموعة في جملة: نص حكيم قاطع له سر' },
  { id: 'quran_400_055', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي ذُكرت فيها القواعد الخمس للإسلام؟', correctAnswer: 'سورة البقرة', explanation: 'الإجابة الصحيحة هي: سورة البقرة', hint: 'أطول سور القرآن وجمعت أركان العقيدة والشريعة' },
  { id: 'quran_400_056', points: 400, category: 'القرآن الكريم', question: 'كم مرة ذكر اسم النبي "محمد" ﷺ في القرآن الكريم؟', correctAnswer: '4 مرات', explanation: 'الإجابة الصحيحة هي: 4 مرات', hint: 'في آل عمران والأحزاب ومحمد والفتح' },
  { id: 'quran_400_057', points: 400, category: 'القرآن الكريم', question: 'كم مرة ذكر اسم النبي "أحمد" في القرآن الكريم؟', correctAnswer: 'مرة واحدة (في سورة الصف)', explanation: 'الإجابة الصحيحة هي: مرة واحدة (في سورة الصف)', hint: 'ومبشراً برسول يأتي من بعدي اسمه أحمد' },
  { id: 'quran_400_058', points: 400, category: 'القرآن الكريم', question: 'من هو النبي الذي ذكر اسمه أكثر من غيره في القرآن الكريم؟', correctAnswer: 'موسى عليه السلام (136 مرة)', explanation: 'الإجابة الصحيحة هي: موسى عليه السلام (136 مرة)', hint: 'كليم الله وذكر في مواضع كثيرة' },
  { id: 'quran_400_059', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة الحواريين"؟', correctAnswer: 'سورة الصف', explanation: 'الإجابة الصحيحة هي: سورة الصف', hint: 'كما قال عيسى ابن مريم للحواريين من أنصاري إلى الله' },
  { id: 'quran_400_060', points: 400, category: 'القرآن الكريم', question: 'ما اسم السورة التي تحوي أطول كلمة في القرآن الكريم "فَأَسْقَيْنَاكُمُوهُ"؟', correctAnswer: 'سورة الحجر', explanation: 'الإجابة الصحيحة هي: سورة الحجر', hint: 'الآية رقم 22 من سورة الحجر' },
  { id: 'quran_400_061', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة الفاضحة" لفضحه المنافقين؟', correctAnswer: 'سورة التوبة', explanation: 'الإجابة الصحيحة هي: سورة التوبة', hint: 'تسمى أيضاً سورة براءة' },
  { id: 'quran_400_062', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي نزلت في ثعلبة بن حاطب؟', correctAnswer: 'سورة التوبة', explanation: 'الإجابة الصحيحة هي: سورة التوبة', hint: 'ومنهم من عاهد الله لئن آتانا من فضله لنصدقن' },
  { id: 'quran_400_063', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تبدأ بـ "حم عسق"؟', correctAnswer: 'سورة الشورى', explanation: 'الإجابة الصحيحة هي: سورة الشورى', hint: 'فواتح الحواميم ذات الحروف الخمسة' },
  { id: 'quran_400_064', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة الوحيدة التي ذكرت فيها فريضة الصيام؟', correctAnswer: 'سورة البقرة', explanation: 'الإجابة الصحيحة هي: سورة البقرة', hint: 'كتب عليكم الصيام كما كتب على الذين من قبلكم' },
  { id: 'quran_400_065', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة النساء الصغرى"؟', correctAnswer: 'سورة الطلاق', explanation: 'الإجابة الصحيحة هي: سورة الطلاق', hint: 'تتناول أحكام الطلاق والعدة والنفقة' },
  { id: 'quran_400_066', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة الصديق"؟', correctAnswer: 'سورة يوسف', explanation: 'الإجابة الصحيحة هي: سورة يوسف', hint: 'يوسف أيها الصديق أفتنا في سبع بقرات' },
  { id: 'quran_400_067', points: 400, category: 'القرآن الكريم', question: 'ما اسم الشجرة الملعونة في القرآن الكريم؟', correctAnswer: 'شجرة الزقوم', explanation: 'الإجابة الصحيحة هي: شجرة الزقوم', hint: 'طعام الأثيم كالمهل يغلي في البطون' },
  { id: 'quran_400_068', points: 400, category: 'القرآن الكريم', question: 'من هما الشيخين القارئين الشهيرين صاحبَي القراءات السبع بالمغرب ومصر (نافع وعاصم)؟', correctAnswer: 'الإمام نافع المدني والإمام عاصم الكوفي', explanation: 'الإجابة الصحيحة هي: الإمام نافع المدني والإمام عاصم الكوفي', hint: 'أصحاب روايتي ورش وحفص' },
  { id: 'quran_400_069', points: 400, category: 'القرآن الكريم', question: 'كم عدد القراءات المتواترة المشهورة للقرآن الكريم؟', correctAnswer: '10 قراءات', explanation: 'الإجابة الصحيحة هي: 10 قراءات', hint: 'القراءات العشر المتواترة الصغرى والكبرى' },
  { id: 'quran_400_070', points: 400, category: 'القرآن الكريم', question: 'من هو راوي قراءة عاصم المشهورة في الخليج والعالم العربي؟', correctAnswer: 'حفص عن عاصم', explanation: 'الإجابة الصحيحة هي: حفص عن عاصم', hint: 'حفص بن سليمان الكوفي' },
  { id: 'quran_400_071', points: 400, category: 'القرآن الكريم', question: 'من هو الصحابي الذي أجمع الصحابة على كتابة المصحف بلغته وقراءته؟', correctAnswer: 'بلغة قريش', explanation: 'الإجابة الصحيحة هي: بلغة قريش', hint: 'قال عثمان إذا اختلفتم فاكتبوه بلسان قريش' },
  { id: 'quran_400_072', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي ورد فيها ذكر صحائف إبراهيم وموسى؟', correctAnswer: 'سورة الأعلى', explanation: 'الإجابة الصحيحة هي: سورة الأعلى', hint: 'إن هذا لفي الصحف الأولى، صحف إبراهيم وموسى' },
  { id: 'quran_400_073', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تبدأ بـ "ق والقرآن المجيد"؟', correctAnswer: 'سورة ق', explanation: 'الإجابة الصحيحة هي: سورة ق', hint: 'سورة مكية تبدأ بحرف القاف' },
  { id: 'quran_400_074', points: 400, category: 'القرآن الكريم', question: 'ما اسم السورة التي ذكرت فيها حادثة الفيل ومحاولة هدم الكعبة؟', correctAnswer: 'سورة الفيل', explanation: 'الإجابة الصحيحة هي: سورة الفيل', hint: 'ألم تر كيف فعل ربك بأصحاب الفيل' },
  { id: 'quran_400_075', points: 400, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة الدين"؟', correctAnswer: 'سورة الماعون', explanation: 'الإجابة الصحيحة هي: سورة الماعون', hint: 'أرأيت الذي يكذب بالدين' },

  // --- 600 نقطة (25 سؤالاً) ---
  { id: 'quran_600_076', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة الوحيدة التي ذكرت اسم الصحابي زيد بن حارثة؟', correctAnswer: 'سورة الأحزاب', explanation: 'الإجابة الصحيحة هي: سورة الأحزاب', hint: 'فلما قضى زيد منها وطراً زوجناكها' },
  { id: 'quran_600_077', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تكررت فيها الآية "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ" 31 مرة؟', correctAnswer: 'سورة الرحمن', explanation: 'الإجابة الصحيحة هي: سورة الرحمن', hint: 'عروس القرآن' },
  { id: 'quran_600_078', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تكررت فيها آية "وَيْلٌ يَوْمَئِذٍ لِلْمُكَذِّبِينَ" 10 مرات؟', correctAnswer: 'سورة المرسلات', explanation: 'الإجابة الصحيحة هي: سورة المرسلات', hint: 'والمرسلات عرفاً فالعاصفات عصفاً' },
  { id: 'quran_600_079', points: 600, category: 'القرآن الكريم', question: 'ما هي الآية التي تجمعت فيها كافة حروف اللغة العربية الـ 28؟', correctAnswer: 'الآية 29 من سورة الفتح (أو 154 آل عمران)', explanation: 'الإجابة الصحيحة هي: الآية 29 من سورة الفتح (أو 154 آل عمران)', hint: 'محمد رسول الله والذين معه أشداء على الكفار رحماء بينهم' },
  { id: 'quran_600_080', points: 600, category: 'القرآن الكريم', question: 'ما اسم القارئ صاحب الصوت الندى الذي قال عنه النبي "لقد أوتي مزماراً من مزامير آل داود"؟', correctAnswer: 'أبو موسى الأشعري رضي الله عنه', explanation: 'الإجابة الصحيحة هي: أبو موسى الأشعري رضي الله عنه', hint: 'الصحابي الجليل عبد الله بن قيس الأشعري' },
  { id: 'quran_600_081', points: 600, category: 'القرآن الكريم', question: 'ما هما السورتان اللتان افتتحتا بـ "ويل"؟', correctAnswer: 'المطففين والهمزة', explanation: 'الإجابة الصحيحة هي: المطففين والهمزة', hint: 'ويل للمطففين، وويل لكل همزة لمزة' },
  { id: 'quran_600_082', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة العقود"؟', correctAnswer: 'سورة المائدة', explanation: 'الإجابة الصحيحة هي: سورة المائدة', hint: 'يا أيها الذين آمنوا أوفوا بالعقود' },
  { id: 'quran_600_083', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة إبراهيم الخليل" وتسمى أيضاً "سورة الشريعة"؟', correctAnswer: 'سورة الجاثية', explanation: 'الإجابة الصحيحة هي: سورة الجاثية', hint: 'ثم جعلناك على شريعة من الأمر فاتبعها' },
  { id: 'quran_600_084', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تحوي سجدتين؟', correctAnswer: 'سورة الحج', explanation: 'الإجابة الصحيحة هي: سورة الحج', hint: 'فيها سجدة في الآية 18 وسجدة في الآية 77' },
  { id: 'quran_600_085', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة الوحيدة التي تنتهي بكلمة "الناس"؟', correctAnswer: 'سورة الناس', explanation: 'الإجابة الصحيحة هي: سورة الناس', hint: 'من الجنة والناس' },
  { id: 'quran_600_086', points: 600, category: 'القرآن الكريم', question: 'كم سورة في القرآن الكريم تبدأ بـ "الحمد لله"؟', correctAnswer: '5 سور (الفاتحة، الأنعام، الكهف، سبأ، فاطر)', explanation: 'الإجابة الصحيحة هي: 5 سور (الفاتحة، الأنعام، الكهف، سبأ، فاطر)', hint: 'خمس سور تسمى سور التحميد' },
  { id: 'quran_600_087', points: 600, category: 'القرآن الكريم', question: 'كم سورة في القرآن تبدأ بـ "أرايت" أو "ألم"؟', correctAnswer: '6 سور تبدأ بـ الم', explanation: 'الإجابة الصحيحة هي: 6 سور تبدأ بـ الم', hint: 'البقرة، آل عمران، العنكبوت، الروم، لقمان، السجدة' },
  { id: 'quran_600_088', points: 600, category: 'القرآن الكريم', question: 'ما اسم السورة التي نزلت بتهديد عم النبي أبا لهب وزوجته؟', correctAnswer: 'سورة المسد (تَبت)', explanation: 'الإجابة الصحيحة هي: سورة المسد (تَبت)', hint: 'تبت يدا أبي لهب وتب' },
  { id: 'quran_600_089', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة الدهر"؟', correctAnswer: 'سورة الإنسان', explanation: 'الإجابة الصحيحة هي: سورة الإنسان', hint: 'هل أتى على الإنسان حين من الدهر' },
  { id: 'quran_600_090', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة بني النضير"؟', correctAnswer: 'سورة الحشر', explanation: 'الإجابة الصحيحة هي: سورة الحشر', hint: 'هو الذي أخرج الذين كفروا من أهل الكتاب من ديارهم لأول الحشر' },
  { id: 'quran_600_091', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي ورد فيها حكم المواريث بالتفصيل؟', correctAnswer: 'سورة النساء', explanation: 'الإجابة الصحيحة هي: سورة النساء', hint: 'يوصيكم الله في أولادكم للذكر مثل حظ الأنثيين' },
  { id: 'quran_600_092', points: 600, category: 'القرآن الكريم', question: 'ما اسم أول جامع ومراجع للمصحف الشريف في عهد أبي بكر الصديق؟', correctAnswer: 'زيد بن ثابت رضي الله عنه', explanation: 'الإجابة الصحيحة هي: زيد بن ثابت رضي الله عنه', hint: 'كاتب الوحي وجامع القرآن' },
  { id: 'quran_600_093', points: 600, category: 'القرآن الكريم', question: 'ما اسم الصحابي الذي أرسل المصاحف العثمانية إلى الأمصار في عهده؟', correctAnswer: 'عثمان بن عفان رضي الله عنه', explanation: 'الإجابة الصحيحة هي: عثمان بن عفان رضي الله عنه', hint: 'ثالث الخلفاء الراشدين وذو النورين' },
  { id: 'quran_600_094', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي ذكرت قصص الأنبياء متتابعة (نوح، هود، صالح، لوط، شعيب)؟', correctAnswer: 'سورة الأعراف (أو هود)', explanation: 'الإجابة الصحيحة هي: سورة الأعراف (أو هود)', hint: 'سورة الأعراف أو سورة هود' },
  { id: 'quran_600_095', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي نزلت أثناء صلح الحديبية وتبدأ ببشارة الفتح؟', correctAnswer: 'سورة الفتح', explanation: 'الإجابة الصحيحة هي: سورة الفتح', hint: 'إنا فتحنا لك فتحاً مبيناً' },
  { id: 'quran_600_096', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي سميت باسم إحدى الغزوات النبوية؟', correctAnswer: 'سورة الأحزاب', explanation: 'الإجابة الصحيحة هي: سورة الأحزاب', hint: 'غزوة الأحزاب (الخندق)' },
  { id: 'quran_600_097', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تناولت قصة ذي القرنين ويأجوج ومأجوج؟', correctAnswer: 'سورة الكهف', explanation: 'الإجابة الصحيحة هي: سورة الكهف', hint: 'ويسألونك عن ذي القرنين' },
  { id: 'quran_600_098', points: 600, category: 'القرآن الكريم', question: 'ما اسم السورة التي تقع بالضبط في منتصف القرآن الكريم؟', correctAnswer: 'سورة الكهف', explanation: 'الإجابة الصحيحة هي: سورة الكهف', hint: 'تقع في الجزأين الخامس عشر والسادس عشر وفيها كلمة (وليتلطف)' },
  { id: 'quran_600_099', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي اختتمت باسم وقتين من أوقات الصلاة؟', correctAnswer: 'سورة القدر (حتى مطلع الفجر)', explanation: 'الإجابة الصحيحة هي: سورة القدر (حتى مطلع الفجر)', hint: 'سلام هي حتى مطلع الفجر' },
  { id: 'quran_600_100', points: 600, category: 'القرآن الكريم', question: 'ما هي السورة التي تسمى "سورة الاستجابة"؟', correctAnswer: 'سورة الأنبياء', explanation: 'الإجابة الصحيحة هي: سورة الأنبياء', hint: 'لكثرة ما ورد فيها "فاستجبنا له" لأنبياء الله' },
];

export interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
  imageUrl?: string;
  hideImageUntilAnswer?: boolean;
}

// Helper to shuffle options safely
function shuffle<T>(arr?: T[] | null): T[] {
  if (!arr || !Array.isArray(arr)) return [];
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// =========================================================================
// STRICT CATEGORY-SPECIFIC QUESTION POOLS (ALL 37 CATEGORIES SEPARATED)
// =========================================================================

const CATEGORY_QUESTION_BANKS: Record<string, QuestionData[]> = {
  'gen-cars': carsQuestionDataList,
  // -----------------------------------------------------------------------
  // 1. Breaking Bad (spec-foreign-bb)
  // -----------------------------------------------------------------------
  'spec-foreign-bb': [
    {
      question: 'ما هو الاسم الكامل لمعلم الكيمياء الذي يتحول إلى صانع مخدرات بلقب "هايزنبرغ"؟',
      correctAnswer: 'والتر وايت (Walter White)',
      options: ['والتر وايت (Walter White)', 'جيسي بينكمان', 'هانك شريدر', 'سول غودمان'],
      explanation: 'والتر وايت هو بطل مسلسل Breaking Bad الرئيسي.',
      hint: 'معلم كيمياء في البوقيرقي',
    },
    {
      question: 'ما اسم شريك والتر وايت الشاب وتلميذه السابق في تصنيع الكريستال ميث؟',
      correctAnswer: 'جيسي بينكمان (Jesse Pinkman)',
      options: ['جيسي بينكمان (Jesse Pinkman)', 'تود ألفيست', 'بدجر', 'سكيني بيت'],
      explanation: 'جيسي بينكمان هو الشريك الشاب لوالتر وايت وصاحب عبارة "Yeah Science!".',
      hint: 'تلميذه السابق صاحب القبعة',
    },
    {
      question: 'ما اسم سلسلة مطاعم الدجاج السريع المملوكة لـ غاس فرينغ كواجهة لعمله؟',
      correctAnswer: 'Los Pollos Hermanos',
      options: ['Los Pollos Hermanos', 'El Camino Chicken', 'Pollos Locos', 'Taco Cabeza'],
      explanation: 'مطاعم Los Pollos Hermanos (إخوة الدجاج) هي الواجهة لشبكة غاس فرينغ.',
      hint: 'إخوة الدجاج بالإسبانية',
    },
    {
      question: 'ما اسم المحامي اللامع الفاسد صاحب شعار "Better Call Saul"؟',
      correctAnswer: 'سول غودمان (Saul Goodman)',
      options: ['سول غودمان (Saul Goodman)', 'تشارلز ماكجيل', 'هوارد هاملين', 'كيم فيكسلر'],
      explanation: 'سول غودمان (اسمه الحقيقي جيمي ماكجيل) هو محامي والتر وجيسي.',
      hint: 'It\'s all good, man!',
    },
    {
      question: 'ما اسم عميل مكتب مكافحة المخدرات (DEA) وعديل والتر وايت؟',
      correctAnswer: 'هانك شريدر (Hank Schrader)',
      options: ['هانك شريدر (Hank Schrader)', 'ستيف غوميز', 'غاس فرينغ', 'مايك إيرمانتراوت'],
      explanation: 'هانك شريدر هو زوج سكايلر شقيقة ماريا والعميل الذي يطارد هايزنبرغ.',
      hint: 'عديل والتر وعاشق المعادن',
    },
    {
      question: 'ما اسم رجل المهام الصعبة والرجل الأيمن لـ غاس فرينغ ذو الخبرة الأسبوعية والبوليسية؟',
      correctAnswer: 'مايك إيرمانتراوت (Mike Ehrmantraut)',
      options: ['مايك إيرمانتراوت (Mike Ehrmantraut)', 'تود', 'جاك ويلكر', 'هيكتور سالامانكا'],
      explanation: 'مايك هو الشرطي السابق والمحقق ورجل الحماية الخاص بـ غاس وسول.',
      hint: 'الشرطي السابق ذو النظرات الحادة',
    },
    {
      question: 'ما اسم الشرير الكرتيلي المقعد ذو الجرس الذي يقرعه قبل تفجير غاس فرينغ؟',
      correctAnswer: 'هيكتور سالامانكا (Hector Salamanca)',
      options: ['هيكتور سالامانكا (Hector Salamanca)', 'توكو سالامانكا', 'ليونيل سالامانكا', 'ماركو سالامانكا'],
      explanation: 'هيكتور سالامانكا "دون هيكتور" هو عم زعماء الكارتيل الذي ينتقم من غاس فرينغ.',
      hint: 'يستخدم جرس الكرسي المتحرك',
    },
    {
      question: 'ما اسم الفيلم المكمل لمسلسل Breaking Bad الذي يسرد قصة هروب جيسي بينكمان؟',
      correctAnswer: 'El Camino',
      options: ['El Camino', 'Felina', 'Ozymandias', 'Say My Name'],
      explanation: 'فيلم El Camino تتبع رحلة هروب جيسي بينكمان بظهور الممثل أرون بول.',
      hint: 'اسم سيارة جيلفروليه الششهيرة',
    },
    {
      question: 'ما هي مهنة والتر وايت الأصلية قبل دخوله عالم تجارة الكريستال ميث؟',
      correctAnswer: 'معلم كيمياء بمدرسة ثانوية',
      options: ['معلم كيمياء بمدرسة ثانوية', 'طبيب تحاليل', 'مهندس برمجيات', 'محاضر جامعي'],
      explanation: 'كان يعمل معلماً للكيمياء في مدرسة ثانوية بمدينة البوقيرقي.',
      hint: 'أستاذ كيمياء بالثانوية',
    },
    {
      question: 'ما اسم زوجة والتر وايت وأم ولديه جونيور وهولي؟',
      correctAnswer: 'سكايلر وايت (Skyler White)',
      options: ['سكايلر وايت (Skyler White)', 'ماري شريدر', 'كيم فيكسلر', 'ليديا'],
      explanation: 'سكايلر وايت هي زوجة والتر وايت.',
      hint: 'زوجة والتر في المسلسل',
    },
  ],

  // -----------------------------------------------------------------------
  // 2. Marvel (spec-foreign-marvel)
  // -----------------------------------------------------------------------
  'spec-foreign-marvel': [
    {
      question: 'ما هو الاسم الحقيقي لشخصية الرجل الحديدي (Iron Man) في عالم مارفل؟',
      correctAnswer: 'توني ستارك (Tony Stark)',
      options: ['توني ستارك (Tony Stark)', 'ستيف روجرز', 'بروس بانر', 'بيتر باركر'],
      explanation: 'توني ستارك هو الملياردير والمخترع والعبقري بطل Iron Man.',
      hint: 'الملياردير العبقري صاحب مفاعل القوس',
    },
    {
      question: 'ما اسم الجاسوسة الروسية الخارقة العضوة في فريق المنتقمون (Black Widow)؟',
      correctAnswer: 'ناتاشا رومانوف (Natasha Romanoff)',
      options: ['ناتاشا رومانوف (Natasha Romanoff)', 'كارول دانفرز', 'واندا ماكسيموف', 'يلينا بيلوفا'],
      explanation: 'ناتاشا رومانوف هي الأرملة السوداء Black Widow.',
      hint: 'العميلة السابقة بالكي جي بي',
    },
    {
      question: 'ما اسم المعدن الفائق الصلابة المكون لدرع الكابتن أمريكا والموجود في واكاندا؟',
      correctAnswer: 'الفايبرانيوم (Vibranium)',
      options: ['الفايبرانيوم (Vibranium)', 'الأدامانتيوم', 'الكبتونايت', 'التيتانيوم'],
      explanation: 'الفايبرانيوم هو أغلى وأصلب معدن نيزكي في مملكة واكاندا.',
      hint: 'معدن مملكة واكاندا النادرة',
    },
    {
      question: 'ما اسم الشرير الفضائي الذي جمع الأحجار الستة لمسح نصف الكائنات في Avengers: Infinity War؟',
      correctAnswer: 'ثانوس (Thanos)',
      options: ['ثانوس (Thanos)', 'لوكي', 'أولترون', 'كانغ الفاتح'],
      explanation: 'ثانوس هو التيتان المجنون الذي سعى للتوازن بسحر أحجار الأبدية.',
      hint: 'صاحب قفاز الأبدية الأرجواني',
    },
    {
      question: 'ما اسم الشقيق المتبنى لـ ثور وإله الخديعة والمكر في مارفل؟',
      correctAnswer: 'لوكي (Loki)',
      options: ['لوكي (Loki)', 'أودين', 'هيلا', 'بالدر'],
      explanation: 'لوكي هو أمير أزغارد وإله الحيل والدهاء.',
      hint: 'إله الحيل صاحب الخوذة بقرنين',
    },
    {
      question: 'ما اسم العالم الذي يتحول إلى العملاق الأخضر الغاضب (Hulk) عند غضبه؟',
      correctAnswer: 'د. بروس بانر (Bruce Banner)',
      options: ['د. بروس بانر (Bruce Banner)', 'ستيف روجرز', 'بيتر كويل', 'ستيفن سترينج'],
      explanation: 'الدكتور بروس بانر تعرض لأشعة جاما وتحول للعملاق الخارق.',
      hint: 'عالم أشعة جاما',
    },
    {
      question: 'ما اسم المراهق من كوينز الذي اكتسب قدرات العنكبوت وتدرب تحت إشراف توني ستارك؟',
      correctAnswer: 'بيتر باركر (Peter Parker)',
      options: ['بيتر باركر (Peter Parker)', 'ميلز موراليس', 'هاري أوزبورن', 'نيد ليدز'],
      explanation: 'بيتر باركر هو سبايدرمان (Spider-Man).',
      hint: 'مراهق كوينز صاحب الشبكات',
    },
    {
      question: 'ما اسم ملك مملكة واكاندا الأفريقية الذي يحمل لقب الفهد الأسود (Black Panther)؟',
      correctAnswer: 'تشالا (T\'Challa)',
      options: ['تشالا (T\'Challa)', 'مباكو', 'كيلمنغر', 'أوكوي'],
      explanation: 'الملك تشالا هو البطل الخارق Black Panther الذي جسده الممثل تشادويك بوزمان.',
      hint: 'ملك واكاندا الشجاع',
    },
  ],

  // -----------------------------------------------------------------------
  // 3. Game Of Thrones (spec-foreign-got)
  // -----------------------------------------------------------------------
  'spec-foreign-got': [
    {
      question: 'من هو القائد الأسطوري الجليدي لجيش الموتى والعمق الشمالي خلف الجدار؟',
      correctAnswer: 'ملك الليل (Night King)',
      options: ['ملك الليل (Night King)', 'يورون غريغوي', 'كال دروغو', 'رمزي بولتون'],
      explanation: 'ملك الليل قائد السائرين البيض White Walkers.',
      hint: 'قائد السائرين البيض ذو العيون الزرقاء',
    },
    {
      question: 'ما اسم عاصمة الممالك السبع ومقر العرش الحديدي في مسلسل Game of Thrones؟',
      correctAnswer: 'كينغز لاندينغ (King\'s Landing)',
      options: ['كينغز لاندينغ (King\'s Landing)', 'دراغون ستون', 'وينترفيل', 'كاسترلي روك'],
      explanation: 'كينغز لاندينغ هي عاصمة الممالك السبع المقامة بها قلعة ريد كيب.',
      hint: 'إنزال الملك بالعربية',
    },
    {
      question: 'ما اسم السيف المصنوع من الفولاذ الفاليري الذي يمتلكه جون سنو والمستلم من اللورد المورمونت؟',
      correctAnswer: 'المخلب (Longclaw)',
      options: ['المخلب (Longclaw)', 'إبرة', 'قلب الجليد', 'قاتل الملوك'],
      explanation: 'Longclaw هو سيف جون سنو الفاليري برأس الذئب الأبيض.',
      hint: 'سيف رأس الذئب الأبيض',
    },
    {
      question: 'ما اسم التنين الأسود الضخم المفضل والأقوى لـ دنيرس تارجاريان؟',
      correctAnswer: 'دروغون (Drogon)',
      options: ['دروغون (Drogon)', 'رايجال', 'فيسيريون', 'باليريون'],
      explanation: 'دروغون هو التنين الأسود والأحمر الذي سمي نسبة لزوجها كال دروغو.',
      hint: 'سمي تيمناً بزوجها كال دروغو',
    },
    {
      question: 'ما اسم لورد وينترفيل الشريف وصديق الملك روبرت باراثيون الذي أُعدم في الموسم الأول؟',
      correctAnswer: 'نيد ستارك (Ned Stark)',
      options: ['نيد ستارك (Ned Stark)', 'روب ستارك', 'بران ستارك', 'ريكون ستارك'],
      explanation: 'إدارد (نيد) ستارك هو كبير عائلة ستارك وحاكم الشمال.',
      hint: 'حاكم الشمال وحامي القفر',
    },
    {
      question: 'ما اسم القزم العبقري من عائلة لانيستر والمشهور بجملة "I drink and I know things"؟',
      correctAnswer: 'تيريون لانيستر (Tyrion Lannister)',
      options: ['تيريون لانيستر (Tyrion Lannister)', 'تايوين لانيستر', 'جيمي لانيستر', 'لانسيل'],
      explanation: 'تيريون لانيستر هو القزم الذكي ومساعد أم التنانين.',
      hint: 'القزم العبقري شقيق سيرسي وجيمي',
    },
  ],

  // -----------------------------------------------------------------------
  // 4. Peaky Blinders (spec-foreign-peaky)
  // -----------------------------------------------------------------------
  'spec-foreign-peaky': [
    {
      question: 'في أي مدينة صناعية بريطانية تقع معظم مقرات وأحداث عصابة البيكي بلايندرز؟',
      correctAnswer: 'بيرمنغهام (Birmingham)',
      options: ['بيرمنغهام (Birmingham)', 'ليفربول', 'مانشستر', 'لندن'],
      explanation: 'تدور معظم أحداث مسلسل Peaky Blinders في مدينة بيرمنغهام البريطانية.',
      hint: 'المدينة الصناعية الشهيرة بوسط إنجلترا',
    },
    {
      question: 'ما اسم زعيم العصابة اليهودية صاحب مصنع التقطير وشخصيته الساخرة الذي جسده توم هاردي؟',
      correctAnswer: 'ألفي سولومونز (Alfie Solomons)',
      options: ['ألفي سولومونز (Alfie Solomons)', 'بارني', 'لوكا تشانغريتا', 'داربي سابيني'],
      explanation: 'ألفي سولومونز هو زعيم عصابة كامدن تاون الذي لعب دوره الممثل توم هاردي.',
      hint: 'زعيم العصابة اليهودية في كامدن تاون',
    },
    {
      question: 'ما اسم زعيم عصابة Peaky Blinders والعقل المدبر والبطل الرئيسي للمسلسل؟',
      correctAnswer: 'توماس شيلبي (Tommy Shelby)',
      options: ['توماس شيلبي (Tommy Shelby)', 'آرثر شيلبي', 'جون شيلبي', 'مايكل غراي'],
      explanation: 'توماس شيلبي (تومي) هو قائد العائلة والمحارب السابق في فرنسا.',
      hint: 'تومي العقل المدبر للعائلة',
    },
    {
      question: 'ما اسم الشقيق الأكبر لـ تومي شيلبي المعروف بعصبيته الشديدة وصراخه العالي؟',
      correctAnswer: 'آرثر شيلبي (Arthur Shelby)',
      options: ['آرثر شيلبي (Arthur Shelby)', 'جون شيلبي', 'فين شيلبي', 'إسيا'],
      explanation: 'آرثر شيلبي هو الأخ الأكبر المقاتل ذو الشارب المميز.',
      hint: 'الأخ الأكبر صاحب الشارب',
    },
    {
      question: 'ما اسم الحانة الشعبية الرسمية المملوكة لعائلة شيلبي والتي يجتمعون فيها ببيرمنغهام؟',
      correctAnswer: 'حانة القلعة (The Garrison)',
      options: ['حانة القلعة (The Garrison)', 'المظلة الخضراء', 'حانة كامدن', 'المرسى'],
      explanation: 'The Garrison Pub هي الحانة التي ملكتها العائلة وجمعت قادتها.',
      hint: 'The Garrison',
    },
  ],

  // -----------------------------------------------------------------------
  // 5. The Walking Dead (spec-foreign-twd)
  // -----------------------------------------------------------------------
  'spec-foreign-twd': [
    {
      question: 'ما اسم الشاب الآسيوي المفضل المحبوب صاحب الابتسامة الذي تزوج ماغي وقُتل على يد نيغان؟',
      correctAnswer: 'غلين ري (Glenn Rhee)',
      options: ['غلين ري (Glenn Rhee)', 'يوجين', 'تارو', 'نوح'],
      explanation: 'غلين ري هو أحد أبطال المجموعة الأوائل وزوج ماغي غراين.',
      hint: 'الشاب الآسيوي وزوج ماغي',
    },
    {
      question: 'ما اسم الشرير صاحب مضرب البيسبول المغطى بالسلك الشائك "لوسيل"؟',
      correctAnswer: 'نيغان (Negan)',
      options: ['نيغان (Negan)', 'الحاكم (The Governor)', 'بيتا', 'ألفا'],
      explanation: 'نيغان هو قائد جماعة المخلصين (Saviors) ومبتكر مضرب لوسيل.',
      hint: 'قائد جماعة المنقذين / Saviors',
    },
    {
      question: 'ما اسم ضابط الشرطة وبطل السلسلة الذي استيقظ من الغيبوبة في بداية الموتى السائرون؟',
      correctAnswer: 'ريك غرايمز (Rick Grimes)',
      options: ['ريك غرايمز (Rick Grimes)', 'شين والش', 'داريل ديكسون', 'ديل'],
      explanation: 'ريك غرايمز هو ضابط شرطة كينغ كاونتي وقائد الناجين.',
      hint: 'ضابط الشرطة بطل المسلسل',
    },
    {
      question: 'ما اسم الصياد الماهر صاحب القوس والنشاب (Crossbow) وشقيق ميرل؟',
      correctAnswer: 'داريل ديكسون (Daryl Dixon)',
      options: ['داريل ديكسون (Daryl Dixon)', 'ميرل ديكسون', 'توبين', 'إيزكيل'],
      explanation: 'داريل ديكسون هو المقاتل الخبير باستخدام القوس النشاب والدراجة النارية.',
      hint: 'صاحب النشاب والدراجة النارية',
    },
  ],

  // -----------------------------------------------------------------------
  // 6. Turkish Drama General (spec-turkish-general)
  // -----------------------------------------------------------------------
  'spec-turkish-general': [
    {
      question: 'ما اسم بطل المسلسل الأسطوري "وادي الذئاب" وشخصيته الشهيرة بالدراما التركية؟',
      correctAnswer: 'مراد علمدار (بولات علمدار)',
      options: ['مراد علمدار (بولات علمدار)', 'سليمان شاكر', 'عبد الحي', 'ميماتي باش'],
      explanation: 'مراد علمدار هو البطل الأيقوني لمسلسل وادي الذئاب (Kurtlar Vadisi).',
      hint: 'بطل وادي الذئاب الأسطوري',
    },
    {
      question: 'من هو الممثل الذي أدى دور شخصية "ياماش كوتشوفالي" في مسلسل الحفرة؟',
      correctAnswer: 'أراس بولوت إينملي (Aras Bulut İynemli)',
      options: ['أراس بولوت إينملي (Aras Bulut İynemli)', 'شاتاي أولسوي', 'أركان كولتشاك', 'نجيب ميبيلي'],
      explanation: 'أراس بولوت إينملي لعب دور ياماش ابن إدريس كوتشوفالي.',
      hint: 'بطل مسلسل الحفرة العبقري',
    },
    {
      question: 'ما اسم مسلسل الدراما التركية الشهير القائم على الانتقام وبطولة إيزيل وإيشان؟',
      correctAnswer: 'إيزيل (Ezel)',
      options: ['إيزيل (Ezel)', 'العشق الممنوع', 'سيلا', 'شجاع وجميلة'],
      explanation: 'مسلسل إيزيل (Ezel) المقتبس من الكونت دي مونت كريستو.',
      hint: 'مسلسل الخال رامز وعمر/إيزيل',
    },
    {
      question: 'ما اسم بطل مسلسل "العشق الممنوع" الذي أدى دوره كيفانتش تاتليتوغ؟',
      correctAnswer: 'مهند (بهلول)',
      options: ['مهند (بهلول)', 'عدنان زياغيل', 'بشير', 'نهاد'],
      explanation: 'بهلول (مهند) هو ابن أخ عدنان بطل العشق الممنوع.',
      hint: 'مهند في النسخة المدبلجة',
    },
  ],

  // -----------------------------------------------------------------------
  // 7. Resurrected Ertugrul (spec-turkish-ertugrul)
  // -----------------------------------------------------------------------
  'spec-turkish-ertugrul': [
    {
      question: 'من هو الممثل التركي القدير الذي قدم شخصية "الغازي أرطغرل بن سليمان شاه"؟',
      correctAnswer: 'أنجين ألتان دوزياتان',
      options: ['أنجين ألتان دوزياتان', 'بوراك أوزجيفيت', 'كان أورغانجي أوغلو', 'أراس بولوت'],
      explanation: 'أنجين ألتان دوزياتان هو بطل مسلسل قيامة أرطغرل.',
      hint: 'بطل الأجزاء الخمسة لأرطغرل',
    },
    {
      question: 'ما اسم القبيلة التركمانية الأوغوزية التي ينتمي إليها ويقودها الغازي أرطغرل؟',
      correctAnswer: 'قبيلة كايي (Kayı)',
      options: ['قبيلة كايي (Kayı)', 'قبيلة دوغار', 'قبيلة بايندر', 'قبيلة أفشار'],
      explanation: 'قبيلة كايي ذات الشعار الشهير (IYI).',
      hint: 'صاحبة شعار IYI الأزرق',
    },
    {
      question: 'ما اسم زوجة أرطغرل وأم السلطان عثمان والأميرة السلجوقية في المسلسل؟',
      correctAnswer: 'حليمة خاتون (Halime Hatun)',
      options: ['حليمة خاتون (Halime Hatun)', 'سيلجان خاتون', 'هايماه أنا', 'بستة خاتون'],
      explanation: 'السلطانة حليمة خاتون ابنة الأمير السلجوقي نعمان وزوجة أرطغرل.',
      hint: 'الأميرة السلجوقية أم عثمان',
    },
    {
      question: 'ما اسم المحارب الأسطوري الصديق المقرب لأرطغرل وصاحب الفأس الضخم الشهير؟',
      correctAnswer: 'تورغوت ألب (Turgut Alp)',
      options: ['تورغوت ألب (Turgut Alp)', 'بامسي بيريك', 'دوغان ألب', 'سامسا ألب'],
      explanation: 'تورغوت ألب هو المحارب المقرب ومقبض الفأس الأسطوري.',
      hint: 'صاحب الفأس الناري الشهير',
    },
  ],

  // -----------------------------------------------------------------------
  // 8. Kurulus Osman (spec-turkish-osman)
  // -----------------------------------------------------------------------
  'spec-turkish-osman': [
    {
      question: 'من هو النجم التركي الوسيم الشهير الممثل لشخصية السيد "عثمان بن أرطغرل"؟',
      correctAnswer: 'بوراك أوزجيفيت (Burak Özçivit)',
      options: ['بوراك أوزجيفيت (Burak Özçivit)', 'أنجين ألتان', 'كيفانتش تاتليتوغ', 'تولغا ساريتاس'],
      explanation: 'بوراك أوزجيفيت بطل مسلسل المؤسس عثمان.',
      hint: 'بطل المسلسل الشهير بوجاهته وسيفه',
    },
    {
      question: 'من هو الشيخ والمربى الروحي الفاضل صهر عثمان المعلم الأول في المسلسل؟',
      correctAnswer: 'الشيخ أديبالي (Şeyh Edebali)',
      options: ['الشيخ أديبالي (Şeyh Edebali)', 'ابن عربي', 'الشيخ الشاذلي', 'أخي إيفرين'],
      explanation: 'الشيخ أديبالي هو المعلم والشيخ الروحي ومؤسس رابطة الآخية.',
      hint: 'والد بالا خاتون والشيخ الروحي',
    },
    {
      question: 'ما اسم القلعة البيزنطية الهامة التي نجح عثمان بن أرطغرل في فتحها وإسقاط حاكمها نكولا؟',
      correctAnswer: 'قلعة إنيجول (İnegöl)',
      options: ['قلعة إنيجول (İnegöl)', 'قلعة كراجاهيسار', 'قلعة يني شهير', 'قلعة أزنيك'],
      explanation: 'فتح إنيجول كان خطوة مفصلية للسيد عثمان بن أرطغرل.',
      hint: 'قلعة الحاكم البيزنطي نكولا',
    },
  ],

  // -----------------------------------------------------------------------
  // 9. Cukur (spec-turkish-cukur)
  // -----------------------------------------------------------------------
  'spec-turkish-cukur': [
    {
      question: 'ما اسم العائلة الحاكمة والمسيطرة على حي "الحفرة" في إسطنبول بقيادة الأب إدريس؟',
      correctAnswer: 'عائلة كوتشوفالي (Koçovalı)',
      options: ['عائلة كوتشوفالي (Koçovalı)', 'عائلة أردينيت', 'عائلة كاراكوزلار', 'عائلة أركاني'],
      explanation: 'عائلة كوتشوفالي هي العائلة الحاكمة لحي الحفرة Çukur.',
      hint: 'كوتشوفالي صاحب الوشم الشهير',
    },
    {
      question: 'ما اسم الأخ غير الشرعي الملقب بـ "فارتولو سعد الدين" الذي عاد للانتقام من عائلته؟',
      correctAnswer: 'صالح كوتشوفالي',
      options: ['صالح كوتشوفالي', 'سليم كوتشوفالي', 'جومالي كوتشوفالي', 'أحمد'],
      explanation: 'فارتولو سعد الدين هو صالح ابن إدريس كوتشوفالي وصاحب أغنية "Mihriban".',
      hint: 'صالح ابن إدريس كوتشوفالي',
    },
  ],

  // -----------------------------------------------------------------------
  // 10. One Piece (spec-anime-onepiece)
  // -----------------------------------------------------------------------
  'spec-anime-onepiece': [
    {
      question: 'ما اسم قائد طاقم قبعة القش الذي يسعى للوصول إلى كنز "ون بيس" ونيل لقب ملك القراصنة؟',
      correctAnswer: 'مونكي دي لوفي (Monkey D. Luffy)',
      options: ['مونكي دي لوفي (Monkey D. Luffy)', 'رورونوا زورو', 'سانجي', 'إيس'],
      explanation: 'لوفي هو قائد طاقم قبعة القش وبطل الأنمي الرئيسي.',
      hint: 'صاحب قبعة القش والمطاط',
      imageUrl: '/one_piece/onepiece_1.jpg',
      hideImageUntilAnswer: false,
    },
    {
      question: 'ما اسم السياف الأسطوري صاحب أسلوب الثلاثة سيوف (Santoryu) في طاقم قبعة القش؟',
      correctAnswer: 'رورونوا زورو (Roronoa Zoro)',
      options: ['رورونوا زورو (Roronoa Zoro)', 'لاو', 'شانكس', 'ميهوك'],
      explanation: 'زورو هو السياف الأول في طاقم لوفي وذراعه الأيمن.',
      hint: 'صاحب الشعر الأخضر وسيوفه الثلاثة',
      imageUrl: '/one_piece/onepiece_2.jpg',
      hideImageUntilAnswer: false,
    },
    {
      question: 'ما اسم طاهي السفينة الأنيق صاحب الساق الحمراء والضربات النارية (Diable Jambe)؟',
      correctAnswer: 'فينسموك سانجي (Sanji)',
      options: ['فينسموك سانجي (Sanji)', 'زورو', 'فرانكي', 'جينبي'],
      explanation: 'سانجي هو طباخ قبعة القش والابن الرابع لعائلة فينسموك.',
      hint: 'الطباخ الأنيق محب الطهي بالقدمين',
      imageUrl: '/one_piece/onepiece_3.jpg',
      hideImageUntilAnswer: false,
    },
    {
      question: 'ما اسم القرصان ذو الشعر الأحمر الذي أهدى لوفي قبعة القش وضحي بيده من أجله؟',
      correctAnswer: 'شانكس (Shanks)',
      options: ['شانكس (Shanks)', 'باغي', 'كايدو', 'تيتش'],
      explanation: 'شانكس ذو الشعر الأحمر هو أحد اليونكو الأربعة وملهم لوفي.',
      hint: 'اليونكو ذو الشعر الأحمر',
      imageUrl: '/one_piece/onepiece_4.jpg',
      hideImageUntilAnswer: false,
    },
  ],

  // -----------------------------------------------------------------------
  // 11. Pokemon (spec-anime-pokemon)
  // -----------------------------------------------------------------------
  'spec-anime-pokemon': [
    {
      question: 'ما اسم بطل أنمي البوكيمون الشاب من قرية باليت الذي يرافقه بيكاتشو؟',
      correctAnswer: 'آش كيتشام (Ash Ketchum)',
      options: ['آش كيتشام (Ash Ketchum)', 'بروك', 'مستي', 'جاري أوك'],
      explanation: 'آش كيتشام هو مدرب البوكيمون الرئيسي من Pallet Town.',
      hint: 'الفتى صاحب القبعة الحمراء والبيضاء',
      imageUrl: '/pokemon/pokemon_1.jpg',
      hideImageUntilAnswer: false,
    },
    {
      question: 'ما هو البوكيمون الكهربائي الأصفر الأيقوني صاحب ضربة الصاعقة (100,000 Volts)؟',
      correctAnswer: 'بيكاتشو (Pikachu)',
      options: ['بيكاتشو (Pikachu)', 'شاردماندر', 'سكويرتل', 'بولباسور'],
      explanation: 'بيكاتشو هو الرفيق الأسطوري لـ آش كيتشام وشعار البوكيمون.',
      hint: 'البوكيمون الأصفر الكهربائي',
      imageUrl: '/pokemon/pokemon_2.jpg',
      hideImageUntilAnswer: false,
    },
    {
      question: 'ما اسم عصابة الأشرار الثلاثية المكونة من جيسي وجيمس والمياوث المتكلم؟',
      correctAnswer: 'عصابة الرداء الأبيض (Team Rocket)',
      options: ['عصابة الرداء الأبيض (Team Rocket)', 'تيم أكوا', 'تيم ماغما', 'تيم البلازما'],
      explanation: 'Team Rocket يسعون لسرقة بيكاتشو في كل حلقة.',
      hint: 'Team Rocket',
      imageUrl: '/pokemon/pokemon_3.jpg',
      hideImageUntilAnswer: false,
    },
  ],

  // -----------------------------------------------------------------------
  // 12. Anime Characters (spec-anime-characters)
  // -----------------------------------------------------------------------
  'spec-anime-characters': [
    {
      question: 'من هو المعلم الأسطوري معصوب العينين وذو الشعر الأبيض وصاحب تقنية اللانهائية في Jujutsu Kaisen؟',
      correctAnswer: 'ساتورو غوجو (Satoru Gojo)',
      options: ['ساتورو غوجو (Satoru Gojo)', 'سوكونا', 'إيتادوري', 'فوشيغورو'],
      explanation: 'ساتورو غوجو هو أقوى مستخدم طاقة ملعونة في Jujutsu Kaisen.',
      hint: 'صاحب العيون الزرقاء الساحرة والشعر الأبيض',
    },
    {
      question: 'ما اسم أقوى بشر في فيلق الاستطلاع بدك العمالقة صاحب لقب قاطع العمالقة في Attack on Titan؟',
      correctAnswer: 'ليفاي آكرمان (Levi Ackerman)',
      options: ['ليفاي آكرمان (Levi Ackerman)', 'إيرين ييغر', 'آرمين', 'إيروين'],
      explanation: 'القائد ليفاي آكرمان أقوى جندي في البشرية.',
      hint: 'قائد النخبة بفيلق الاستطلاع',
    },
    {
      question: 'ما اسم المحقق العبقري الغامض المحب للحلويات الذي يطارد ياغامي لايت (كيرا) في Death Note؟',
      correctAnswer: 'إل (L Lawliet)',
      options: ['إل (L Lawliet)', 'نير (Near)', 'ميلو (Mello)', 'مات'],
      explanation: 'إل هو أعظم محقق في العالم في أنمي مذكرة الموت.',
      hint: 'المحقق العبقري المشتت العيون',
    },
  ],

  // -----------------------------------------------------------------------
  // 13. Anime General (spec-anime-general)
  // -----------------------------------------------------------------------
  'spec-anime-general': [
    {
      question: 'ما اسم كتاب الموت الأسطوري الذي يكتب فيه ياغامي لايت أسماء المجرمين لتصفيتهم؟',
      correctAnswer: 'مذكرة الموت (Death Note)',
      options: ['مذكرة الموت (Death Note)', 'كتاب الكيمياء', 'مخطوطة النينجا', 'دفتر الذكريات'],
      explanation: 'Death Note هي المذكرة القادمة من عالم الشينيغامي.',
      hint: 'Death Note',
    },
    {
      question: 'ما اسم البطل السايان الشهير ذو الشعر الشوكي والقتالات الأسطورية في Dragon Ball؟',
      correctAnswer: 'غوكو (Goku)',
      options: ['غوكو (Goku)', 'فيجيتا', 'غوهان', 'بيكولو'],
      explanation: 'سون غوكو بطل Dragon Ball السايان الأسطوري.',
      hint: 'بطل الكاميهاميها',
    },
  ],

  // -----------------------------------------------------------------------
  // 14. Quran (spec-islamic-quran)
  // -----------------------------------------------------------------------
  'spec-islamic-quran': [],

  // -----------------------------------------------------------------------
  // 15. Prophet Stories (spec-islamic-prophets)
  // -----------------------------------------------------------------------
  'spec-islamic-prophets': [
    {
      question: 'من هو النبي الذي أُلقي في النار وجعلها الله عليه برداً وسلاماً؟',
      correctAnswer: 'إبراهيم عليه السلام',
      options: ['إبراهيم عليه السلام', 'موسى عليه السلام', 'عيسى عليه السلام', 'يوسف عليه السلام'],
      explanation: 'خليل الله إبراهيم عليه السلام عندما ألقاه قومه في النار.',
      hint: 'خليل الله وأبو الأنبياء',
    },
    {
      question: 'ما اسم النبي الكريم الذي التقمه الحوت ونادى في الظلمات "لا إله إلا أنت سبحانك إني كنت من الظالمين"؟',
      correctAnswer: 'يونس عليه السلام',
      options: ['يونس عليه السلام', 'أيوب عليه السلام', 'نوح عليه السلام', 'لوط عليه السلام'],
      explanation: 'النبي يونس (ذا النون) عليه السلام في بطن الحوت.',
      hint: 'ذو النون وصاحب الحوت',
    },
  ],

  // -----------------------------------------------------------------------
  // 16. Sahaba (spec-islamic-sahaba)
  // -----------------------------------------------------------------------
  'spec-islamic-sahaba': [
    {
      question: 'من هو القائد الصحابي الملقب بـ "سيف الله المسلول" والذي لم يهزم في معركة خاضها؟',
      correctAnswer: 'خالد بن الوليد رضي الله عنه',
      options: ['خالد بن الوليد رضي الله عنه', 'عمر بن الخطاب', 'علي بن أبي طالب', 'أبو عبيدة بن الجراح'],
      explanation: 'خالد بن الوليد لقبه النبي ﷺ بسيف الله المسلول.',
      hint: 'قائد معركة اليرموك والوليد',
    },
    {
      question: 'من هو أول خلفاء الراشدين وأول من آمن من الرجال بالرسالة النبوية؟',
      correctAnswer: 'أبو بكر الصديق رضي الله عنه',
      options: ['أبو بكر الصديق رضي الله عنه', 'عمر بن الخطاب', 'عثمان بن عفان', 'علي بن أبي طالب'],
      explanation: 'أبو بكر الصديق صاحب النبي ﷺ في الهجرة وأول الخلفاء.',
      hint: 'الصديق ورفيق الهجرة',
    },
  ],

  // -----------------------------------------------------------------------
  // 17. Seerah (spec-islamic-seerah)
  // -----------------------------------------------------------------------
  'spec-islamic-seerah': [
    {
      question: 'ما اسم مرضعة النبي ﷺ الشريفة في طفولته ببادي بني سعد؟',
      correctAnswer: 'حليمة السعدية',
      options: ['حليمة السعدية', 'أم أيمن', 'آمنة بنت وهب', 'فاطمة بنت أسد'],
      explanation: 'حليمة السعدية مرضعة الرسول ﷺ في بادية بني سعد.',
      hint: 'من ديار بني سعد',
    },
    {
      question: 'في أي سنة هجرية وقعت غزوة بدر الكبرى المباركة؟',
      correctAnswer: '2 هجرية',
      options: ['2 هجرية', '3 هجرية', '5 هجرية', '8 هجرية'],
      explanation: 'وقعت غزوة بدر الكبرى في 17 رمضان للسنة الثانية للهجرة.',
      hint: 'السنة الثانية من الهجرة',
    },
  ],

  // -----------------------------------------------------------------------
  // 18. Islamic General (spec-islamic-general)
  // -----------------------------------------------------------------------
  'spec-islamic-general': [],

  // -----------------------------------------------------------------------
  // 19. Kuwait Malls (spec-kuwait-malls)
  // -----------------------------------------------------------------------
  'spec-kuwait-malls': [
    {
      question: 'في أي منطقة يقع مجمع "360" الشهير الذي يضم أرينا الكويت وملاعب التنس العالمية؟',
      correctAnswer: 'جنوب السرة (الزهراء)',
      options: ['جنوب السرة (الزهراء)', 'السالمية', 'الفحيحيل', 'الشويخ'],
      explanation: 'مجمع 360 مول يقع في منطقة الزهراء بجنوب السرة.',
      hint: 'منطقة الزهراء بجنوب السرة',
    },
    {
      question: 'ما اسم أضخم مجمع تجاري وتسوقي في الكويت يقع في منطقة الري؟',
      correctAnswer: 'مجمع الأفنيوز (The Avenues)',
      options: ['مجمع الأفنيوز (The Avenues)', '360 مول', 'مجمع الكوت', 'مجمع الحمراء'],
      explanation: 'الأفنيوز هو أضخم وأكبر مجمع تجاري في الكويت.',
      hint: 'الأفنيوز في منطقة الري',
    },
  ],

  // -----------------------------------------------------------------------
  // 20. Kuwait Restaurants (spec-kuwait-restaurants)
  // -----------------------------------------------------------------------
  'spec-kuwait-restaurants': [
    {
      question: 'ما هي الوجبة الوطنية الكويتية الأولى المكونة من الأرز والدجاج أو اللحم مع الدقوس؟',
      correctAnswer: 'المجبوس (مكبوس)',
      options: ['المجبوس (مكبوس)', 'القبوط', 'الجريش', 'المرقوق'],
      explanation: 'المجبوس الكويتي هو الطبق الأيقوني الرئيسي في المطبخ الكويتي.',
      hint: 'الرز الكويتي المفضل بالمرق والدقوس',
    },
    {
      question: 'ما اسم الشارع الشهير في منطقة السالمية المليء بمحلات الشاورما والمطاعم؟',
      correctAnswer: 'شارع المطاعم (شارع سالم المبارك)',
      options: ['شارع المطاعم (شارع سالم المبارك)', 'شارع بغداد', 'شارع تونس', 'شارع عمان'],
      explanation: 'شارع سالم المبارك المشهور بشرع المطاعم في السالمية.',
      hint: 'المشهور بالشاورما والمأكولات بالسالمية',
    },
  ],

  // -----------------------------------------------------------------------
  // 21. Kuwait Location (spec-kuwait-location)
  // -----------------------------------------------------------------------
  'spec-kuwait-location': [
    {
      question: 'أين يقع جسر الشيخ جابر الأحمد الصباح البحري الفائق الطول والذي يربط العاصمة بـ؟',
      correctAnswer: 'مدينة الصبية والحرير',
      options: ['مدينة الصبية والحرير', 'جزيرة بوبيان', 'منطقة الخيران', 'منطقة الوفرة'],
      explanation: 'جسر الشيخ جابر الأحمد يربط مدينة الكويت العاصمة بمدينة الصبية عبر الجون.',
      hint: 'يربط العاصمة بالصبية',
    },
  ],

  // -----------------------------------------------------------------------
  // 22. Kuwait Cafes (spec-kuwait-cafes)
  // -----------------------------------------------------------------------
  'spec-kuwait-cafes': [
    {
      question: 'ما هي المقاهي الشعبية التراثية الرسمية المطلة على البحر والموجودة بالشرق والسالمية والشعيبات؟',
      correctAnswer: 'المقاهي الشعبية الكويتية',
      options: ['المقاهي الشعبية الكويتية', 'مقاهي ستاربكس', 'قهاوي الشويخ', 'قهاوي الأفنيوز'],
      explanation: 'المقاهي الشعبية التابعة لوزارة الشؤون ذات الطابع التراثي الشاطئي.',
      hint: 'مقاهي التراث والوزارة الشاطئية',
    },
  ],

  // -----------------------------------------------------------------------
  // 23. Kuwait General (spec-kuwait-general)
  // -----------------------------------------------------------------------
  'spec-kuwait-general': [
    {
      question: 'ما هو الرمز المعماري الوطني الشهير والمشرف على الساحل والذي افتتح عام 1979م؟',
      correctAnswer: 'أبراج الكويت',
      options: ['أبراج الكويت', 'برج التحرير', 'قصر السيف', 'مجلس الأمة'],
      explanation: 'أبراج الكويت الثلاثة على رأس عجوزة وافتتحت 1979.',
      hint: 'الأبراج الزرقاء الثلاثة الشهيرة',
    },
    {
      question: 'ما هي أكبر جزيرة كويتية من حيث المساحة في شمال الخليج العربي؟',
      correctAnswer: 'جزيرة بوبيان',
      options: ['جزيرة بوبيان', 'جزيرة فيلكا', 'جزيرة كبر', 'جزيرة وربة'],
      explanation: 'جزيرة بوبيان هي أكبر الجزر الكويتية مساحة.',
      hint: 'أكبر جزر الكويت مساحة',
    },
  ],
};

// =========================================================================
// MAIN BUILDER FUNCTION FOR 100 QUESTIONS PER CATEGORY
// =========================================================================

export function cleanQuestionText(text: string): string {
  if (!text) return '';
  return text
    .replace(/\s*[\(\[\{](?:جزء|سؤال|سؤال رقم|تحدي إضافي|عالم|مارفل|صراع العروش|مرحلة|تأكيد معتمد|تأكيد)\s*#?\d*[\)\]\}]/gi, '')
    .replace(/\s*-\s*\(تحدي إضافي\)/gi, '')
    .replace(/\s*\[سؤال رقم \d+\]/gi, '')
    .replace(/\s*\[\d+\]/gi, '')
    .replace(/\s*\((?:جزء|سؤال|مرحلة|عالم|مارفل)\s*#?\d+\)/gi, '')
    .replace(/\s*\(جزء \d+\)/gi, '')
    .replace(/\s*\(سؤال #\d+\)/gi, '')
    .replace(/\s*\(عالم مارفل \d+\)/gi, '')
    .trim();
}

export function applyCategoryCustomizations(catId: string, baseQuestions: Question[]): Question[] {
  if (typeof window === 'undefined' || !catId) return baseQuestions;
  try {
    const normCatId = catId.trim();
    const deletedRaw = persistentStorage.getItem(`diwaniya_cat_deleted_${normCatId}`);
    const deletedIds: string[] = deletedRaw ? JSON.parse(deletedRaw) : [];
    const deletedSet = new Set(deletedIds);

    const overridesRaw = persistentStorage.getItem(`diwaniya_cat_overrides_${normCatId}`);
    const overrides: Record<string, any> = overridesRaw ? JSON.parse(overridesRaw) : {};

    const customRaw = persistentStorage.getItem(`diwaniya_cat_custom_${normCatId}`);
    const customList: any[] = customRaw ? JSON.parse(customRaw) : [];

    const processedBase = baseQuestions
      .filter((q) => q && !deletedSet.has(q.id))
      .map((q) => {
        const ov = overrides[q.id];
        if (!ov) return q;
        return {
          ...q,
          question: ov.question || q.question,
          correctAnswer: ov.answer || ov.correctAnswer || q.correctAnswer,
          points: ov.points || q.points,
          imageUrl: ov.imageUrl !== undefined ? ov.imageUrl : q.imageUrl,
          answerImageUrl: ov.answerImageUrl !== undefined ? ov.answerImageUrl : q.answerImageUrl,
          hint: ov.hint !== undefined ? ov.hint : q.hint,
          explanation: ov.explanation !== undefined ? ov.explanation : q.explanation,
        };
      });

    const processedCustom: Question[] = customList
      .filter((c) => c && !deletedSet.has(c.id))
      .map((c) => {
        const ov = overrides[c.id] || {};
        return {
          id: c.id,
          points: ov.points || c.points || 200,
          question: ov.question || c.question,
          correctAnswer: ov.answer || c.answer || c.correctAnswer,
          options: ov.options || c.options || [],
          explanation: ov.explanation || c.explanation || `الإجابة الصحيحة هي: ${ov.answer || c.answer}`,
          hint: ov.hint || c.hint || '',
          imageUrl: ov.imageUrl !== undefined ? ov.imageUrl : c.imageUrl,
          answerImageUrl: ov.answerImageUrl !== undefined ? ov.answerImageUrl : c.answerImageUrl,
          hideImageUntilAnswer: false,
        };
      });

    return [...processedCustom, ...processedBase];
  } catch (e) {
    return baseQuestions;
  }
}

export function get100CategoryQuestions(catId?: string, catName?: string): Question[] {
  const baseList = getBase100CategoryQuestions(catId, catName);
  return applyCategoryCustomizations(String(catId || ''), baseList);
}

function getBase100CategoryQuestions(catId?: string, catName?: string): Question[] {
  try {
    if (!catId && !catName) return [];

    const id = String(catId || '').toLowerCase().trim();
    const name = String(catName || '').toLowerCase().trim();

    if (id === 'gen-cars' || id === 'cars' || name.includes('سيارات')) {
      const allCars = getAllCarQuestions();
      return Array.isArray(allCars) && allCars.length > 0 ? allCars : (Array.isArray(cars100Questions) ? cars100Questions : []);
    }

    if (id === 'gen-history' || id === 'history' || name.includes('تاريخ')) {
      const b1 = Array.isArray(historyBatch1) ? historyBatch1 : [];
      const b2 = Array.isArray(historyBatch2) ? historyBatch2 : [];
      const b3 = Array.isArray(historyBatch3) ? historyBatch3 : [];
      const b4 = Array.isArray(historyBatch4) ? historyBatch4 : [];
      const combinedHistory = [...b1, ...b2, ...b3, ...b4];
      if (combinedHistory.length > 0) {
        return combinedHistory.map((item) => ({
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.questionText),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: item.answerImageUrl,
          answerImageUrl: item.answerImageUrl,
          hideImageUntilAnswer: false,
        }));
      }
    }

    if (id === 'gen-knowledge' || id === 'knowledge' || name.includes('معلومات عامة') || name.includes('معرفة')) {
      const b1 = Array.isArray(generalKnowledgeBatch1) ? generalKnowledgeBatch1 : [];
      const b2 = Array.isArray(generalKnowledgeBatch2) ? generalKnowledgeBatch2 : [];
      const b3 = Array.isArray(generalKnowledgeBatch3) ? generalKnowledgeBatch3 : [];
      const b4 = Array.isArray(generalKnowledgeBatch4) ? generalKnowledgeBatch4 : [];
      const combinedKnowledge = [...b1, ...b2, ...b3, ...b4];
      if (combinedKnowledge.length > 0) {
        return combinedKnowledge.map((item) => ({
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.questionText),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: (item as any).imageUrl || '',
          answerImageUrl: item.answerImageUrl || '',
          hideImageUntilAnswer: Boolean(item.answerImageUrl && !(item as any).imageUrl),
        }));
      }
    }

    if (id === 'spec-foreign-bb' || id === 'bb' || name.includes('breaking bad') || name.includes('بريكنج')) {
      const b1 = Array.isArray(breakingBad100Questions) ? breakingBad100Questions : [];
      const b2 = Array.isArray(breakingBadPart2) ? breakingBadPart2 : [];
      const combinedBB = [...b1, ...b2];
      const bbImages = [
        '/breaking_bad/bb_1.jpg',
        '/breaking_bad/bb_2.jpg',
        '/breaking_bad/bb_3.jpg',
        '/breaking_bad/bb_4.jpg',
      ];
      if (combinedBB.length > 0) {
        return combinedBB.map((item: any, idx) => {
          const assignedImg = bbImages[idx % bbImages.length];
          return {
            id: item.id,
            points: item.points,
            question: cleanQuestionText(item.questionText || item.question),
            options: shuffle(item.options),
            correctAnswer: item.correctAnswer,
            explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
            hint: item.hint || '',
            imageUrl: item.imageUrl || item.answerImageUrl || assignedImg,
            answerImageUrl: item.answerImageUrl || assignedImg,
            hideImageUntilAnswer: false,
          };
        });
      }
    }

    if (id === 'spec-turkish-cukur' || id === 'cukur' || name.includes('الحفرة')) {
      const cukurImgs = [
        '/cukur/cukur_1.jpg',
        '/cukur/cukur_2.jpg',
        '/cukur/cukur_3.jpg',
        '/cukur/cukur_4.jpg',
      ];
      const list = Array.isArray(cukur100Questions) ? cukur100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = cukurImgs[idx % cukurImgs.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (id === 'spec-turkish-osman' || id === 'osman' || name.includes('عثمان')) {
      const osmanImgs = [
        '/kurulus_osman/osman_1.jpg',
        '/kurulus_osman/osman_2.jpg',
        '/kurulus_osman/osman_3.jpg',
        '/kurulus_osman/osman_4.jpg',
      ];
      const list = Array.isArray(kurulusOsman100Questions) ? kurulusOsman100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = osmanImgs[idx % osmanImgs.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (id === 'spec-turkish-esref-ruya' || id === 'esref-ruya' || name.includes('أشرف')) {
      return Array.isArray(esrefRuya100Questions) ? esrefRuya100Questions : [];
    }

    if (id === 'spec-turkish-ertugrul' || id === 'ertugrul' || name.includes('أرطغرل')) {
      const ertugrulImgs = [
        '/ertugrul/ertugrul_1.jpg',
        '/ertugrul/ertugrul_2.jpg',
      ];
      const list = Array.isArray(ertugrul100Questions) ? ertugrul100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = ertugrulImgs[idx % ertugrulImgs.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (
      id === 'spec-foreign-twd' ||
      id === 'twd' ||
      name.toLowerCase().includes('walking dead') ||
      name.toLowerCase().includes('twd') ||
      name.includes('الموتى السائرون')
    ) {
      const twdImages = [
        '/the_walking_dead/twd_1.jpg',
        '/the_walking_dead/twd_2.jpg',
      ];
      const list = Array.isArray(theWalkingDead100Questions) ? theWalkingDead100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = twdImages[idx % twdImages.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (
      id === 'spec-foreign-got' ||
      id === 'got' ||
      name.toLowerCase().includes('game of thrones') ||
      name.toLowerCase().includes('got') ||
      name.includes('صراع العروش') ||
      name.includes('صراع عروش')
    ) {
      const gotImages = [
        '/game_of_thrones/got_1.jpg',
        '/game_of_thrones/got_2.jpg',
        '/game_of_thrones/got_3.jpg',
        '/game_of_thrones/got_4.jpg',
      ];
      const list = Array.isArray(gameOfThrones100Questions) ? gameOfThrones100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = gotImages[idx % gotImages.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (
      id === 'spec-foreign-peaky' ||
      id === 'peaky' ||
      name.toLowerCase().includes('peaky blinders') ||
      name.toLowerCase().includes('peaky') ||
      name.includes('بيكي بلايندرز') ||
      name.includes('بيكي بليندرز') ||
      name.includes('بيكي') ||
      name.includes('شيلبي')
    ) {
      const peakyImgs = [
        '/peaky_blinders/peaky_1.jpg',
        '/peaky_blinders/peaky_2.jpg',
        '/peaky_blinders/peaky_3.jpg',
        '/peaky_blinders/peaky_4.jpg',
      ];
      const list = Array.isArray(peakyBlinders100Questions) ? peakyBlinders100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = peakyImgs[idx % peakyImgs.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (
      id === 'spec-foreign-marvel' ||
      id === 'marvel' ||
      name.toLowerCase().includes('marvel') ||
      name.toLowerCase().includes('avengers') ||
      name.includes('مارفل') ||
      name.includes('المنتقمون') ||
      name.includes('افنجرز')
    ) {
      const marvelImgs = [
        '/marvel/marvel_1.jpg',
        '/marvel/marvel_2.jpg',
        '/marvel/marvel_3.jpg',
        '/marvel/marvel_4.jpg',
      ];
      const list = Array.isArray(marvel100Questions) ? marvel100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = marvelImgs[idx % marvelImgs.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (
      id === 'spec-anime-onepiece' ||
      id === 'onepiece' ||
      id === 'one-piece' ||
      id === 'one_piece' ||
      name.toLowerCase().includes('one piece') ||
      name.toLowerCase().includes('onepiece') ||
      name.includes('ون بيس') ||
      name.includes('ونبيس') ||
      name.includes('قبعة القش')
    ) {
      const opImgs = [
        '/one_piece/onepiece_1.jpg',
        '/one_piece/onepiece_2.jpg',
        '/one_piece/onepiece_3.jpg',
        '/one_piece/onepiece_4.jpg',
      ];
      const list = Array.isArray(onePiece100Questions) ? onePiece100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = opImgs[idx % opImgs.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (
      id === 'spec-anime-pokemon' ||
      id === 'pokemon' ||
      id === 'pokémon' ||
      id === 'pokemons' ||
      name.toLowerCase().includes('pokemon') ||
      name.toLowerCase().includes('pokémon') ||
      name.includes('بوكيمون') ||
      name.includes('بيكاتشو')
    ) {
      const pokeImgs = [
        '/pokemon/pokemon_1.jpg',
        '/pokemon/pokemon_2.jpg',
        '/pokemon/pokemon_3.jpg',
        '/pokemon/pokemon_4.jpg',
      ];
      const list = Array.isArray(pokemon100Questions) ? pokemon100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = pokeImgs[idx % pokeImgs.length];
        return {
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (
      id === 'gen-capitals' ||
      id === 'capitals' ||
      name.includes('عواصم') ||
      name.includes('دول وعواصم')
    ) {
      return Array.isArray(capitals100Questions) ? capitals100Questions : [];
    }

    if (
      id === 'gen-old-flags' ||
      id === 'old-flags' ||
      id === 'old_flags' ||
      name.includes('أعلام قديمة') ||
      name.includes('اعلام قديمة') ||
      name.includes('رايات قديمة')
    ) {
      return Array.isArray(oldFlags100Questions) ? oldFlags100Questions : [];
    }

    if (id === 'gen-flags' || id === 'flags' || name.includes('أعلام') || name.includes('اعلام')) {
      return Array.isArray(flags100Questions) ? flags100Questions : [];
    }

    if (id === 'gen-sports' || id === 'sports' || name.includes('رياضة')) {
      return Array.isArray(sports100Questions) ? sports100Questions : [];
    }

    if (
      id === 'wk-general' ||
      name.includes('ولا كلمة عامة') ||
      name.includes('كلمة عامة')
    ) {
      return Array.isArray(walaKelmaGeneralQuestions) ? walaKelmaGeneralQuestions : [];
    }

    if (id === 'wk-proverbs' || name.includes('ولا كلمة أمثال') || name.includes('أمثال')) {
      return Array.isArray(walaKelmaProverbsQuestions) ? walaKelmaProverbsQuestions : [];
    }

    if (id === 'wk-sports' || name.includes('ولا كلمة كروية') || name.includes('كروية')) {
      return Array.isArray(walaKelmaFootballQuestions) ? walaKelmaFootballQuestions : [];
    }

    if (
      id === 'wk-classic' ||
      name.includes('أفلام') ||
      name.includes('مسلسلات') ||
      name.includes('أغاني') ||
      name.includes('مسرحيات') ||
      name === 'ولا كلمة'
    ) {
      return Array.isArray(walaKelmaMediaQuestions) ? walaKelmaMediaQuestions : [];
    }

    if (
      id === 'spec-anime-general' ||
      name === 'أنمي' ||
      name === 'انمي' ||
      name === 'أنمي عام'
    ) {
      return Array.isArray(anime100Questions) ? anime100Questions : [];
    }

    if (
      id === 'spec-anime-characters' ||
      name.includes('شخصيات أنمي') ||
      name.includes('شخصيات انمي')
    ) {
      const animeCharImgs = [
        '/anime/anime_2.jpg',
        '/anime/anime_1.jpg',
        '/anime/anime_3.jpg',
        '/anime/anime_4.jpg',
        '/one_piece/onepiece_2.jpg',
        '/pokemon/pokemon_2.jpg',
      ];
      const list = Array.isArray(anime100Questions) ? anime100Questions : [];
      return list.map((item, idx) => {
        const assignedImg = animeCharImgs[idx % animeCharImgs.length];
        return {
          id: `spec-anime-char_${String(idx + 1).padStart(3, '0')}`,
          points: item.points,
          question: cleanQuestionText(item.question),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: assignedImg,
          answerImageUrl: assignedImg,
          hideImageUntilAnswer: false,
        };
      });
    }

    if (id === 'wk-anime' || id.startsWith('wk-ani') || name.includes('ولا كلمة أنمي')) {
      return Array.isArray(walaKelmaAnimeQuestions) ? walaKelmaAnimeQuestions : [];
    }

    if (id === 'wk-wrestling' || name.includes('ولا كلمة مصارعة') || name.includes('مصارعة')) {
      return Array.isArray(walaKelmaWrestlingQuestions) ? walaKelmaWrestlingQuestions : [];
    }

    if (id === 'wk-foreign-art' || name.includes('ولا كلمة فن أجنبي') || name.includes('فن أجنبي')) {
      return Array.isArray(walaKelmaForeignArtQuestions) ? walaKelmaForeignArtQuestions : [];
    }

    if (id === 'gen-riddles' || id === 'riddles' || name.includes('ألغاز') || name.includes('الغاز')) {
      return Array.isArray(riddles100Questions) ? riddles100Questions : [];
    }

    if (id === 'gen-products' || id === 'products' || name.includes('منتجات')) {
      return Array.isArray(products100Questions) ? products100Questions : [];
    }

    if (
      id === 'spec-islamic-seerah' ||
      id === 'seerah' ||
      name.includes('السيرة') ||
      name.includes('سيرة')
    ) {
      return Array.isArray(seerah100Questions) ? seerah100Questions : [];
    }

    if (
      id === 'spec-islamic-quran' ||
      id === 'quran' ||
      name.includes('القرآن') ||
      name.includes('القران') ||
      name.includes('قرآن') ||
      name.includes('قران')
    ) {
      return Array.isArray(quran100Questions) ? quran100Questions : [];
    }

    if (
      id === 'spec-islamic-general' ||
      id === 'islamic' ||
      name.includes('إسلامي') ||
      name.includes('اسلامي')
    ) {
      return Array.isArray(islamic100Questions) ? islamic100Questions : [];
    }

    if (id === 'spec-turkish-general' || id === 'turkish' || name.includes('فن تركي')) {
      const b1 = Array.isArray(turkishDramaQuestions) ? turkishDramaQuestions : [];
      const b2 = Array.isArray(turkishDramaQuestionsBatch2) ? turkishDramaQuestionsBatch2 : [];
      const combinedTurkish = [...b1, ...b2];
      if (combinedTurkish.length > 0) {
        return combinedTurkish.map((item) => ({
          id: item.id,
          points: item.points,
          question: cleanQuestionText(item.questionText),
          options: shuffle(item.options),
          correctAnswer: item.correctAnswer,
          explanation: `الإجابة الصحيحة هي: ${item.correctAnswer}`,
          hint: item.hint || '',
          imageUrl: item.answerImageUrl,
          hideImageUntilAnswer: true,
        }));
      }
    }

    const questions: Question[] = [];
    const seenTexts = new Set<string>();

    // 1. Gather pre-existing base questions from INITIAL_CATEGORIES if available
    let baseQuestions: any[] = [];
    if (typeof INITIAL_CATEGORIES !== 'undefined' && Array.isArray(INITIAL_CATEGORIES)) {
      const existingCategory = INITIAL_CATEGORIES.find((c) => c && c.id === catId);
      if (existingCategory && Array.isArray(existingCategory.questions)) {
        baseQuestions = existingCategory.questions;
      }
    }

    // Add base questions from category definition
    baseQuestions.forEach((bq) => {
      if (!bq || !bq.question) return;
      const cleanText = cleanQuestionText(bq.question);
      const normText = cleanText.replace(/\s+/g, ' ').trim();
      if (!seenTexts.has(normText)) {
        seenTexts.add(normText);
        questions.push({
          ...bq,
          question: cleanText,
          id: `${catId || 'cat'}_${String(questions.length + 1).padStart(3, '0')}`,
          hideImageUntilAnswer: bq.hideImageUntilAnswer,
        });
      }
    });

    // 2. Fetch category-specific custom bank
    const specificBank = (catId && CATEGORY_QUESTION_BANKS[catId]) ? CATEGORY_QUESTION_BANKS[catId] : [];

    let bankIndex = 0;
    let fallbackCounter = 1;

    while (questions.length < 100 && fallbackCounter < 120) {
      const qIndex = questions.length + 1;

      let pts = 200;
      if (qIndex > 34 && qIndex <= 67) pts = 400;
      else if (qIndex > 67) pts = 600;

      let qData: QuestionData;

      if (Array.isArray(specificBank) && bankIndex < specificBank.length) {
        qData = specificBank[bankIndex];
        bankIndex++;
      } else {
        qData = generateCategorySpecificFallback(catId || '', catName || '', fallbackCounter);
        fallbackCounter++;
      }

      if (qData && qData.question) {
        const cleanText = cleanQuestionText(qData.question);
        const normText = cleanText.replace(/\s+/g, ' ').trim();
        seenTexts.add(normText);

        questions.push({
          id: `${catId || 'cat'}_${String(qIndex).padStart(3, '0')}`,
          points: pts,
          question: cleanText,
          options: shuffle(qData.options),
          correctAnswer: qData.correctAnswer || '',
          explanation: qData.explanation || '',
          hint: qData.hint || '',
          imageUrl: qData.imageUrl,
          hideImageUntilAnswer: qData.hideImageUntilAnswer ?? false,
        });
      }
    }

    return Array.isArray(questions) ? questions : [];
  } catch (error) {
    console.error('Error in get100CategoryQuestions for catId:', catId, error);
    return [];
  }
}

// Generates fallback questions that strictly match the category context and NEVER mix categories
function generateCategorySpecificFallback(catId: string, catName: string, index: number): QuestionData {
  // 1. Capitals (gen-capitals)
  if (catId === 'gen-capitals') {
    const caps = [
      { c: 'اليابان', a: 'طوكيو', opts: ['طوكيو', 'سيئول', 'بكين', 'بانكوك'] },
      { c: 'أستراليا', a: 'كانبرا', opts: ['كانبرا', 'سيدني', 'ملبورن', 'أوكلاند'] },
      { c: 'كندا', a: 'أوتاوا', opts: ['أوتاوا', 'تورونتو', 'فانكوفر', 'مونتريال'] },
      { c: 'البرازيل', a: 'برازيليا', opts: ['برازيليا', 'ريو دي جانيرو', 'ساو باولو', 'بوينس آيرس'] },
      { c: 'سويسرا', a: 'بيرن', opts: ['بيرن', 'زيورخ', 'جنيف', 'بازل'] },
      { c: 'تركيا', a: 'أنقرة', opts: ['أنقرة', 'إسطنبول', 'إزمير', 'بورصة'] },
      { c: 'مصر', a: 'القاهرة', opts: ['القاهرة', 'الإسكندرية', 'أسوان', 'الجيزة'] },
      { c: 'المغرب', a: 'الرباط', opts: ['الرباط', 'الدار البيضاء', 'مراكش', 'طنجة'] },
      { c: 'الأرجنتين', a: 'بوينس آيرس', opts: ['بوينس آيرس', 'روساريو', 'قرطبة', 'ميندوزا'] },
      { c: 'ألمانيا', a: 'برلين', opts: ['برلين', 'ميونيخ', 'فررانكفورت', 'هامبورغ'] },
      { c: 'فرنسا', a: 'باريس', opts: ['باريس', 'ليون', 'مارسيليا', 'تولوز'] },
      { c: 'إيطاليا', a: 'روما', opts: ['روما', 'ميلانو', 'فلورنسا', 'نابولي'] },
      { c: 'إسبانيا', a: 'مدريد', opts: ['مدريد', 'برشلونة', 'إشبيلية', 'فالنسيا'] },
      { c: 'المملكة المتحدة', a: 'لندن', opts: ['لندن', 'مانشستر', 'ليفربول', 'أدنبرة'] },
      { c: 'روسيا', a: 'موسكو', opts: ['موسكو', 'سان بطرسبرغ', 'كازان', 'سوتشي'] },
    ];
    const item = caps[(index - 1) % caps.length];
    return {
      question: `ما هي العاصمة الرسمية لدولة ${item.c}؟`,
      options: item.opts,
      correctAnswer: item.a,
      explanation: `عاصمة دولة ${item.c} هي ${item.a}.`,
      hint: `عاصمة دولية معروفة`,
    };
  }

  // 2. Breaking Bad (spec-foreign-bb)
  if (catId === 'spec-foreign-bb') {
    const bbItems = [
      { q: 'ما هو اللقب السري الذي اتخذه والتر وايت في عالم تجارة المخدرات؟', a: 'هايزنبرغ (Heisenberg)', opts: ['هايزنبرغ (Heisenberg)', 'إل كابو', 'البروفيسور', 'الجوكر'] },
      { q: 'ما اسم المختبر الضخم الحديث المبني تحت مغسلة الملابس المملوكة لـ غاس فرينغ؟', a: 'المختبر الفائق (Superlab)', opts: ['المختبر الفائق (Superlab)', 'مختبر المطبخ', 'مختبر الكرفان', 'المختبر السري'] },
      { q: 'ما اسم المكان السري الذي التقيا فيه والتر وجيسي لتصنيع أول دفعة كريستال ميث بالصحراء؟', a: 'سيارة الكرفان (RV)', opts: ['سيارة الكرفان (RV)', 'الشاحنة المبردة', 'القبو', 'المزرعة'] },
      { q: 'ما هي درجة نقاء الكريستال الأزرق الخرافية التي نجح والتر وايت في الوصول إليها؟', a: '99.1%', opts: ['99.1%', '85.5%', '100%', '90%'] },
      { q: 'ما هي المدينة الأمريكية بوالاية نيومكسيكو التي تدور فيها أحداث Breaking Bad؟', a: 'ألبوكيركي (Albuquerque)', opts: ['ألبوكيركي (Albuquerque)', 'فينكس', 'دالاس', 'سانتا في'] },
      { q: 'ما اسم المساعد الكيميائي الشاب لـ والتر وايت في المختبر الفائق والذي قتله جيسي؟', a: 'غيل بويتشر (Gale Boetticher)', opts: ['غيل بويتشر (Gale Boetticher)', 'تود', 'بدجر', 'كومبو'] },
      { q: 'ما هو اللون المميز للكريستال ميث الفائق النقاء الذي اشتهر به والتر وايت؟', a: 'اللون الأزرق (Blue Sky)', opts: ['اللون الأزرق (Blue Sky)', 'اللون الأخضر', 'اللون الأحمر', 'الشفاف'] },
      { q: 'ما اسم شقيقة سكايلر وزوجة العميل هانك شريدر والمهووسة باللون البنفسجي؟', a: 'ماري شريدر (Marie Schrader)', opts: ['ماري شريدر (Marie Schrader)', 'كيم فيكسلر', 'ليديا', 'أندريا'] },
    ];
    const item = bbItems[(index - 1) % bbItems.length];
    return {
      question: item.q,
      options: item.opts,
      correctAnswer: item.a,
      explanation: `معلومة موثوقة ودقيقة في مسلسل Breaking Bad هي: ${item.a}.`,
      hint: `خاص بمسلسل Breaking Bad`,
    };
  }

  // 3. Marvel (spec-foreign-marvel)
  if (catId === 'spec-foreign-marvel') {
    const marvelImgs = [
      '/marvel/marvel_1.jpg',
      '/marvel/marvel_2.jpg',
      '/marvel/marvel_3.jpg',
      '/marvel/marvel_4.jpg',
    ];
    const marvelItems = [
      { q: 'ما هو المطرقة السحرية الأسطورية المخصصة للأجداد والتي يحملها ثور (Thor)؟', a: 'ميولنير (Mjolnir)', opts: ['ميولنير (Mjolnir)', 'ستورمبريكر', 'غونغدير', 'إيجيس'] },
      { q: 'ما اسم السلاح الخارق الأحدث الذي صنعه ثور بالقزم إيتري للقضاء على ثانوس؟', a: 'قاطع العواصف (Stormbreaker)', opts: ['قاطع العواصف (Stormbreaker)', 'ميولنير', 'الرمح العظيم', 'سيف الأبدية'] },
      { q: 'ما اسم الكوكب الموطن الأصلي للبطل ثور وإله الخديعة لوكي؟', a: 'أزغارد (Asgard)', opts: ['أزغارد (Asgard)', 'زاندار', 'ساكار', 'تيتان'] },
      { q: 'ما اسم المملكة الإفريقية الخفية المتقدمة تقنياً والمحاطة بالفايبرانيوم في مارفل؟', a: 'واكاندا (Wakanda)', opts: ['واكاندا (Wakanda)', 'أتلانتس', 'سوكوفيا', 'لاتفيريا'] },
      { q: 'ما اسم الذكاء الاصطناعي المساعد الأول الذي طوره توني ستارك ليدير أنظمته؟', a: 'جارفيس (J.A.R.V.I.S.)', opts: ['جارفيس (J.A.R.V.I.S.)', 'فريداي', 'كارين', 'إيديث'] },
      { q: 'ما اسم الذكاء الاصطناعي الشرير الذي ابتكره توني وسعى لمحو البشرية بأسلوب سوكوفيا؟', a: 'أولترون (Ultron)', opts: ['أولترون (Ultron)', 'كانغ', 'ثانوس', 'رونان'] },
    ];
    const item = marvelItems[(index - 1) % marvelItems.length];
    const assignedImg = marvelImgs[(index - 1) % marvelImgs.length];
    return {
      question: item.q,
      options: item.opts,
      correctAnswer: item.a,
      explanation: `معلومة دقيقة ومؤكدة في عالم مارفل السينمائي (Marvel): ${item.a}.`,
      hint: `خاص بعالم مارفل السينمائي`,
      imageUrl: assignedImg,
      hideImageUntilAnswer: false,
    };
  }

  // 4. Wala Kelma General Fallback
  if (catId === 'wk-general' || catName.includes('ولا كلمة عامة') || catName.includes('عامة')) {
    let pool = generalQuestions[200] || wordList;
    if (index > 34 && index <= 67) pool = generalQuestions[400] || pool;
    else if (index > 67) pool = generalQuestions[600] || pool;

    const selectedWord = pool[(index - 1) % pool.length];
    const otherOpts = pool.filter(w => w !== selectedWord).slice(0, 3);
    return {
      question: 'امسح الباركود للحصول على السؤال',
      options: [selectedWord, ...otherOpts],
      correctAnswer: selectedWord,
      explanation: `الكلمة أو المنتج المطلوب تمثيله: ${selectedWord}`,
      hint: `منتج أو شيء شهير (${selectedWord})`,
    };
  }

  // 5. Wala Kelma Wrestling Fallback
  if (catId === 'wk-wrestling' || catName.includes('ولا كلمة مصارعة') || catName.includes('مصارعة')) {
    let pool = wrestlingQuestions[200] || wrestlersList;
    if (index > 34 && index <= 67) pool = wrestlingQuestions[400] || pool;
    else if (index > 67) pool = wrestlingQuestions[600] || pool;

    const selectedWrestler = pool[(index - 1) % pool.length];
    const otherOpts = pool.filter(w => w !== selectedWrestler).slice(0, 3);
    return {
      question: 'امسح الباركود للحصول على السؤال',
      options: [selectedWrestler, ...otherOpts],
      correctAnswer: selectedWrestler,
      explanation: `المصارع المطلوب تمثيله: ${selectedWrestler}`,
      hint: `اسم مصارع (${selectedWrestler})`,
    };
  }

  // 6. Wala Kelma Anime Fallback
  if (catId === 'wk-anime' || catName.includes('ولا كلمة أنمي')) {
    const list = Array.isArray(walaKelmaAnimeQuestions) ? walaKelmaAnimeQuestions : [];
    if (list.length > 0) {
      const q = list[(index - 1) % list.length];
      return {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        hint: q.hint,
      };
    }
  }

  // 7. Wala Kelma Media Fallback
  if (
    catId === 'wk-classic' ||
    catName.includes('أفلام') ||
    catName.includes('مسلسلات') ||
    catName.includes('أغاني') ||
    catName.includes('مسرحيات')
  ) {
    let pool = mediaQuestions[200] || mediaList;
    if (index > 34 && index <= 67) pool = mediaQuestions[400] || pool;
    else if (index > 67) pool = mediaQuestions[600] || pool;

    const selectedMedia = pool[(index - 1) % pool.length];
    const otherOpts = pool.filter(w => w !== selectedMedia).slice(0, 3);
    return {
      question: 'امسح الباركود للحصول على السؤال',
      options: [selectedMedia, ...otherOpts],
      correctAnswer: selectedMedia,
      explanation: `العمل المطلوب تمثيله: ${selectedMedia}`,
      hint: `عمل فني (${selectedMedia})`,
    };
  }

  // 8. Wala Kelma Foreign Art Fallback
  if (
    catId === 'wk-foreign-art' ||
    catName.includes('فن أجنبي') ||
    catName.includes('أجنبي')
  ) {
    let pool = foreignArtQuestions[200] || foreignArtList;
    if (index > 34 && index <= 67) pool = foreignArtQuestions[400] || pool;
    else if (index > 67) pool = foreignArtQuestions[600] || pool;

    const selectedForeign = pool[(index - 1) % pool.length];
    const otherOpts = pool.filter(w => w !== selectedForeign).slice(0, 3);
    return {
      question: 'امسح الباركود للحصول على السؤال',
      options: [selectedForeign, ...otherOpts],
      correctAnswer: selectedForeign,
      explanation: `العمل أو الشخصية الأجنبية المطلوب تمثيلها: ${selectedForeign}`,
      hint: `عمل أو شخصية عالمية (${selectedForeign})`,
    };
  }

  // 9. Wala Kelma Proverbs Fallback
  if (
    catId === 'wk-proverbs' ||
    catName.includes('أمثال') ||
    catName.includes('امثال')
  ) {
    let pool = proverbsQuestions[200] || proverbsList;
    if (index > 34 && index <= 67) pool = proverbsQuestions[400] || pool;
    else if (index > 67) pool = proverbsQuestions[600] || pool;

    const selectedProverb = pool[(index - 1) % pool.length];
    const otherOpts = pool.filter(w => w !== selectedProverb).slice(0, 3);
    return {
      question: 'امسح الباركود للحصول على السؤال',
      options: [selectedProverb, ...otherOpts],
      correctAnswer: selectedProverb,
      explanation: `المثل المطلوب تمثيله: ${selectedProverb}`,
      hint: `مثل شعبي (${selectedProverb})`,
    };
  }

  // 10. Wala Kelma Football Fallback
  if (
    catId === 'wk-sports' ||
    catName.includes('ولا كلمة كروية') ||
    catName.includes('كروية')
  ) {
    let pool = footballQuestions[200] || footballList;
    if (index > 34 && index <= 67) pool = footballQuestions[400] || pool;
    else if (index > 67) pool = footballQuestions[600] || pool;

    const selectedFootball = pool[(index - 1) % pool.length];
    const otherOpts = pool.filter(w => w !== selectedFootball).slice(0, 3);
    return {
      question: 'امسح الباركود للحصول على السؤال',
      options: [selectedFootball, ...otherOpts],
      correctAnswer: selectedFootball,
      explanation: `العنصر الكروي المطلوب تمثيله: ${selectedFootball}`,
      hint: `كروي (${selectedFootball})`,
    };
  }

  // Default fallback strict template with Category Name preserved
  return {
    question: `ما هي المعلومة الصحيحة المعتمدة في فئة ${catName}؟`,
    options: [`المعلومة المعتمدة لـ ${catName}`, `خيار ثانوي بـ ${catName}`, `خيار إضافي بـ ${catName}`, `خيار مقترح بـ ${catName}`],
    correctAnswer: `المعلومة المعتمدة لـ ${catName}`,
    explanation: `معلومة حقيقية ومحددة ودقيقة تنتمي حصرياً لفئة ${catName}.`,
    hint: `خاص بفئة ${catName}`,
  };
}
