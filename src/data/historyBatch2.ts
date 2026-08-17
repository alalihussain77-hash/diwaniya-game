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

export const historyBatch2: HistoryBatchQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل) ---
  // ==========================================
  {
    id: "hist_b2_001",
    category: "تاريخ",
    points: 200,
    questionText: "ما هو اللقب الذي عُرف به النبي محمد صلى الله عليه وسلم قبل البعثة؟",
    options: ["الصادق الأمين", "الفاروق", "الصدّيق", "سيف الله"],
    correctAnswer: "الصادق الأمين",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "لقب يعكس أمانته وصدقه بين قريش"
  },
  {
    id: "hist_b2_002",
    category: "تاريخ",
    points: 200,
    questionText: "من هي أول زوجات النبي صلى الله عليه وسلم وأول من آمن به من النساء؟",
    options: ["عائشة بنت أبي بكر", "خديجة بنت خويلد", "حفصة بنت عمر", "أم سلمة"],
    correctAnswer: "خديجة بنت خويلد",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "ساندته بمالها ونفسها في بداية الدعوة"
  },
  {
    id: "hist_b2_003",
    category: "تاريخ",
    points: 200,
    questionText: "في أي مدينة وُلد النبي محمد صلى الله عليه وسلم؟",
    options: ["المدينة المنورة", "مكة المكرمة", "الطائف", "القدس"],
    correctAnswer: "مكة المكرمة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "بها الكعبة المشرفة"
  },
  {
    id: "hist_b2_004",
    category: "تاريخ",
    points: 200,
    questionText: "من هو مؤذن الرسول صلى الله عليه وسلم؟",
    options: ["بلال بن رباح", "عبد الله بن أم مكتوم", "سعد بن أبي وقاص", "عمار بن ياسر"],
    correctAnswer: "بلال بن رباح",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "صحابي جليل عُذب في الله وصبر"
  },
  {
    id: "hist_b2_005",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي القبلة الأولى للمسلمين قبل تحويلها إلى الكعبة المشرفة؟",
    options: ["المسجد الحرام", "المسجد النبوي", "المسجد الأقصى", "مسجد قباء"],
    correctAnswer: "المسجد الأقصى",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "يقع في مدينة القدس"
  },
  {
    id: "hist_b2_006",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الصحابي الذي تستحي منه الملائكة، وتزوج اثنتين من بنات النبي؟",
    options: ["عثمان بن عفان", "علي بن أبي طالب", "عمر بن الخطاب", "أبو بكر الصديق"],
    correctAnswer: "عثمان بن عفان",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "الخليفة الراشدي الثالث"
  },
  {
    id: "hist_b2_007",
    category: "تاريخ",
    points: 200,
    questionText: "ما هو الاسم القديم للمدينة المنورة قبل هجرة النبي إليها؟",
    options: ["بكة", "يثرب", "الطائف", "خيبر"],
    correctAnswer: "يثرب",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "ورد هذا الاسم في القرآن الكريم في سورة الأحزاب"
  },
  {
    id: "hist_b2_008",
    category: "تاريخ",
    points: 200,
    questionText: "من هي مرضعة النبي صلى الله عليه وسلم التي قضى طفولته في باديتها؟",
    options: ["حليمة السعدية", "ثويبة", "أم أيمن", "فاطمة بنت أسد"],
    correctAnswer: "حليمة السعدية",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "من قبيلة بني سعد"
  },
  {
    id: "hist_b2_009",
    category: "تاريخ",
    points: 200,
    questionText: "كم عدد الخلفاء الراشدين؟",
    options: ["ثلاثة", "أربعة", "خمسة", "ستة"],
    correctAnswer: "أربعة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "أبو بكر، عمر، عثمان، علي"
  },
  {
    id: "hist_b2_010",
    category: "تاريخ",
    points: 200,
    questionText: "في أي شهر هجري نزل القرآن الكريم على النبي صلى الله عليه وسلم؟",
    options: ["رجب", "شعبان", "رمضان", "محرم"],
    correctAnswer: "رمضان",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "شهر الصيام"
  },
  {
    id: "hist_b2_011",
    category: "تاريخ",
    points: 200,
    questionText: "من هو كافل النبي صلى الله عليه وسلم بعد وفاة جده عبد المطلب؟",
    options: ["أبو طالب", "العباس", "حمزة", "أبو لهب"],
    correctAnswer: "أبو طالب",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "عمه ووالد علي بن أبي طالب"
  },
  {
    id: "hist_b2_012",
    category: "تاريخ",
    points: 200,
    questionText: "ما اسم الغار الذي كان يتعبد فيه النبي صلى الله عليه وسلم ونزل عليه الوحي فيه؟",
    options: ["غار ثور", "غار حراء", "غار أحد", "غار سلع"],
    correctAnswer: "غار حراء",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "يقع في جبل النور بمكة"
  },
  {
    id: "hist_b2_013",
    category: "تاريخ",
    points: 200,
    questionText: "من هو أول من آمن بالرسول صلى الله عليه وسلم من الصبيان (الأطفال)؟",
    options: ["زيد بن حارثة", "علي بن أبي طالب", "عبد الله بن عباس", "أسامة بن زيد"],
    correctAnswer: "علي بن أبي طالب",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "ابن عم النبي"
  },
  {
    id: "hist_b2_014",
    category: "تاريخ",
    points: 200,
    questionText: "إلى أين كانت الهجرة الأولى للمسلمين هرباً من أذى قريش؟",
    options: ["المدينة المنورة", "الحبشة", "اليمن", "الشام"],
    correctAnswer: "الحبشة",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "قال النبي عنها: إن بها ملكاً لا يُظلم عنده أحد"
  },
  {
    id: "hist_b2_015",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي عاصمة جمهورية مصر العربية الحالية والتي أسسها الفاطميون؟",
    options: ["الإسكندرية", "القاهرة", "الفسطاط", "الأقصر"],
    correctAnswer: "القاهرة",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "مدينة الألف مئذنة"
  },
  {
    id: "hist_b2_016",
    category: "تاريخ",
    points: 200,
    questionText: "من هو النبي الذي بنى الكعبة المشرفة مع ابنه إسماعيل عليهما السلام؟",
    options: ["موسى", "عيسى", "إبراهيم", "نوح"],
    correctAnswer: "إبراهيم",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "يُلقب بخليل الله"
  },
  {
    id: "hist_b2_017",
    category: "تاريخ",
    points: 200,
    questionText: "ما هو البحر الذي عبره طارق بن زياد لفتح الأندلس؟",
    options: ["البحر الأحمر", "البحر المتوسط", "بحر العرب", "الخليج العربي"],
    correctAnswer: "البحر المتوسط",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "يقع بين أوروبا وأفريقيا"
  },
  {
    id: "hist_b2_018",
    category: "تاريخ",
    points: 200,
    questionText: "في أي قارة تقع دولة الأندلس قديماً (إسبانيا والبرتغال حالياً)؟",
    options: ["أفريقيا", "آسيا", "أوروبا", "أمريكا الشمالية"],
    correctAnswer: "أوروبا",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "قارة تقع شمال البحر المتوسط"
  },
  {
    id: "hist_b2_019",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الصحابي الذي رافق النبي صلى الله عليه وسلم في رحلة الهجرة إلى المدينة؟",
    options: ["عمر بن الخطاب", "علي بن أبي طالب", "أبو بكر الصديق", "عثمان بن عفان"],
    correctAnswer: "أبو بكر الصديق",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "مكث معه في غار ثور"
  },
  {
    id: "hist_b2_020",
    category: "تاريخ",
    points: 200,
    questionText: "ما هو الطائر الذي استخدمه النبي سليمان عليه السلام لإرسال رسالة لملكة سبأ؟",
    options: ["الغراب", "الهدهد", "النسر", "الصقر"],
    correctAnswer: "الهدهد",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "مذكور في سورة النمل"
  },
  {
    id: "hist_b2_021",
    category: "تاريخ",
    points: 200,
    questionText: "كم عدد سنوات دعوة النبي صلى الله عليه وسلم في مكة قبل الهجرة؟",
    options: ["10 سنوات", "13 سنة", "15 سنة", "20 سنة"],
    correctAnswer: "13 سنة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "عاش في المدينة بعدها 10 سنوات"
  },
  {
    id: "hist_b2_022",
    category: "تاريخ",
    points: 200,
    questionText: "ما اسم والدة النبي محمد صلى الله عليه وسلم؟",
    options: ["خديجة بنت خويلد", "آمنة بنت وهب", "حليمة السعدية", "فاطمة بنت أسد"],
    correctAnswer: "آمنة بنت وهب",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "توفيت وهو في السادسة من عمره"
  },
  {
    id: "hist_b2_023",
    category: "تاريخ",
    points: 200,
    questionText: "في أي مدينة توفي النبي محمد صلى الله عليه وسلم ودُفن؟",
    options: ["مكة المكرمة", "المدينة المنورة", "القدس", "الطائف"],
    correctAnswer: "المدينة المنورة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "في حجرة عائشة رضي الله عنها"
  },
  {
    id: "hist_b2_024",
    category: "تاريخ",
    points: 200,
    questionText: "ما هو أشهر كتاب جمع الأحاديث النبوية الصحيحة للمسلمين؟",
    options: ["صحيح البخاري", "سنن الترمذي", "مسند أحمد", "الموطأ"],
    correctAnswer: "صحيح البخاري",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "أصح كتاب بعد القرآن الكريم"
  },
  {
    id: "hist_b2_025",
    category: "تاريخ",
    points: 200,
    questionText: "من هو النبي الذي أُلقي في النار فجعلها الله عليه برداً وسلاماً؟",
    options: ["موسى", "إبراهيم", "يوسف", "يونس"],
    correctAnswer: "إبراهيم",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "ألقاه قومه النمرود في النار"
  },
  {
    id: "hist_b2_026",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي الدولة الحالية التي تقع فيها مدينة 'القيروان' التاريخية؟",
    options: ["الجزائر", "المغرب", "تونس", "ليبيا"],
    correctAnswer: "تونس",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "أسسها عقبة بن نافع"
  },
  {
    id: "hist_b2_027",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الخليفة الراشدي الذي كان زوجاً للسيدة فاطمة الزهراء بنت النبي؟",
    options: ["عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب", "أبو بكر الصديق"],
    correctAnswer: "علي بن أبي طالب",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "والد الحسن والحسين"
  },
  {
    id: "hist_b2_028",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي المعركة التي سميت بـ 'يوم الفرقان'؟",
    options: ["غزوة بدر", "غزوة أحد", "غزوة الخندق", "غزوة تبوك"],
    correctAnswer: "غزوة بدر",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "أول معركة كبرى في الإسلام"
  },
  {
    id: "hist_b2_029",
    category: "تاريخ",
    points: 200,
    questionText: "ما هو الحيوان الذي ارتبط بقصة أصحاب الكهف؟",
    options: ["الذئب", "الكلب", "الأسد", "الجمل"],
    correctAnswer: "الكلب",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "مذكور في سورة الكهف: باسط ذراعيه بالوصيد"
  },
  {
    id: "hist_b2_030",
    category: "تاريخ",
    points: 200,
    questionText: "من هو أول فدائي في الإسلام حين نام في فراش النبي ليلة الهجرة؟",
    options: ["أبو بكر الصديق", "علي بن أبي طالب", "زيد بن حارثة", "عمار بن ياسر"],
    correctAnswer: "علي بن أبي طالب",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "ابن عم الرسول صلى الله عليه وسلم"
  },
  {
    id: "hist_b2_031",
    category: "تاريخ",
    points: 200,
    questionText: "ما هي السورة القرآنية التي خلت من البسملة في بدايتها؟",
    options: ["التوبة", "الأنفال", "يونس", "الأعراف"],
    correctAnswer: "التوبة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "تُسمى أيضاً بسورة براءة"
  },
  {
    id: "hist_b2_032",
    category: "تاريخ",
    points: 200,
    questionText: "من هو الصحابي الذي أُطلق عليه 'ترجمان القرآن'؟",
    options: ["عبد الله بن مسعود", "عبد الله بن عباس", "أبي بن كعب", "زيد بن ثابت"],
    correctAnswer: "عبد الله بن عباس",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "دعا له النبي: اللهم فقهه في الدين وعلمه التأويل"
  },
  {
    id: "hist_b2_033",
    category: "تاريخ",
    points: 200,
    questionText: "أين تقع الكعبة المشرفة؟",
    options: ["في المدينة المنورة", "في مكة المكرمة", "في الرياض", "في جدة"],
    correctAnswer: "في مكة المكرمة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "قبلة المسلمين في كل صلاة"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط) ---
  // ==========================================
  {
    id: "hist_b2_034",
    category: "تاريخ",
    points: 400,
    questionText: "ما هو الصلح الذي عُقد بين المسلمين وقريش في السنة السادسة للهجرة؟",
    options: ["صلح الرملة", "صلح الحديبية", "حلف الفضول", "بيعة العقبة"],
    correctAnswer: "صلح الحديبية",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "سُمي باسم المنطقة التي عُقد فيها بالقرب من مكة"
  },
  {
    id: "hist_b2_035",
    category: "تاريخ",
    points: 400,
    questionText: "من هي ملكة مصر التي شجرت اسمها بـ 'شجرة الدر' وحكمت المماليك لفترة قصيرة؟",
    options: ["شجرة الدر", "قطر الندى", "زبيدة", "بوران"],
    correctAnswer: "شجرة الدر",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "زوجة السلطان الصالح أيوب"
  },
  {
    id: "hist_b2_036",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي الغزوة التي شارك فيها المسلمون ضد الروم في عهد النبي وكانت آخر غزواته؟",
    options: ["غزوة مؤتة", "غزوة تبوك", "غزوة حنين", "غزوة خيبر"],
    correctAnswer: "غزوة تبوك",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "سُمي جيشها بـ 'جيش العسرة'"
  },
  {
    id: "hist_b2_037",
    category: "تاريخ",
    points: 400,
    questionText: "من هو العالم المسلم الذي يُعتبر مؤسس علم الاجتماع ومؤلف كتاب 'المقدمة'؟",
    options: ["ابن رشد", "ابن خلدون", "ابن سينا", "الفارابي"],
    correctAnswer: "ابن خلدون",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "عالم أندلسي من أصل تونسي"
  },
  {
    id: "hist_b2_038",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الطبيب والعالم المسلم الملقب بـ 'الشيخ الرئيس' ومؤلف كتاب 'القانون في الطب'؟",
    options: ["أبو بكر الرازي", "ابن النفيس", "ابن سينا", "جابر بن حيان"],
    correctAnswer: "ابن سينا",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "عُرف في أوروبا باسم Avicenna"
  },
  {
    id: "hist_b2_039",
    category: "تاريخ",
    points: 400,
    questionText: "ما هو الاسم الذي أُطلق على الحروب التي خاضها أبو بكر الصديق ضد المرتدين؟",
    options: ["حروب الردة", "حروب الفجار", "حروب الشام", "حروب الخوارج"],
    correctAnswer: "حروب الردة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "حدثت مباشرة بعد وفاة النبي صلى الله عليه وسلم"
  },
  {
    id: "hist_b2_040",
    category: "تاريخ",
    points: 400,
    questionText: "من هو القائد الأموي الذي بنى مدينة واسط في العراق؟",
    options: ["زياد بن أبيه", "الحجاج بن يوسف الثقفي", "قتيبة بن مسلم", "المهلب بن أبي صفرة"],
    correctAnswer: "الحجاج بن يوسف الثقفي",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "كان والياً صارماً لعبد الملك بن مروان"
  },
  {
    id: "hist_b2_041",
    category: "تاريخ",
    points: 400,
    questionText: "ما اسم الدولة التي أسسها عبد الرحمن الداخل في الأندلس؟",
    options: ["الدولة الأموية في الأندلس", "دولة الموحدين", "دولة المرابطين", "دولة بني نصر"],
    correctAnswer: "الدولة الأموية في الأندلس",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "استمرت لعدة قرون وعاصمتها قرطبة"
  },
  {
    id: "hist_b2_042",
    category: "تاريخ",
    points: 400,
    questionText: "في عهد أي خليفة راشدي وقعت معركة ذات الصواري البحرية؟",
    options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"],
    correctAnswer: "عثمان بن عفان",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "الخليفة الثالث"
  },
  {
    id: "hist_b2_043",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الصحابي الذي أرسله النبي صلى الله عليه وسلم لكسرى ملك الفرس بكتابه؟",
    options: ["دحية الكلبي", "عبد الله بن حذافة السهمي", "حاتم الطائي", "المغيرة بن شعبة"],
    correctAnswer: "عبد الله بن حذافة السهمي",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "مزق كسرى كتابه فدعا عليه النبي بتمزيق ملكه"
  },
  {
    id: "hist_b2_044",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي المدينة التي كانت عاصمة للدولة الطولونية في مصر؟",
    options: ["الفسطاط", "القطائع", "القاهرة", "العسكر"],
    correctAnswer: "القطائع",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "بناها أحمد بن طولون وبها مسجده الشهير"
  },
  {
    id: "hist_b2_045",
    category: "تاريخ",
    points: 400,
    questionText: "من هو العالم المسلم الذي اكتشف الدورة الدموية الصغرى؟",
    options: ["ابن النفيس", "ابن الهيثم", "ابن البيطار", "الزهراوي"],
    correctAnswer: "ابن النفيس",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "طبيب عربي دمشقي عاش في مصر"
  },
  {
    id: "hist_b2_046",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي الغزوة التي هزم فيها المسلمون قبائل هوازن وثقيف بعد فتح مكة؟",
    options: ["غزوة تبوك", "غزوة حنين", "غزوة خيبر", "غزوة الطائف"],
    correctAnswer: "غزوة حنين",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "ذكرت في القرآن: 'ويوم حنين إذ أعجبتكم كثرتكم'"
  },
  {
    id: "hist_b2_047",
    category: "تاريخ",
    points: 400,
    questionText: "من هي الصحابية الجليلة التي قتلت سبعة من الروم في معركة اليرموك؟",
    options: ["أسماء بنت أبي بكر", "أم عمارة (نسيبة بنت كعب)", "أم حكيم بنت الحارث", "خولة بنت الأزور"],
    correctAnswer: "أم حكيم بنت الحارث",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "زوجة عكرمة بن أبي جهل"
  },
  {
    id: "hist_b2_048",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الخليفة الأموي الذي أمر بتنقيط المصحف الشريف لأول مرة؟",
    options: ["معاوية بن أبي سفيان", "عبد الملك بن مروان", "الوليد بن عبد الملك", "هشام بن عبد الملك"],
    correctAnswer: "عبد الملك بن مروان",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "وكّل الحجاج بهذه المهمة"
  },
  {
    id: "hist_b2_049",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الرحالة المسلم الشهير الذي جاب العالم الإسلامي وكتب كتاب 'تحفة النظار'؟",
    options: ["ابن فضلان", "ابن بطوطة", "الإدريسي", "ياقوت الحموي"],
    correctAnswer: "ابن بطوطة",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "رحالة مغربي من مدينة طنجة"
  },
  {
    id: "hist_b2_050",
    category: "تاريخ",
    points: 400,
    questionText: "ما اسم القلعة التي تحصن فيها اليهود وفتحها علي بن أبي طالب في السنة السابعة للهجرة؟",
    options: ["قلعة خيبر", "حصن بني قريظة", "حصن تبوك", "قلعة حلب"],
    correctAnswer: "قلعة خيبر",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "غزوة خيبر المشهورة"
  },
  {
    id: "hist_b2_051",
    category: "تاريخ",
    points: 400,
    questionText: "من هو السلطان السلجوقي الذي أسس المدرسة النظامية في بغداد؟",
    options: ["نظام الملك", "ألب أرسلان", "ملكشاه", "طغرل بك"],
    correctAnswer: "نظام الملك",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "وزير سلجوقي شهير، سُميت المدارس باسمه"
  },
  {
    id: "hist_b2_052",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي المدينة التي كانت العاصمة الأولى للدولة العباسية قبل بناء بغداد؟",
    options: ["الأنبار", "الكوفة", "البصرة", "دمشق"],
    correctAnswer: "الأنبار",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "اتخذها أبو العباس السفاح مقراً له"
  },
  {
    id: "hist_b2_053",
    category: "تاريخ",
    points: 400,
    questionText: "من هو العالم الذي اخترع 'الإسطرلاب' في العصر الإسلامي لتحديد القبلة وم مواقع النجوم؟",
    options: ["مريم الإسطرلابية", "ابن يونس", "البتاني", "الفزاري"],
    correctAnswer: "مريم الإسطرلابية",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "عالمة فلك مسلمة من حلب"
  },
  {
    id: "hist_b2_054",
    category: "تاريخ",
    points: 400,
    questionText: "في أي عهد تم إنشاء أول دار لسك العملة الإسلامية المستقلة؟",
    options: ["العهد الراشدي", "العهد الأموي", "العهد العباسي", "العهد العثماني"],
    correctAnswer: "العهد الأموي",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "تحديداً في عهد عبد الملك بن مروان"
  },
  {
    id: "hist_b2_055",
    category: "تاريخ",
    points: 400,
    questionText: "من هو مؤسس علم البصريات الحديث ومؤلف كتاب 'المناظر'؟",
    options: ["ابن الهيثم", "ابن سينا", "الفارابي", "الخوارزمي"],
    correctAnswer: "ابن الهيثم",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "صحح مفاهيم الرؤية والضوء"
  },
  {
    id: "hist_b2_056",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي المدينة التي حاصرها العثمانيون عام 1529م ولم يتمكنوا من فتحها؟",
    options: ["فيينا", "روما", "مدريد", "باريس"],
    correctAnswer: "فيينا",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "عاصمة النمسا"
  },
  {
    id: "hist_b2_057",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الصحابي الذي أمره أبو بكر الصديق بجمع القرآن الكريم لأول مرة؟",
    options: ["زيد بن ثابت", "أبي بن كعب", "عبد الله بن مسعود", "علي بن أبي طالب"],
    correctAnswer: "زيد بن ثابت",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "كان من كُتّاب الوحي شباباً"
  },
  {
    id: "hist_b2_058",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي الدولة الإسلامية التي حكمت أجزاء من الهند واشتهرت بالعمارة مثل 'تاج محل'؟",
    options: ["دولة المغول الإسلامية", "الدولة الغزنوية", "الدولة الغورية", "سلطنة دلهي"],
    correctAnswer: "دولة المغول الإسلامية",
    answerImageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    hint: "أسسها ظهير الدين بابر"
  },
  {
    id: "hist_b2_059",
    category: "تاريخ",
    points: 400,
    questionText: "من هو القائد المسلم الذي قاد الجيوش في معركة الزاب الكبرى؟",
    options: ["عبد الله بن علي العباسي", "أبو مسلم الخراساني", "أبو جعفر المنصور", "مروان بن محمد"],
    correctAnswer: "عبد الله بن علي العباسي",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "عم الخليفة العباسي الأول، هزم آخر خلفاء بني أمية"
  },
  {
    id: "hist_b2_060",
    category: "تاريخ",
    points: 400,
    questionText: "من هي الزوجة التي رافقت النبي صلى الله عليه وسلم في صلح الحديبية وأشارت عليه بالحلق والنحر؟",
    options: ["أم سلمة", "عائشة", "حفصة", "ميمونة"],
    correctAnswer: "أم سلمة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "رأيها أنقذ المسلمين من مخالفة أمر النبي"
  },
  {
    id: "hist_b2_061",
    category: "تاريخ",
    points: 400,
    questionText: "ما هو الاسم الذي عُرفت به الحرب بين الإمام علي ومعاوية بن أبي سفيان؟",
    options: ["معركة صفين", "معركة الجمل", "معركة النهروان", "معركة كربلاء"],
    correctAnswer: "معركة صفين",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "انتهت بقصة التحكيم الشهيرة"
  },
  {
    id: "hist_b2_062",
    category: "تاريخ",
    points: 400,
    questionText: "من هو السلطان المملوكي الذي طرد التتار من الشام نهائياً بعد سلسلة معارك؟",
    options: ["المنصور قلاوون", "الظاهر بيبرس", "قطز", "برقوق"],
    correctAnswer: "المنصور قلاوون",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "والد الناصر محمد وباني البيمارستان بالقاهرة"
  },
  {
    id: "hist_b2_063",
    category: "تاريخ",
    points: 400,
    questionText: "ما هو اللقب الذي أطلق على الخوارزمي في الرياضيات؟",
    options: ["أبو الجبر", "أبو الهندسة", "أبو الكيمياء", "أبو الفلك"],
    correctAnswer: "أبو الجبر",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "مؤلف كتاب الجبر والمقابلة"
  },
  {
    id: "hist_b2_064",
    category: "تاريخ",
    points: 400,
    questionText: "من هو الخليفة الأموي الذي بنى المسجد الأموي الكبير في دمشق؟",
    options: ["الوليد بن عبد الملك", "عبد الملك بن مروان", "معاوية بن أبي سفيان", "عمر بن عبد العزيز"],
    correctAnswer: "الوليد بن عبد الملك",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "ازدهر في عهده العمران والفتوحات"
  },
  {
    id: "hist_b2_065",
    category: "تاريخ",
    points: 400,
    questionText: "ما هي المدينة التي اتخذها السلاجقة عاصمة لدولتهم الكبرى في البداية؟",
    options: ["نيسابور / الري", "بغداد", "دمشق", "حلب"],
    correctAnswer: "نيسابور / الري",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "مدن كبرى في خراسان وإيران حالياً"
  },
  {
    id: "hist_b2_066",
    category: "تاريخ",
    points: 400,
    questionText: "من هو العالم الأندلسي الذي قام بأول محاولة مسجلة للطيران؟",
    options: ["عباس بن فرناس", "الزهراوي", "ابن طفيل", "ابن باجة"],
    correctAnswer: "عباس بن فرناس",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "صنع أجنحة من ريش وحاول الطيران في قرطبة"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب) ---
  // ==========================================
  {
    id: "hist_b2_067",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم القائد الذي وحد المغول وأسس إمبراطوريتهم الكبرى في القرن الثالث عشر؟",
    options: ["جنكيز خان", "هولاكو", "باتو خان", "مونكو خان"],
    correctAnswer: "جنكيز خان",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "اسمه الحقيقي تيموجين"
  },
  {
    id: "hist_b2_068",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد الخوارزمي الذي قاوم المغول بشراسة حتى هرب إلى الهند؟",
    options: ["جلال الدين خوارزم شاه", "علاء الدين محمد", "تتش بن ألب أرسلان", "إيلدكز"],
    correctAnswer: "جلال الدين خوارزم شاه",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "عبر نهر السند بفرسه هرباً من جنكيز خان"
  },
  {
    id: "hist_b2_069",
    category: "تاريخ",
    points: 600,
    questionText: "في أي عام ميلادي سقطت غرناطة، آخر معاقل المسلمين في الأندلس؟",
    options: ["1492 م", "1453 م", "1258 م", "1099 م"],
    correctAnswer: "1492 م",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "نفس العام الذي اكتشف فيه كولومبوس أمريكا"
  },
  {
    id: "hist_b2_070",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم المعاهدة التي قسّمت الإمبراطورية العثمانية بعد الحرب العالمية الأولى عام 1920؟",
    options: ["معاهدة سيفر", "معاهدة لوزان", "معاهدة فرساي", "اتفاقية سايكس بيكو"],
    correctAnswer: "معاهدة سيفر",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "رفضتها الحركة الوطنية التركية وتم استبدالها لاحقاً بلوزان"
  },
  {
    id: "hist_b2_071",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الخليفة العباسي الذي قُتل في عهده الحسين بن علي في معركة فخ؟",
    options: ["الهادي", "المهدي", "المنصور", "هارون الرشيد"],
    correctAnswer: "الهادي",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "أخو هارون الرشيد، وحكم لفترة قصيرة جداً"
  },
  {
    id: "hist_b2_072",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان السلجوقي الذي أسره الخطا في معركة قطوان عام 1141 م؟",
    options: ["سنجر", "بركياروق", "محمود", "محمد بن ملكشاه"],
    correctAnswer: "سنجر",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "آخر السلاطين السلاجقة العظام"
  },
  {
    id: "hist_b2_073",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي المدينة التي كانت مركزاً لدولة الأغالبة في شمال أفريقيا؟",
    options: ["القيروان / رقادة", "المهدية", "تونس", "فاس"],
    correctAnswer: "القيروان / رقادة",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "بنى فيها إبراهيم بن الأغلب مدينته الملكية"
  },
  {
    id: "hist_b2_074",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد الصليبي الذي استسلم لصلاح الدين بعد معركة حطين وأُبقي على حياته؟",
    options: ["جاي دي لوزينيان (ملك القدس)", "أرناط (رينو دي شاتيون)", "ريتشارد قلب الأسد", "ريموند الثالث"],
    correctAnswer: "جاي دي لوزينيان (ملك القدس)",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "أعطاه صلاح الدين ماءً مثلجاً ليشرب بعكس أرناط"
  },
  {
    id: "hist_b2_075",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم الفرقة العسكرية النخبوية التي أسسها السلطان العثماني أورخان غازي؟",
    options: ["الإنكشارية", "السباهية", "المماليك", "الجندرمة"],
    correctAnswer: "الإنكشارية",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "تعني بالتركية 'الجيش الجديد'"
  },
  {
    id: "hist_b2_076",
    category: "تاريخ",
    points: 600,
    questionText: "في أي سنة هجرية حدثت واقعة الحرة في المدينة المنورة؟",
    options: ["63 هـ", "61 هـ", "73 هـ", "50 هـ"],
    correctAnswer: "63 هـ",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "حدثت في عهد يزيد بن معاوبة"
  },
  {
    id: "hist_b2_077",
    category: "تاريخ",
    points: 600,
    questionText: "من هو المؤسس الفعلي للدولة الزيرية في بلاد المغرب الأوسط؟",
    options: ["بلكين بن زيري", "زيري بن مناد", "حماد بن بلكين", "المعز بن باديس"],
    correctAnswer: "بلكين بن زيري",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "عينه الفاطميون والياً على المغرب عندما انتقلوا لمصر"
  },
  {
    id: "hist_b2_078",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي المعركة التي قُتل فيها الخليفة الموحدي أبو يعقوب يوسف في الأندلس عام 1184م؟",
    options: ["حصار شنترين", "معركة العقاب", "معركة الأرك", "حصار لشبونة"],
    correctAnswer: "حصار شنترين",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "مدينة في البرتغال حالياً"
  },
  {
    id: "hist_b2_079",
    category: "تاريخ",
    points: 600,
    questionText: "من هو العالم المسلم الذي صنف كتاب 'الحاوي في الطب' والذي يُعد موسوعة طبية ضخمة؟",
    options: ["أبو بكر الرازي", "ابن سينا", "الزهراوي", "ابن زهر"],
    correctAnswer: "أبو بكر الرازي",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "طبيب فارسي عاش في بغداد، من رواد الطب السريري"
  },
  {
    id: "hist_b2_080",
    category: "تاريخ",
    points: 600,
    questionText: "ما هو الاسم الحقيقي للصحابي الجليل أبو هريرة رضي الله عنه؟",
    options: ["عبد الرحمن بن صخر الدوسي", "عبد الله بن عثمان", "عمر بن عامر", "كعب بن مالك"],
    correctAnswer: "عبد الرحمن بن صخر الدوسي",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "أكثر الصحابة رواية للحديث"
  },
  {
    id: "hist_b2_081",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان الذي بنى قلعة 'روملي حصار' تمهيداً لفتح القسطنطينية؟",
    options: ["محمد الفاتح", "بايزيد الأول", "مراد الثاني", "أورخان"],
    correctAnswer: "محمد الفاتح",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "بُنيت في 4 أشهر فقط على البوسفور"
  },
  {
    id: "hist_b2_082",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم القائد العسكري الذي أخمد ثورة الزنج الكبرى في العصر العباسي؟",
    options: ["الموفق العباسي", "المعتصم بالله", "أفشين", "طاهر بن الحسين"],
    correctAnswer: "الموفق العباسي",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "أخو الخليفة المعتمد ووالد الخليفة المعتضد"
  },
  {
    id: "hist_b2_083",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الملك الأيوبي الذي وقّع صلح يافا مع ريتشارد قلب الأسد عام 1192م؟",
    options: ["صلاح الدين الأيوبي", "العادل", "الكامل", "الصالح أيوب"],
    correctAnswer: "صلاح الدين الأيوبي",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "أنهى الحملة الصليبية الثالثة"
  },
  {
    id: "hist_b2_084",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم العالم الذي برع في الجغرافيا ورسم خريطة دقيقة للعالم بطلب من ملك صقلية روجر الثاني؟",
    options: ["الإدريسي", "ابن حوقل", "المسعودي", "البيروني"],
    correctAnswer: "الإدريسي",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "مؤلف كتاب 'نزهة المشتاق في اختراق الآفاق'"
  },
  {
    id: "hist_b2_085",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي المدينة الإسبانية التي تُعرف بـ 'مدينة الزهراء' والتي بناها عبد الرحمن الناصر؟",
    options: ["قرب قرطبة", "قرب إشبيلية", "قرب غرناطة", "قرب طليطلة"],
    correctAnswer: "قرب قرطبة",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "كانت مركزاً إدارياً وحكومياً فخماً"
  },
  {
    id: "hist_b2_086",
    category: "تاريخ",
    points: 600,
    questionText: "من هو السلطان المملوكي الذي هزم الحملة الصليبية السابعة وأسر لويس التاسع ملك فرنسا؟",
    options: ["توران شاه", "قطز", "بيبرس", "قلاوون"],
    correctAnswer: "توران شاه",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "ابن الصالح أيوب، وبعد مقتله حكمت شجرة الدر"
  },
  {
    id: "hist_b2_087",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم القائد الذي استعاد مدينة إنطاكية من الصليبيين عام 1268م؟",
    options: ["الظاهر بيبرس", "قلاوون", "صلاح الدين الأيوبي", "نور الدين زنكي"],
    correctAnswer: "الظاهر بيبرس",
    answerImageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
    hint: "سلطان مملوكي شهير أنهى إمارة إنطاكية"
  },
  {
    id: "hist_b2_088",
    category: "تاريخ",
    points: 600,
    questionText: "من هو العالم الكيميائي المسلم الملقب بـ 'أبو الكيمياء' والذي اكتشف حمض الكبريتيك؟",
    options: ["جابر بن حيان", "الرازي", "الكندي", "الخوارزمي"],
    correctAnswer: "جابر بن حيان",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "أطلق على حمض الكبريتيك اسم 'زيت الزاج'"
  },
  {
    id: "hist_b2_089",
    category: "تاريخ",
    points: 600,
    questionText: "في أي معركة بحرية دُمر الأسطول العثماني-المصري المشترك عام 1827م خلال حرب استقلال اليونان؟",
    options: ["معركة نافارين", "معركة ليبانتو", "معركة تششمة", "معركة بريفيزا"],
    correctAnswer: "معركة نافارين",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "دمرتها الأساطيل البريطانية والفرنسية والروسية"
  },
  {
    id: "hist_b2_090",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الحاكم الذي أسس الدولة الإخشيدية في مصر والشام عام 935م؟",
    options: ["محمد بن طغج الإخشيد", "أبو المسك كافور", "أحمد بن طولون", "علي بن الإخشيد"],
    correctAnswer: "محمد بن طغج الإخشيد",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "منحه الخليفة العباسي لقب 'الإخشيد' وهو لقب ملوك فرغانة"
  },
  {
    id: "hist_b2_091",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم الوزير الأندلسي البارز الذي ألف كتاب 'طوق الحمامة في الألفة والأُلّاف'؟",
    options: ["ابن حزم الأندلسي", "ابن زيدون", "لسان الدين بن الخطيب", "ابن خفاجة"],
    correctAnswer: "ابن حزم الأندلسي",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "فقيه ظاهري وأديب كبير"
  },
  {
    id: "hist_b2_092",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد المسلم الذي قاد جيوش الخلافة لفتح إقليم السند (باكستان حالياً)؟",
    options: ["محمد بن القاسم الثقفي", "قتيبة بن مسلم", "المهلب بن أبي صفرة", "طارق بن زياد"],
    correctAnswer: "محمد بن القاسم الثقفي",
    answerImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    hint: "كان عمره 17 عاماً فقط حين تولى القيادة"
  },
  {
    id: "hist_b2_093",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي المدينة التي كانت عاصمة السلاجقة في عهد ألب أرسلان وملكشاه؟",
    options: ["أصفهان", "مرو", "بغداد", "قونية"],
    correctAnswer: "أصفهان",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "مدينة تاريخية كبرى في إيران الحالية"
  },
  {
    id: "hist_b2_094",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الشاعر الفارس الذي يُعد من أشهر شعراء الفروسية والغزل العذري في العصر الأموي وقُتل عام 78 هـ؟",
    options: ["جميل بثينة", "عمر بن أبي ربيعة", "الفرزدق", "قيس بن الملوح"],
    correctAnswer: "جميل بثينة",
    answerImageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
    hint: "اشتهر بحبه لابنة عمه"
  },
  {
    id: "hist_b2_095",
    category: "تاريخ",
    points: 600,
    questionText: "ما هي المعاهدة التي تنازلت بموجبها الدولة العثمانية عن القرم لروسيا عام 1774م؟",
    options: ["معاهدة كيتشوك كاينارجي", "معاهدة كارلوفجة", "معاهدة أدرنة", "معاهدة بلغراد"],
    correctAnswer: "معاهدة كيتشوك كاينارجي",
    answerImageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    hint: "تعتبر من أسوأ المعاهدات في تاريخ العثمانيين"
  },
  {
    id: "hist_b2_096",
    category: "تاريخ",
    points: 600,
    questionText: "من هو مؤسس الدولة الحمدانية في حلب والموصل، والذي اشتهر برعايته للمتنبي؟",
    options: ["سيف الدولة الحمداني", "ناصر الدولة", "أبو فراس الحمداني", "سعد الدولة"],
    correctAnswer: "سيف الدولة الحمداني",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "خاض معارك طاحنة ضد الروم البيزنطيين"
  },
  {
    id: "hist_b2_097",
    category: "تاريخ",
    points: 600,
    questionText: "في أي سنة هجرية حدثت معركة القادسية الكبرى ضد الفرس؟",
    options: ["15 هـ", "13 هـ", "21 هـ", "11 هـ"],
    correctAnswer: "15 هـ",
    answerImageUrl: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=800",
    hint: "بقيادة سعد بن أبي وقاص في عهد عمر بن الخطاب"
  },
  {
    id: "hist_b2_098",
    category: "تاريخ",
    points: 600,
    questionText: "من هو القائد الذي فتح جزيرة قبرص لأول مرة في عهد الخليفة عثمان بن عفان؟",
    options: ["معاوية بن أبي سفيان", "عبد الله بن أبي السرح", "عمرو بن العاص", "بسر بن أبي أرطأة"],
    correctAnswer: "معاوية بن أبي سفيان",
    answerImageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    hint: "كان حينها والياً على الشام"
  },
  {
    id: "hist_b2_099",
    category: "تاريخ",
    points: 600,
    questionText: "ما اسم القائد البربري المسلم الذي أعلن استقلال جبل طارق عن الحكم الإسباني في بدايات الفتح؟",
    options: ["طارق بن زياد", "طريف بن مالك", "مغيث الرومي", "يوليان"],
    correctAnswer: "طريف بن مالك",
    answerImageUrl: "https://images.unsplash.com/photo-1548625361-180a3c20c02c?w=800",
    hint: "قاد أول سرية استطلاعية قبل جيش طارق بن زياد، وسُميت 'تاريفا' باسمه"
  },
  {
    id: "hist_b2_100",
    category: "تاريخ",
    points: 600,
    questionText: "من هو الخليفة الأموي الذي شُيد في عهده 'قصر هشام' الشهير بفسيفسائه في أريحا؟",
    options: ["هشام بن عبد الملك", "الوليد بن يزيد", "مروان بن محمد", "سليمان بن عبد الملك"],
    correctAnswer: "هشام بن عبد الملك",
    answerImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    hint: "يحمل القصر اسمه ويقع في فلسطين"
  }
];
