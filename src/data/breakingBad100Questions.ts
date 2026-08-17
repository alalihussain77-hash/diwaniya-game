export interface BreakingBadQuestion {
  id: string;
  category: string;
  points: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  answerImageUrl?: string;
  hint?: string;
}

export const breakingBad100Questions: BreakingBadQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل - 33 سؤالاً) ---
  // ==========================================
  {
    id: "bb_q_001",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هي المهنة التي كان يعمل بها والتر وايت في بداية المسلسل؟",
    options: ["معلم كيمياء", "طبيب أسنان", "محاسب", "مهندس مدني"],
    correctAnswer: "معلم كيمياء",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "كان يدرس المادة للطلاب في المدرسة الثانوية ويعمل جزئياً في مغسلة سيارات"
  },
  {
    id: "bb_q_002",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم شريك والتر وايت الأساسي في طبخ وتجارة الميث؟",
    options: ["جيسي بينكمان", "تود ألكويست", "غيل بويتيشر", "سول غودمان"],
    correctAnswer: "جيسي بينكمان",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "كان طالبه الكسول السابق في المدرسة الثانوية"
  },
  {
    id: "bb_q_003",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم عديل والتر وايت الذي يعمل محققاً في هيئة مكافحة المخدرات (DEA)؟",
    options: ["هانك شريتر", "ستيفن غوميز", "مايك إرمانتراوت", "تود ألكويست"],
    correctAnswer: "هانك شريتر",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "زوج أخت سكايلر (ماري) ويقضي وقته في جمع المعادن"
  },
  {
    id: "bb_q_004",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم المحامي الفاسد ذو الأسلوب المميز الذي يلجأ إليه والتر وجيسي؟",
    options: ["سول غودمان", "بيل أوكلي", "تشاك مكغيل", "هاورد هاملين"],
    correctAnswer: "سول غودمان",
    answerImageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800",
    hint: "شعار دعايته الشهير: 'اتصل بسول!'"
  },
  {
    id: "bb_q_005",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم زوجة والتر وايت؟",
    options: ["سكايلر وايت", "ماري شريتر", "جين مارغوليس", "ليديا رودارتي"],
    correctAnswer: "سكايلر وايت",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "كاتبة حسابات سابقة شاركته لاحقاً في تبييض الأموال"
  },
  {
    id: "bb_q_006",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هي المركبة التي استخدمها والتر وجيسي كمختبر متنقل للميث في البداية؟",
    options: ["شاحنة تخييم RV", "شاحنة نقل لحوم", "سيارة إسعاف", "حافلة مدرسية"],
    correctAnswer: "شاحنة تخييم RV",
    answerImageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800",
    hint: "من نوع فليتوود باوندر وقد توقفت بهم في الصحراء مراراً"
  },
  {
    id: "bb_q_007",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هي نسبة نقاء الميث الأزرق الذي يصنعه والتر وايت؟",
    options: ["99.1%", "85.5%", "72.4%", "100%"],
    correctAnswer: "99.1%",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "نسبة عالية جداً تجعل بضاعته مطلوبة في السوق كتحفة كيميائية"
  },
  {
    id: "bb_q_008",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم الشريك واليد اليمنى لغاس فرينغ المسؤول عن الأمن والعمليات؟",
    options: ["مايك إرمانتراوت", "فيكتور", "تايروس كيت", "هوييل توبس"],
    correctAnswer: "مايك إرمانتراوت",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "شرطي سابق متقاعد وعجوز صارم لا يحب الكلام الكثير"
  },
  {
    id: "bb_q_009",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما لون القبعة الشهيرة التي يرتديها والتر وايت عندما يتقمص شخصية 'هايزنبرغ'؟",
    options: ["سوداء", "بيضاء", "حمراء", "صفراء"],
    correctAnswer: "سوداء",
    answerImageUrl: "https://images.unsplash.com/photo-1514327605112-78c73467e1b4?w=800",
    hint: "قبعة مسطحة من طراز بوركبايه ترتبط بهوية تاجر المخدرات المهيب"
  },
  {
    id: "bb_q_010",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم سلسلة مطاعم الوجبات السريعة التي يمتلكها ويستخدمها غاس فرينغ كواجهة؟",
    options: ["لوس بولوس هيرمانوس", "بوبل غاي", "كنتاكي فرايد", "ماكدونالدز"],
    correctAnswer: "لوس بولوس هيرمانوس",
    answerImageUrl: "https://images.unsplash.com/photo-1626509854183-efe262e34582?w=800",
    hint: "تعني باللغة الإسبانية 'الدجاجتان الشقيقتان'"
  },
  {
    id: "bb_q_011",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم العجوز المقعد من عائلة سلامانكا الذي يستخدم جرساً للتواصل؟",
    options: ["هكتور سلامانكا", "توكو سلامانكا", "لالبو سلامانكا", "غاس فرينغ"],
    correctAnswer: "هكتور سلامانكا",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "عم عائلة سلامانكا ولا يستطيع الكلام أو الحركة بسبب جلطة دماغية"
  },
  {
    id: "bb_q_012",
    category: "Breaking Bad",
    points: 200,
    questionText: "أين يقع المختبر الفائق (Superlab) الذي بناه غاس فرينغ لوالتر وايت؟",
    options: ["أسفل مغسلة ملابس صناعية", "تحت مطعم الدجاج", "خلف مغسلة السيارات", "في منجم قديم بالصحراء"],
    correctAnswer: "أسفل مغسلة ملابس صناعية",
    answerImageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800",
    hint: "مختبر سري متطور يخفيه غاس تحت منشأة غسيل ملابس ضخمة"
  },
  {
    id: "bb_q_013",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هي المدينة الرئيسية التي تدور فيها أحداث المسلسل؟",
    options: ["ألبوكركي", "لوس أنجلوس", "لاس فيغاس", "هيوستن"],
    correctAnswer: "ألبوكركي",
    answerImageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
    hint: "مدينة صحراوية في ولاية نيومكسيكو الأمريكية"
  },
  {
    id: "bb_q_014",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم ابنة والتر وايت الرضيعة التي ولدت أثناء الأزمات؟",
    options: ["هولي", "جين", "أندريا", "كيلي"],
    correctAnswer: "هولي",
    answerImageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800",
    hint: "الطفلة الصغيرة التي تتعلق بها سكايلر ووالتر"
  },
  {
    id: "bb_q_015",
    category: "Breaking Bad",
    points: 200,
    questionText: "كيف توفي غاس فرينغ في نهاية الموسم الرابع؟",
    options: ["انفجار قنبلة في دار الرعاية", "طلق ناري من والتر وايت", "تسمم بالرايسين", "حادث سير متعمد"],
    correctAnswer: "انفجار قنبلة في دار الرعاية",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "دبر له والتر فخاً محكماً بالتعاون مع هكتور سلامانكا"
  },
  {
    id: "bb_q_016",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم المغسلة التي اشتراها والتر وسكايلر لتكون واجهة لتبييض الأموال؟",
    options: ["مغسلة A1A", "مغسلة سباركلي", "مغسلة بلاتينيوم", "مغسلة الصفا"],
    correctAnswer: "مغسلة A1A",
    answerImageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800",
    hint: "نفس مغسلة السيارات التي كان يعمل فيها والتر في البداية"
  },
  {
    id: "bb_q_017",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هي العبارة الشهيرة أو كلمة اللسان التي يكررها جيسي بينكمان باستمرار؟",
    options: ["!Bitch", "!Yo Man", "!Jesse", "!Science"],
    correctAnswer: "!Bitch",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "كلمة إنجليزية بذيئة يستخدمها في حديثه اليومي بشكل ساخر"
  },
  {
    id: "bb_q_018",
    category: "Breaking Bad",
    points: 200,
    questionText: "كم عدد مواسم مسلسل Breaking Bad الأساسية؟",
    options: ["5 مواسم", "4 مواسم", "6 مواسم", "3 مواسم"],
    correctAnswer: "5 مواسم",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "انتهى المسلسل بـ 62 حلقة درامية ملحمية"
  },
  {
    id: "bb_q_019",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم تاجر المخدرات المجنون من عائلة سلامانكا الذي ظهر في الموسمين الأول والثاني؟",
    options: ["توكو سلامانكا", "غونزالو", "هكتور", "إلكاديو"],
    correctAnswer: "توكو سلامانكا",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "رجل عصابات عصبي ومجنون يتعاطى الميث بقسوة قبل أن يقتله هانك"
  },
  {
    id: "bb_q_020",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هو اسم الابن الأكبر لوالتر وايت الذي يعاني من الشلل الدماغي؟",
    options: ["والتر جونيور (فلين)", "روبرت", "ديفيد", "ستيفن"],
    correctAnswer: "والتر جونيور (فلين)",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "يحب تناول الإفطار ويعشق والده كثيراً قبل أن ينقلب عليه"
  },
  {
    id: "bb_q_021",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم صديقة جيسي بينكمان الأولى التي ماتت بفرط جرعة في الموسم الثاني؟",
    options: ["جين مارغوليس", "أندريا كانتيلو", "ماري شريتر", "ليديا"],
    correctAnswer: "جين مارغوليس",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "كانت صاحبة البيت الذي استأجره جيسي وتعمل رسامة وشم"
  },
  {
    id: "bb_q_022",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم صديق جيسي المقرب ذو الوزن الزائد والذي يساعدهما في البيع؟",
    options: ["باجر (Badger)", "سكيني بيت", "كومبو", "غيل"],
    correctAnswer: "باجر (Badger)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "صديق جيسي الأحمق الذي يحب أفلام Star Trek"
  },
  {
    id: "bb_q_023",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم صديق جيسي النحيف الذي يرتدي دائماً قبعة صوفية؟",
    options: ["سكيني بيت", "باجر", "كومبو", "تود"],
    correctAnswer: "سكيني بيت",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "يجيد عزف البيانو في إحدى اللقطات الشهيرة بالمسلسل"
  },
  {
    id: "bb_q_024",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما المرض الخطير الذي أُصيب به والتر وايت وكان السبب في دخوله عالم المخدرات؟",
    options: ["سرطان الرئة", "سرطان الكبد", "مرض القلب", "الفشل الكلوي"],
    correctAnswer: "سرطان الرئة",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "كان في المرحلة الثالثة وقيل له إن أيامه معدودة"
  },
  {
    id: "bb_q_025",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم أخت سكايلر وزوجة المحقق هانك؟",
    options: ["ماري شريتر", "جين مارغوليس", "أندريا", "كارمن"],
    correctAnswer: "ماري شريتر",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "تعشق اللون البنفسجي وتغطي به كل منزلها"
  },
  {
    id: "bb_q_026",
    category: "Breaking Bad",
    points: 200,
    questionText: "ماذا يطلق هانك شريتر على مجموعة الصخور التي يجمعها ويعترض إذا سميت صخوراً؟",
    options: ["معادن (Minerals)", "أحجار كريمة", "حفريات", "قطع أثرية"],
    correctAnswer: "معادن (Minerals)",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "يصر دائماً على تصحيح الاسم قائلاً: 'They're minerals!'"
  },
  {
    id: "bb_q_027",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم الحارس الشخصي لـ سول غودمان الضخم الذي يشتهر بمهارته في السرقة والسرعة؟",
    options: ["هوييل توبس", "باتريك كوبي", "فيكتور", "تايروس"],
    correctAnswer: "هوييل توبس",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "استطاع سرقة سيجارة الرايسين من جيب جيسي دون أن يشعر"
  },
  {
    id: "bb_q_028",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم زميل هانك المقرب في مكتب الـ DEA الذي يرافقه دائماً؟",
    options: ["ستيفن غوميز (غومي)", "جورج ميركرت", "روبرت بيكر", "تشارلي"],
    correctAnswer: "ستيفن غوميز (غومي)",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "صديق هانك الوفي الملقب بـ 'غومي'"
  },
  {
    id: "bb_q_029",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هي جنسية شركة 'مادريغال' الأم التي تمتلك مطاعم لوس بولوس؟",
    options: ["ألمانية", "أمريكية", "مكسيكية", "سويسرية"],
    correctAnswer: "ألمانية",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "شركة متعددة الجنسيات مقرها في ألمانيا"
  },
  {
    id: "bb_q_030",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما اسم الرمز المستعار الذي اختاره والتر وايت لنفسه في سوق المخدرات؟",
    options: ["هايزنبرغ", "نيوتن", "أينشتاين", "بيل غيتس"],
    correctAnswer: "هايزنبرغ",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "مأخوذ من اسم عالم الفيزياء الألماني فيرنر هايزنبرغ"
  },
  {
    id: "bb_q_031",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما لون المنتج النهائي للميث الذي يطبخه والتر وايت ويتميز به؟",
    options: ["أزرق", "أبيض شفاف", "أحمر", "أصفر"],
    correctAnswer: "أزرق",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "لقب بـ Sky Blue نظراً للونه السماوي الفريد"
  },
  {
    id: "bb_q_032",
    category: "Breaking Bad",
    points: 200,
    questionText: "ماذا كانت هدية والتر وايت لابنه والتر جونيور في عيد ميلاده السادس عشر؟",
    options: ["سيارة دوج تشالنجر", "سيارة بي إم دبليو", "دراجة نارية", "كمبيوتر محمول"],
    correctAnswer: "سيارة دوج تشالنجر",
    answerImageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    hint: "سيارة رياضية حمراء استبدلها سكايلر لاحقاً لخطورتها"
  },
  {
    id: "bb_q_033",
    category: "Breaking Bad",
    points: 200,
    questionText: "ما هي الخدمة السرية التي يقدمها الرجل صاحب محل المكنسات الكهربائية؟",
    options: ["إخفاء المجرمين وتغيير هوياتهم", "تبييض الأموال عبر العقارات", "تهريب السلاح", "تزوير الشهادات"],
    correctAnswer: "إخفاء المجرمين وتغيير هوياتهم",
    answerImageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800",
    hint: "ينقلك إلى ولاية جديدة مع اسم وتاريخ جديدين كلياً"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط - 34 سؤالاً) ---
  // ==========================================
  {
    id: "bb_q_034",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الشركة الكيميائية التي شارك والتر في تأسيسها ثم تركها قبل أن تصبح بليونية؟",
    options: ["غراي مطر (Gray Matter)", "ساينس لاب", "الفا كيميكال", "نيومكسيكو للتقنية"],
    correctAnswer: "غراي مطر (Gray Matter)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "اسم الشركة مشتق من مزج اسم عائلته واختراعاته مع شريكه القديم إليوت"
  },
  {
    id: "bb_q_035",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الكيميائي الشاب والمثقف الذي عينه غاس فرينغ ليساعد والتر وايت ثم قتله جيسي؟",
    options: ["غيل بويتيشر", "تود ألكويست", "فيكتور", "درُو شارب"],
    correctAnswer: "غيل بويتيشر",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "كيميائي لطيف يعشق تحضير القهوة وغناء الأوبرا الإيطالية"
  },
  {
    id: "bb_q_036",
    category: "Breaking Bad",
    points: 400,
    questionText: "كيف اكتشف هانك شريتر أخيراً أن والتر وايت هو هايزنبرغ؟",
    options: ["من خلال كتاب أوراق العشب في الحمام", "عبر تسجيل صوتي لسول غودمان", "بسبب اعتراف جيسي بينكمان", "من خلال كاميرات مغسلة السيارات"],
    correctAnswer: "من خلال كتاب أوراق العشب في الحمام",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "وجد إهداءً شخصياً بخط يد غيل بويتيشر إلى والتر وايت (W.W)"
  },
  {
    id: "bb_q_037",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما هو الاسم المستعار الذي استخدمه والتر وايت عندما اختبأ في نيوهامبشير؟",
    options: ["ألكسندر لامبرت", "جون سميث", "ميشيل براونس", "ديفيد درو"],
    correctAnswer: "ألكسندر لامبرت",
    answerImageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
    hint: "هوية جديدة حصل عليها مقابل آلاف الدولارات عبر خدمة بائع المكنسات"
  },
  {
    id: "bb_q_038",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما نوع السلاح الآلي الثقيل الذي اشتراه والتر وايت لاستخدامه في الحلقة الأخيرة ضد العصابة؟",
    options: ["رشاش M60", "سلاح MP5", "رشاش AK-47", "بندقية قنص مجهزة"],
    correctAnswer: "رشاش M60",
    answerImageUrl: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800",
    hint: "خبأه في صندوق سيارته الفورد وسخره عبر نظام حركة آلي في الفناء الخلفي"
  },
  {
    id: "bb_q_039",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم زعيم العصابة النيو-نازية الذي استعان به والتر لقتل شهود غاس ثم غدروا به؟",
    options: ["جاك ويلكر", "كيني", "فرانكي", "فرانك غان"],
    correctAnswer: "جاك ويلكر",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "عم تود وصاحب الوشوم العنصرية الذي سرق أموال والتر وسجن جيسي"
  },
  {
    id: "bb_q_040",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما هو اسم زعيم الكارتل المكسيكي الضخم الذي قام غاس فرينغ بتسميمه بزجاجة التكيلا؟",
    options: ["دون إيلاديو فوانتي", "خوان بولسا", "هكتور سلامانكا", "بواكين سلامانكا"],
    correctAnswer: "دون إيلاديو فوانتي",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "زعيم مافيا المخدرات في المكسيك الذي انتقم منه غاس لمقتل شريكه ماكس"
  },
  {
    id: "bb_q_041",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم زهرة التسميم التي استخدمها والتر لتسميم الطفل بروك ابن أندريا؟",
    options: ["زنبق الوادي (Lily of the Valley)", "الشوكران السام", "البلادونا", "الرايسين النقي"],
    correctAnswer: "زنبق الوادي (Lily of the Valley)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "نبات سام زرعه والتر في حديقة منزله واستخدمه للسيطرة على جيسي"
  },
  {
    id: "bb_q_042",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم شريك غاس فرينغ الأصلي الذي قُتل أمام عينيه على يد الكارتل في مسبح بالمكسيك؟",
    options: ["ماكس أرسينيغا", "بيتر شولر", "جيمس كينيدي", "روبرت سيمنز"],
    correctAnswer: "ماكس أرسينيغا",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "طاهي كيميائي وشريك غاس المخلص الذي أسس معه إمبراطورية لوس بولوس"
  },
  {
    id: "bb_q_043",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم المشروب الفاخر والنادر الذي أحضره غاس فرينغ خصيصاً لتسميم قادة الكارتل؟",
    options: ["زافيرو أنيجو (Zafiro Añejo)", "تكيلا سالفا", "ويسكي غلينفيديش", "كونياك لويس الثالث عشر"],
    correctAnswer: "زافيرو أنيجو (Zafiro Añejo)",
    answerImageUrl: "https://images.unsplash.com/photo-1514327605112-78c73467e1b4?w=800",
    hint: "زجاجة تكيلا باهظة الثمن تذوقها غاس بنفسه أولاً ليخدعهم"
  },
  {
    id: "bb_q_044",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم والد جين مارغوليس الذي تسبب حزنه عليها في كارثة الطائرتين؟",
    options: ["دونالد مارغوليس", "توم مارغوليس", "تشارلز مارغوليس", "بيتر مارغوليس"],
    correctAnswer: "دونالد مارغوليس",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "كان يعمل مراقباً جوياً في حركة الطيران فوق ألبوكركي"
  },
  {
    id: "bb_q_045",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما هي الوسيلة التي استخدمها والتر وجيسي لسرقة الميثيل أمين من القطار؟",
    options: ["استبدال المادة بالماء بنفس الوزن", "توقف القطار بسلاح ثقيل", "تفجير السكة الحديدية", "رشوة سائق القطار"],
    correctAnswer: "استبدال المادة بالماء بنفس الوزن",
    answerImageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
    hint: "ضخوا الماء مكان الميثيل أمين كي لا يكتشف أحد نقص الوزن"
  },
  {
    id: "bb_q_046",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الطفل الذي قتله 'تود' بدم بارد بعد انتهاء عملية سرقة القطار؟",
    options: ["درو شارب", "بروك", "تومي", "جيك"],
    correctAnswer: "درو شارب",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "طفل صغير كان يجمع العنكبوت في الصحراء وشهد السرقة بالصدفة"
  },
  {
    id: "bb_q_047",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما الحيلة التي استخدمها والتر لتدمير الكمبيوتر المحمول الخاص بغاس فرينغ في مركز الشرطة؟",
    options: ["مغناطيس كهربائي ضخم داخل شاحنة", "فيروس إلكتروني سرّي", "اختراق غرفة الأدلة باليد", "قنبلة حرارية"],
    correctAnswer: "مغناطيس كهربائي ضخم داخل شاحنة",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "ركنوا الشاحنة بجانب جدار الغرفة وفعلوا المغناطيس"
  },
  {
    id: "bb_q_048",
    category: "Breaking Bad",
    points: 400,
    questionText: "كيف قُتل هانك شريتر في مواجهة الصحراء؟",
    options: ["أطلق عليه جاك ويلكر النار", "قتله والتر وايت بالخطأ", "انفجار لغم صحراوي", "دهس بشاحنة العصابة"],
    correctAnswer: "أطلق عليه جاك ويلكر النار",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "رفض هانك التوسل وقال كلمته الشهيرة قبل إطلاق النار عليه"
  },
  {
    id: "bb_q_049",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم المنطقة الصحراوية التي دفن فيها والتر أمواله وقتل فيها هانك؟",
    options: ["توهاجيلي (To'hajiilee)", "ألبوكركي نورث", "سانتا في الصحراء", "لوس ألاموس"],
    correctAnswer: "توهاجيلي (To'hajiilee)",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "محمية للسكان الأصليين شهدت أول عملية طبخ للميث في المسلسل"
  },
  {
    id: "bb_q_050",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم مساعد غاس فرينغ الذي ذبحه بقاطعة الأسلاك أمام والتر وجيسي؟",
    options: ["فيكتور", "تايروس", "مايك", "دانييل"],
    correctAnswer: "فيكتور",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "تم قتله لأنه شوهد في موقع جريمة قتل غيل بويتيشر"
  },
  {
    id: "bb_q_051",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم السيدة المسؤولة عن المشتريات بشركة مادريغال والتي أمدت والتر بالميثيل أمين؟",
    options: ["ليديا رودارتي-كوايل", "جين مارغوليس", "أندريا", "كارمن أليست"],
    correctAnswer: "ليديا رودارتي-كوايل",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "امرأة شديدة التوتر تعشق شرب الشاي بالستيفيا"
  },
  {
    id: "bb_q_052",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما هي المادة السامة التي وضعها والتر في سكر الستيفيا الخاص بـ ليديا؟",
    options: ["الرايسين (Ricin)", "الزرنيخ", "السيانيد", "الثاليوم"],
    correctAnswer: "الرايسين (Ricin)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "سم قاتل مستخلص من بذور الخروع أعده والتر منذ المواسم الأولى"
  },
  {
    id: "bb_q_053",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم ابن صديقة جيسي (أندريا) الذي تم تسميمه؟",
    options: ["بروك", "تود", "جيك", "درو"],
    correctAnswer: "بروك",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "طفل صغير يحب اللعب مع جيسي بالالعاب الإلكترونية"
  },
  {
    id: "bb_q_054",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم التوأمين القاتلين الصامتين من عائلة سلامانكا اللذين قدما للانتقام من والتر؟",
    options: ["ليونيل وماركو سلامانكا", "توكو ولالبو سلامانكا", "هكتور وهيكتور جونيور", "خوان وإيلاديو"],
    correctAnswer: "ليونيل وماركو سلامانكا",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "يرتديان أحذية ذات رؤوس فضية مدببة ولا يتكلمان تقريباً"
  },
  {
    id: "bb_q_055",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الحلقة الفردية الشهيرة التي تدور بالكامل داخل المختبر لمطاردة حشرة؟",
    options: ["Fly (الذبابة)", "Box Cutter", "Ozymandias", "Face Off"],
    correctAnswer: "Fly (الذبابة)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "حلقة من الموسم الثالث يصر فيها والتر على تنظيف المختبر من التلوث"
  },
  {
    id: "bb_q_056",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الحلقة التي تُعتبر أعظم حلقات المسلسل وواحدة من الأعلى تقييماً في تاريخ التلفزيون؟",
    options: ["Ozymandias", "Felina", "Face Off", "To'hajiilee"],
    correctAnswer: "Ozymandias",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "الحلقة 14 من الموسم الخامس التي شهدت مقتل هانك وانهيار عائلة والتر"
  },
  {
    id: "bb_q_057",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما هو عنوان الحلقة الأخيرة كلياً من مسلسل Breaking Bad؟",
    options: ["Felina", "Ozymandias", "Granite State", "Face Off"],
    correctAnswer: "Felina",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "اسم الحلقة يُشكل جناساً لترتيب عناصر الدم والحديد والميث (Fe-Li-Na)"
  },
  {
    id: "bb_q_058",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الفيلم الذي صدر عام 2019 لاستكمال قصة جيسي بينكمان بعد نهاية المسلسل؟",
    options: ["El Camino", "Better Call Saul", "Metástasis", "The Heisenberg Story"],
    correctAnswer: "El Camino",
    answerImageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    hint: "سمي باسم السيارة التي هرب بها جيسي في نهاية المسلسل"
  },
  {
    id: "bb_q_059",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم المالك الأصلي لمغسلة السيارات (صاحب الحواجب الكثيفة) الذي كان يقسو على والتر؟",
    options: ["بوغدان وولينيتس", "إليوت شوارتز", "بيتر شولر", "دانييل"],
    correctAnswer: "بوغدان وولينيتس",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "اشتراها منه والتر وسكايلر بعد حيلة إغلاق المغسلة بسبب التلوث البيئي"
  },
  {
    id: "bb_q_060",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما هي المادة الكيميائية القوية التي استخدمها جيسي ووالتر لإذابة الجثث؟",
    options: ["حمض الهيدروفلوريك", "حمض الكبريتيك", "حمض النيتريك", "هيدروكسيد الصوديوم"],
    correctAnswer: "حمض الهيدروفلوريك",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تسبب جيسي في ثقب السقف بها عندما وضعها في حوض الاستحمام البلاستيكي"
  },
  {
    id: "bb_q_061",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم مدير قسم الأغذية في شركة مادريغال الذي انتحر في الحمام بالصدمة الكهربائية؟",
    options: ["بيتر شولر", "كريستيان أورتيز", "هانز بيكر", "غيل بويتيشر"],
    correctAnswer: "بيتر شولر",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "صديق غاس الداعم له في أوروبا وانتحر خوفاً من افتضاح أمره"
  },
  {
    id: "bb_q_062",
    category: "Breaking Bad",
    points: 400,
    questionText: "كيف قُتل 'تود ألكويست' في الحلقة الأخيرة من المسلسل؟",
    options: ["خنقاً بالسلاسل على يد جيسي", "بالرشاش الآلي لوالتر", "طلق ناري من والتر", "تسمماً بالرايسين"],
    correctAnswer: "خنقاً بالسلاسل على يد جيسي",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "انتقم منه جيسي لمقتله أندريا واستعباده له"
  },
  {
    id: "bb_q_063",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما هو اسم الموقع الإلكتروني الذي أنشأه والتر جونيور لجمع التبرعات لعلاج والده؟",
    options: ["SaveWalterWhite.com", "HelpWalter.com", "WalterWhiteFund.org", "FightCancerWalt.com"],
    correctAnswer: "SaveWalterWhite.com",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "استخدمه سول غودمان لغسيل أموال والتر بضخ تبرعات وهمية"
  },
  {
    id: "bb_q_064",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الكارتل المكسيكي الذي كان يسيطر على الحدود وينافس غاس فرينغ؟",
    options: ["كارتل خواريز", "كارتل سينالوا", "كارتل تيخوانا", "كارتل المكسيك العظمى"],
    correctAnswer: "كارتل خواريز",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "الكارتل الذي يترأسه دون إيلاديو ويضم عائلة سلامانكا"
  },
  {
    id: "bb_q_065",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم صديق جيسي الذي قُتل في الشارع أثناء بيع الميث على يد طفل صغير بالموسم الثاني؟",
    options: ["كومبو (Combo)", "باجر", "سكيني بيت", "غيل"],
    correctAnswer: "كومبو (Combo)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "اسمه الحقيقي الكستندر فانيغاس ومقتله سبب صدمة لجيسي"
  },
  {
    id: "bb_q_066",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما اسم الشارع أو المنطقة التي تقع فيها شقة جيسي بينكمان الأولى الموروثة عن عمته؟",
    options: ["322 16th Street", "Terrace Street", "Maderia Drive", "Negra Arroyo"],
    correctAnswer: "322 16th Street",
    answerImageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
    hint: "المنزل الذي طرده والداه منه لاحقاً لاكتشافهما مختبر الميث"
  },
  {
    id: "bb_q_067",
    category: "Breaking Bad",
    points: 400,
    questionText: "ما المادة المتفجرة الكيميائية التي استخدمها والتر لتفجير مكتب توكو سلامانكا في الموسم الأول؟",
    options: ["فولمينات الزئبق", "TNT", "ديناميت نقي", "C4"],
    correctAnswer: "فولمينات الزئبق",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "ظهرت كأنها بلورات ميث لكنها مادة شديدة الحساسية للانفجار عند إلقائها"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب - 33 سؤالاً) ---
  // ==========================================
  {
    id: "bb_q_068",
    category: "Breaking Bad",
    points: 600,
    questionText: "كم بلغ إجمالي مبلغ الأموال الذي دفنه والتر وايت في الصحراء داخل البراميل؟",
    options: ["80 مليون دولار", "50 مليون دولار", "100 مليون دولار", "30 مليون دولار"],
    correctAnswer: "80 مليون دولار",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "ثروة طائلة جناها والتر من عمله قبل أن يسرق جاك معظمها"
  },
  {
    id: "bb_q_069",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هو العنوان السكني الشهير والدقيق لمنزل عائلة وايت في ألبوكركي؟",
    options: ["308 Negra Arroyo Lane", "452 El Paso Street", "1024 Mountain Road", "742 Evergreen Terrace"],
    correctAnswer: "308 Negra Arroyo Lane",
    answerImageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800",
    hint: "العنوان الذي ألقى فيه والتر البيتزا على سطح المنزل"
  },
  {
    id: "bb_q_070",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي اعترافات والتر وايت الأخيرة لزوجته سكايلر عن سبب دخوله عالم المخدرات؟",
    options: ["فعلت ذلك لأجلي.. لقد أحببته", "فعلت كل شيء من أجل العائلة", "كنت مجبراً ولم يكن لدي خيار", "أردت الانتقام من شركة غراي مطر"],
    correctAnswer: "فعلت ذلك لأجلي.. لقد أحببته",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "اعترف أخيرًا بأنه لم يجمع المال لعائلته بل لأنه كان يستمتع بالحس والسيطرة"
  },
  {
    id: "bb_q_071",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي الحرفة اليدوية التي أتقنها جيسي في شبابه وذكر ندمه على بيع منتجها مقابل ماريجوانا؟",
    options: ["صناعة صندوق خشبي", "صنع خزف طيني", "تصميم سيارات مصغرة", "صنع الساعات اليدوية"],
    correctAnswer: "صناعة صندوق خشبي",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "صندوق خشبي أعده في حصة المهني بالثانوية واعتنى به بتفاصيل مذهلة"
  },
  {
    id: "bb_q_072",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي نسبة النقاء الدقيقة التي حققها جيسي بينكمان وحده في المكسيك أمام كيميائيي الكارتل؟",
    options: ["96.2%", "99.1%", "90.0%", "94.5%"],
    correctAnswer: "96.2%",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "أبهر بها كيميائيي الكارتل بعد أن اتهموه بعدم المعرفة"
  },
  {
    id: "bb_q_073",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم نكهة الصوص التي ابتكرتها شركة مادريغال وكان يختبرها المدير قبل انتحاره؟",
    options: ["فرانش (Franch)", "رانتش حار", "باربكيو ثوم", "مايو كتشب"],
    correctAnswer: "فرانش (Franch)",
    answerImageUrl: "https://images.unsplash.com/photo-1626509854183-efe262e34582?w=800",
    hint: "خليط بين الصلصة الفرنسية (French) والصلصة الريفية (Ranch)"
  },
  {
    id: "bb_q_074",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي الأرقام المكتوبة على تذكرة اليانصيب والتي تمثل إحداثيات موقع دفن الأموال؟",
    options: ["N 34° 59′ 20″, W 106° 36′ 52″", "N 12° 30′ 10″, W 80° 20′ 11″", "N 40° 11′ 00″, W 100° 12′ 30″", "N 25° 00′ 00″, W 90° 00′ 00″"],
    correctAnswer: "N 34° 59′ 20″, W 106° 36′ 52″",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "إحداثيات خطوط الطول والعرض للصحراء المشهورة"
  },
  {
    id: "bb_q_075",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هو اسم المحامي المحاسب المالي المخضرم الذي كان يدير أموال مايك والعائلات المستفيدة؟",
    options: ["دان واكسبرغر", "رون فورست", "دانييل وورمالد", "تشارلز مكغيل"],
    correctAnswer: "دان واكسبرغر",
    answerImageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800",
    hint: "تم اغتياله في السجن مع باقي الشهود بطلب من والتر وايت"
  },
  {
    id: "bb_q_076",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هو الاسم الحقيقي الفعلي للمحامي الشهير 'سول غودمان'؟",
    options: ["جيمس مورغان مكغيل (جيمي)", "تشارلز مكغيل", "ستيفن غودمان", "ديفيد ألين"],
    correctAnswer: "جيمس مورغان مكغيل (جيمي)",
    answerImageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800",
    hint: "غير اسمه لاحقاً ليصبح Saul Goodman كاختصار لـ 'It's all good, man!'"
  },
  {
    id: "bb_q_077",
    category: "Breaking Bad",
    points: 600,
    questionText: "كم كان قيمة المبلغ المحدد أول شيك تسوية حصل عليه والتر عند خروجه من شركة Gray Matter؟",
    options: ["5,000 دولار", "10,000 دولار", "1,000 دولار", "50,000 دولار"],
    correctAnswer: "5,000 دولار",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "مبلغ ضئيل جداً ندم عليه طوال حياته بعد اصباح الشركة بمليارات"
  },
  {
    id: "bb_q_078",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم الديوان الشعري للشاعر وولت ويتمان الذي أهداه غيل بويتيشر لوالتر وايت؟",
    options: ["أوراق العشب (Leaves of Grass)", "أغنية نفسي", "أزهار الشر", "قصائد المختبر"],
    correctAnswer: "أوراق العشب (Leaves of Grass)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "كتاب شعر أمريكي شهير أدى اكتشافه لسقوط والتر وايت"
  },
  {
    id: "bb_q_079",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي العبارة المكتوبة على لوحة سيارة المحامي سول غودمان الكاديلاك؟",
    options: ["LWYRUP", "SOULGOOD", "LAWYER1", "GASSMAN"],
    correctAnswer: "LWYRUP",
    answerImageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800",
    hint: "اختصار للعبارة الشائعة 'Lawyer Up'"
  },
  {
    id: "bb_q_080",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم موظف المطعم المخلص لدى غاس فرينغ الذي كان يصر على تنظيف القلاية بدقة بالغة؟",
    options: ["لايل (Lyle)", "ارنستو", "دانييل", "مارك"],
    correctAnswer: "لايل (Lyle)",
    answerImageUrl: "https://images.unsplash.com/photo-1626509854183-efe262e34582?w=800",
    hint: "شاب يعمل كمساعد مدير في مطعم لوس بولوس وكان غاس يختبر صبره"
  },
  {
    id: "bb_q_081",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هو اسم أول شخص قتله والتر وايت بنفسه خنقاً باستخدام قفل السيارة الدائري؟",
    options: ["كريزي-8 (Krazy-8)", "إيميليو", "توكو سلامانكا", "فيكتور"],
    correctAnswer: "كريزي-8 (Krazy-8)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "اسمه الحقيقي أومينيو نيفارو واحتجزه والتر في قبو جيسي"
  },
  {
    id: "bb_q_082",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي العبارة البرمجية / الكلمة المفتاحية لطلب خدمة تغيير الهوية من إد غالبريث؟",
    options: ["أحتاج إلى فلتر لمكنسة Hoover من طراز Max Extract Pressure Pro Model 60", "أريد شراء مكنسة Hoover حمراء حديثة", "حجم الكيس للمكنسة غير مناسب", "أبحث عن مكنسة كهربائية بسعر ألف دولار"],
    correctAnswer: "أحتاج إلى فلتر لمكنسة Hoover من طراز Max Extract Pressure Pro Model 60",
    answerImageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800",
    hint: "شفرة سرية يتحدث بها العميل مع إد عبر الهاتف لطلب الهروب"
  },
  {
    id: "bb_q_083",
    category: "Breaking Bad",
    points: 600,
    questionText: "كم عدد الشهود التابعين لغاس فرينغ الذين اغتالهم والتر وايت في السجون خلال دقيقتين؟",
    options: ["10 شهود", "8 شهود", "12 شاهد", "5 شهود"],
    correctAnswer: "10 شهود",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "تمت تصفيتهم في 3 سجون مختلفة في غضون دقيقتين بالتنسيق مع عصابة جاك"
  },
  {
    id: "bb_q_084",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما الأغنية الشهيرة التي عزفت في اللحظات الأخيرة كخلفية لموت والتر وايت بالمسلسل؟",
    options: ["Baby Blue لفرقة Badfinger", "DLZ لفرقة TV on the Radio", "Horse With No Name", "My Way"],
    correctAnswer: "Baby Blue لفرقة Badfinger",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "تبدأ بكلمات: 'Guess I got what I deserved...'"
  },
  {
    id: "bb_q_085",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هو رمز العنصرين الكيميائيين الظاهرين في الشعار الرسمي للمسلسل (Br) و (Ba)؟",
    options: ["البروم والباريوم", "البروم والبورون", "الباريوم والبيريليوم", "البورون والبيسموث"],
    correctAnswer: "البروم والباريوم",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "العدد الذري للبروم هو 35 والباريوم هو 56"
  },
  {
    id: "bb_q_086",
    category: "Breaking Bad",
    points: 600,
    questionText: "كم عدد الحلقات الإجمالي لجميع مواسم مسلسل Breaking Bad؟",
    options: ["62 حلقة", "60 حلقة", "50 حلقة", "65 حلقة"],
    correctAnswer: "62 حلقة",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "العنصر الـ 62 في الجدول الدوري هو الساماريوم المكتشف لعلاج السرطان"
  },
  {
    id: "bb_q_087",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم طراز سيارة الشفروليه الأيقونية التي هرب بها جيسي بينكمان في حلقة المسلسل الأخيرة؟",
    options: ["El Camino (موديل 1978)", "Chevelle", "Corvette", "Impala"],
    correctAnswer: "El Camino (موديل 1978)",
    answerImageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    hint: "سيارة نفاثة سوداء كانت ملكاً لتود ألكويست"
  },
  {
    id: "bb_q_088",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم المؤسسة أو المنحة الخيرية التي أنشأها غاس فرينغ لتكريم شريكه الراحل ماكس؟",
    options: ["منحة ماكس أرسينيغا (Max Arciniega Scholarship)", "مؤسسة لوس بولوس الخيرية", "منحة ألبوكركي للعلوم", "مؤسسة السلام الكيميائية"],
    correctAnswer: "منحة ماكس أرسينيغا (Max Arciniega Scholarship)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "تمويل دراسي جامعي مخصص لطلاب الكيمياء في جامعة المكسيك"
  },
  {
    id: "bb_q_089",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم المطعم أو المقهى الذي كان يجتمع فيه والتر وايت مع ليديا رودارتي بالموسم الخامس؟",
    options: ["The Grove", "Denny's", "Loyola's Diner", "Central Perk"],
    correctAnswer: "The Grove",
    answerImageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800",
    hint: "مقهى هادئ كانت تجلس فيه ليديا مع أكياس الستيفيا الخاصة بها"
  },
  {
    id: "bb_q_090",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم سيارة والتر وايت العائلية ذات اللون الخاكي الغريب التي قادها طوال المسلسل؟",
    options: ["بونتياك أزتيك (Pontiac Aztek)", "تويوتا بريوس", "فورد إكسبلورر", "هوندا سيفيك"],
    correctAnswer: "بونتياك أزتيك (Pontiac Aztek)",
    answerImageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    hint: "سيارة من طراز عام 2004 اشتهرت بزجاجها الأمامي المكسور باستمرار"
  },
  {
    id: "bb_q_091",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم العمة التي أقام جيسي في منزلها ورعاها أثناء مرضها بالسرطان قبل وفاتها؟",
    options: ["جينيت بينكمان (Ginny)", "ماري", "سارة", "هيلين"],
    correctAnswer: "جينيت بينكمان (Ginny)",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "عمة جيسي التي ترك لها منزلها قبل أن يستولي عليه والداه"
  },
  {
    id: "bb_q_092",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما كمية الميثيل أمين الصافية التي نجح الفريق في سرقتها من القطار بالحاوية؟",
    options: ["1,000 غالون", "500 غالون", "2,000 غالون", "10,000 غالون"],
    correctAnswer: "1,000 غالون",
    answerImageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
    hint: "كمية ضخمة كافية لطبخ ميث بقيمة مئات الملايين من الدولارات"
  },
  {
    id: "bb_q_093",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي العبارة التي قالها غاس فرينغ فور إعدامه لمساعده فيكتور بقاطعة الأسلاك؟",
    options: ["Get back to work (عد إلى العمل)", "Welcome back", "Don't ever fail me", "Clean this mess"],
    correctAnswer: "Get back to work (عد إلى العمل)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "قالها برود تام بعد غسل يديه ونزع البدلة الوقائية"
  },
  {
    id: "bb_q_094",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم المطعم أو المقهى المفضل لدى مايك إرمانتراوت والذي كان يقابل فيه والتر وسول؟",
    options: ["Loyola's Diner", "Denny's", "Los Pollos", "Taco Sal"],
    correctAnswer: "Loyola's Diner",
    answerImageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800",
    hint: "مطعم تقليدي هادئ في ألبوكركي يحب مايك شرب القهوة فيه"
  },
  {
    id: "bb_q_095",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم الطبيب الخاص الذي أحضره غاس للمكسيك لمعالجة نوبة تسممه مع جيسي ومايك؟",
    options: ["دكتور غودمان (Dr. Goodman)", "دكتور عواض", "دكتور هانز", "دكتور ديلغادو"],
    correctAnswer: "دكتور غودمان (Dr. Goodman)",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "طبيب مستعد بمستشفى ميداني متكامل لنقل الدم لمصلحة غاس"
  },
  {
    id: "bb_q_096",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي الأغنية التي يتغنى بها غيل بويتيشر في مقطع الفيديو الشهير بملف تحقيقات الشرطة؟",
    options: ["Cuki Cuki", "Cielito Lindo", "O Sole Mio", "Volare"],
    correctAnswer: "Cuki Cuki",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "أغنية أوبرا لاتينية مع فيديو كليب مضحك سجله لنفسه"
  },
  {
    id: "bb_q_097",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما اسم رئيس هانك شريتر في مكتب هيئة مكافحة المخدرات الذي أُقيل بعد اكتشاف علاقة غاس بالمخدرات؟",
    options: ["جورج ميركرت (George Merkert)", "ستيفن غوميز", "توم باركر", "ديفيد بيتس"],
    correctAnswer: "جورج ميركرت (George Merkert)",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "كان صديقاً مقرباً لغاس فرينغ ويلعب معه الجولف ولم يشك فيه إطلاقاً"
  },
  {
    id: "bb_q_098",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي آخر كلمة وجهها جيسي بينكمان لوالتر وايت قبل مغادرته وإفراجه عنه في النهاية؟",
    options: ["إذن افعلها بنفسك (Then do it yourself)", "وداعاً والتر", "أنا أسامحك", "لن أقتلك"],
    correctAnswer: "إذن افعلها بنفسك (Then do it yourself)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "قالها عندماطلب منه والتر إنهاء حياته بالرمي بالنار"
  },
  {
    id: "bb_q_099",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هي اللعبة أو السلسلة البرامجية المشتقة الرسمية (Spin-off) التي تروي قصة هانك وغومي الشورتس؟",
    options: ["Breaking Bad: Minisodes", "Hank & Gomez Files", "DEA Chronicles", "Albuquerque Stories"],
    correctAnswer: "Breaking Bad: Minisodes",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "مقاطع قصيرة كوميدية وإضافية صدرت بالتزامن مع المواسم الأولى"
  },
  {
    id: "bb_q_100",
    category: "Breaking Bad",
    points: 600,
    questionText: "ما هو الاسم الكيميائي العلمي والمصطلح الدقيق لمادة الميث الأزرق النقي التي ابتكرها والتر وايت؟",
    options: ["كريستال ميثامفيتامين هيدروكلوريد (Crystal Methamphetamine Hydrochloride)", "أمفيتامين كبريتات", "ميثيل فينيدات الصوديوم", "ثنائي أسيثيل مورفين"],
    correctAnswer: "كريستال ميثامفيتامين هيدروكلوريد (Crystal Methamphetamine Hydrochloride)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "المركب الكيميائي النقي عالي الجودة بنسبة 99.1%"
  }
];
