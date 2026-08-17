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

export const generalKnowledgeBatch2: GeneralKnowledgeQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل) ---
  // ==========================================
  {
    id: "gen_b2_001",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة المملكة العربية السعودية؟",
    options: ["الرياض", "جدة", "مكة المكرمة", "الدمام"],
    correctAnswer: "الرياض",
    answerImageUrl: "https://images.unsplash.com/photo-1586724237569-f3d021dd4c37?w=800",
    hint: "تعتبر أكبر مدن المملكة ومركزها السياسي والإداري"
  },
  {
    id: "gen_b2_002",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أكبر كوكب في المجموعة الشمسية؟",
    options: ["المشتري", "زحل", "المريخ", "الأرض"],
    correctAnswer: "المشتري",
    answerImageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
    hint: "عملاق غازي يمتلك البقعة الحمراء الشهيرة"
  },
  {
    id: "gen_b2_003",
    category: "معلومات عامة",
    points: 200,
    questionText: "كم عدد أضلاع المثلث؟",
    options: ["3", "4", "5", "6"],
    correctAnswer: "3",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "شكل هندسي بسيط يتكون من ثلاثة رؤوس"
  },
  {
    id: "gen_b2_004",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأكثر إنتاجاً للنفط في العالم حتى الآن؟",
    options: ["الولايات المتحدة الأمريكية", "السعودية", "روسيا", "العراق"],
    correctAnswer: "الولايات المتحدة الأمريكية",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "تتراوح صدارتها مع السعودية وروسيا وتعتمد بكثرة على النفط الصخري"
  },
  {
    id: "gen_b2_005",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة دولة الإمارات العربية المتحدة؟",
    options: ["أبوظبي", "دبي", "الشارقة", "العين"],
    correctAnswer: "أبوظبي",
    answerImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    hint: "تضم مقر الحكومة الاتحادية وقصر الوطن"
  },
  {
    id: "gen_b2_006",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العضو المسؤول عن تصفية الدم وإخراج السموم على شكل بول؟",
    options: ["الكلية", "الكبد", "المعدة", "البنكرياس"],
    correctAnswer: "الكلية",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يمتلك الإنسان اثنتين منها وتتشابه في شكلها مع حبة الفاصولياء"
  },
  {
    id: "gen_b2_007",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي العملة الرسمية لدول منطقة الاتحاد الأوروبي؟",
    options: ["اليورو", "الدولار", "الجنيه الاسترليني", "الفرنك"],
    correctAnswer: "اليورو",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "ويرمز لها بالرمز €"
  },
  {
    id: "gen_b2_008",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أصغر قارة في العالم من حيث المساحة؟",
    options: ["أستراليا", "أوروبا", "أمريكا الجنوبية", "أفريقيا"],
    correctAnswer: "أستراليا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تعتبر قارة ودولة في الوقت نفسه"
  },
  {
    id: "gen_b2_009",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم الحيوان الشهير بطوله وبأنه أطول حيوان بري على الأرض؟",
    options: ["الزرافة", "الفيل", "فرس النهر", "الخرتيت"],
    correctAnswer: "الزرافة",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "تتميز برقبتها الطويلة وجلدها المبرقش"
  },
  {
    id: "gen_b2_010",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي درجة غليان الماء النقية تحت الضغط الجوي العادي بالسيليزيوس؟",
    options: ["100", "50", "0", "120"],
    correctAnswer: "100",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "الدرجة المئوية الكاملة يتحول عندها الماء إلى بخار"
  },
  {
    id: "gen_b2_011",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة اليابان؟",
    options: ["طوكيو", "كيوتو", "أوساكا", "هيروشيما"],
    correctAnswer: "طوكيو",
    answerImageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
    hint: "من أكثر المناطق الحضرية اكتظاظاً بالسكان في العالم"
  },
  {
    id: "gen_b2_012",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم الكوكب الأحمر في المجموعة الشمسية؟",
    options: ["المريخ", "عطارد", "الزهرة", "اورانوس"],
    correctAnswer: "المريخ",
    answerImageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
    hint: "يكتسب لونه من أكسيد الحديد (الصدأ) الموجود على سطحه"
  },
  {
    id: "gen_b2_013",
    category: "معلومات عامة",
    points: 200,
    questionText: "من هو الشاعر الملقب بـ 'أمير الشعراء'؟",
    options: ["أحمد شوقي", "حافظ إبراهيم", "المتنبي", "نزار قباني"],
    correctAnswer: "أحمد شوقي",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "شاعر مصري شهير بويع بلقب أمير الشعراء عام 1927"
  },
  {
    id: "gen_b2_014",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة المملكة المغربية؟",
    options: ["الرباط", "الدار البيضاء", "مراكش", "طنجة"],
    correctAnswer: "الرباط",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع على المحيط الأطلسي وتضم صومعة حسان"
  },
  {
    id: "gen_b2_015",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو اسم البحر الذي يفصل بين القارتين الآسيوية والأفريقية؟",
    options: ["البحر الأحمر", "البحر المتوسط", "البحر الأسود", "بحر العرب"],
    correctAnswer: "البحر الأحمر",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يربط بين باب المندب وقناة السويس"
  },
  {
    id: "gen_b2_016",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم العملية التي يستغل بها النبات الضوء لصنع غذائه؟",
    options: ["البناء الضوئي", "التنفس الخلوي", "الفرز الكيميائي", "التبخر"],
    correctAnswer: "البناء الضوئي",
    answerImageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
    hint: "تحدث في بلاستيدات النبات الخضراء بوجود الكلوروفيل"
  },
  {
    id: "gen_b2_017",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأكثر فوزاً بكأس العالم لكرة القدم؟",
    options: ["البرازيل", "ألمانيا", "إيطاليا", "الأرجنتين"],
    correctAnswer: "البرازيل",
    answerImageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
    hint: "فازت باللقب 5 مرات وتُعرف ببلد السامبا"
  },
  {
    id: "gen_b2_018",
    category: "معلومات عامة",
    points: 200,
    questionText: "كم عدد قارات العالم المعروفة عموماً؟",
    options: ["7", "5", "6", "8"],
    correctAnswer: "7",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تتوزع بين آسيا وأفريقيا وأوروبا والأمريكتين وأستراليا وأنتاركتيكا"
  },
  {
    id: "gen_b2_019",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الهيكل الصلب داخل جسم الإنسان الذي يحمي الأعضاء ويدعم الجسم؟",
    options: ["الهيكل العظمي", "الجهاز العضلي", "الجهاز العصبي", "الجلد"],
    correctAnswer: "الهيكل العظمي",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يتكون لدى الإنسان البالغ من 206 عظمه"
  },
  {
    id: "gen_b2_020",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة جمهورية فرنسا؟",
    options: ["باريس", "ليون", "مارسيليا", "نيس"],
    correctAnswer: "باريس",
    answerImageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    hint: "تُعرف بمدينة النور وبها برج ايفل"
  },
  {
    id: "gen_b2_021",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أثقل طائر على وجه الأرض ولا يستطيع الطيران؟",
    options: ["النعامة", "البطريق", "الكيوي", "الطاووس"],
    correctAnswer: "النعامة",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "تتميز بساقين قويتين وتستطيع الركض بسرعات عالية"
  },
  {
    id: "gen_b2_022",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة المملكة المتحدة (بريطانيا)؟",
    options: ["لندن", "مانشستر", "إدنبرة", "ليفربول"],
    correctAnswer: "لندن",
    answerImageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    hint: "تقع على نهر التايمز وبها ساعة بيج بن"
  },
  {
    id: "gen_b2_023",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أكبر ثدييات البحار بل والمحيطات على الإطلاق؟",
    options: ["الحوت الأزرق", "قرش الحوت", "الدلفين", "عروس البحر"],
    correctAnswer: "الحوت الأزرق",
    answerImageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    hint: "أكبر كائن حي عُرف في التاريخ القديم والحديث"
  },
  {
    id: "gen_b2_024",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم العملة الرسمية في دولة الكويت؟",
    options: ["الدينار الكويتي", "الريال", "الدرهم", "الجنيه"],
    correctAnswer: "الدينار الكويتي",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "يُعتبر من أعلى العملات قيمة نقدية في العالم"
  },
  {
    id: "gen_b2_025",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أكبر مدينة من حيث المساحة والسكان في تركيا؟",
    options: ["إسطنبول", "أنقرة", "إزمير", "بورصة"],
    correctAnswer: "إسطنبول",
    answerImageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
    hint: "المدينة الوحيدة التي تقع بين قارتين (آسيا وأوروبا)"
  },
  {
    id: "gen_b2_026",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العضو الحسي المسؤول عن حاسة السمع وتوازن الجسم؟",
    options: ["الأذن", "العين", "الأنف", "اللسان"],
    correctAnswer: "الأذن",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "تحتوي على أجزاء خارجية ووسطى وداخلية"
  },
  {
    id: "gen_b2_027",
    category: "معلومات عامة",
    points: 200,
    questionText: "من هو الرحالة العربي الشهير الملقب بأمير الرحالين المسلمين؟",
    options: ["ابن بطوطة", "ابن خلدون", "الإدريسي", "ابن مجيد"],
    correctAnswer: "ابن بطوطة",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "صاحب الكتاب الشهير 'تحفة النظار في غرائب الأمصار'"
  },
  {
    id: "gen_b2_028",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي القناة المائية التي تربط بين البحر الأبيض المتوسط والبحر الأحمر؟",
    options: ["قناة السويس", "قناة بنما", "قناة كيل", "مضيق جبل طارق"],
    correctAnswer: "قناة السويس",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "توجد في مصر وافتتحت رسمياً عام 1869"
  },
  {
    id: "gen_b2_029",
    category: "معلومات عامة",
    points: 200,
    questionText: "أي من الكواكب التالية يعتبر الأقرب إلى الشمس؟",
    options: ["عطارد", "الزهرة", "الأرض", "المريخ"],
    correctAnswer: "عطارد",
    answerImageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800",
    hint: "يدور حول الشمس في أسرع مدة زمنية مقارنة بباقي الكواكب"
  },
  {
    id: "gen_b2_030",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العلم المسؤول عن دراسة تركيب المواد وخواصها والتفاعلات فيما بينها؟",
    options: ["علم الكيمياء", "علم الفيزياء", "علم الأحياء", "علم الفلك"],
    correctAnswer: "علم الكيمياء",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يُدرس عناصر الجدول الدوري والجزيئات والتفاعلات"
  },
  {
    id: "gen_b2_031",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم عاصمة دولة الصين؟",
    options: ["بكين", "شنغهاي", "هوانغتشو", "شينزن"],
    correctAnswer: "بكين",
    answerImageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    hint: "تضم المدينة المحرمة وساحة تيانانمن"
  },
  {
    id: "gen_b2_032",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي العاصمة الإدارية والسياسية لدولة ألمانيا؟",
    options: ["برلين", "ميونخ", "فرانکفورت", "هامبورغ"],
    correctAnswer: "برلين",
    answerImageUrl: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800",
    hint: "اشتهرت سابقاً بوجود جدار برلين الذي أزيل عام 1989"
  },
  {
    id: "gen_b2_033",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الشارع الشهير في نيويورك المخصص للمسارح والعروض التمثيلية العالمية؟",
    options: ["برودواي (Broadway)", "وول ستريت", "فيفث أفينيو", "تايمز سكوير"],
    correctAnswer: "برودواي (Broadway)",
    answerImageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
    hint: "يعتبر قلب صناعة المسرح في الولايات المتحدة"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط) ---
  // ==========================================
  {
    id: "gen_b2_034",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو مؤسس علم الجبر والملقب بـ 'أبي الحاسوب والرياضيات' عند العرب؟",
    options: ["محمد بن موسى الخوارزمي", "ابن الهيثم", "جابر بن حيان", "الكندي"],
    correctAnswer: "محمد بن موسى الخوارزمي",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "مشتق اسم الخوارزميات (Algorithms) من اسمه"
  },
  {
    id: "gen_b2_035",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم مضيق جغرافيا ينصل بين الخليج العربي وبحر عمان؟",
    options: ["مضيق هرمز", "مضيق باب المندب", "مضيق مالقا", "مضيق البسفور"],
    correctAnswer: "مضيق هرمز",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "أهم الممرات المائية الاستراتيجية لتصدير النفط في العالم"
  },
  {
    id: "gen_b2_036",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو اسم المعاهدة النقدية الدولية التي صممت عام 1944 لتحديد نظام المالي العالمي بعد الحرب العالمية الثانية؟",
    options: ["اتفاقية بريتون وودز", "اتفاقية جنيف", "معاهدة فيرساي", "اتفاقية يالطا"],
    correctAnswer: "اتفاقية بريتون وودز",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "أسفرت عن تأسيس صندوق النقد والبنك الدوليين"
  },
  {
    id: "gen_b2_037",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أول دولة أطلقت قمراً صناعياً إلى الفضاء باسم 'سبوتنيك-1' عام 1957؟",
    options: ["الاتحاد السوفيتي", "الولايات المتحدة", "الصين", "بريطانيا"],
    correctAnswer: "الاتحاد السوفيتي",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "بدأت بها مرحلة السباق الفضائي الشهير في القرن العشرين"
  },
  {
    id: "gen_b2_038",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم العلم المخصص بدراسة الحشرات وسلوكها وأنواعها؟",
    options: ["علم الحشرات (Entomology)", "علم علم البيئة", "علم التشريح", "علم الأحافير"],
    correctAnswer: "علم الحشرات (Entomology)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "فرع من فروع علم الحيوان يركز على الكائنات سداسية الأرجل"
  },
  {
    id: "gen_b2_039",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي العاصمة المثلثة التي تجمع ثلاث مدن كبيرة منها الخرطوم وأم درمان؟",
    options: ["السودان", "مصر", "العراق", "اليمن"],
    correctAnswer: "السودان",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "يلتقي في هذه العاصمة النيل الأزرق بالنيل الأبيض"
  },
  {
    id: "gen_b2_040",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو العلم الذي يختص بدراسة الزلازل وتتبع حركة الصفائح التكتونية؟",
    options: ["علم الزلازل (السيزمولوجيا)", "علم الأرصاد", "علم المحيطات", "علم الفلك"],
    correctAnswer: "علم الزلازل (السيزمولوجيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يعتمد على أجهزة السيزموجراف لتسجيل الموجات"
  },
  {
    id: "gen_b2_041",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو العالم الفيزيائي السويسري-الألماني صاحب نظرية النسبية العامة والخاصة؟",
    options: ["ألبيرت أينشتاين", "ماكس بلانك", "نيزك بور", "إرنست رذرفورد"],
    correctAnswer: "ألبيرت أينشتاين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "صاحب المعادلة الشهيرة E=mc² وحائز على نوبل 1921"
  },
  {
    id: "gen_b2_042",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أطول المرتفعات والجبال في أفريقيا وتتوج بقمة كليمنجارو؟",
    options: ["جبل كليمنجارو", "جبال الأطلس", "جبل كينيا", "جبال راس دشن"],
    correctAnswer: "جبل كليمنجارو",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "يقع بركانياً في تنزانيا ويبلغ ارتفاعه حوالي 5895 متراً"
  },
  {
    id: "gen_b2_043",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المدينة الضخمة التي كانت تُعرف تاريخياً باسم 'القسطنطينية'؟",
    options: ["إسطنبول", "أثينا", "روما", "صوفيا"],
    correctAnswer: "إسطنبول",
    answerImageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
    hint: "فتحها السلطان العثماني محمد الفاتح عام 1453"
  },
  {
    id: "gen_b2_044",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أكبر بحيرة عذبة في العالم من حيث حجم المياه العذبة غير المتجمدة؟",
    options: ["بحيرة بايكال", "بحيرة سوبيريور", "بحيرة فيكتوريا", "بحيرة تنجانيقا"],
    correctAnswer: "بحيرة بايكال",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "تقع في سيبيريا بروسيا وتضم نحو 20% من مياه العذبة السطحية بالعالم"
  },
  {
    id: "gen_b2_045",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو العلم المسؤول عن دراسة تركيب الجسم البشري وأعضائه الداخلية؟",
    options: ["علم التشريح (Anatomy)", "علم وظائف الأعضاء", "علم الأنسجة", "علم الأمراض"],
    correctAnswer: "علم التشريح (Anatomy)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يهتم ببنية العظام والأعضاء والأوردة بالجسم"
  },
  {
    id: "gen_b2_046",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المصطلح الاقتصادي الذي يشير إلى عدم القدرة على سداد الديون والاستحقاقات المالية؟",
    options: ["الإفلاس (Bankruptcy)", "التضخم", "العجز التجاري", "التعويم"],
    correctAnswer: "الإفلاس (Bankruptcy)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "حالة قانونية تعلن فيها الشركة أو الشخص العجز المالي"
  },
  {
    id: "gen_b2_047",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو الرسام الهولندي الشهير صاحب لوحة 'دوار الشمس' و'ليلة النجوم' والذي قطع جزءاً من أذنه؟",
    options: ["فينسنت فان جوخ", "رامبرانت", "كلاود مونيه", "بابلو بيكاسو"],
    correctAnswer: "فينسنت فان جوخ",
    answerImageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800",
    hint: "رسام انطباعي شهير عاش حياة مضطربة في القرن التاسع عشر"
  },
  {
    id: "gen_b2_048",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة دولة كندا الرسمية؟",
    options: ["أوتاوا", "تورونتو", "مونتريال", "فانكوفر"],
    correctAnswer: "أوتاوا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع في مقاطعة أونتاريو وتعد العاصمة الاتحادية للبلاد"
  },
  {
    id: "gen_b2_049",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الحيوان الذي يستطيع تغيير لون جلده للتمويه والرضا والتواصل الاجتماعي؟",
    options: ["الحرباء", "الأخطبوط", "الحبار", "الضب"],
    correctAnswer: "الحرباء",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "زواحف تشتهر بأعينها المتحركة بشكل مستقل ولسبها الطويل"
  },
  {
    id: "gen_b2_050",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم أول محطة فضائية دولية مأهولة بالرواد تدور في المدار الأرضي المنخفض؟",
    options: ["محطة الفضاء الدولية (ISS)", "محطة مير", "محطة سكاي لاب", "محطة تيانغونغ"],
    correctAnswer: "محطة الفضاء الدولية (ISS)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "مشروع دولي تشترك فيه ناسا وإيسا وروسكوزموس"
  },
  {
    id: "gen_b2_051",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأكثر إنتاجاً للأرز في العالم؟",
    options: ["الصين", "الهند", "إندونيسيا", "فيتنام"],
    correctAnswer: "الصين",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تنتج وتستهلك أكبر كميات من المحصول الأساسي في آسيا"
  },
  {
    id: "gen_b2_052",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم النظام البرمجي المصدر المفتوح الذي بني عليه نظام تشغيل أندرويد للهواتف الذكية؟",
    options: ["لينكس (Linux)", "يونكس", "ويندوز", "دوس"],
    correctAnswer: "لينكس (Linux)",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "أنشأ نواة هذا النظام العالم لينوس تورفالدس"
  },
  {
    id: "gen_b2_053",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأفريقية الشهيرة بأهرامات المروي وحضارة كوش القديمة؟",
    options: ["السودان", "مصر", "إثيوبيا", "المغرب"],
    correctAnswer: "السودان",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تحوي عدداً كبيراً من الأهرامات التاريخية في منطقة البجراوية"
  },
  {
    id: "gen_b2_054",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الوكالة الحكومية الأمريكية للذكاء والاستخبارات وتعرف بـ 'CIA'؟",
    options: ["وكالة الاستخبارات المركزية", "مكتب التحقيقات الفيدرالي", "وكالة الأمن القومي", "البنتاغون"],
    correctAnswer: "وكالة الاستخبارات المركزية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تختص بجمع وتحليل معلومات الأمن القومي من حول العالم"
  },
  {
    id: "gen_b2_055",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم أكبر نهر في العالم من حيث غزارة وحجم تدفق المياه؟",
    options: ["نهر الأمازون", "نهر النيل", "نهر الميسيسيبي", "نهر اليانغتسي"],
    correctAnswer: "نهر الأمازون",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يمر عبر غابات الأمازون المطيرة في أمريكا الجنوبية"
  },
  {
    id: "gen_b2_056",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو الفيلسوف الفرنسي صاحب المقولة الشهيرة 'أنا أفكر، إذن أنا موجود'؟",
    options: ["رينيه ديكارت", "فولتير", "جان جاك روسو", "مونتسكيو"],
    correctAnswer: "رينيه ديكارت",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "مؤسس الفلسفة الحديثة والرياضيات الديكارتية"
  },
  {
    id: "gen_b2_057",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم المدينة الإيطالية العائمة على الماء وتشتهر بالقنوات المائية والقوارب (الجندول)؟",
    options: ["البندقية (فينيسيا)", "فلورنسا", "ميلانو", "نابولي"],
    correctAnswer: "البندقية (فينيسيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1514896856000-91cb6de818e0?w=800",
    hint: "تتكون من أكثر من 100 جزيرة صغيرة تربطها الجسور"
  },
  {
    id: "gen_b2_058",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الغاز الذي يعتبر المكون الرئيسي للغاز الطبيعي المستخدم في الوقود والطهي؟",
    options: ["الميثان", "الإيثان", "البروبان", "البوتان"],
    correctAnswer: "الميثان",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "مركب هيدروكربوني صيغته الكيميائية CH4"
  },
  {
    id: "gen_b2_059",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة دولة البرازيل؟",
    options: ["برازيليا", "ريو دي جانيرو", "ساو باولو", "سلفادور"],
    correctAnswer: "برازيليا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "مدينة حديثة التخطيط بنيت خصيصاً لتكون عاصمة البلاد عام 1960"
  },
  {
    id: "gen_b2_060",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم العالم الذي اكتشف البنسلين كأول مضاد حيوي في التاريخ عام 1928؟",
    options: ["ألكسندر فلمنج", "لويس باستور", "روبرت كوخ", "إدوارد جينر"],
    correctAnswer: "ألكسندر فلمنج",
    answerImageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    hint: "عالم طبيب اسكتلندي غير تاريخ الطب واكتشف الفطر بالصدفة"
  },
  {
    id: "gen_b2_061",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأكثر إنتاجاً وتصديراً لرقائق الألومنيوم والمعدن في العالم؟",
    options: ["الصين", "روسيا", "كندا", "الهند"],
    correctAnswer: "الصين",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "تستحوذ على أكثر من نصف الإنتاج العالمي للألومنيوم الأولي"
  },
  {
    id: "gen_b2_062",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المعاهدة الدولية التي تحظر التجريبات النووية وتدير أمان المفاعلات عالمياً؟",
    options: ["معاهدة حظر النفوذ النووي (NPT)", "اتفاقية باريس", "معاهدة كيوتو", "اتفاقية جنيف"],
    correctAnswer: "معاهدة حظر النفوذ النووي (NPT)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تُعرف بمعاهدة عدم انتشار الأسلحة النووية"
  },
  {
    id: "gen_b2_063",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي القارة الوحيدة التي خلت من الصحاري الجافة؟",
    options: ["أوروبا", "أمريكا الشمالية", "آسيا", "أستراليا"],
    correctAnswer: "أوروبا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تتميز بطقسها المعتدل والمطير ومعظم أراضيها خضراء أو زراعية"
  },
  {
    id: "gen_b2_064",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المحيط الذي تحيط به منطقة 'حزام النار' البركانية والزلزالية؟",
    options: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"],
    correctAnswer: "المحيط الهادئ",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يحتوي على غالبية البراكين النشطة والهزات الأرضية بالعالم"
  },
  {
    id: "gen_b2_065",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو اسم العصب المسؤول عن حاسة الشم ونقل الرائحة للمخ؟",
    options: ["العصب الشمي", "العصب البصري", "العصب التائه", "العصب السمعي"],
    correctAnswer: "العصب الشمي",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "هو العصب القحفي الأول في جسم الإنسان"
  },
  {
    id: "gen_b2_066",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي عاصمة دولة جنوب أفريقيا الإدارية والتنفيذية؟",
    options: ["بريتوريا", "كيب تاون", "جوهانسبرغ", "بلومفونتين"],
    correctAnswer: "بريتوريا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "واحدة من العواصم الثلاث التي تتوزع فيها السلطات بالبلاد"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب) ---
  // ==========================================
  {
    id: "gen_b2_067",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم النظرية الفيزياء التي تبحث في سلوك الجسيمات دون الذرية والاحتمالات الموجية؟",
    options: ["ميكانيكا الكم (Quantum Mechanics)", "النسبية العامة", "الكهرومغناطيسية", "الديناميكا الحرارية"],
    correctAnswer: "ميكانيكا الكم (Quantum Mechanics)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "طورها علماء أمثال بور وشرودنغر وهايPath"
  },
  {
    id: "gen_b2_068",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الدولة الأكثر استهلاكاً وإنتاجاً لليورانيوم الخام المستخدم في الطاقة النووية؟",
    options: ["كازاخستان", "كندا", "أستراليا", "النيجر"],
    correctAnswer: "كازاخستان",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تنتج أكثر من 40% من اليورانيوم المستخرج عالمياً"
  },
  {
    id: "gen_b2_069",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الاتفاقية التجارية الشهيرة التي جمعت بين أمريكا وكندا والمكسيك واُستبدلت بـ USMCA؟",
    options: ["اتفاقية نافتا (NAFTA)", "الميركوسور", "الآسيان", "الأوبك"],
    correctAnswer: "اتفاقية نافتا (NAFTA)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "اتفاقية التبادل الحر لشمال أمريكا التي وقعت في التسعينيات"
  },
  {
    id: "gen_b2_070",
    category: "معلومات عامة",
    points: 600,
    questionText: "من هو المفكر والأصولي التاريخي العربي الذي وضع كتاب 'المقدمة' ونظريات العصبية وعلم الاجتماع؟",
    options: ["ابن خلدون", "ابن رشد", "الفارابي", "الغازالي"],
    correctAnswer: "ابن خلدون",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "يعتبر المؤسس الفعلي لعلم الاجتماع البشري وفلسفة التاريخ"
  },
  {
    id: "gen_b2_071",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الوكالة الحكومية الروسية المسؤولة عن أنشطة ورحلات الفضاء؟",
    options: ["روسكوزموس (Roscosmos)", "ناسا", "إيسا", "سي إن إس إيه"],
    correctAnswer: "روسكوزموس (Roscosmos)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "الوريث الشرعي لبرنامج الفضاء السوفيتي وتطلق من قاعدة بايكونور"
  },
  {
    id: "gen_b2_072",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي المتلازمة النفسية التي تشعر فيها الشخصية الناجحة بأنها محتالة ولا تستحق إنجازاتها؟",
    options: ["متلازمة المحتال (Impostor Syndrome)", "متلازمة احتراق النفس", "متلازمة بوفاري", "متلازمة آسبجر"],
    correctAnswer: "متلازمة المحتال (Impostor Syndrome)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "ظاهرة يعتقد المصاب بها أن نجاحه مجرد حظ وسيُكتشف أمره"
  },
  {
    id: "gen_b2_073",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المؤتمر الدولي الذي قسم القارة الأفريقية بين القوى الاستعمارية الأوروبية عام 1884؟",
    options: ["مؤتمر برلين", "مؤتمر فيينا", "مؤتمر باريس", "مؤتمر الميزان"],
    correctAnswer: "مؤتمر برلين",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "دعاه المستشار الألماني أوتو فون بيسمارك لتنظيم التكالب على أفريقيا"
  },
  {
    id: "gen_b2_074",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو اسم العنصر الكيميائي الأكثر كثافة وتوقيعاً بين العناصر في الطبيعة ورمزه (Os)؟",
    options: ["الأوسميوم (Osmium)", "الإريديوم", "البلاتين", "الرصاص"],
    correctAnswer: "الأوسميوم (Osmium)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "معدن انتقالي صلب وثقيل جداً تفوق كثافته الألماس والذهب"
  },
  {
    id: "gen_b2_075",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو الاقتصاد الدائري (Circular Economy)؟",
    options: ["نموذج يعتمد على إعادة التدوير والحد من الهدر واستدامة الموارد", "اقتصاد يعتمد على الزراعة فقط", "طباعة العملات بكثرة", "الاعتماد الكامل على التصدير"],
    correctAnswer: "نموذج يعتمد على إعادة التدوير والحد من الهدر واستدامة الموارد",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "يركز على تقليل النفايات بإعادة تصنيع المنتجات واستعمالها"
  },
  {
    id: "gen_b2_076",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أطول متسلسلة جبلية قارية تحت الماء وتشق المحيط الأطلسي من الشمال للجنوب؟",
    options: ["أعراف منتصف الأطلسي", "جبال الأنديز البحرية", "سلسلة ماريانا", "سلسلة هاواي"],
    correctAnswer: "أعراف منتصف الأطلسي",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "سلسلة جبال بركانية تتكون نتيجة تباعد الصفائح التكتونية"
  },
  {
    id: "gen_b2_077",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الفيلسوف الألماني صاحب كتاب 'هكذا تكلم زارادشت' ومفهوم 'الإنسان الأعلى'؟",
    options: ["فريدريك نيتشه", "إيمانويل كانط", "جورج هيجل", "أرثر شوبنهاور"],
    correctAnswer: "فريدريك نيتشه",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "من أبرز الفلاسفة النقاد للقيم الأخلاقية في القرن 19"
  },
  {
    id: "gen_b2_078",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي تقنية التعديل الجيني الثورية التي نالت عليها الباحثتان شاربنتييه ودودنا نوبل 2020؟",
    options: ["كريسبر (CRISPR-Cas9)", "تقنية المجهر الضوئي", "الاستنسال النووي", "التتابع الجيني"],
    correctAnswer: "كريسبر (CRISPR-Cas9)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تتيح قص وتعديل الحمض النووي (DNA) بدقة فائقة"
  },
  {
    id: "gen_b2_079",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أول دولة أتاحت البيتكوين كعملة قانونية ورسمية بجانب الدولار عام 2021؟",
    options: ["السلفادور", "جمهورية أفريقيا الوسطى", "البرازيل", "الأرجنتين"],
    correctAnswer: "السلفادور",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "دولة في أمريكا الوسطى يقودها الرئيس ناييب بوكيلي"
  },
  {
    id: "gen_b2_080",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المفهوم النفسي الذي يشير إلى الانحياز التأكيدي (Confirmation Bias)؟",
    options: ["الميل للبحث عن وتقويم المعلومات بما يوافق القناعات المسبقة", "نسيان المعلومات القديمة", "تأثر القرار بالجماعة", "الشعور بالتفوق البرمجي"],
    correctAnswer: "الميل للبحث عن وتقويم المعلومات بما يوافق القناعات المسبقة",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "تجاهل الأدلة التي تتناقض مع معتقدات الفرد الشخصية"
  },
  {
    id: "gen_b2_081",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أقدم مكتبة عامة ومستمرة في العمل حتى اليوم وتوجد في جامعة القرويين بالمغرب؟",
    options: ["مكتبة القرويين", "مكتبة الإسكندرية", "مكتبة بيت الحكمة", "مكتبة الفاتيكان"],
    correctAnswer: "مكتبة القرويين",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "أسستها فاطمة الفهرية في مدينة فاس بالمغرب عام 859م"
  },
  {
    id: "gen_b2_082",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العلم المسؤول عن دراسة المحيطات والبحار وتضاريس الأحواض المائية وتياراتها؟",
    options: ["علم المحيطات (Oceanography)", "علم الهيدرولوجيا", "علم الجيولوجيا", "علم المناخ"],
    correctAnswer: "علم المحيطات (Oceanography)",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يشمل دراسة المكونات الكيميائية والفيزيائية والبيولوجية للبحار"
  },
  {
    id: "gen_b2_083",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم السلسلة الجبلية الفاصلة طبيعياً بين قارتي أوروبا وآسيا داخل روسيا؟",
    options: ["جبال الأورال", "جبال القوقاز", "جبال الألب", "جبال الكاربات"],
    correctAnswer: "جبال الأورال",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "تمتد من الشمال إلى الجنوب عبر غرب روسيا"
  },
  {
    id: "gen_b2_084",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو الرمز الكيميائي لعنصر الذهب في الجدول الدوري؟",
    options: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: "Au",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "مشتق من الكلمة اللاتينية Aurum وتدعى بريق الشمس"
  },
  {
    id: "gen_b2_085",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أكبر مدينة في العالم من حيث عدد السكان داخل النطاق الإداري الحضري الكلي؟",
    options: ["طوكيو", "دلهي", "شنغهاي", "ساو باولو"],
    correctAnswer: "طوكيو",
    answerImageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
    hint: "تتجاوز المنطقة الحضرية الكبرى لليابان 37 مليون نسمة"
  },
  {
    id: "gen_b2_086",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الكيميائي الروسي الذي نظم العناصر في أول جدول دوري وضبط خصائصها؟",
    options: ["ديمتري منديليف", "أنتوان لافوازييه", "جون دالتون", "هنري موزلي"],
    correctAnswer: "ديمتري منديليف",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "نشر أول نسخته المشهورة للجدول الدوري للعناصر عام 1869"
  },
  {
    id: "gen_b2_087",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي المعاهدة التي نهت رسمياً الحرب العالمية الأولى وفرضت شروطاً قاسية على ألمانيا؟",
    options: ["معاهدة فيرساي", "معاهدة وستفاليا", "اتفاقية يالطا", "معاهدة برست ليتوفسك"],
    correctAnswer: "معاهدة فيرساي",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "وُقعت في قصر فيرساي بالقرب من باريس عام 1919"
  },
  {
    id: "gen_b2_088",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم أكبر بركان نشط في العالم من حيث الحجم والمساحة والموجود في هاواي؟",
    options: ["مونا لوا (Mauna Loa)", "كلاويوي", "بركان كراكاتوا", "بركان كليمنجارو"],
    correctAnswer: "مونا لوا (Mauna Loa)",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "بركان درعي يغطي أكثر من نصف مساحة جزيرة هاواي الكبرى"
  },
  {
    id: "gen_b2_089",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العلم الذي يهتم بدراسة الطيور وسلوكياتها ومواسم هجرتها؟",
    options: ["علم الطيور (Ornithology)", "علم الثدييات", "علم الحشرات", "علم الأحياء البحرية"],
    correctAnswer: "علم الطيور (Ornithology)",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "فرع تخصيصي يدخل تحت علم الحيوان البشري"
  },
  {
    id: "gen_b2_090",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أطول شبكة أنفاق أو قناة مائية عذبة اصطناعية لنقل المياه في العالم وتوجد في ليبيا؟",
    options: ["النهر الصناعي العظيم", "قناة جوليان", "سد أوسوان", "مشروع جنوب الوادي"],
    correctAnswer: "النهر الصناعي العظيم",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "مشروع ضخم ينقل المياه الجوفية العذبة من جنوب الصحراء للشرق والشمال"
  },
  {
    id: "gen_b2_091",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو اسم العضو الوحيد في جسم الإنسان القادر على إعادة تنمية وتجديد نسيجه ذاتياً بعد قطع جزء منه؟",
    options: ["الكبد", "الرئة", "الطحال", "البنكرياس"],
    correctAnswer: "الكبد",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "يستطيع النمو والوصول لحجمه الطبيعي بعد التبرع بجزء منه"
  },
  {
    id: "gen_b2_092",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المنظمة الاقتصادية التي تجمع دول Southeast Asia لتعزيز النمو والتكامل الثقافي؟",
    options: ["رابطة دول جنوب شرق آسيا (آسيان)", "البريكس", "الأوبك", "الاتحاد الأفريقي"],
    correctAnswer: "رابطة دول جنوب شرق آسيا (آسيان)",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تضم 10 دول منها إندونيسيا وماليزيا وسنغافورة وتُعرف بـ ASEAN"
  },
  {
    id: "gen_b2_093",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العلم الذي يدرس طبقات الأرض والصخور التاريخية وتطور تشكل القشرة الأرضية؟",
    options: ["علم طبقات الأرض (Stratigraphy)", "علم الأرصاد", "علم الفلك", "الجيومورفولوجيا"],
    correctAnswer: "علم طبقات الأرض (Stratigraphy)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "فرع أساسي من الجيولوجيا يتتبع تراكم الرسوبيات والصخور"
  },
  {
    id: "gen_b2_094",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المضيق الذي يفصل بين قارة آسيا (روسيا) وقارة أمريكا الشمالية (ألاسكا)؟",
    options: ["مضيق بيرنغ (Bering)", "مضيق البسفور", "مضيق ماجلان", "مضيق دافيس"],
    correctAnswer: "مضيق بيرنغ (Bering)",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يربط بين المحيط المتجمد الشمالي وبحر بيرنغ"
  },
  {
    id: "gen_b2_095",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الجائزة العالمية الشهيرة المخصصة لتكريم أفضل الأعمال في السينما والأفلام سنوياً في هوليوود؟",
    options: ["جائزة الأوسكار (Oscar)", "جائزة الغرامي", "جائزة إيمي", "جائزة البافتا"],
    correctAnswer: "جائزة الأوسكار (Oscar)",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "تمنحها أكاديمية فنون وعلوم الصور المتحركة الأمريكية"
  },
  {
    id: "gen_b2_096",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو المصطلح الفيزيائي الذي يشير إلى سرعة الهروب اللازمة للافلات من جاذبية كوكب أو جرم سماوي؟",
    options: ["سرعة الإفلات (Escape Velocity)", "السرعة المدارية", "السرعة المتجهة", "سرعة الضوء"],
    correctAnswer: "سرعة الإفلات (Escape Velocity)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "تصل بالنسبة للكرة الأرضية إلى نحو 11.2 كم/ثانية"
  },
  {
    id: "gen_b2_097",
    category: "معلومات عامة",
    points: 600,
    questionText: "من هو الطبيب والعالم المسلم صاحب كتاب 'القانون في الطب' الذي ظل مرجعاً رئيسياً لأوروبا لقرون؟",
    options: ["ابن سينا", "الرازي", "ابن النفيس", "الزهراوي"],
    correctAnswer: "ابن سينا",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "يُعرف في الغرب باسم Avicenna وُيلقب بالشيخ الرئيس"
  },
  {
    id: "gen_b2_098",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المعاهدة الدولية التي تحمي طبقة الأوزون عبر الحد من استخدام مركبات الكلوروفلوروكربون (CFCs)؟",
    options: ["بروتوكول مونتريال", "اتفاقية باريس", "معاهدة كيوتو", "مؤتمر كوبنهاغن"],
    correctAnswer: "بروتوكول مونتريال",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "وُقع عام 1987 ونجح في تقليص اتساع ثقب الأوزون"
  },
  {
    id: "gen_b2_099",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أطول دولة في العالم طولاً ممتدة على الشريط الساحلي في أمريكا الجنوبية؟",
    options: ["تشيلي", "الأرجنتين", "البيرو", "البرازيل"],
    correctAnswer: "تشيلي",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تمتد لمسافة تتجاوز 4300 كم بين المحيط الهادئ وجبال الأنديز"
  },
  {
    id: "gen_b2_100",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الجسيم الأولي الذي يحمل القوة الكهرومغناطيسية ويعتبر اللبنة الأساسية للضوء؟",
    options: ["الفوتون (Photon)", "الإلكترون", "النيوترون", "الكوارك"],
    correctAnswer: "الفوتون (Photon)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "كوانتم ضوئي عديم الكتلة ويتنقل بسرعة الضوء في الفراغ"
  }
];
