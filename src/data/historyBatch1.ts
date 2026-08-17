export interface HistoryBatchQuestion {
  id: string;
  category: string;
  points: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  answerImageUrl?: string;
  hint?: string;
}

export const historyBatch1: HistoryBatchQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل) ---
  // ==========================================
  {
    id: "hist_b1_001",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد المسلم الذي فتح الأندلس عام 711 م؟",
    options: ["طارق بن زياد", "عقبة بن نافع", "قتيبة بن مسلم", "موسى بن نصير"],
    correctAnswer: "طارق بن زياد",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "سمي مضيق شهير في جنوب إسبانيا باسمه"
  },
  {
    id: "hist_b1_002",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد المسلم الذي حرر القدس واستعادها في معركة حطين عام 1187 م؟",
    options: ["صلاح الدين الأيوبي", "نور الدين زنكي", "سيف الدين قطز", "الظاهر بيبرس"],
    correctAnswer: "صلاح الدين الأيوبي",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "مؤسس الدولة الأيوبية في مصر والشام"
  },
  {
    id: "hist_b1_003",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الصحابي الجليل الملقب بـ 'سيف الله المسلول'؟",
    options: ["خالد بن الوليد", "علي بن أبي طالب", "حمزة بن عبد المطلب", "عمر بن الخطاب"],
    correctAnswer: "خالد بن الوليد",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "قاد المسلمين في معركتي اليرموك واليمامة"
  },
  {
    id: "hist_b1_004",
    category: "تاريخ",
    points: 200,
    questionText: "من هو أول خلفاء الدولة الأموية واختار دمشق عاصمة لخلافته؟",
    options: ["معاوية بن أبي سفيان", "عبد الملك بن مروان", "الوليد بن عبد الملك", "عمر بن عبد العزيز"],
    correctAnswer: "معاوية بن أبي سفيان",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "كان كاتب الوحي للرسول صلى الله عليه وسلم"
  },
  {
    id: "hist_b1_005",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي المدينة التي اتخذها العباسيون عاصمة لهم وبناها الخليفة أبو جعفر المنصور؟",
    options: ["بغداد", "دمشق", "القاهرة", "الكوفة"],
    correctAnswer: "بغداد",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "سميت قديماً بدار السلام"
  },
  {
    id: "hist_b1_006",
    category: "تاريخ",
    points: 200,
    questionText: "من هو السلطان العثماني الذي فتح مدينة القسطنطينية عام 1453 م؟",
    options: ["محمد الفاتح", "سليمان القانوني", "سليم الأول", "بايزيد الأول"],
    correctAnswer: "محمد الفاتح",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "كان عمره عند الفتح 21 عاماً"
  },
  {
    id: "hist_b1_007",
    category: "تاريخ",
    points: 200,
    questionText: "ما المعركة الشهيرة التي قاد فيها قطز المماليك وهزم المغول عام 1260 م؟",
    options: ["معركة عين جالوت", "معركة حطين", "معركة بلاط الشهداء", "معركة اليرموك"],
    correctAnswer: "معركة عين جالوت",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "صرخ فيها القائد عبارته الشهيرة: واإسلاماه!"
  },
  {
    id: "hist_b1_008",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الخليفة الراشدي الثاني والملقب بـ 'الفاروق'؟",
    options: ["عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان", "علي بن أبي طالب"],
    correctAnswer: "عمر بن الخطاب",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "تأسس في عهده التقويم الهجري"
  },
  {
    id: "hist_b1_009",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد المسلم الذي فتح مصر واستعادتها من الروم البيزنطيين عام 641 م؟",
    options: ["عمرو بن العاص", "سعد بن أبي وقاص", "عقبة بن نافع", "أبو عبيدة بن الجراح"],
    correctAnswer: "عمرو بن العاص",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "بنى مدينة الفسطاط"
  },
  {
    id: "hist_b1_010",
    category: "تاريخ",
    points: 200,
    questionText: "ما اسم العاصمة التاريخية التي اتخذها الفاطميون مركزاً لحكمهم وبناها جوهر الصقلي؟",
    options: ["القاهرة", "القيروان", "المهدية", "دمشق"],
    correctAnswer: "القاهرة",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "بني فيها الجامع الأزهر الشريف"
  },
  {
    id: "hist_b1_011",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الخليفة الذي يلقب بـ 'خامس الخلفاء الراشدين' لعدله وزهده؟",
    options: ["عمر بن عبد العزيز", "عبد الملك بن مروان", "الوليد بن عبد الملك", "سليمان بن عبد الملك"],
    correctAnswer: "عمر بن عبد العزيز",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "حكم الدولة الأموية لمدة سنتين وخمسة أشهر"
  },
  {
    id: "hist_b1_012",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي أول عاصمة في الإسلام بعد الهجرة النبوية الشريفة؟",
    options: ["المدينة المنورة", "مكة المكرمة", "الكوفة", "الدمام"],
    correctAnswer: "المدينة المنورة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "كانت تُسمى قديماً يثرب"
  },
  {
    id: "hist_b1_013",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد المسلم المؤسس لمدينة القيروان في تونس؟",
    options: ["عقبة بن نافع", "حسان بن النعمان", "موسى بن نصير", "طارق بن زياد"],
    correctAnswer: "عقبة بن نافع",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "وصل بفتوحاته حتى المحيط الأطلسي"
  },
  {
    id: "hist_b1_014",
    category: "تاريخ",
    points: 200,
    questionText: "في أي سنة هجرية وقعت غزوة بدر الكبرى؟",
    options: ["2 هـ", "3 هـ", "5 هـ", "8 هـ"],
    correctAnswer: "2 هـ",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "وقعت في شهر رمضان المبارك"
  },
  {
    id: "hist_b1_015",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الصحابي الذي أشار على النبي صلى الله عليه وسلم بحفر الخندق؟",
    options: ["سلمان الفارسي", "أبو عبيدة بن الجراح", "صهيب الرومي", "بلال بن رباح"],
    correctAnswer: "سلمان الفارسي",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "كان يعرف أساليب المكيدة العسكرية لدى الفرس"
  },
  {
    id: "hist_b1_016",
    category: "تاريخ",
    points: 200,
    questionText: "من هو المؤسس الأول للإمبراطورية العثمانية والذي نسِبَت الدولة باسمه؟",
    options: ["عثمان بن أرطغرل", "أورخان غازي", "مراد الأول", "أرطغرل بن سليمان شاه"],
    correctAnswer: "عثمان بن أرطغرل",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "تولى الإمارة بعد وفاة والده أرطغرل"
  },
  {
    id: "hist_b1_017",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد المسلم الذي فتح السند والبلاد المتاخمة للهند في العهد الأموي؟",
    options: ["محمد بن القاسم الثقفي", "قتيبة بن مسلم", "موسى بن نصير", "طارق بن زياد"],
    correctAnswer: "محمد بن القاسم الثقفي",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "حقق انتصاراته قبل أن يبلغ 20 عاماً من عمره"
  },
  {
    id: "hist_b1_018",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد المسلم الذي فتح بلاد ما وراء النهر وسرقند وبخارى؟",
    options: ["قتيبة بن مسلم الباهلي", "محمد بن القاسم", "يزيد بن المهلب", "عقبة بن نافع"],
    correctAnswer: "قتيبة بن مسلم الباهلي",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "وصلت فتوحاته حتى حدود الصين"
  },
  {
    id: "hist_b1_019",
    category: "تاريخ",
    points: 200,
    questionText: "ما المعركة الفاصلة التي خاضها المسلمون ضد الروم البيزنطيين بالشام عام 636 م؟",
    options: ["معركة اليرموك", "معركة القادسية", "معركة نهاوند", "معركة مؤتة"],
    correctAnswer: "معركة اليرموك",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "أنهت الحكم الروماني في الشام"
  },
  {
    id: "hist_b1_020",
    category: "تاريخ",
    points: 200,
    questionText: "في أي سنة هجرية حدثت غزوة فتح مكة؟",
    options: ["8 هـ", "6 هـ", "9 هـ", "10 هـ"],
    correctAnswer: "8 هـ",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "دخل المسلمون مكة ودمرت الأصنام حول الكعبة"
  },
  {
    id: "hist_b1_021",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الصحابي الأول الذي أرسل كأول سفير في الإسلام ليدعو أهل المدينة؟",
    options: ["مصعب بن عمير", "معاذ بن جبل", "عبد الله بن مسعود", "أبو موسى الأشعري"],
    correctAnswer: "مصعب بن عمير",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "استشهد في غزوة أحد"
  },
  {
    id: "hist_b1_022",
    category: "تاريخ",
    points: 200,
    questionText: "من هو أول خلفاء المسلمين الراشدين بعد وفاة النبي صلى الله عليه وسلم؟",
    options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"],
    correctAnswer: "أبو بكر الصديق",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "صاحب النبي في الهجرة النبوية"
  },
  {
    id: "hist_b1_023",
    category: "تاريخ",
    points: 200,
    questionText: "ما اسم الغزوة التي أصيب فيها المسلمون بعد مخالفة الرماة لأوامر النبي؟",
    options: ["غزوة أحد", "غزوة بدر", "غزوة الخندق", "غزوة حنين"],
    correctAnswer: "غزوة أحد",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "وقعت بالقرب من جبل أحد في المدينة"
  },
  {
    id: "hist_b1_024",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد المسلم الملقب بـ 'أسد الله' وهو عم النبي صلى الله عليه وسلم؟",
    options: ["حمزة بن عبد المطلب", "العباس بن عبد المطلب", "جعفر بن أبي طالب", "علي بن أبي طالب"],
    correctAnswer: "حمزة بن عبد المطلب",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "استشهد في غزوة أحد"
  },
  {
    id: "hist_b1_025",
    category: "تاريخ",
    points: 200,
    questionText: "ما اسم المسجد الأول الذي بناه النبي صلى الله عليه وسلم فور وصوله للمدينة المنورة؟",
    options: ["مسجد قباء", "المسجد النبوي", "مسجد القبلتين", "مسجد الفتح"],
    correctAnswer: "مسجد قباء",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "أول مسجد أسس على التقوى"
  },
  {
    id: "hist_b1_026",
    category: "تاريخ",
    points: 200,
    questionText: "ما اسم المدينة الأندلسية التي أصبحت عاصمة الخلافة الأموية بالأندلس واشتهرت بالمكتبات؟",
    options: ["قرطبة", "غرناطة", "إشبيلية", "طليطلة"],
    correctAnswer: "قرطبة",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "بني فيها جامع قرطبة الكبير"
  },
  {
    id: "hist_b1_027",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الصحابي الذي أطلق عليه النبي لقب 'أمين هذه الأمة'؟",
    options: ["أبو عبيدة بن الجراح", "معاذ بن جبل", "سعد بن معاذ", "حذيفة بن اليمان"],
    correctAnswer: "أبو عبيدة بن الجراح",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "قاد الجيوش في فتح الشام"
  },
  {
    id: "hist_b1_028",
    category: "تاريخ",
    points: 200,
    questionText: "في عهد أي خليفة راشدي أنشئ أول أسطول بحري إسلامي؟",
    options: ["عثمان بن عفان", "عمر بن الخطاب", "علي بن أبي طالب", "أبو بكر الصديق"],
    correctAnswer: "عثمان بن عفان",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "أمر واليه معاوية بن أبي سفيان ببنائه"
  },
  {
    id: "hist_b1_029",
    category: "تاريخ",
    points: 200,
    questionText: "ما الدولة التي أطاحت بالحكم الأموي في الشرق وأسست خلافة جديدة عام 750 م؟",
    options: ["الدولة العباسية", "الدولة الفاطمية", "الدولة العثمانية", "دولة السلاجقة"],
    correctAnswer: "الدولة العباسية",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "تنسب إلى العباس عم النبي صلى الله عليه وسلم"
  },
  {
    id: "hist_b1_030",
    category: "تاريخ",
    points: 200,
    questionText: "من هو السلطان المملوكي الذي قاد المسلمين في معركة عين جالوت؟",
    options: ["سيف الدين قطز", "الظاهر بيبرس", "المنصور قلاوون", "عز الدين أيبك"],
    correctAnswer: "سيف الدين قطز",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "هزم التتار وحد حدود مصر والشام"
  },
  {
    id: "hist_b1_031",
    category: "تاريخ",
    points: 200,
    questionText: "ما اسم المجمع العلمي الكبير الذي أنشأه العباسيون في بغداد للترجمة والعلوم؟",
    options: ["بيت الحكمة", "دار العلم", "الجامع الأزهر", "المدرسة النظامية"],
    correctAnswer: "بيت الحكمة",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "ازدهر جداً في عهد الخليفة المأمون"
  },
  {
    id: "hist_b1_032",
    category: "تاريخ",
    points: 200,
    questionText: "من هو القائد الأموي الذي خاض معركة بلاط الشهداء في فرنسا عام 732 م؟",
    options: ["عبد الرحمن الغافقي", "عنبسة بن سحيم", "طارق بن زياد", "موسى بن نصير"],
    correctAnswer: "عبد الرحمن الغافقي",
    answerImageUrl: "https://images.unsplash.com/photo-1508873696983-2df515122519?w=800",
    hint: "استشهد في المعركة وسط فرنسا"
  },
  {
    id: "hist_b1_033",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي القلعة الشهيرة بالقاهرة التي بناها صلاح الدين الأيوبي لتكون مقراً للحكم؟",
    options: ["قلعة صلاح الدين", "قلعة قايتباي", "قلعة حلب", "قلعة الكرك"],
    correctAnswer: "قلعة صلاح الدين",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "تقع على جبل المقطم بالقاهرة"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط) ---
  // ==========================================
  {
    id: "hist_b1_034",
    category: "تاريخ",
    points: 400,
    questionText: "من هو القائد المسلم الملقب بـ 'صقر قريش' والذي أسس الإمارة الأموية بالأندلس؟",
    options: ["عبد الرحمن الداخل", "عبد الرحمن الناصر", "هشام بن عبد الملك", "المعتمد بن عباد"],
    correctAnswer: "عبد الرحمن الداخل",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "فرّ من بطش العباسيين ودخل الأندلس بمفرده"
  },
  {
    id: "hist_b1_035",
    category: "تاريخ",
    points: 400,
    questionText: "من هو السلطان السلجوقي الذي انتصر على البيزنطيين في معركة ملاذكرد 1071 م؟",
    options: ["ألب أرسلان", "طغرل بك", "ملكشاه", "سنجر"],
    correctAnswer: "ألب أرسلان",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "معنى اسمه بالتركية 'الأسد الشجاع'"
  },
  {
    id: "hist_b1_036",
    category: "تاريخ",
    points: 400,
    questionText: "ما اسم القائد الزنكي الذي كان معلماً وموجهاً لصلاح الدين الأيوبي ووحّد جبهة الشام؟",
    options: ["نور الدين محمود زنكي", "عماد الدين زنكي", "سيف الدين غازي", "أسد الدين شيركوه"],
    correctAnswer: "نور الدين محمود زنكي",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "جهّز الجيوش وبنى المدارس لتحرير بيت المقدس"
  },
  {
    id: "hist_b1_037",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الأمير المرابطي الذي قاد معركة الزلاقة وهزم القشتاليين في الأندلس؟",
    options: ["يوسف بن تاشفين", "علي بن يوسف", "أبو بكر بن عمر", "يعقوب المنصور"],
    correctAnswer: "يوسف بن تاشفين",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "مؤسس مدينة مراكش وقائد دولة المرابطين"
  },
  {
    id: "hist_b1_038",
    category: "تاريخ",
    points: 400,
    questionText: "من هو قائد جيش المسلمين في معركة القادسية ضد الإمبراطورية الفارسية؟",
    options: ["سعد بن أبي وقاص", "خالد بن الوليد", "النعمان بن مقرن", "القعقاع بن عمرو"],
    correctAnswer: "سعد بن أبي وقاص",
    answerImageUrl: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=800",
    hint: "خال النبي صلى الله عليه وسلم وأحد العشرة المبشرين بالجنة"
  },
  {
    id: "hist_b1_039",
    category: "تاريخ",
    points: 400,
    questionText: "في عهد أي خليفة عباسي بلغت بغداد أوج عظمتها وشاع ذكرها عالمياً؟",
    options: ["هارون الرشيد", "المأمون", "أبو جعفر المنصور", "المعتصم بالله"],
    correctAnswer: "هارون الرشيد",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "خاطب الغمامة: أمتري حيث شئتِ فسوف يأتي إليّ خراجُك"
  },
  {
    id: "hist_b1_040",
    category: "تاريخ",
    points: 400,
    questionText: "ما اسم الخليفة الأموي الذي أمر بإنشاء مسجد قبة الصخرة المشرفة في القدس؟",
    options: ["عبد الملك بن مروان", "الوليد بن عبد الملك", "سليمان بن عبد الملك", "عمر بن عبد العزيز"],
    correctAnswer: "عبد الملك بن مروان",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "قام بسك أول عملة إسلامية خالصة"
  },
  {
    id: "hist_b1_041",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الخليفة العباسي الذي فتح مدينة عمورية استجابة لصرخة امرأة نادت 'واإسلاماه'؟",
    options: ["المعتصم بالله", "المأمون", "الواثق بالله", "الرشيد"],
    correctAnswer: "المعتصم بالله",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "ابن هارون الرشيد واشتهر بالقوة العسكرية"
  },
  {
    id: "hist_b1_042",
    category: "تاريخ",
    points: 400,
    questionText: "من هو المؤسس الفعلي لدولة الموحدين في المغرب والأندلس؟",
    options: ["عبد المؤمن بن علي", "ابن تومرت", "يعقوب المنصور", "يوسف بن عبد المؤمن"],
    correctAnswer: "عبد المؤمن بن علي",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "استطاع توحيد المغرب العربي والأندلس"
  },
  {
    id: "hist_b1_043",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الخليفة الراشدي الذي جمع القرآن الكريم في مصحف موحد وشامل؟",
    options: ["عثمان بن عفان", "أبو بكر الصديق", "عمر بن الخطاب", "علي بن أبي طالب"],
    correctAnswer: "عثمان بن عفان",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "الملقب بـ ذي النورين"
  },
  {
    id: "hist_b1_044",
    category: "تاريخ",
    points: 400,
    questionText: "من هو السلطان العثماني الملقب بـ 'القانوني' ووصلت فتوحاته لأسوار فيينا؟",
    options: ["سليمان القانوني", "سليم الأول", "أحمد الأول", "محمود الثاني"],
    correctAnswer: "سليمان القانوني",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "أطول سلاطين بني عثمان حكماً"
  },
  {
    id: "hist_b1_045",
    category: "تاريخ",
    points: 400,
    questionText: "ما المعركة التي أطلقت عليها المصادر الإسلامية لقب 'فتح الفتوح' لأنها أنهت حكم الساسانيين؟",
    options: ["معركة نهاوند", "معركة القادسية", "معركة جلولاء", "معركة الجسر"],
    correctAnswer: "معركة نهاوند",
    answerImageUrl: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=800",
    hint: "وقعت عام 21 هـ وقادها النعمان بن مقرن"
  },
  {
    id: "hist_b1_046",
    category: "تاريخ",
    points: 400,
    questionText: "من هو القائد المملوكي الذي خلف قطز في الحكم ويعتبر المؤسس الحقيقي لدولة المماليك البحرية؟",
    options: ["الظاهر بيبرس", "المنصور قلاوون", "الناصر محمد بن قلاوون", "الأشرف خليل"],
    correctAnswer: "الظاهر بيبرس",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "بنى الجامع والمدرسة الشهيرة بالقاهرة"
  },
  {
    id: "hist_b1_047",
    category: "تاريخ",
    points: 400,
    questionText: "من هو ملك الدولة الغزنوية الذي قاد فتوحات واسعة ونشر الإسلام في الهند؟",
    options: ["محمود الغزنوي", "سبكتكين", "مسعود الغزنوي", "إبراهيم الغزنوي"],
    correctAnswer: "محمود الغزنوي",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "لقب بـ يمين الدولة وكان حامياً للعلوم"
  },
  {
    id: "hist_b1_048",
    category: "تاريخ",
    points: 400,
    questionText: "من هو السلطان الذي ألغى فرقة الانكشارية في الجيش العثماني عام 1826 م؟",
    options: ["محمود الثاني", "عبد الحميد الثاني", "سليم الثالث", "عبد المجيد الأول"],
    correctAnswer: "محمود الثاني",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "سميت الحادثة بـ الواقعة الخيرية"
  },
  {
    id: "hist_b1_049",
    category: "تاريخ",
    points: 400,
    questionText: "ما اسم السلسلة الجبلية الفاصلة بين إسبانيا وفرنسا التي عبرها المسلمون بالأندلس؟",
    options: ["جبال البرانس (البرتات)", "جبال أطلس", "جبال الألب", "جبال القوقاز"],
    correctAnswer: "جبال البرانس (البرتات)",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "تقع الحدود الطبيعية الفاصلة بين فرنسا وإسبانيا"
  },
  {
    id: "hist_b1_050",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الصحابي الجليل الملقب بـ 'حوار رسول الله' وخوضه البطولات في المغازي؟",
    options: ["الزبير بن العوام", "طلحة بن عبيد الله", "سعد بن معاذ", "عبد الرحمن بن عوف"],
    correctAnswer: "الزبير بن العوام",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "أحد العشرة المبشرين بالجنة وابن صفية عمت النبي"
  },
  {
    id: "hist_b1_051",
    category: "تاريخ",
    points: 400,
    questionText: "ما اسم المعركة التي أدت لسقوط الدولة الأموية وقيام الدولة العباسية عام 750 م؟",
    options: ["معركة الزاب", "معركة عين جالوت", "معركة مرج راهط", "معركة صفين"],
    correctAnswer: "معركة الزاب",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "وقعت بالقرب من نهر الزاب الكبير في العراق"
  },
  {
    id: "hist_b1_052",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الخليفة العباسي الذي بنى مدينة 'سامراء' واتخذها عاصمة مؤقتة؟",
    options: ["المعتصم بالله", "المأمون", "الواثق بالله", "المتوكل على الله"],
    correctAnswer: "المعتصم بالله",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "جلب المماليك الأتراك وجعل لهم عاصمة جديدة"
  },
  {
    id: "hist_b1_053",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي الدولة الملوكية التي حكمت الشام ومصر وعرفت بدولة 'المماليك البرجية'؟",
    options: ["المماليك الجراكسة", "المماليك البحرية", "الدولة المظفرية", "الدولة الطولونية"],
    correctAnswer: "المماليك الجراكسة",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "اتخذوا من أبراج القلعة مقراً لسكنهم وحكمهم"
  },
  {
    id: "hist_b1_054",
    category: "تاريخ",
    points: 400,
    questionText: "من هو السلطان السلجوقي الذي تلقب بـ 'سلطان الشرق والغرب' بعد دخوله بغداد؟",
    options: ["طغرل بك", "ألب أرسلان", "ملكشاه", "بركياروق"],
    correctAnswer: "طغرل بك",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "أنهى سيطرة البويهيين على بغداد 1055 م"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب) ---
  // ==========================================
  {
    id: "hist_b1_055",
    category: "تاريخ",
    points: 600,
    questionText: "ما المعركة المظفرة التي انتصر فيها يعقوب المنصور الموحدي على القشتاليين بالأندلس عام 1195 م؟",
    options: ["معركة الأرك", "معركة العقاب", "معركة الزلاقة", "معركة خريش"],
    correctAnswer: "معركة الأرك",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "بنيت قصبة الرباط تخليداً لهذا النصر العظيم"
  },
  {
    id: "hist_b1_056",
    category: "تاريخ",
    points: 600,
    questionText: "من هو آخر سلاطين دولة المماليك في مصر والذي أعدم عقب معركة الريدانية 1517 م؟",
    options: ["طومان باي", "قنصوة الغوري", "الأشرف طومان باي", "سيف الدين جقمق"],
    correctAnswer: "طومان باي",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "عُلّق على باب زويلة بالقاهرة بعد مقاومتهم"
  },
  {
    id: "hist_b1_057",
    category: "تاريخ",
    points: 600,
    questionText: "من هو المؤسس الحقيقي للدولة المغولية المسلمة في الهند عام 1526 م؟",
    options: ["ظهير الدين بابر", "أكبر الأعظم", "أورنكزيب", "شاه جيهان"],
    correctAnswer: "ظهير الدين بابر",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "انتصر في معركة بانيپات الشهيرة"
  },
  {
    id: "hist_b1_058",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الإمبراطور المغولي بالهند الذي بنى ضريح 'تاج محل' لزوجته ممتاز محل؟",
    options: ["شاه جيهان", "أكبر", "جهانكير", "أورنكزيب"],
    correctAnswer: "شاه جيهان",
    answerImageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    hint: "يُعد ضريحه إحدى عجائب الدنيا الحديثة"
  },
  {
    id: "hist_b1_059",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الإمبراطور المغولي في الهند المعروف بتقواه وتمسكه بتطبيق الشريعة وتوسيع الدولة؟",
    options: ["أورنكزيب عالمكير", "شاه جيهان", "بابر", "همتيون"],
    correctAnswer: "أورنكزيب عالمكير",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "بلغت الدولة المغولية بالهند أقصى اتساع في عهده"
  },
  {
    id: "hist_b1_060",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان المملوكي الذي استطاع طرد الصليبيين نهائياً من عكا 1291 م؟",
    options: ["الأشرف خليل بن قلاوون", "المنصور قلاوون", "الظاهر بيبرس", "قطز"],
    correctAnswer: "الأشرف خليل بن قلاوون",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "أنهى الوجود الصليبي بالكامل من بلاد الشام"
  },
  {
    id: "hist_b1_061",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم المعركة التي هزمت فيها القوات العثمانية الصفويين واستولت على تباديز 1514 م؟",
    options: ["معركة جالديران", "معركة مرج دابق", "معركة الريدانية", "معركة موهاكس"],
    correctAnswer: "معركة جالديران",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "قاد الجيوش العثمانية فيها السلطان سليم الأول"
  },
  {
    id: "hist_b1_062",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي المعركة البحرية الشهيرة التي وقعت عام 1571 م وأوقفت السيادة العثمانية بالبحر المتوسط؟",
    options: ["معركة ليبانتو", "معركة نافارين", "معركة ذات السلاسل", "معركة أكتيوم"],
    correctAnswer: "معركة ليبانتو",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "وقعت بين الأسطول العثماني والحلف الأوربي المقدّس"
  },
  {
    id: "hist_b1_063",
    category: "تاريخ",
    points: 600,
    questionText: "من هو مؤسس دولة المرابطين بالصحراء والمغرب والذي يرجع إليه الفضل في جمع القبائل؟",
    options: ["عبد الله بن ياسين", "يوسف بن تاشفين", "أبو بكر بن عمر اللمتوني", "يحيى بن إبراهيم"],
    correctAnswer: "عبد الله بن ياسين",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "الداعية والفقيه الذي أسس 'الرباط' لتعليم الدين"
  },
  {
    id: "hist_b1_064",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد الأندلسي الشهير ورئيس الوزراء الذي خاض أكثر من 50 معركة ولم يهزم؟",
    options: ["الحاجب المنصور (محمد بن أبي عامر)", "المعتمد بن عباد", "ابن حزم", "عبد الرحمن الناصر"],
    correctAnswer: "الحاجب المنصور (محمد بن أبي عامر)",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "بلغت الدولة الأموية بالأندلس ذروة قوتها في عهده"
  },
  {
    id: "hist_b1_065",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد المسلم الذي قاد الأسطول الأغلبي وفتح جزيرة صقلية عام 827 م؟",
    options: ["أسد بن الفرات", "زيادة الله الأول", "إبراهيم بن الأغلب", "خفاجة بن سفيان"],
    correctAnswer: "أسد بن الفرات",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "كان عالماً وقاضياً مالكياً وقاد الجيش في كبره"
  },
  {
    id: "hist_b1_066",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم المعركة الخاطفة التي انتصر فيها السلطان العثماني سليمان القانوني بالمجر 1526 م؟",
    options: ["معركة موهاكس", "معركة نيقوبوليس", "معركة فارنا", "معركة كوزوفو"],
    correctAnswer: "معركة موهاكس",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "حسمت المعركة في ساعتين فقط"
  },
  {
    id: "hist_b1_067",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم القائد العثماني الشهير الملقب بـ 'خير الدين بربروسا' أمير أسطول المتوسط؟",
    options: ["خضر بن يعقوب", "عروج بربروسا", "طرغود رئيس", "بيالي باشا"],
    correctAnswer: "خضر بن يعقوب",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "انتصر في معركة بوزفيرة البحرية عام 1538 م"
  },
  {
    id: "hist_b1_068",
    category: "تاريخ",
    points: 600,
    questionText: "من هو مؤسس الدولة الفاطمية والذي أعلن خلافته في المغرب عام 909 م؟",
    options: ["عبيد الله المهدي", "المعز لدين الله", "المنصور بالله", "القائم بأمر الله"],
    correctAnswer: "عبيد الله المهدي",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "اتخذ من مدينة المهدية بتونس عاصمة أولى لدولته"
  },
  {
    id: "hist_b1_069",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد الأندلسي الذي أنشأ مدينة الزهراء العظيمة قرب قرطبة؟",
    options: ["عبد الرحمن الناصر", "عبد الرحمن الداخل", "الحكم المستنصر", "الحاجب المنصور"],
    correctAnswer: "عبد الرحمن الناصر",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "أول من أعلن الخلافة الأموية الرسمية بالأندلس 929 م"
  },
  {
    id: "hist_b1_070",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي المعركة التاريخية الشهيرة في المغرب التي سميت بـ 'معركة الملوك الثلاثة' عام 1578 م؟",
    options: ["معركة وادي المخازن", "معركة الزلاقة", "معركة الأرك", "معركة العقاب"],
    correctAnswer: "معركة وادي المخازن",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "سقط فيها ملك البرتغال والملكين المغربيين"
  },
  {
    id: "hist_b1_071",
    category: "تاريخ",
    points: 600,
    questionText: "من هو المؤسس الأول للدولة الطولونية في مصر والشام واستقل بها عن العباسيين؟",
    options: ["أحمد بن طولون", "خمارويه", "هارون بن خمارويه", "شيبان بن أحمد"],
    correctAnswer: "أحمد بن طولون",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "بنى جامعه الشهير بـ القطائع بالقاهرة"
  },
  {
    id: "hist_b1_072",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان العثماني الملقب بـ 'ياووز' (الصارم) وضم الشام ومصر ومكة للحكم العثماني؟",
    options: ["سليم الأول", "سليمان القانوني", "بايزيد الثاني", "مراد الرابع"],
    correctAnswer: "سليم الأول",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "نقل الخلافة الإسلامية رسمياً لإسطنبول"
  },
  {
    id: "hist_b1_073",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي الدولة التي أسسها إسماعيل الصفوي في إيران وجعل المذهب الشيعي رسمياً لها 1501 م؟",
    options: ["الدولة الصفوية", "الدولة الأفشارية", "الدولة القاجارية", "الدولة الزندية"],
    correctAnswer: "الدولة الصفوية",
    answerImageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
    hint: "كانت عاصمتها تباديز ثم قزوين ثم أصفهان"
  },
  {
    id: "hist_b1_074",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الأمير المسلم الذي أسس مملكة بني نصر (مملكة غرناطة) آخر دولة بالأندلس؟",
    options: ["محمد بن يوسف بن نصر (ابن الأحمر)", "يوسف الأول", "محمد الخامس", "أبو عبد الله الصغير"],
    correctAnswer: "محمد بن يوسف بن نصر (ابن الأحمر)",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "اتخذ من الحمراء مقراً لحكمه ورعايته"
  },
  {
    id: "hist_b1_075",
    category: "تاريخ",
    points: 600,
    questionText: "من هو آخر ملوك الأندلس الذي سلم مفاتيح غرناطة للملكين الكاثوليكيين عام 1492 م؟",
    options: ["أبو عبد الله محمد الصغير", "أبو الحسن علي", "محمد بن سعد (الزغل)", "يوسف الخامس"],
    correctAnswer: "أبو عبد الله محمد الصغير",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "قالت له أمه: ابكِ كالنساء ملكاً لم تحافظ عليه كالرجال"
  },
  {
    id: "hist_b1_076",
    category: "تاريخ",
    points: 600,
    questionText: "ما المعركة التاريخية الشديدة التي استشهد فيها ثلاثة قادة للمسلمين بالأردن؟",
    options: ["معركة مؤتة", "معركة أجنادين", "معركة اليرموك", "معركة فحل"],
    correctAnswer: "معركة مؤتة",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "استشهد فيها زيد بن حارثة وجعفر الطيار وابن رواحة"
  },
  {
    id: "hist_b1_077",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم المعركة البحرية التي خاضها المماليك ضد البرتغاليين بالهند عام 1509 م؟",
    options: ["معركة ديو البحرية", "معركة شول البحرية", "معركة الفنار", "معركة باب المندب"],
    correctAnswer: "معركة ديو البحرية",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "قاد الأسطول المملوكي فيها الأمير حسين الكردي"
  },
  {
    id: "hist_b1_078",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان العثماني الذي وقع في الأسر لدى تيمورلنك المغولي بعد معركة أنقرة 1402 م؟",
    options: ["بايزيد الأول (الصاعقة)", "مراد الثاني", "أورخان", "محمد الأول"],
    correctAnswer: "بايزيد الأول (الصاعقة)",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "عرف بلقب الصاعقة لسرعة تحركات جيوشه"
  },
  {
    id: "hist_b1_079",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم المعركة التي هزمت فيها دولة الموحدين بالأندلس وكانت بداية النهاية لهم 1212 م؟",
    options: ["معركة العقاب (Las Navas de Tolosa)", "معركة الأرك", "معركة الزلاقة", "معركة خريش"],
    correctAnswer: "معركة العقاب (Las Navas de Tolosa)",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "أدت لضعف الموحدين وسقوط مدن الأندلس"
  },
  {
    id: "hist_b1_080",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الخليفة العباسي الأخير في بغداد والذي قتله هولاكو المغولي 1258 م؟",
    options: ["المستعصم بالله", "المستنصر بالله", "الظاهر بأمر الله", "الناصر لدين الله"],
    correctAnswer: "المستعصم بالله",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "سقطت بسقوطه الخلافة العباسية في بغداد"
  },
  {
    id: "hist_b1_081",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم السلالة التي حكمت غرناطة وكانت تحفتها المعمارية قصور الحمراء؟",
    options: ["بنو نصر (النصريون)", "بنو عباد", "بنو هود", "بنو ذي النون"],
    correctAnswer: "بنو نصر (النصريون)",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "دام حكمهم لغرناطة أكثر من 250 سنة"
  },
  {
    id: "hist_b1_082",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد المسلم الذي قاد ثورة عارمة ضد الاستعمار الإيطالي في ليبيا لأكثر من 20 عاماً؟",
    options: ["عمر المختار", "أحمد الشريف السنوسي", "سليمان الباروني", "رمضان السويحلي"],
    correctAnswer: "عمر المختار",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "الملقب بـ 'شيخ الشهداء' وأسد الصحراء"
  },
  {
    id: "hist_b1_083",
    category: "تاريخ",
    points: 600,
    questionText: "ما المعركة البحرية الشهيرة التي انتصر فيها المسلمون بالبحر المتوسط عام 655 م؟",
    options: ["معركة ذات الصواري", "معركة ذات السلاسل", "معركة بلاط الشهداء", "معركة سبتة"],
    correctAnswer: "معركة ذات الصواري",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "سميت بذات الصواري لكثرة صواري السفن المشاركة"
  },
  {
    id: "hist_b1_084",
    category: "تاريخ",
    points: 600,
    questionText: "من هو المعمار العثماني الشهير الذي بنى جامع السليمانية ومئات المنشآت؟",
    options: ["معمار سنان", "سدفقار داود أغا", "محمد أغا", "خير الدين"],
    correctAnswer: "معمار سنان",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "ينسب إليه أوج العمارة العثمانية"
  },
  {
    id: "hist_b1_085",
    category: "تاريخ",
    points: 600,
    questionText: "ما المعركة الحاسمة التي انتصر فيها المماليك بمصر بقيادة الناصر محمد بن قلاوون على المغول 1303 م؟",
    options: ["معركة شقحب (مرج الصفر)", "معركة عين جالوت", "معركة حمص", "معركة غزة"],
    correctAnswer: "معركة شقحب (مرج الصفر)",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "حضرها الإمام ابن تيمية وأفتى بجواز الفطر للقتال"
  },
  {
    id: "hist_b1_086",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان العثماني الذي بنى الخط الحديدي الحجازي ورفض التفريط بفلسطين؟",
    options: ["عبد الحميد الثاني", "عبد العزيز الأول", "عبد المجيد الأول", "مراد الخامس"],
    correctAnswer: "عبد الحميد الثاني",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "آخر السلاطين العثمانيين الفعليين"
  },
  {
    id: "hist_b1_087",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي القصبة والمملكة الأندلسية التي دافع عنها بنو ذي النون وحكموا إقليمها الجبلي؟",
    options: ["طليطلة", "بلنسية", "مرسية", "سرقسطة"],
    correctAnswer: "طليطلة",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "كانت من أوائل القواعد الكبرى التي سقطت بالأندلس 1085 م"
  },
  {
    id: "hist_b1_088",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد العثماني الذي استعاد اليمن وحسم التمردات فيها بعهد سليم الثاني؟",
    options: ["سنان باشا", "لالة مصطفى باشا", "سليمان باشا الخادم", "فخري باشا"],
    correctAnswer: "سنان باشا",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "لقب بـ فاتح اليمن وتونس"
  },
  {
    id: "hist_b1_089",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم القائد المسلم الذي أنشأ دار الصناعة (ترسانة السفن) في الروضة بمصر بعهد بني أمية؟",
    options: ["قرة بن شريك", "عبد العزيز بن مروان", "حسان بن النعمان", "موسى بن نصير"],
    correctAnswer: "حسان بن النعمان",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "فاتح أفريقية والمؤسس لمدينة تونس ودار صناعتها"
  },
  {
    id: "hist_b1_090",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان السلجوقي الذي امتدت الدولة بعهده من حدود الصين شرقاً إلى الشام غرباً مع وزيره نظام الملك؟",
    options: ["ملكشاه", "ألب أرسلان", "طغرل بك", "سنجر"],
    correctAnswer: "ملكشاه",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "ابن ألب أرسلان وبلغت الدولة أقصى اتساع في عهده"
  },
  {
    id: "hist_b1_091",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم القائد المغربي المسلم الذي قاد الثورة ضد الإسبان والفرنسيين بفرسان الريف في معركة أنوال 1921 م؟",
    options: ["عبد الكريم الخطابي", "الشريف أمزيان", "أحمد الهيبة", "محمد المقري"],
    correctAnswer: "عبد الكريم الخطابي",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "أسس جمهورية الريف واشتهر بـ أسد الريف"
  },
  {
    id: "hist_b1_092",
    category: "تاريخ",
    points: 600,
    questionText: "من هو العالم المسلم الفلكي والرياضي الذي كلّفه المأمون بقياس قياس محيط الأرض ببيت الحكمة؟",
    options: ["الخوارزمي / بنو موسى", "البروني", "ابن الهيثم", "الكندي"],
    correctAnswer: "الخوارزمي / بنو موسى",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "مؤسس علم الجبر ومصمم زيج السند هند"
  },
  {
    id: "hist_b1_093",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم المرفأ والأكاديمية البحرية العمانية التي انطلقت منها الفتوحات بشرق أفريقيا؟",
    options: ["مسقط / صور", "صحار", "نزوى", "صلالة"],
    correctAnswer: "مسقط / صور",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "اشتهرت بصناعة السفن العمانية العملاقة"
  },
  {
    id: "hist_b1_094",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد الذي فتح مدينة فاس بالمغرب وأسس الدولة الإدريسية عام 788 م؟",
    options: ["إدريس بن عبد الله (إدريس الأول)", "إدريس الثاني", "يحيى بن إدريس", "علي بن عمر"],
    correctAnswer: "إدريس بن عبد الله (إدريس الأول)",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "مؤسس أول دولة إسلامية مستقلة بالمغرب الأقصى"
  },
  {
    id: "hist_b1_095",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان الغوري في الهند الذي فتح دلهي وأسس سلطنة دلهي الإسلامية عام 1192 م؟",
    options: ["محمد الغوري", "قطب الدين أيبك", "التتمش", "بلبن"],
    correctAnswer: "محمد الغوري",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "انتصر في معركة تاراين الثانية وفتح شمال الهند"
  },
  {
    id: "hist_b1_096",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد الملوكي بـ الهندس الذي بنى قطب منار الشهير في دلهي؟",
    options: ["قطب الدين أيبك", "التتمش", "علاء الدين الخلجي", "فيروز شاه"],
    correctAnswer: "قطب الدين أيبك",
    answerImageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    hint: "أول سلاطين مماليك الهند"
  },
  {
    id: "hist_b1_097",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم المعركة التي أوقفت زحف المماليك ضد الخوارزميين بعهد الملك الصالح أيوب؟",
    options: ["معركة غزة (حربية)", "معركة المنصورة", "معركة الشقحب", "معركة حمص"],
    correctAnswer: "معركة غزة (حربية)",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "أطلقت عليها المصادر اسم 'حطين الثانية'"
  },
  {
    id: "hist_b1_098",
    category: "تاريخ",
    points: 600,
    questionText: "من هو المصلح والقائد العثماني الملقب بـ 'فخر الدين باشا' المدافع عن المدينة المنورة بالحرب العالمية الأولى؟",
    options: ["فخر الدين باشا", "جمال باشا", "أنور باشا", "توفيق باشا"],
    correctAnswer: "فخر الدين باشا",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "الملقب بـ نمر الصحراء لحمايته المسجد النبوي"
  },
  {
    id: "hist_b1_099",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم العاصمة السلجوقية بالأناضول التي اتخذها سلاجقة الروم مقراً لهم قبل القسطنطينية؟",
    options: ["قونية / نيقية", "بورصة", "أدرنة", "سيواس"],
    correctAnswer: "قونية / نيقية",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "اشتهرت بكونها مركز جلال الدين الرومي"
  },
  {
    id: "hist_b1_100",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد العسكري المسلم الذي فتح جزر البليار (ميورقة ومنورقة) في الأندلس؟",
    options: ["عصام الخولاني", "موسى بن نصير", "عبد الرحمن الناصر", "منذر بن سعيد"],
    correctAnswer: "عصام الخولاني",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "ضم الأرخبيل البحر أوسطي لحكم أمير قرطبة عام 903 م"
  }
];
