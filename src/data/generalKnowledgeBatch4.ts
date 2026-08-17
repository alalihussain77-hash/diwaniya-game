export interface GeneralKnowledgeQuestion {
  id: string;
  category: string;
  points: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  answerImageUrl?: string;
  hint?: string;
}

export const generalKnowledgeBatch4: GeneralKnowledgeQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل) ---
  // ==========================================
  {
    id: "gen_b4_001",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة دولة الإمارات العربية المتحدة؟",
    options: ["أبوظبي", "دبي", "الشارقة", "عجمان"],
    correctAnswer: "أبوظبي",
    answerImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    hint: "أكبر الإمارات مساحة وتضم مقر الحكومة والوزارات"
  },
  {
    id: "gen_b4_002",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي العملة الرسمية في المملكة المتحدة (بريطانيا)؟",
    options: ["الجنيه الإسترليني", "اليورو", "الدولار", "الفرنك"],
    correctAnswer: "الجنيه الإسترليني",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "يرمز لها بـ £ وتُعد من أقدم العملات المتداولة"
  },
  {
    id: "gen_b4_003",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الكوكب الملقب بـ 'الكوكب الأحمر'؟",
    options: ["المريخ", "الزهرة", "المشتري", "عطارد"],
    correctAnswer: "المريخ",
    answerImageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
    hint: "يعود لونه المائل للحمرة إلى انتشارات أكسيد الحديد على سطحه"
  },
  {
    id: "gen_b4_004",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة دولة الكويت؟",
    options: ["الكويت", "الأحمدي", "حولي", "الجهراء"],
    correctAnswer: "الكويت",
    answerImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    hint: "تطل على الخليج العربي وتضم أبراج الكويت الشهيرة"
  },
  {
    id: "gen_b4_005",
    category: "معلومات عامة",
    points: 200,
    questionText: "كم عدد القارات على كوكب الأرض وفق التقسيم الأكثر شيوعاً؟",
    options: ["7", "5", "6", "8"],
    correctAnswer: "7",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تشمل آسيا، أفريقيا، أوروبا، أمريكا الشمالية والجنوبية، أستراليا، وأنتاركتيكا"
  },
  {
    id: "gen_b4_006",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الطائر الذي يُعتبر رمزاً للسلام حول العالم؟",
    options: ["الحمامة", "النسر", "الصقر", "البومة"],
    correctAnswer: "الحمامة",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "غالباً ما يُرسم وهو يحمل غصن زيتون"
  },
  {
    id: "gen_b4_007",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة المملكة المغربية؟",
    options: ["الرباط", "الدار البيضاء", "مراكش", "فاس"],
    correctAnswer: "الرباط",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع على ساحل المحيط الأطلسي وتضم صومعة حسان"
  },
  {
    id: "gen_b4_008",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أطول نهر في العالم؟",
    options: ["نهر النيل", "نهر الأمازون", "نهر اليانغتسي", "نهر الميسيسيبي"],
    correctAnswer: "نهر النيل",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يمر بعدة دول أفريقية ويصب في البحر الأبيض المتوسط"
  },
  {
    id: "gen_b4_009",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو المشروب الذي يُصنع من تحميص وطحن حبوب البن؟",
    options: ["القهوة", "الشاي", "الكركديه", "النعناع"],
    correctAnswer: "القهوة",
    answerImageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    hint: "مشروب صباحي عالمي يحتوي على نسبة من الكافيين"
  },
  {
    id: "gen_b4_010",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة جمهورية العراق؟",
    options: ["بغداد", "البصرة", "أربيل", "الموصل"],
    correctAnswer: "بغداد",
    answerImageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800",
    hint: "عاصمة العباسيين التاريخية وتقع على نهر دجلة"
  },
  {
    id: "gen_b4_011",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي المادة الأساسية التي تُصنع منها الوجبة السريعة 'البيتزا' كقاعدة؟",
    options: ["العجين (القمح)", "الأرز", "الذرة", "البطاطس"],
    correctAnswer: "العجين (القمح)",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "تخبز في الفرن مع الصلصة والجبن والمكونات"
  },
  {
    id: "gen_b4_012",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة فرنسا؟",
    options: ["باريس", "مارسيليا", "ليون", "نيس"],
    correctAnswer: "باريس",
    answerImageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    hint: "تُعرف بمدينة النور وتضم برج ايفل ومتحف اللوفر"
  },
  {
    id: "gen_b4_013",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو اسم أضخم ثديي على وجه الأرض وعلى الإطلاق؟",
    options: ["الحوت الأزرق", "الفيل الأفريقي", "خرتيت الماء", "القرش الأبيض"],
    correctAnswer: "الحوت الأزرق",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "يعيش في المحيطات وقد يتجاوز وزنه 150 طناً"
  },
  {
    id: "gen_b4_014",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأكثر شعبية وعدد سكان في العالم حالياً؟",
    options: ["الهند", "الصين", "الولايات المتحدة", "إندونيسيا"],
    correctAnswer: "الهند",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تخطت عدد سكان الصين وتجاوزت 1.4 مليار نسمة"
  },
  {
    id: "gen_b4_015",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة المملكة العربية السعودية؟",
    options: ["الرياض", "جدة", "مكة المكرمة", "الدمام"],
    correctAnswer: "الرياض",
    answerImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    hint: "المركز السياسي والاقتصادي الرئيسي للبلاد في منطقة نجد"
  },
  {
    id: "gen_b4_016",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الغاز الذي يستعمله الإنسان للإطفاء والموجود في أسطوانات الإطفاء العادية؟",
    options: ["ثاني أكسيد الكربون", "الأكسجين", "الهيدروجين", "الهيليوم"],
    correctAnswer: "ثاني أكسيد الكربون",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "غاز يخنق ألسنة اللهب ويقطع عنها أكسجين الاحتراق"
  },
  {
    id: "gen_b4_017",
    category: "معلومات عامة",
    points: 200,
    questionText: "كم عدد أضلاع المثلث؟",
    options: ["3", "4", "5", "6"],
    correctAnswer: "3",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "شكل هندسي بسيط مجموع زواياه الداخلية 180 درجة"
  },
  {
    id: "gen_b4_018",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة المشهورة بأهرامات الجيزة الأثرية؟",
    options: ["مصر", "المكسيك", "السودان", "بيرو"],
    correctAnswer: "مصر",
    answerImageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800",
    hint: "تضم أهرامات خوفو وخفرع ومنقرع وأبو الهول"
  },
  {
    id: "gen_b4_019",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العضو المسؤول عن حاسة السمع في جسم الإنسان؟",
    options: ["الأذن", "العين", "الأنف", "اللسان"],
    correctAnswer: "الأذن",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "تستقبل الموجات الصوتية وتحافظ أيضاً على التوازن"
  },
  {
    id: "gen_b4_020",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أكبر قارة من حيث المساحة في العالم؟",
    options: ["آسيا", "أفريقيا", "أمريكا الشمالية", "أوروبا"],
    correctAnswer: "آسيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تضم الصين والهند وروسيا والعديد من أكبر دول العالم"
  },
  {
    id: "gen_b4_021",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة دولة الأردن؟",
    options: ["عَمّان", "الزرقاء", "إربد", "العقبة"],
    correctAnswer: "عَمّان",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "مدينة تاريخية بنيت على عدة جبال وتضم المدرج الروماني"
  },
  {
    id: "gen_b4_022",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي السائل الأهم للعياة ولجميع الكائنات الحية والصيغة الكيميائية له H2O؟",
    options: ["الماء", "الزيت", "الحليب", "العصير"],
    correctAnswer: "الماء",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يشكل حوالي 71% من مساحة سطح الأرض"
  },
  {
    id: "gen_b4_023",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأوروبية المصممة على شكل 'جزمة' في الخريطة؟",
    options: ["إيطاليا", "إسبانيا", "اليونان", "البرتغال"],
    correctAnswer: "إيطاليا",
    answerImageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    hint: "تتميز بشبه جزيرة في البحر المتوسط وعاصمتها روما"
  },
  {
    id: "gen_b4_024",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة ألمانيا؟",
    options: ["برلين", "ميونخ", "فرانکفورت", "هامبورغ"],
    correctAnswer: "برلين",
    answerImageUrl: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800",
    hint: "اشتهرت بوجود الجدار الشهير الذي قسمها وقسم العالم سابقاً"
  },
  {
    id: "gen_b4_025",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الكوكب الأقرب للشمس في المجموعة الشمسية؟",
    options: ["عطارد", "الزهراء", "الأرض", "المريخ"],
    correctAnswer: "عطارد",
    answerImageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
    hint: "أصغر كواكب المنظومة الشمسية وأسرعها دوراناً حول الشمس"
  },
  {
    id: "gen_b4_026",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم البحر الذي يفصل بين قارتي أفريقيا وآسيا؟",
    options: ["البحر الأحمر", "البحر الأبيض المتوسط", "البحر الأسود", "بحر العرب"],
    correctAnswer: "البحر الأحمر",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يرتبط شمالاً بقناة السويس وجنوباً بمضيق باب المندب"
  },
  {
    id: "gen_b4_027",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة تركيا؟",
    options: ["أنقرة", "إسطنبول", "إزمير", "أنطاليا"],
    correctAnswer: "أنقرة",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "العاصمة السياسية للبلاد بينما إسطنبول هي العاصمة الاقتصادية"
  },
  {
    id: "gen_b4_028",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أكبر كواكب المجموعة الشمسية حجماً؟",
    options: ["المشتري", "زحل", "أورانوس", "نبتون"],
    correctAnswer: "المشتري",
    answerImageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
    hint: "عملاق غازي يمتلك البقعة الحمراء العظيمة"
  },
  {
    id: "gen_b4_029",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم الجهاز المستخدم لقياس درجات الحرارة؟",
    options: ["الترمومتر (ميزان الحرارة)", "البارومتر", "الهيدرومتر", "البوصلة"],
    correctAnswer: "الترمومتر (ميزان الحرارة)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يحتوي عادة على الزئبق أو كحول أو مستشعرات رقمية"
  },
  {
    id: "gen_b4_030",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي اللعبة الأكثر شعبية وجماهيرية في العالم؟",
    options: ["كرة القدم", "كرة السلة", "التنس", "الكريكت"],
    correctAnswer: "كرة القدم",
    answerImageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
    hint: "تلعب بين فريقين من 11 لاعباً لكل منهما وبها كأس العالم"
  },
  {
    id: "gen_b4_031",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم الصوت الذي يطلقه الأسد؟",
    options: ["زئير", "صهيل", "نهيق", "مواء"],
    correctAnswer: "زئير",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "صوت قوي يستطيع ملك الغابة إسماعه لمسافات بعيدة"
  },
  {
    id: "gen_b4_032",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة روسيا؟",
    options: ["موسكو", "سان بطرسبرغ", "سوتشي", "كازان"],
    correctAnswer: "موسكو",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تضم الساحة الحمراء والكرملين"
  },
  {
    id: "gen_b4_033",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أطول قمة جبلية في العالم فوق مستوى سطح البحر؟",
    options: ["إيفرست", "كي 2", "كليمنجارو", "مون بلان"],
    correctAnswer: "إيفرست",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "تقع ضمن جبال الهيمالايا بين نيبال والصين"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط) ---
  // ==========================================
  {
    id: "gen_b4_034",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة كندا الرسمية؟",
    options: ["أوتاوا", "تورونتو", "مونتريال", "فانكوفر"],
    correctAnswer: "أوتاوا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "ليست تورونتو أو مونتريال بل مدينة تقع في مقاطعة أونتاريو"
  },
  {
    id: "gen_b4_035",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو أعمق خندق بحري في العالم ويقع في المحيط الهادئ؟",
    options: ["خندق ماريانا", "خندق بورتوريكو", "خندق جاوة", "خندق تونغا"],
    correctAnswer: "خندق ماريانا",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يصل عمقه إلى نحو 11,000 متر تحت سطح البحر"
  },
  {
    id: "gen_b4_036",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو الفيزيائي صاحب النظرية النسبية الشهيرة وراديكالية (E=mc²)؟",
    options: ["ألبرت أينشتاين", "إسحاق نيوتن", "ستيفن هوكينغ", "ماكس بلانك"],
    correctAnswer: "ألبرت أينشتاين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "عالم ألماني المولد وحصل على جائزة نوبل عن التأثير الكهروضوئي"
  },
  {
    id: "gen_b4_037",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أكبر صحراء حارة في العالم من حيث المساحة؟",
    options: ["الصحراء الكبرى", "صحراء أتاكاما", "صحراء غوبي", "صحراء الربع الخالي"],
    correctAnswer: "الصحراء الكبرى",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تغطي معظم أجزاء شمال قارة أفريقيا"
  },
  {
    id: "gen_b4_038",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الوكالة الفضائية الحكومية للولايات المتحدة الأمريكية؟",
    options: ["ناسا (NASA)", "روسكوزموس", "إيسا", "سي إن إس أي"],
    correctAnswer: "ناسا (NASA)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "أطلقت برنامج أبولو وهبطت بالإنسان على سطح القمر"
  },
  {
    id: "gen_b4_039",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أكبر بحيرة مغلقة (أو بحر مغلق) في العالم مساحة؟",
    options: ["بحر قزوين", "البحر الميت", "بحيرة سوبراريور", "بحيرة بايكال"],
    correctAnswer: "بحر قزوين",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "تحيط به عدة دول منها روسيا وإيران وأذربيجان وتكمن أهميته في الغاز والنفط"
  },
  {
    id: "gen_b4_040",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو العالم الإنجليزي الذي اكتشف البنسلين (أول مضاد حيوي في التاريخ)؟",
    options: ["ألكسندر فليمنغ", "لويس باستور", "روبرت كوخ", "إدوارد جينر"],
    correctAnswer: "ألكسندر فليمنغ",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "اكتشفه بالصدفة من فطر العفن عام 1928"
  },
  {
    id: "gen_b4_041",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي القناة البحرية الاصطناعية التي تربط بين البحر الأبيض المتوسط والبحر الأحمر؟",
    options: ["قناة السويس", "قناة بنما", "قناة كيل", "قناة كورنث"],
    correctAnswer: "قناة السويس",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "افتتحت عام 1869 في مصر وتُعد شرياناً تجارياً عالمياً"
  },
  {
    id: "gen_b4_042",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أصغر دولة في العالم من حيث المساحة وعدد السكان؟",
    options: ["الفاتيكان", "موناكو", "سان مارينو", "ناورو"],
    correctAnswer: "الفاتيكان",
    answerImageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    hint: "دولة مستقيلة تقع بالكامل داخل العاصمة الإيطالية روما"
  },
  {
    id: "gen_b4_043",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو الكاتب والشاعر الإنجليزي الشهير مؤلف مسرحيات 'هاملت' و'روميو وجوليت'؟",
    options: ["ويليام شكسبير", "تشالرز ديكنز", "جورج أورويل", "جون ميلتون"],
    correctAnswer: "ويليام شكسبير",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "أعظم أدباء اللغة الإنجليزية وتُعرض مسرحياته في كل أنحاء العالم"
  },
  {
    id: "gen_b4_044",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأكثر إنتاجاً للشاي في العالم؟",
    options: ["الصين", "الهند", "كينيا", "سريلانكا"],
    correctAnswer: "الصين",
    answerImageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    hint: "موطن الشاي الأصلي وأكثر الدول زراعة وتصديراً لجميع أنواعه"
  },
  {
    id: "gen_b4_045",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم النهر الذي يمر عبر العاصمة الفرنسية باريس؟",
    options: ["نهر السين", "نهر التايمز", "نهر الراين", "نهر الدانوب"],
    correctAnswer: "نهر السين",
    answerImageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    hint: "تقع على ضفافه أشهر معالم باريس مثل برج ايفل ومتحف اللوفر"
  },
  {
    id: "gen_b4_046",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأولى عالمياً في إنتاج وتصدير النفط الخام؟",
    options: ["الولايات المتحدة", "المملكة العربية السعودية", "روسيا", "العراق"],
    correctAnswer: "الولايات المتحدة",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "تتصدر إنتاج النفط عالمياً بفضل النفط الصخري يليها السعودية وروسيا"
  },
  {
    id: "gen_b4_047",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الطبقة الغازية التي تحمي كوكب الأرض من الأشعة الضارة وتعد جزءاً من الستراتوسفير؟",
    options: ["طبقة الأوزون", "طبقة الأيونوسفير", "طبقة الثرموسفير", "المغناطيسية"],
    correctAnswer: "طبقة الأوزون",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تتركب من ثلاث ذرات أكسجين (O3) وتمتص الأشعة فوق البنفسجية"
  },
  {
    id: "gen_b4_048",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو الرسام الهولندي الشهير الذي قطع أذنه ورسم لوحة 'ليلة النجوم' (Starry Night)؟",
    options: ["فينسنت فان غوخ", "رامبرانت", "يوهانس فيرمير", "كلود مونيه"],
    correctAnswer: "فينسنت فان غوخ",
    answerImageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800",
    hint: "فنان انطباعي مأساوي لم ينل الشهرة إلا بعد وفاته"
  },
  {
    id: "gen_b4_049",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة دولة البرازيل الرسمية وليست ريو دي جانيرو أو ساو باولو؟",
    options: ["برازيليا", "ريو دي جانيرو", "ساو باولو", "سلفادور"],
    correctAnswer: "برازيليا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "مدينة حديثة بُنيت خططت خصيصاً لتكون العاصمة الاتحادية عام 1960"
  },
  {
    id: "gen_b4_050",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم العلم الذي يعتني بدروس الماضي الإنساني والحضارات من خلال الحفريات والآثار المادية؟",
    options: ["علم الآثار (Archeology)", "علم الأنثروبولوجيا", "علم التاريخ", "علم الجيولوجيا"],
    correctAnswer: "علم الآثار (Archeology)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "ينقب عن الأواني والقطع والآثار المدفونة لإعادة بناء التاريخ"
  },
  {
    id: "gen_b4_051",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو اسم أكبر جزيرة في العالم من حيث المساحة؟",
    options: ["جرينلاند", "مدغشقر", "بورنيو", "غينيا الجديدة"],
    correctAnswer: "جرينلاند",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "جزيرة ذات حكم ذاتي تابعة لمملكة الدنمارك وتغطيها أغطية جليدية"
  },
  {
    id: "gen_b4_052",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأكثر استضافة لكأس العالم لكرة القدم عبر التاريخ بالتساوي؟",
    options: ["البرازيل والمكسيك وإيطاليا وفرنسا وألمانيا", "المكسيك فقط", "البرازيل فقط", "إيطاليا وفرنسا"],
    correctAnswer: "البرازيل والمكسيك وإيطاليا وفرنسا وألمانيا",
    answerImageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
    hint: "استضاف كل منها البطولة مرتين (حتى تنظيم 2026 الثلاثي)"
  },
  {
    id: "gen_b4_053",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم المضيق الذي يفصل بين شبه الجزيرة العربية وإيران ويربط الخليج العربي ببحر عمان؟",
    options: ["مضيق هرمز", "مضيق باب المندب", "مضيق جبل طارق", "مضيق البسفور"],
    correctAnswer: "مضيق هرمز",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "شريان النفط والغاز الأهم في العالم لنقل الناقلات البحرية"
  },
  {
    id: "gen_b4_054",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم أكبر صحراء رملية متصلة في العالم وتقع جنوب شبه الجزيرة العربية؟",
    options: ["الربع الخالي", "صحراء النفوذ", "صحراء الدهناء", "صحراء سيناء"],
    correctAnswer: "الربع الخالي",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تمتد عبر السعودية والإمارات وعمان واليمن"
  },
  {
    id: "gen_b4_055",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو المؤسس والمدير التنفيذي لشركة سبيس إكس (SpaceX) وشركة تسلا (Tesla)؟",
    options: ["إيلون ماسك", "جيف بيزوس", "تيم كوك", "مارك زوكربرغ"],
    correctAnswer: "إيلون ماسك",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "ملياردير ورائد أعمال مهتم باستكشاف المريخ والسيارات الكهربائية"
  },
  {
    id: "gen_b4_056",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة دولة اليابان؟",
    options: ["طوكيو", "كيوتو", "أوساكا", "هيروشيما"],
    correctAnswer: "طوكيو",
    answerImageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    hint: "تعتبر أكبر منطقة حضرية ومكتظة بالسكان في العالم"
  },
  {
    id: "gen_b4_057",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو اسم أعمق بحيرة مياه عذبة وأقدمها في العالم وتقع في سيبريا بروسيا؟",
    options: ["بحيرة بايكال", "بحيرة سوبراريور", "بحيرة فيكتوريا", "بحيرة تنجانيقا"],
    correctAnswer: "بحيرة بايكال",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "تحتوي وحدها على نحو 20% من المياه العذبة السطحية غير المتجمدة بالعالم"
  },
  {
    id: "gen_b4_058",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو الفيلسوف اليوناني القديم صاحب طريقة التساؤل والتحاور الشفوي والذي حُكم عليه بالإعدام بشرب السم؟",
    options: ["سقراط", "أفلاطون", "أرسطو", "أبيقور"],
    correctAnswer: "سقراط",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "أستاذ أفلاطون وقال مقولته الشهيرة 'الحياة غير المبتلاة لا تستحق العيش'"
  },
  {
    id: "gen_b4_059",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأفريقية الوحيدة التي لم تُستعمر قط من قبل القوى الأوروبية إلى جانب ليبريا؟",
    options: ["إثيوبيا", "مصر", "نيجيريا", "غانا"],
    correctAnswer: "إثيوبيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "هزمت إيطاليا في معركة أدوا الشهرة وحافظت على استقلالها التاريخي"
  },
  {
    id: "gen_b4_060",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي القارة التي تضم نهر الأمازون والغابات المطيرة الشاسعة؟",
    options: ["أمريكا الجنوبية", "أمريكا الشمالية", "أفريقيا", "آسيا"],
    correctAnswer: "أمريكا الجنوبية",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تضم البرازيل والأرجنتين والبيرو وكولومبيا"
  },
  {
    id: "gen_b4_061",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الغاز الذي يشكل النسبة الأكبر والأعظم من حجم الغلاف الجوي للأرض (حوالي 78%)؟",
    options: ["النيتروجين", "الأكسجين", "الأرجون", "ثاني أكسيد الكربون"],
    correctAnswer: "النيتروجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "غاز خامل لا يساعد على الاشتعال ويشكل المعظم من هواء الجو"
  },
  {
    id: "gen_b4_062",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة جمهورية الصين الشعبية؟",
    options: ["بكين", "شنغهاي", "غوانزو", "هونغ كونغ"],
    correctAnswer: "بكين",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تضم المدينة المحرمة وساحة تيانانمن العريقة"
  },
  {
    id: "gen_b4_063",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الجهاز المستخدم لقياس الضغط الجوي للتنبؤ بالتغيرات في حالة الطقس؟",
    options: ["البارومتر", "الترمومتر", "الأنيجرومتر", "السيسمومتر"],
    correctAnswer: "البارومتر",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "اخترعه العالم الإيطالي تورشيللي باعتتماد الزئبق"
  },
  {
    id: "gen_b4_064",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم المنظمة الدولية الحالية التي تأسست عام 1945 لحفظ السلام والأمن الدوليين ومقرها نيويورك؟",
    options: ["الأمم المتحدة (UN)", "عصبة الأمم", "الناتو", "الاتحاد الأوروبي"],
    correctAnswer: "الأمم المتحدة (UN)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تضم الجمعية العامة ومجلس الأمن الدولي والعديد من الوكالات المتخصصة"
  },
  {
    id: "gen_b4_065",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو العلم الذي يختص بدراسة الزلازل وانتشار الموجات السيزمية داخل الأرض؟",
    options: ["علم الزلازل (Seismology)", "علم البراكين", "علم المناخ", "علم المحيطات"],
    correctAnswer: "علم الزلازل (Seismology)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يستخدم أجهزة مقياس السيزموغراف لرصد درجة قوة الزلزال"
  },
  {
    id: "gen_b4_066",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة دولة الهند السياسية؟",
    options: ["نيودلهي", "مومباي", "بنغالور", "كلكتا"],
    correctAnswer: "نيودلهي",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع في الجزء الشمالي من الهند وتستضيف البرلمان والحكومة"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب) ---
  // ==========================================
  {
    id: "gen_b4_067",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم أول قمر صناعي أطلقه البشر إلى الفضاء الخارجي عام 1957 بواسطة الاتحاد السوفيتي؟",
    options: ["سبوتنيك 1 (Sputnik 1)", "إكسبلورر 1", "فوييجر 1", "أبولو 11"],
    correctAnswer: "سبوتنيك 1 (Sputnik 1)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "كان عبارة عن كرة معدنية صغيرة تطلق إشارات بيپ وبدأ بسباق الفضاء"
  },
  {
    id: "gen_b4_068",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أسرع جسيمات أولية معروفة بالكون وتحمل شحنة كهربائية محايدة وكتلتها شبه معدومة وتخترق المادة بسهولة؟",
    options: ["النيوترينو (Neutrino)", "الكونارك", "البوزون", "الفوتون"],
    correctAnswer: "النيوترينو (Neutrino)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "تُلقب بـ 'الجسيمات الشبحية' وتعبر مليارات منها أجسامنا كل ثانية"
  },
  {
    id: "gen_b4_069",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم النظرية والنموذج الذي يفسر نشأة الكون وتوسعه قبل حوالي 13.8 مليار سنة؟",
    options: ["نظرية الانفجار العظيم (Big Bang)", "نظرية الحالة الثابتة", "نظرية الأوتار", "الكون الدوري"],
    correctAnswer: "نظرية الانفجار العظيم (Big Bang)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "تتأيد باكتشاف إشعاع الخلفية الكونية الميكروي وتوسع المجرات"
  },
  {
    id: "gen_b4_070",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العنصر الكيميائي الأكثر وفرة وانتشاراً في التركيب الكيميائي للكون ككل؟",
    options: ["الهيدروجين", "الهيليوم", "الأكسجين", "السيليكون"],
    correctAnswer: "الهيدروجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يشكل حوالي 75% من المادة العادية بالكون وهو وقود النجوم"
  },
  {
    id: "gen_b4_071",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي المعاهدة الدولية التأسيسية للاتحاد الأوروبي بصورته الحالية والتي وُقعت عام 1992؟",
    options: ["معاهدة ماستريخت", "معاهدة روما", "معاهدة لشبونة", "اتفاقية شنغن"],
    correctAnswer: "معاهدة ماستريخت",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "وُقعت في هولندا وأرست القواعد لإنشاء العملة الموحدة 'اليورو'"
  },
  {
    id: "gen_b4_072",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم القارة الخيالية التي ذكرها افلاطون في محاوراته وزعم أنها غرقت في أعماق المحيط؟",
    options: ["أتلانتس (Atlantis)", "ليموريا", "مو", "هايبربوريا"],
    correctAnswer: "أتلانتس (Atlantis)",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "جزيرة أسطورية متتقدمة حضارياً غرقت في البحر حسب الأسطورة اليونانية"
  },
  {
    id: "gen_b4_073",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الفيلسوف الألماني صاحب كتاب 'نقد العقل الخالص' ومؤسس الفلسفة النقدية؟",
    options: ["إيمانويل كانط", "فريدريك نيتشه", "جورج هيجل", "أرتور شوبنهاور"],
    correctAnswer: "إيمانويل كانط",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "فيلسوف التنوير الأبرز في القرن الثامن عشر بعصر العقلانيات"
  },
  {
    id: "gen_b4_074",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أكبر المجموعات العرقية في إثيوبيا من حيث عدد السكان؟",
    options: ["الأورومو", "الأمهرا", "التغراي", "الصوماليون"],
    correctAnswer: "الأورومو",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "يشكلون أكثر من ثلث السكان في إثيوبيا ولهم لغتهم الخاصة (الأوروميفا)"
  },
  {
    id: "gen_b4_075",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الهرمون المفروز من الغدة الدرقية والذي يضبط معدل الأيض والتمثيل الغذائي بالجسم؟",
    options: ["الثيروكسين (Thyroxine)", "الكورتيزول", "الألدوستيرون", "البرولاكتين"],
    correctAnswer: "الثيروكسين (Thyroxine)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يشار له بـ T4 وينظم طاقة وقوة عمليات الأيض"
  },
  {
    id: "gen_b4_076",
    category: "معلومات عامة",
    points: 600,
    questionText: "من هو أول انسان استطاع الوصول إلى القطب الجنوبي الجغرافي عام 1911 متغلباً على الرحالة روبيرت فالكون سكوت؟",
    options: ["روالد أموندسن", "روبرت بيري", "إرنست شاكلتون", "فريدجوف نانسن"],
    correctAnswer: "روالد أموندسن",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "مستكشف نرويجي شهير نجح في الوصول للقطب المتجمد قبل الأسطول البريطاني"
  },
  {
    id: "gen_b4_077",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الوحدة الفيزيائية المعيارية المستخدمة لقياس مدى شدة التدفق المغناطيسي أو الكثافة (Magnetic Flux Density)؟",
    options: ["التسلا (Tesla)", "الفيبر", "الغاز", "الإنري"],
    correctAnswer: "التسلا (Tesla)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "سميت تيمناً بالمخترع والفيزيائي نيكولا تسلا"
  },
  {
    id: "gen_b4_078",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم البركان الشهير في إيطاليا الذي دمر مدينتي بومبي وهيركولانيوم الرومانيتين عام 79 م؟",
    options: ["بركان فيزوف", "بركان إتنا", "بركان سترومبولي", "بركان كراكاتوا"],
    correctAnswer: "بركان فيزوف",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "بركان طبق يقع بالقرب من خليج نابولي في جنوب إيطاليا"
  },
  {
    id: "gen_b4_079",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العلم الذي ينكب على دراسة المخطوطات والوثائق القديمة وطريقة كتابتها وتاريخها؟",
    options: ["علم المخطوطات القديمة (Paleography)", "علم العملات", "علم الأنساب", "علم الدلالات"],
    correctAnswer: "علم المخطوطات القديمة (Paleography)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "يهتم بفك رموز الخطوط القديمة وتحقيق زمن وطبيعة كتابتها"
  },
  {
    id: "gen_b4_080",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أكبر صحراء ملحية صفائحية متصلة في العالم وتوجد في بوليفيا بـأمريكا الجنوبية؟",
    options: ["سالار دي أويوني (Salar de Uyuni)", "صحراء أتاكاما", "صحراء ناميب", "حوض كالاناري"],
    correctAnswer: "سالار دي أويوني (Salar de Uyuni)",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تتحول لمسطح عاكس كالمرآة العملاقة عند هطول الأمطار الخفيفة"
  },
  {
    id: "gen_b4_081",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو اسم العظم الأطول والأقوى والأثقل في هيكل الجسم البشري؟",
    options: ["عظم الفخذ", "عظم القصبة", "عظم العضد", "عظم الحوض"],
    correctAnswer: "عظم الفخذ",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يمتد من مفصل الورك إلى مفصل الركبة ويتحمل وزن الجسم"
  },
  {
    id: "gen_b4_082",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المضيق الذي يربط بين البحر الأسود وبحر مرمرة في تركيا ويقسم مدينة إسطنبول؟",
    options: ["مضيق البسفور", "مضيق الدردنيل", "مضيق كيرتش", "مضيق مالقا"],
    correctAnswer: "مضيق البسفور",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "ممر مائي تاريخي يفصل الجانب الأوروبي عن الجانب الآسيوي لإسطنبول"
  },
  {
    id: "gen_b4_083",
    category: "معلومات عامة",
    points: 600,
    questionText: "من هو الرسام الهولندي صاحب لوحة 'الفتاة ذات القرط اللؤلؤي' (Girl with a Pearl Earring)؟",
    options: ["يوهانس فيرمير", "رامبرانت", "فان غوخ", "موندريان"],
    correctAnswer: "يوهانس فيرمير",
    answerImageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800",
    hint: "أستاذ الرسم بالضوء في العصر الذهبي الهولندي بالقرن السابع عشر"
  },
  {
    id: "gen_b4_084",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الفيلسوف الإنجليزي صاحب المذهب التجريبي ومؤلف كتاب 'اللوياثان' عن العقد الاجتماعي؟",
    options: ["توماس هوبز", "جون لوك", "ديفيد هيوم", "باروخ سبينوزا"],
    correctAnswer: "توماس هوبز",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "صاحب مقولة 'حياة الإنسان في الحالة الطبيعية منعزلة وفقيرة ومقرفة ووحشية وقصيرة'"
  },
  {
    id: "gen_b4_085",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم النظرية التي تجمع بين ميكانيكا الكم والنسبية الخاصة لوصف التفاعلات الكهرومغناطيسية وتعرف بـ (QED)؟",
    options: ["ديناميكا الكم الكهرومغناطيسية", "الكروموديناميكا الكمية", "نظرية الجاذبية الكمومية", "النظرية الموحدة"],
    correctAnswer: "ديناميكا الكم الكهرومغناطيسية",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "طورها ريتشارد فاينمان وتوموناغا وشوينغر وتوصف بأنها أدق نظرية بالفيزياء"
  },
  {
    id: "gen_b4_086",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أقدم أوبرا معروفة ومكتملة بالنوتة الموسيقية في التاريخ وتعود لعام 1600 وتدعى 'دافني'؟",
    options: ["أوبرا دافني (Dafne)", "أوبرا أورفيو", "أوبرا كارمن", "أوبرا الفلوت السحري"],
    correctAnswer: "أوبرا دافني (Dafne)",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "ألفها الموسيقار الإيطالي جاكوبو بيري بالكامل في فلورنسا"
  },
  {
    id: "gen_b4_087",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي عاصمة دولة كازاخستان الحالية التي تغير اسمها سابقاً إلى نور سلطان ثم أُعيد لرسميته؟",
    options: ["أستانا", "ألماتي", "شيمكنت", "أكتوبي"],
    correctAnswer: "أستانا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "مدينة حديثة ذات معمار مستقبلي أصبحت عاصمة البلاد عام 1997"
  },
  {
    id: "gen_b4_088",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الأنزيم الأساسي المسؤول عن فتح وفك شريطي الحمض النووي (DNA) أثناء عملية التضاعف الخلوي؟",
    options: ["أنزيم الهيليكاز (Helicase)", "أنزيم البوليميراز", "أنزيم الليغاز", "أنزيم البريماز"],
    correctAnswer: "أنزيم الهيليكاز (Helicase)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يقوم بكسر الروابط الهيدروجينية بين القواعد النيتروجينية لشريطي الدنا"
  },
  {
    id: "gen_b4_089",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم أول رائد فضاء في التاريخ يدور حول الأرض في مركبة فوستوك 1 عام 1961؟",
    options: ["يوري غاغارين", "نيل أرمسترونغ", "بز ألدرن", "أليكسي ليونوف"],
    correctAnswer: "يوري غاغارين",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "رائد فضاء سوفيتي قام بوفاء أول رحلة بشرية تاريخية للفضاء الخارجي"
  },
  {
    id: "gen_b4_090",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم البركان الفائق (Supervolcano) الذي يقع تحت محمية ومتنزه طبيعي شهير بالولايات المتحدة الأمريكية؟",
    options: ["بركان يلوستون (Yellowstone)", "بركان سانت هيلين", "بركان ماونا لوا", "بركان بيناتوبو"],
    correctAnswer: "بركان يلوستون (Yellowstone)",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "بركان هائل في ولاية وايومنغ يحتوي كالديرا صخرية بركانية عظمى"
  },
  {
    id: "gen_b4_091",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الفيلسوف وعالم الرياضيات الفرنسي الشهير صاحب عبارة 'أنا أفكر، إذاً أنا موجود' (الكوجيتو)؟",
    options: ["رينيه ديكارت", "بليز باسكال", "جان جاك روسو", "فولطير"],
    correctAnswer: "رينيه ديكارت",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "أبو الفلسفة الحديثة ومؤسس الهندسة الديكارتية التحليلية"
  },
  {
    id: "gen_b4_092",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أكبر بحيرة في قارة أوروبا وتوجد في روسيا بالقرب من سان بطرسبرغ؟",
    options: ["بحيرة لادوجا (Ladoga)", "بحيرة أونيغا", "بحيرة فنلندا", "بحيرة فاستيرن"],
    correctAnswer: "بحيرة لادوجا (Ladoga)",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "بحيرة مياه عذبة شاسعة تقع في جمهورية كاريليا وجمهورية لينينغراد"
  },
  {
    id: "gen_b4_093",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو اسم العصب القحفي رقم X (العاشر) الذي يمتد من الدماغ إلى معظم أعضاء الجهاز الهضمي والقلب؟",
    options: ["العصب التائه (اللاحق / المبهم)", "العصب الثلاثي التوائم", "العصب الوجهي", "العصب الشمي"],
    correctAnswer: "العصب التائه (اللاحق / المبهم)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يتحكم بالنظام اللارباطي (النظير سمبثاوي) لإبطاء دقات القلب والهضم"
  },
  {
    id: "gen_b4_094",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المعركة البحرية الفاصلة عام 1571 التي انتصر فيها التحالف الأوربي الصليبي على الأسطول العثماني؟",
    options: ["معركة ليبانتو", "معركة نافرينو", "معركة بلاط الشهداء", "معركة حطين"],
    correctAnswer: "معركة ليبانتو",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "دارت في يونان وكسرت التفوق البحري العثماني في البحر المتوسط"
  },
  {
    id: "gen_b4_095",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الطبقة العميقة من القشرة الأرضية والغلاف الصخري التي تتشكل منها الصفائح التكتونية وتتحرك فوقها؟",
    options: ["الغلاف المائع (Asthenosphere)", "الغلاف الصخري", "الوشاح السفلي", "النواة الخارجية"],
    correctAnswer: "الغلاف المائع (Asthenosphere)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "طبقة لينة ومنصهرة جزئياً تعلو الوشاح العلوي وتسمح بحركة الصفائح"
  },
  {
    id: "gen_b4_096",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الجائزة المرموقة عالمياً التي تُمنح سنوياً في مجالات الصحافة والأدب والموسيقى في أمريكا؟",
    options: ["جائزة بوليتزر (Pulitzer)", "جائزة البوكر", "جائزة غرامي", "جائزة إيمي"],
    correctAnswer: "جائزة بوليتزر (Pulitzer)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "تدار بواسطة جامعة كولومبيا وتُعد أعلى شرف صحفي وأدبي أمريكي"
  },
  {
    id: "gen_b4_097",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العنصر الكيميائي الخفيف الذي يحمل الرمز (Li) ويُستخدم بكثرة في صناعة بطاريات الهواتف والسيارات؟",
    options: ["الليثيوم", "الصوديوم", "البوتاسيوم", "المغنيسيوم"],
    correctAnswer: "الليثيوم",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "أخف معدن صلب بالجدول الدوري وله طاقة تخزين كهربائية عالية"
  },
  {
    id: "gen_b4_098",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الفيلسوف وعالم الاقتصاد الأسكتلندي صاحب كتاب 'ثروة الأمم' والمُعتبر أباً للاقتصاد الراسمالي الحديث؟",
    options: ["آدم سميث", "كارل ماركس", "جون ماينارد كينز", "ديفيد ريكاردو"],
    correctAnswer: "آدم سميث",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "صاحب مفهوم 'اليد الخفية' والسوق الحر ودعم حرية التجارة"
  },
  {
    id: "gen_b4_099",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المجرة الحلزونية الأقرب لمجرتنا (درب التبانة) ومن المتوقع اصطدامهما بعد عدة مليارات من السنين؟",
    options: ["مجرة أندروميدا (المرأة المسلسلة)", "مجرة المثلث", "سحابة ماجلان الكبرى", "مجرة الصومعة"],
    correctAnswer: "مجرة أندروميدا (المرأة المسلسلة)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "تبعد عنا حوالي 2.5 مليون سنة ضوئية وتُرى بالعين المجردة بظروف مثالية"
  },
  {
    id: "gen_b4_100",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو اسم العالِم العربي والمسلم الملقب بـ 'أبي الكيمياء' والذي أدخل التجريب العلمي في الكيمياء وحضر الأحماض؟",
    options: ["جابر بن حيان", "الرازي", "ابن الهيثم", "البيروني"],
    correctAnswer: "جابر بن حيان",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "صاحب الاكتشافات الشهيرة في التقطير والتبلور وحمض النيتريك والنيتروهيدروكلوريك"
  }
];

export const generalKnowledgePart4 = generalKnowledgeBatch4;
