import type { Question } from '../types';

// Text-only quiz records reviewed for the Diwaniya game.
// The five original image-linked category questions are preserved by hundredQuestionsBank.ts.
// Reference material (follow up on ambiguous claims before merging):
// https://www.the-avenues.com/kuwait/en/about
// https://mabanee.com/en/projects/kuwait/the-avenues---kuwait
// https://www.tamdeen.com/portfolio/al-kout
// https://www.tamdeen.com/portfolio/360-mall
// https://www.salhia.com/kuwait/salhia-commercial-complex-retail-and-leisure/
// https://www.theassima.com/en/the-project/
const items: Array<Pick<Question, 'question' | 'correctAnswer' | 'points'>> = [
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «الأفنيوز»؟",
    "correctAnswer": "الري"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «ذا جيت»؟",
    "correctAnswer": "العقيلة"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مول العاصمة (Assima)»؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «بوليفارد مول»؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «البروميناد»؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «ذا ويرهاوس (The Warehouse)»؟",
    "correctAnswer": "الصباحية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع الصالحية»؟",
    "correctAnswer": "القبلة"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع دلال»؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع أوتاد»؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 200,
    "question": "على أي طريق دائري يقع مجمع الأفنيوز في منطقة الري؟",
    "correctAnswer": "الدائري الخامس"
  },
  {
    "points": 200,
    "question": "في أي منطقة توجد وجهة التسوق القريبة من مدينة صباح الأحمد البحرية؟",
    "correctAnswer": "الخيران"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «ذا ووك مول»؟",
    "correctAnswer": "العارضية"
  },
  {
    "points": 200,
    "question": "في أي منطقة يقع مركز «سما» التجاري الواقع على طريق الجهراء؟",
    "correctAnswer": "الصليبخات"
  },
  {
    "points": 200,
    "question": "على أي شارع رئيسي في السالمية يقع مارينا مول؟",
    "correctAnswer": "شارع سالم المبارك"
  },
  {
    "points": 200,
    "question": "في أي محافظة يقع مجمع الأفنيوز؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع الراية»؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع جابر»؟",
    "correctAnswer": "جابر الأحمد"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «أفنتورا مول»؟",
    "correctAnswer": "جابر الأحمد"
  },
  {
    "points": 200,
    "question": "في أي منطقة يقع «سما مول» المجاور لمنطقة الفنطاس جنوب الكويت؟",
    "correctAnswer": "العقيلة"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع البيرق»؟",
    "correctAnswer": "العقيلة"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «ذا فيليج»؟",
    "correctAnswer": "مدينة صباح الأحمد"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «كيوب مول»؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «الفنار مول»؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «سيمفوني ستايل مول»؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع السلام»؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «المهلب مول»؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع دار العوضي»؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «مجمع الخيمة»؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 200,
    "question": "في أي منطقة كويتية يوجد «كويت ماجيك مول»؟",
    "correctAnswer": "أبو حليفة"
  },
  {
    "points": 200,
    "question": "أي مجمع تسوق كويتي شهير كان افتتاح مرحلته الأولى عام 2007؟",
    "correctAnswer": "الأفنيوز"
  },
  {
    "points": 200,
    "question": "ما اسم أول جزء افتُتح في الأفنيوز بالكويت؟",
    "correctAnswer": "1st Avenue (الأفنيو الأول)"
  },
  {
    "points": 200,
    "question": "ما اسم ممر التسوق الواسع في الأفنيوز المستوحى من الشوارع الكبرى؟",
    "correctAnswer": "Grand Avenue"
  },
  {
    "points": 400,
    "question": "ما اسم منطقة الأفنيوز المصممة بروح السوق الشعبي التقليدي؟",
    "correctAnswer": "The Souk"
  },
  {
    "points": 400,
    "question": "أي منطقة في الأفنيوز ترتبط أكثر بعلامات التسوق الفاخرة؟",
    "correctAnswer": "Prestige"
  },
  {
    "points": 400,
    "question": "ما اسم منطقة الأفنيوز المستوحاة من الحدائق والمساحات الخضراء؟",
    "correctAnswer": "The Gardens"
  },
  {
    "points": 400,
    "question": "أي منطقة في الأفنيوز يستوحي تصميمها من الأضواء والتقنية في طوكيو وهونغ كونغ؟",
    "correctAnswer": "إلكترا (Electra)"
  },
  {
    "points": 400,
    "question": "في أي منطقة من الأفنيوز يوجد مدخل فندق هيلتون غاردن إن؟",
    "correctAnswer": "ذا فورم (The Forum)"
  },
  {
    "points": 400,
    "question": "في أي وجهة كويتية توجد سينما 1954 Film House ذات الطابع الكلاسيكي؟",
    "correctAnswer": "سوق الكوت"
  },
  {
    "points": 400,
    "question": "في أي وجهة تسوق كويتية توجد صالات سينما بتقنيتي IMAX و4DX وفق موقع الشركة المطوّرة؟",
    "correctAnswer": "مجمع الكوت"
  },
  {
    "points": 400,
    "question": "ما اسم الجهة المطوّرة لمجمع 360 ومشروع الكوت في الكويت؟",
    "correctAnswer": "مجموعة التمدين"
  },
  {
    "points": 400,
    "question": "ما اسم الشركة التي طوّرت مشروع العاصمة والمملوكة بالكامل للصالحية العقارية؟",
    "correctAnswer": "شركة العاصمة العقارية"
  },
  {
    "points": 400,
    "question": "أي منطقة من الأفنيوز يُعرف ممشاها المغطّى بأجواء الشوارع الأوروبية وأشجارها؟",
    "correctAnswer": "غراند أفنيو (Grand Avenue)"
  },
  {
    "points": 400,
    "question": "كم منطقة تسوق مميزة يتكون منها الأفنيوز وفق التقرير السنوي لشركة المباني 2025؟",
    "correctAnswer": "12 منطقة"
  },
  {
    "points": 400,
    "question": "ما الشركة العقارية المالكة والمطوّرة لمجمع الأفنيوز الكويتي؟",
    "correctAnswer": "شركة المباني"
  },
  {
    "points": 400,
    "question": "أي مجمع كويتي يضم منطقة تحمل اسم Grand Avenue؟",
    "correctAnswer": "الأفنيوز"
  },
  {
    "points": 400,
    "question": "أي مجمع كويتي يحتوي على منطقتي Prestige وThe Souk معاً؟",
    "correctAnswer": "الأفنيوز"
  },
  {
    "points": 400,
    "question": "أي مجمع يرتبط بممشى مارينا كريسنت على الواجهة البحرية؟",
    "correctAnswer": "مارينا مول"
  },
  {
    "points": 400,
    "question": "أي مجمع يقع على الساحل في الفحيحيل وله ساحة ونافورة مشهورة؟",
    "correctAnswer": "الكوت"
  },
  {
    "points": 400,
    "question": "أي مجمع تسوق كبير يقع في الزهراء جنوب السرة؟",
    "correctAnswer": "360 مول"
  },
  {
    "points": 400,
    "question": "أي مركز تسوق يحمل اسم برج طويل شهير في منطقة شرق؟",
    "correctAnswer": "الحمراء"
  },
  {
    "points": 400,
    "question": "أي مجمع يقع على ساحل شرق ويحمل اسم «السوق»؟",
    "correctAnswer": "سوق شرق"
  },
  {
    "points": 400,
    "question": "أي مجمع في السالمية يجاور حديقة بوليفارد الواسعة؟",
    "correctAnswer": "بوليفارد مول"
  },
  {
    "points": 400,
    "question": "أي مجمع في حولي يحمل الاسم الإنجليزي The Promenade؟",
    "correctAnswer": "البروميناد"
  },
  {
    "points": 400,
    "question": "أي مجمع كبير في الصباحية يحمل اسم The Warehouse؟",
    "correctAnswer": "ذا ويرهاوس"
  },
  {
    "points": 400,
    "question": "أي مجمع يقع في العقيلة ويُعرف باسمه الإنجليزي The Gate؟",
    "correctAnswer": "ذا جيت"
  },
  {
    "points": 400,
    "question": "أي مجمع في قلب مدينة الكويت يحمل اسماً يعني «العاصمة»؟",
    "correctAnswer": "مول العاصمة"
  },
  {
    "points": 400,
    "question": "أي مجمع في القبلة يحمل اسم منطقة الصالحية؟",
    "correctAnswer": "مجمع الصالحية"
  },
  {
    "points": 400,
    "question": "أي مجمع في الجهراء يحمل اسم أوتاد؟",
    "correctAnswer": "مجمع أوتاد"
  },
  {
    "points": 400,
    "question": "ما اسم المجمع الذي يُعرف بالإنجليزية باسم The Walk ويقع في العارضية؟",
    "correctAnswer": "ذا ووك"
  },
  {
    "points": 400,
    "question": "في أي مدينة كويتية يقع مجمع أفنتورا؟",
    "correctAnswer": "جابر الأحمد"
  },
  {
    "points": 400,
    "question": "ما اسم وجهة التسوق المعروفة في منطقة الخيران؟",
    "correctAnswer": "مجمع الخيران"
  },
  {
    "points": 400,
    "question": "في أي منطقة بالكويت يقع مجمع منارة مول بحسب دليل مجمعات الكويت؟",
    "correctAnswer": "الشويخ"
  },
  {
    "points": 400,
    "question": "وفق تقرير شركة المباني لعام 2025، ما المساحة المبنية التقريبية للأفنيوز؟",
    "correctAnswer": "1.3 مليون متر مربع"
  },
  {
    "points": 600,
    "question": "ما مساحة الأرض التقريبية التي يقوم عليها الأفنيوز وفق تقرير المباني؟",
    "correctAnswer": "360 ألف متر مربع"
  },
  {
    "points": 600,
    "question": "كم موقف سيارة تقريباً يوفره مجمع الأفنيوز وفق تقرير الشركة المطورة؟",
    "correctAnswer": "13 ألف موقف"
  },
  {
    "points": 600,
    "question": "بحسب تقرير المباني السنوي لعام 2025، ما مستوى شهادة LEED للمباني القائمة الذي ورد لمجمع الأفنيوز؟",
    "correctAnswer": "الذهبية (Gold)"
  },
  {
    "points": 600,
    "question": "كم يزيد عدد متاجر الأفنيوز وفق تقرير شركة المباني لعام 2025؟",
    "correctAnswer": "أكثر من 1100 متجر"
  },
  {
    "points": 600,
    "question": "أي مجمع في الكويت يضم منطقة تجارية اسمها إلكترا وتجربة تسوق تقنية؟",
    "correctAnswer": "الأفنيوز"
  },
  {
    "points": 600,
    "question": "من أمير الكويت الذي افتتح المرحلة الأولى للأفنيوز عام 2007؟",
    "correctAnswer": "الشيخ صباح الأحمد الجابر الصباح"
  },
  {
    "points": 600,
    "question": "في أي عام بدأت المرحلة الثانية من توسعة الأفنيوز بعد افتتاحه الأول؟",
    "correctAnswer": "2008"
  },
  {
    "points": 600,
    "question": "ما اسم الفندق ذي الأربع نجوم المتصل بالأفنيوز والمفتتح عام 2019؟",
    "correctAnswer": "هيلتون غاردن إن"
  },
  {
    "points": 600,
    "question": "في أي شهر وسنة افتُتح فندق والدورف أستوريا المجاور للأفنيوز؟",
    "correctAnswer": "أغسطس 2022"
  },
  {
    "points": 600,
    "question": "بين أي شارعين رئيسيين يقع الأفنيوز في منطقة الري؟",
    "correctAnswer": "الغزالي ومحمد بن القاسم"
  },
  {
    "points": 600,
    "question": "ما الشركة الكويتية المطورة لمجمع 360؟",
    "correctAnswer": "مجموعة التمدين"
  },
  {
    "points": 600,
    "question": "في أي مجمع يوجد فرع أكاديمية رافاييل نادال للتنس الذي وُصف بأنه الأول خارج أوروبا؟",
    "correctAnswer": "360 مول"
  },
  {
    "points": 600,
    "question": "ما اسم قاعة الفعاليات الكبيرة الموجودة ضمن توسعة مجمع 360؟",
    "correctAnswer": "أرينا الكويت (The Arena Kuwait)"
  },
  {
    "points": 600,
    "question": "ما اسم الفندق الفاخر المتصل بمجمع 360؟",
    "correctAnswer": "غراند حياة الكويت"
  },
  {
    "points": 600,
    "question": "أي مجمع كويتي يضم التسوق والرياضة والفندق ومركز فعاليات ضمن مشروع واحد؟",
    "correctAnswer": "360 مول"
  },
  {
    "points": 600,
    "question": "ما المجموعة العقارية المطوّرة لمشروع الكوت في الفحيحيل؟",
    "correctAnswer": "مجموعة التمدين"
  },
  {
    "points": 600,
    "question": "ما اسم منطقة الواجهة التراثية لصيادي الأسماك ضمن مشروع الكوت؟",
    "correctAnswer": "مرسى الصيادين (Fisherman's Wharf)"
  },
  {
    "points": 600,
    "question": "ما اسم مرفأ القوارب الذي يشكّل جزءاً من وجهة الكوت؟",
    "correctAnswer": "مارينا الكوت"
  },
  {
    "points": 600,
    "question": "ما اسم السوق التراثي في الفحيحيل المتصل بمجمع تجاري عبر جسر مشاة؟",
    "correctAnswer": "سوق الكوت"
  },
  {
    "points": 600,
    "question": "ما اسم الممشى الساحلي المطل على البحر ضمن مشروع الكوت؟",
    "correctAnswer": "ساحل الكوت"
  },
  {
    "points": 600,
    "question": "أي مجمع تجاري ساحلي في الفحيحيل اشتهر بنافورته الراقصة؟",
    "correctAnswer": "الكوت"
  },
  {
    "points": 600,
    "question": "ما اسم الفندق المعروف ضمن مجمع الكوت في الفحيحيل؟",
    "correctAnswer": "حياة ريجنسي الكوت"
  },
  {
    "points": 600,
    "question": "في أي عام افتُتح مجمع الصالحية التجاري بحسب موقعه الرسمي؟",
    "correctAnswer": "1978"
  },
  {
    "points": 600,
    "question": "ما الشركة المالكة والمشغّلة لمجمع الصالحية التجاري؟",
    "correctAnswer": "شركة الصالحية العقارية"
  },
  {
    "points": 600,
    "question": "ما مجمع الكويت الذي يُوصف بأنه أول تطوير متعدد الاستخدامات للتسوق والترفيه في الخليج؟",
    "correctAnswer": "مجمع الصالحية"
  },
  {
    "points": 600,
    "question": "كم عدد مواقف السيارات المخصّصة لمجمع الصالحية بحسب موقع الشركة المالكة؟",
    "correctAnswer": "820 موقفاً"
  },
  {
    "points": 600,
    "question": "كم طابقاً للمكاتب تعلو الطوابق التجارية في مجمع الصالحية؟",
    "correctAnswer": "خمسة طوابق"
  },
  {
    "points": 600,
    "question": "في أي عام افتتح مارينا مول في السالمية؟",
    "correctAnswer": "2002"
  },
  {
    "points": 600,
    "question": "ما اسم منطقة المطاعم والممشى الشاطئي التابعة لتجربة مارينا مول؟",
    "correctAnswer": "مارينا كريسنت"
  },
  {
    "points": 600,
    "question": "أي شركة عقارية طوّرت مشروع العاصمة (Assima) في الكويت؟",
    "correctAnswer": "الصالحية العقارية"
  },
  {
    "points": 600,
    "question": "ما اسم علامة الشقق الفندقية التي يضمها مشروع العاصمة؟",
    "correctAnswer": "ماريوت إكزكيوتيف أبارتمنتس"
  },
  {
    "points": 600,
    "question": "ما المكوّن التجاري المكتبي المرتفع الذي يرتبط بمول العاصمة ضمن المشروع؟",
    "correctAnswer": "برج العاصمة (Assima Tower)"
  }
];

export const reviewedMallsQuestions: Question[] = items.map((item, index) => ({
  id: `malls_reviewed_${String(index + 1).padStart(3, '0')}`,
  ...item,
  options: [],
  explanation: `الإجابة الصحيحة: ${item.correctAnswer}`,
}));
