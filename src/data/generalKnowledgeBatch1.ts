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

export const generalKnowledgeBatch1: GeneralKnowledgeQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل) ---
  // ==========================================
  {
    id: "gen_b1_001",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي العملة الرسمية المستخدمة في الولايات المتحدة الأمريكية؟",
    options: ["الدولار", "اليورو", "الباوند", "الين"],
    correctAnswer: "الدولار",
    answerImageUrl: "/questions_images/gen_b1_001_answer.jpg",
    hint: "رمزها هو $"
  },
  {
    id: "gen_b1_002",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الغاز الرئيسي الذي يتنفسه الإنسان للبقاء على قيد الحياة؟",
    options: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"],
    correctAnswer: "الأكسجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يشكل حوالي 21% من الغلاف الجوي"
  },
  {
    id: "gen_b1_003",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أكبر قارة في العالم من حيث المساحة والسكان؟",
    options: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الشمالية"],
    correctAnswer: "آسيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تضم دولاً مثل الصين والهند واليابان"
  },
  {
    id: "gen_b1_004",
    category: "معلومات عامة",
    points: 200,
    questionText: "من هو مخترع المصباح الكهربائي التجاري؟",
    options: ["توماس إديسون", "نيكولا تسلا", "ألكسندر غراهام بيل", "ألبيرت أينشتاين"],
    correctAnswer: "توماس إديسون",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "مخترع أمريكي صاحب آلاف براءات الاختراع"
  },
  {
    id: "gen_b1_005",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي المنظمة الدولية المسؤولة عن حفظ السلام والأمن العالمي ومقرها نيويورك؟",
    options: ["الأمم المتحدة", "جامعة الدول العربية", "الاتحاد الأوروبي", "حلف الناتو"],
    correctAnswer: "الأمم المتحدة",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تأسست عام 1945 وتُعرف اختصاراً بـ UN"
  },
  {
    id: "gen_b1_006",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أكبر محيط في العالم من حيث المساحة؟",
    options: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"],
    correctAnswer: "المحيط الهادئ",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يغطي أكثر من ثلث مساحة الكرة الأرضية"
  },
  {
    id: "gen_b1_007",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الجهاز المستخدم لقياس درجة حرارة الجسم؟",
    options: ["الترمومتر (المحرار)", "البارومتر", "الهيدرومتر", "البوصلة"],
    correctAnswer: "الترمومتر (المحرار)",
    answerImageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    hint: "يُوضع في الفم أو تحت الإبط أو الأذن"
  },
  {
    id: "gen_b1_008",
    category: "معلومات عامة",
    points: 200,
    questionText: "كم عدد ألوان طيف قزح الأساسية؟",
    options: ["7", "5", "6", "8"],
    correctAnswer: "7",
    answerImageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800",
    hint: "تبدأ بالأحمر وتنتهي بالبنفسجي"
  },
  {
    id: "gen_b1_009",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو المصطلح الاقتصادي الذي يشير إلى الارتفاع المستمر في أسعار السلع والخدمات؟",
    options: ["التضخم", "الركود", "الانكماش", "الاستثمار"],
    correctAnswer: "التضخم",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "يقلل من القدرة الشرائية للعملة"
  },
  {
    id: "gen_b1_010",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة جمهورية مصر العربية؟",
    options: ["القاهرة", "الإسكندرية", "الجيزة", "أسوان"],
    correctAnswer: "القاهرة",
    answerImageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800",
    hint: "تُعرف بمدينة الألف مئذنة"
  },
  {
    id: "gen_b1_011",
    category: "معلومات عامة",
    points: 200,
    questionText: "أي حيوان يُلقب بـ 'سفينة الصحراء'؟",
    options: ["الجمل", "الحصان", "الفهد", "الظبي"],
    correctAnswer: "الجمل",
    answerImageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800",
    hint: "يتحمل العطش والسير في الرمال لمسافات طويلة"
  },
  {
    id: "gen_b1_012",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العلم الذي يدرس الكائنات الحية وتطورها ووظائف أعضائها؟",
    options: ["علم الأحياء (البيولوجيا)", "علم الفيزياء", "علم الكيمياء", "علم الجيولوجيا"],
    correctAnswer: "علم الأحياء (البيولوجيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "مشتق من الكلمة الإغريقية Bio أي الحياة"
  },
  {
    id: "gen_b1_013",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأكثر سكاناً في القارة الأفريقية؟",
    options: ["نيجيريا", "مصر", "إثيوبيا", "جنوب أفريقيا"],
    correctAnswer: "نيجيريا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "عاصمتها أبوجا وتعد كبرى اقتصادات القارة"
  },
  {
    id: "gen_b1_014",
    category: "معلومات عامة",
    points: 200,
    questionText: "أي عنصر كيميائي يُرمز له بالرمز 'O' في الجدول الدوري؟",
    options: ["الأكسجين", "الذهب", "الحديد", "الهيدروجين"],
    correctAnswer: "الأكسجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "الحرف الأول من اسمه بالإنجليزية Oxygen"
  },
  {
    id: "gen_b1_015",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي اللغة الرسمية الأكثر تحدثاً في العالم من حيث عدد الناطقين بها كلوغة أم؟",
    options: ["الصينية (الماندرين)", "الإسبانية", "الإنجليزية", "العربية"],
    correctAnswer: "الصينية (الماندرين)",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "يتحدث بها أكثر من مليار شخص في الصين"
  },
  {
    id: "gen_b1_016",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو اسم الوكالة الفضائية الأمريكية الشهيرة؟",
    options: ["ناسا (NASA)", "روسكوزموس", "إيسا (ESA)", "جكسا (JAXA)"],
    correctAnswer: "ناسا (NASA)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "أرسلت أول إنسان إلى القمر عام 1969"
  },
  {
    id: "gen_b1_017",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أسرع دولة في اعتماد التكنولوجيا والسيارات الكهربائية وتعتبر عاصمتها أوسلو؟",
    options: ["النرويج", "السويد", "فنلندا", "الدنمارك"],
    correctAnswer: "النرويج",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "دولة اسكندنافية عاصمتها أوسلو"
  },
  {
    id: "gen_b1_018",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو المشروب الأكثر استهلاكاً في العالم بعد الماء؟",
    options: ["الشاي", "القهوة", "العصير", "الحليب"],
    correctAnswer: "الشاي",
    answerImageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800",
    hint: "يُحضر من نقع أوراق نبات الكاميليا"
  },
  {
    id: "gen_b1_019",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم النهر الأطول في العالم؟",
    options: ["نهر النيل", "نهر الأمازون", "نهر الميسيسيبي", "نهر اليانغتسي"],
    correctAnswer: "نهر النيل",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يمر عبر 11 دولة أفريقية وينتهي في مصر"
  },
  {
    id: "gen_b1_020",
    category: "معلومات عامة",
    points: 200,
    questionText: "ماذا يُسمى نظام الحكم الذي يتم فيه اختيار الحكام عن طريق الانتخابات والشعب؟",
    options: ["الديمقراطية", "الدكتاتورية", "الملكية المطلقة", "الأوليغارشية"],
    correctAnswer: "الديمقراطية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "كلمة أصلها يوناني يعني 'حكم الشعب'"
  },
  {
    id: "gen_b1_021",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم اللوحة الشهيرة المعروضة في متحف اللوفر والتي رسمها ليوناردو دا فينشي؟",
    options: ["الموناليزا", "العشاء الأخير", "صرخة", "ليلة النجوم"],
    correctAnswer: "الموناليزا",
    answerImageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800",
    hint: "تُعرف أيضاً باسم 'الجوكوندا'"
  },
  {
    id: "gen_b1_022",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي السلسلة الجبلية الأعلى في العالم والتي تضم قمة إيفرست؟",
    options: ["جبال الهيمالايا", "جبال الألب", "جبال الأنديز", "جبال الأطلس"],
    correctAnswer: "جبال الهيمالايا",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "تقع في قارة آسيا بين نيبال والصين والهند"
  },
  {
    id: "gen_b1_023",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي العضو في جسم الإنسان المسؤول عن ضخ الدم إلى جميع الأنسجة؟",
    options: ["القلب", "الرئة", "الكبد", "الكلية"],
    correctAnswer: "القلب",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "ينبض حوالي 100 ألف مرة يومياً"
  },
  {
    id: "gen_b1_024",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأوروبية الشهيرة برياضة مصارعة الثيران وعاصمتها مدريد؟",
    options: ["إسبانيا", "البرتغال", "إيطاليا", "فرنسا"],
    correctAnswer: "إسبانيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع في شبه الجزيرة الإيبيرية"
  },
  {
    id: "gen_b1_025",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي السلعة التي تُلقب بـ 'الذهب الأسود'؟",
    options: ["النفط (البترول)", "الفحم", "الحديد", "القهوة"],
    correctAnswer: "النفط (البترول)",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "مصدر الطاقة الحيوي الذي يُستخرج من تحت الأرض"
  },
  {
    id: "gen_b1_026",
    category: "معلومات عامة",
    points: 200,
    questionText: "أي من الفواكه التالية يُعرف بـ 'ملك الفواكه' في دول جنوب شرق آسيا رغم رائحته النفاذة؟",
    options: ["الدوريان", "المانجو", "الموز", "الأناناس"],
    correctAnswer: "الدوريان",
    answerImageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
    hint: "فاكهة ذات شوك ورائحة قوية جداً تُحظر في الفنادق والطائرات"
  },
  {
    id: "gen_b1_027",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة التي قدمت تمثال الحرية كهدية للولايات المتحدة الأمريكية؟",
    options: ["فرنسا", "بريطانيا", "ألمانيا", "إيطاليا"],
    correctAnswer: "فرنسا",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "أُهدي عام 1886 بمناسبة الذكرى المئوية للاستقلال الأمريكي"
  },
  {
    id: "gen_b1_028",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العلم الذي يختص بدراسة وتوقع حالة الجو والطقس؟",
    options: ["الأرصاد الجوية (الميتورولوجيا)", "علم الجيولوجيا", "الفلك", "البيئة"],
    correctAnswer: "الأرصاد الجوية (الميتورولوجيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يعتمد على النشرات الجوية والأقمار الصناعية"
  },
  {
    id: "gen_b1_029",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أطول كائن حي عمراً وعاش في الأعماق لأكثر من 400 عام وفق الدراسات الحديثة؟",
    options: ["قرش الجرينلاند", "السلحفاة العملاقة", "الحوت الأزرق", "الفيل الأفريقي"],
    correctAnswer: "قرش الجرينلاند",
    answerImageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    hint: "نوع من القروش يعيش في المياه القطبيّة الباردة"
  },
  {
    id: "gen_b1_030",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم الجهاز المستخدم لقياس قوة وسعة الهزات الأرضية والزلازل؟",
    options: ["مقياس ريختر (السيزموجراف)", "مقياس هيرتز", "البارومتر", "الترمومتر"],
    correctAnswer: "مقياس ريختر (السيزموجراف)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "سُمي نسبة للعالم تشارلز ريختر"
  },
  {
    id: "gen_b1_031",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأكثر إنتاجاً للشوكولاتة والبن وتضم المقر الرئيسي للبنك الدولي؟",
    options: ["الولايات المتحدة الأمريكية", "سويسرا", "البرازيل", "بلجيكا"],
    correctAnswer: "الولايات المتحدة الأمريكية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "يقع المقر الرئيسي للبنك الدولي في واشنطن العاصمة"
  },
  {
    id: "gen_b1_032",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أسرع حيوان بري على وجه الأرض؟",
    options: ["الفهد (الشيتا)", "الأسد", "الغزال", "النمر"],
    correctAnswer: "الفهد (الشيتا)",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "تصل سرعته لنحو 120 كم في الساعة"
  },
  {
    id: "gen_b1_033",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو المفهوم الاقتصادي الذي يشير إلى مجموع القيمة النقدية للسلع والخدمات المنتجة داخل دولة خلال سنة؟",
    options: ["الناتج المحلي الإجمالي (GDP)", "ميزان المدفوعات", "الدين العام", "احتياطي النقد"],
    correctAnswer: "الناتج المحلي الإجمالي (GDP)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "المؤشر الأساسي لقياس حجم اقتصاد أي دولة"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط) ---
  // ==========================================
  {
    id: "gen_b1_034",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الوحيدة في العالم التي تقع بالكامل داخل حدود دولة إيطاليا وبها مقر الكنيسة الكاثوليكية؟",
    options: ["الفاتيكان", "سان مارينو", "موناكو", "أندورا"],
    correctAnswer: "الفاتيكان",
    answerImageUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800",
    hint: "أصغر دولة مستقلة في العالم من حيث المساحة والسكان"
  },
  {
    id: "gen_b1_035",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المنظمة الدولية التي تنظم سوق النفط العالمية وتضم كبار الدول المصدرة للبترول؟",
    options: ["أوبك (OPEC)", "السامت", "البريكس", "منظمة التجارة العالمية"],
    correctAnswer: "أوبك (OPEC)",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "تأسست في بغداد عام 1960 ومقرها حالياً في فيينا"
  },
  {
    id: "gen_b1_036",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الكيميائي السويدي الذي اخترع الديناميت وأوصى بإنشاء جوائز عالمية باسمه؟",
    options: ["ألفريد نوبل", "ديمتري منديليف", "أنتوان لافوازييه", "لويس باستور"],
    correctAnswer: "ألفريد نوبل",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تُمنح جوائزه سنوياً في السلام والعلوم والأدب"
  },
  {
    id: "gen_b1_037",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي التكتل الاقتصادي والدولي الذي يضم روسيا والصين والهند والبرازيل وجنوب أفريقيا ودولاً جديدة أخرى؟",
    options: ["مجموعة بريكس (BRICS)", "مجموعة السبع (G7)", "المركوسور", "الاتحاد الأوروبي"],
    correctAnswer: "مجموعة بريكس (BRICS)",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "اسمها يتكون من الحروف الأولى لأعضائها المؤسسين"
  },
  {
    id: "gen_b1_038",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أعمق نقطة معروفة في المحيطات على سطح الأرض؟",
    options: ["خندق ماريانا", "خندق بورتوريكو", "خندق جاوة", "خندق التونغا"],
    correctAnswer: "خندق ماريانا",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يقع في غرب المحيط الهادئ ويصل عمقه لنحو 11 ألف متر"
  },
  {
    id: "gen_b1_039",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الاقتصاد الذي يعتمد على استغلال البيانات، الرقميات، الذكاء الاصطناعي، والتكنولوجيا الحديثة؟",
    options: ["الاقتصاد الرقمي", "الاقتصاد الأخضر", "الاقتصاد الدائري", "الاقتصاد الموازي"],
    correctAnswer: "الاقتصاد الرقمي",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "يقوم على التجارة الإلكترونية والتقنيات البرمجية"
  },
  {
    id: "gen_b1_040",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الجهاز الطبي الذي اكتشفه رينيه لينيك عام 1816 للاستماع لأصوات القلب والرئتين؟",
    options: ["سماعة الطبيب (الستيثوسكوب)", "منظار الحلق", "مقياس الضغط", "جهاز رسم القلب"],
    correctAnswer: "سماعة الطبيب (الستيثوسكوب)",
    answerImageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    hint: "الرمز الأكثر شهرة لمهنة الطب"
  },
  {
    id: "gen_b1_041",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المدينة التي يُطلق عليها لقب 'المدينة التي لا تنام' و'التفاحة الكبيرة'؟",
    options: ["نيويورك", "لندن", "طوكيو", "باريس"],
    correctAnswer: "نيويورك",
    answerImageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
    hint: "المركز المالي الشامخ بالولايات المتحدة وبها وول ستريت"
  },
  {
    id: "gen_b1_042",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الفرع العلوم الاقتصادية الذي يهتم بسلوك الأفراد والشركات في اتخاذ القرارات وتحديد الأسعار؟",
    options: ["الاقتصاد الجزئي", "الاقتصاد الكلي", "الاقتصاد السلوكي", "الاقتصاد القياسي"],
    correctAnswer: "الاقتصاد الجزئي",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "يركز على مستوى الأسواق الصغيرة والعرض والطلب الفردي"
  },
  {
    id: "gen_b1_043",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو المؤسس والمدير التنفيذي لشركة سبيس إكس (SpaceX) وتيسلا (Tesla)؟",
    options: ["إيلون ماسك", "جيف بيزوس", "مارك زوكربرغ", "بيل غيتس"],
    correctAnswer: "إيلون ماسك",
    answerImageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800",
    hint: "رجل الأعمال الشهير والمثير للجدل مولود في جنوب أفريقيا"
  },
  {
    id: "gen_b1_044",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو العلم المسؤول عن دراسة الأحافير والصخور والبقايا القديمة للنباتات والحيوانات؟",
    options: ["علم الأحافير (الباليونتولوجيا)", "علم الآثار (الأركيولوجيا)", "الانثروبولوجيا", "علم الجيولوجيا"],
    correctAnswer: "علم الأحافير (الباليونتولوجيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "من خلاله يتعرف العلماء على الديناصورات والكائنات البائدة"
  },
  {
    id: "gen_b1_045",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المحكمة الدولية التابعة للأمم المتحدة والمختصة بالفض بين النزاعات القانونية بين الدول ومقرها لاهاي؟",
    options: ["محكمة العدل الدولية", "المحكمة الجنائية الدولية", "محكمة حقوق الإنسان", "مجلس الأمن"],
    correctAnswer: "محكمة العدل الدولية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تُعرف أيضاً باسم 'المحكمة العالمية' ومقرها قصر السلام بهولندا"
  },
  {
    id: "gen_b1_046",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المصطلحات السريعة التي تصف الصعوبة والبطء في إنتاج التكنولوجيا وسلاسل التوريد والمعادن؟",
    options: ["عنق الزجاجة (Bottleneck)", "الركود التضخمي", "تأثير الفراشة", "الصدمة المالية"],
    correctAnswer: "عنق الزجاجة (Bottleneck)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "نقطة اختناق تعطل حركة العمل أو الإنتاج كاملة"
  },
  {
    id: "gen_b1_047",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أضخم جزيرة في العالم من حيث المساحة ولا تعتبر قارة بحد ذاتها؟",
    options: ["جرينلاند", "مدغشقر", "بورنيو", "غينيا الجديدة"],
    correctAnswer: "جرينلاند",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تتبع إدارياً لمملكة الدنمارك ومعظمها مغطى بالجليد"
  },
  {
    id: "gen_b1_048",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المعاهدة الدولية التي تُحدد حظر استخدام وانتشار الأسلحة الكيميائية حول العالم؟",
    options: ["اتفاقية حظر الأسلحة الكيميائية (CWC)", "معاهدة جنيف", "اتفاقية باريس", "معاهدة ان بي تي (NPT)"],
    correctAnswer: "اتفاقية حظر الأسلحة الكيميائية (CWC)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تشرف عليها منظمة OPCW في لاهاي"
  },
  {
    id: "gen_b1_049",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم المرفأ الشهير الذي تعرض لانفجار ضخم لمادة نترات المونيوم عام 2020 في العاصمة اللبنانية؟",
    options: ["مرفأ بيروت", "مرفأ طرابلس", "ميناء صيدا", "ميناء ج Were"],
    correctAnswer: "مرفأ بيروت",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "كارثة هزت العاصمة اللبنانية في أغسطس 2020"
  },
  {
    id: "gen_b1_050",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو العالم الإنجليزي الذي وضع قوانين الحركة الثلاثة واكتشف قانون الجاذبية العام؟",
    options: ["إسحاق نيوتن", "ستيفن هوكينغ", "مايكل فاراداي", "روبرت هوك"],
    correctAnswer: "إسحاق نيوتن",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يرتبط اسمه بقصة التفاحة الشهيرة"
  },
  {
    id: "gen_b1_051",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأكثر استهلاكاً وإنتاجاً للشاي في العالم كميةً وحجماً؟",
    options: ["الصين", "الهند", "تركيا", "المملكة المتحدة"],
    correctAnswer: "الصين",
    answerImageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800",
    hint: "موطن نبات الشاي الاصلي وتنتج مختلف أنواعه"
  },
  {
    id: "gen_b1_052",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الوكالة الدولية المسؤولة عن مراقبة الاستخدام السلمي للطاقة النووية ومقرها فيينا؟",
    options: ["الوكالة الدولية للطاقة الذرية (IAEA)", "المنظمة العالمية للأرصاد", "اليونيسيف", "منظمة الصحة العالمية"],
    correctAnswer: "الوكالة الدولية للطاقة الذرية (IAEA)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تُعرف بـ 'الذرة من أجل السلام'"
  },
  {
    id: "gen_b1_053",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الظاهرة المناخية المتمثلة في ارتفاع درجات حرارة مياه المحيط الهادئ الاستوائي وتأثيرها على مناخ العالم؟",
    options: ["ظاهرة النينيو (El Niño)", "ظاهرة النينيا", "الانحتباس الحراري", "الأعاصير القمعية"],
    correctAnswer: "ظاهرة النينيو (El Niño)",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "اسمها يعني باللغة الإسبانية 'الطفل الصغير'"
  },
  {
    id: "gen_b1_054",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو مصطلح 'فيتو' (Veto) المستخدم في مجلس الأمن الدولي؟",
    options: ["حق الرفض (النقض)", "حق التصويت المزدوج", "التأجيل الدائم", "حق التعديل"],
    correctAnswer: "حق الرفض (النقض)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تتمتع به الدول الخمس دائمة العضوية لإلغاء أي قرار"
  },
  {
    id: "gen_b1_055",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي العاصمة الرسمية لدولة أستراليا؟",
    options: ["كانبرا", "سيدني", "ملبورن", "بريزبن"],
    correctAnswer: "كانبرا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تم اختيارها حلّاً وسطاً بين التنافس بين سيدني وملبورن"
  },
  {
    id: "gen_b1_056",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو أصل كلمة 'أطلس' التي تُطلق على كتاب الخرائط؟",
    options: ["أسطورة إغريقية لعملاق يحمل السماء", "اسم عالم عربي في الجغرافيا", "مدينة قديمة بالمغرب", "اسم جبل في إفريقيا فقط"],
    correctAnswer: "أسطورة إغريقية لعملاق يحمل السماء",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "يرتبط بالإله الإغريقي Atlas المحكوم عليه بحمل الفلك"
  },
  {
    id: "gen_b1_057",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي العملة المشفرة الرقمية الأولى والأشهر في العالم التي أنشأها شخص مجهول باسم 'ساتوشي ناكاموتو'؟",
    options: ["البيتكوين (Bitcoin)", "الإيثريوم", "الريبل", "الدوجكوين"],
    correctAnswer: "البيتكوين (Bitcoin)",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "ظهرت عام 2009 كأول عملة رقمية لامركزية"
  },
  {
    id: "gen_b1_058",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المادة الأكثر صلابة وقسوة والموجودة في الطبيعة؟",
    options: ["الألماس", "الكوارتز", "الجرانيت", "التيتانيوم"],
    correctAnswer: "الألماس",
    answerImageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    hint: "يتكون بالكامل من ذرات الكربون المترابطة بشدة"
  },
  {
    id: "gen_b1_059",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم المنظمة العالمية المسؤولة عن الصحة الوقائية ومكافحة الأوبئة ومقرها جنيف؟",
    options: ["منظمة الصحة العالمية (WHO)", "المنظمة الطبية الدولية", "الصليب الأحمر", "اليونيسيف"],
    correctAnswer: "منظمة الصحة العالمية (WHO)",
    answerImageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    hint: "تأسست عام 1948 وتُصدر التوجيهات الصحية العالمية"
  },
  {
    id: "gen_b1_060",
    category: "معلومات عامة",
    points: 400,
    questionText: "أي دولة تشتهر بأقصر نشيد وطني بدون كلمات ألحان فقط ولديها أطول متوسط أعمار للسكان؟",
    options: ["اليابان", "سويسرا", "موناكو", "سان مارينو"],
    correctAnswer: "اليابان",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "نشيدها الوطني الكيميغايو (Kimigayo) يعتبر أقدم كلماتها"
  },
  {
    id: "gen_b1_061",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو العلم الخص بشرائح الرقائق الدقيقة ونواقل نصف الموصلات التي تُشغل الأجهزة التكنولوجية الحديثة؟",
    options: ["أشباه الموصلات (Semiconductors)", "النانوتكنولوجي", "الميكاترونكس", "الكهروضوئيات"],
    correctAnswer: "أشباه الموصلات (Semiconductors)",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "تُصنع أساساً من عنصر السيليكون وتعد صلب التنافس التكنولوجي"
  },
  {
    id: "gen_b1_062",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المصنع العالمي الرئيسي الذي يُنتج غالبية رقائق المعالجات المتطورة في العالم ومقره تايوان؟",
    options: ["TSMC", "Intel", "Samsung", "Nvidia"],
    correctAnswer: "TSMC",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "اختصار لـ Taiwan Semiconductor Manufacturing Company"
  },
  {
    id: "gen_b1_063",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المصطلح السياسي الذي يُشير إلى توازن القوى وعدم انحياز الدول في الصراعات الدولية كما حدث في مؤتمر باندونغ؟",
    options: ["حركة عدم الانحياز", "الحرب الباردة", "سياسة الردع", "الوفاق الدولي"],
    correctAnswer: "حركة عدم الانحياز",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تأسست في الخمسينيات بقيادة عبد الناصر وتيتو ونهرو"
  },
  {
    id: "gen_b1_064",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الكائن الحي الأطول عمراً بين النباتات وتعيش بعض أشجاره لأكثر من 4800 سنة في كاليفورنيا؟",
    options: ["صنوبر بريستلكون (Methuselah)", "شجرة الباوباب", "شجرة الزيتون", "شجرة السيكويا العملاقة"],
    correctAnswer: "صنوبر بريستلكون (Methuselah)",
    answerImageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
    hint: "تُعرف بشجرة 'متوشلخ' وتنمو في الجبال العالية"
  },
  {
    id: "gen_b1_065",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الجائزة العالمية الأعلى شأناً والمخصصة لإنجازات الهندسة المعمارية وتُلقب بـ 'نوبل المعمار'؟",
    options: ["جائزة بريتزكر (Pritzker)", "جائزة أغاخان", "جائزة نوبل", "جائزة بوليتزر"],
    correctAnswer: "جائزة بريتزكر (Pritzker)",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "منحت للمصممة العرقية الشهيرة زها حديد عام 2004"
  },
  {
    id: "gen_b1_066",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم القناة المائية الاصطناعية التي تربط بين المحيط الأطلسي والمحيط الهادئ في أمريكا Central؟",
    options: ["قناة بنما", "قناة السويس", "قناة كييل", "قناة كورنث"],
    correctAnswer: "قناة بنما",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "افتتحت عام 1914 لتختصر طرق الملاحة البحرية بين المحيطين"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب) ---
  // ==========================================
  {
    id: "gen_b1_067",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الدولة الحبيسة (غير المطلة على بحار) الأكثر سكاناً في العالم وتستعين بموانئ جاراتها؟",
    options: ["إثيوبيا", "بوليفيا", "النيجر", "كازاخستان"],
    correctAnswer: "إثيوبيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "فقدت منافذها البحرية بعد استقلال إريتريا عام 1993"
  },
  {
    id: "gen_b1_068",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم النظرية الاقتصادية التي ترى أن السوق يصحح نفسه تلقائياً دون تدخل الدولة عبر 'اليد الخفية'؟",
    options: ["الرأسمالية الكلاسيكية (آدم سميث)", "النظرية الكينزية", "الاشتراكية الماركسية", "النيوليبرالية"],
    correctAnswer: "الرأسمالية الكلاسيكية (آدم سميث)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "صاغها العالم الاقتصادي الاسكتلندي في كتابه 'ثروة الأمم'"
  },
  {
    id: "gen_b1_069",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو الاختراع أو التقنية التي نال عليها العالم أحمد زويل جائزة نوبل في الكيمياء عام 1999؟",
    options: ["كيمياء الفيمتو (Femtochemistry)", "المجهر الإلكتروني", "تقنية الكريسبر", "الليزر الأزرق"],
    correctAnswer: "كيمياء الفيمتو (Femtochemistry)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تصوير التفاعلات الكيميائية في جزء من مليون مليار جزء من الثانية"
  },
  {
    id: "gen_b1_070",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المنظمة الدولية المتخصصة في حماية وحفظ التراث الثقافي والطبيعي العالمي ومقرها باريس؟",
    options: ["اليونسكو (UNESCO)", "اليونيسيف", "الفاو", "الأنكتاد"],
    correctAnswer: "اليونسكو (UNESCO)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "منظمة الأمم المتحدة للتربية والعلم والثقافة"
  },
  {
    id: "gen_b1_071",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي المتلازمة النفسية التي يُبدي فيها الضحية أو الرهينة تعاطفاً وولاءً غير متوقع تجاه خاطفه؟",
    options: ["متلازمة ستوكهولم", "متلازمة ليما", "متلازمة القدس", "متلازمة باريس"],
    correctAnswer: "متلازمة ستوكهولم",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "سُميت على اسم حادثة سطو على بنك في السويد عام 1973"
  },
  {
    id: "gen_b1_072",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو مصطلح 'الركود التضخمي' (Stagflation) في علم الاقتصاد؟",
    options: ["تزامن تباطؤ النمو النمو الاقتصادي مع ارتفاع التضخم والبطالة", "انخفاض الأسعار مع نمو مرتفع", "ارتفاع الصادرات مع انخفاض النقد", "انهيار الأسواق المالية فقط"],
    correctAnswer: "تزامن تباطؤ النمو النمو الاقتصادي مع ارتفاع التضخم والبطالة",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "حالة معقدة يصعب معالجتها بالسياسات النقدية التقليدية"
  },
  {
    id: "gen_b1_073",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الاتفاقية المناخية العالمية التي وُقعت عام 2015 للحفاظ على ارتفاع حرارة الأرض دون درجتين مئويتين؟",
    options: ["اتفاقية باريس للمناخ", "بروتوكول كيوتو", "اتفاقية مونتريال", "مؤتمر غلاسكو"],
    correctAnswer: "اتفاقية باريس للمناخ",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تم التوصل إليها خلال مؤتمر COP21"
  },
  {
    id: "gen_b1_074",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو اسم المعيار القانوني المتبع لقياس التبعية والجنسية بناءً على 'مكان ولادة الشخص' وليس جنسية والديه؟",
    options: ["حق الأرض (Jus soli)", "حق الدم (Jus sanguinis)", "المواطنة المكتسبة", "حق الإقامة"],
    correctAnswer: "حق الأرض (Jus soli)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "مصطلح لاتيني متبع في دول مثل أمريكا وكندا لمنح الجنسية للمواليد"
  },
  {
    id: "gen_b1_075",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الجائزة الصحفية والأدبية الأرفع شأناً في الولايات المتحدة وتمنحها جامعة كولومبيا؟",
    options: ["جائزة بوليتزر (Pulitzer)", "جائزة بوكر", "جائزة غونكور", "جائزة نوبل للأدب"],
    correctAnswer: "جائزة بوليتزر (Pulitzer)",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "أنشأها الناشر جوزيف بوليتزر وتُمنح سنوياً للصحافة المتميزة"
  },
  {
    id: "gen_b1_076",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الوكالة الحكومية الأمريكية المختصة بتقديم التوقعات والمعلومات الجغرافية وتعرف بـ 'USGS'؟",
    options: ["هيئة المسح الجيولوجي الأمريكية", "وكالة حماية البيئة", "إدارة المحيطات والغلاف الجوي", "مؤسسة العلوم الوطنية"],
    correctAnswer: "هيئة المسح الجيولوجي الأمريكية",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تدرس تضاريس أمريكا والموارد الطبيعية والزلازل عالمياً"
  },
  {
    id: "gen_b1_077",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الدولة الوحيدة في العالم التي يتألف علمها الوطني من شكلين مثلثين متداخلين وليس مستطيلاً؟",
    options: ["نيبال", "بوتان", "سريلانكا", "جزر المالديف"],
    correctAnswer: "نيبال",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "دولة جبلية في الهيمالايا تضم قمة إيفرست"
  },
  {
    id: "gen_b1_078",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المفكر السياسي الإيطالي صاحب كتاب 'الأمير' الشهير والمقولة المثيرة للجدل 'الغاية تبرر الوسيلة'؟",
    options: ["نيكولو ميكافيلي", "توماس هوبز", "جان جاك روسو", "جون لوك"],
    correctAnswer: "نيكولو ميكافيلي",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "كتب دراسته للفلورنسي لورينزو دي ميديتشي في القرن 16"
  },
  {
    id: "gen_b1_079",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي النسبة الذهبية (Golden Ratio) التقريبية في الرياضيات والفنون والتي يرمز لها بالحرف الإغريقي (Phi - φ)؟",
    options: ["1.618", "3.141", "2.718", "1.414"],
    correctAnswer: "1.618",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "تظهر في تناسق الطبيعة وعمارة الأهرامات والبارثينون"
  },
  {
    id: "gen_b1_080",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المنظمة الاقتصادية الدولية الشاملة التي خلت محل اتفاقية 'الجات' (GATT) عام 1995؟",
    options: ["منظمة التجارة العالمية (WTO)", "البنك الدولي", "صندوق النقد الدولي", "الأونكتاد"],
    correctAnswer: "منظمة التجارة العالمية (WTO)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تنظم قواعد التجارة بين الدول ومقرها جنيف"
  },
  {
    id: "gen_b1_081",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العنصر الكيميائي الأكثر وفرة في الكون بأسره؟",
    options: ["الهيدروجين", "الهيليوم", "الأكسجين", "الكربون"],
    correctAnswer: "الهيدروجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يشكل حوالي 75% من المادة العادية في الكون"
  },
  {
    id: "gen_b1_082",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الدولة الأكثر إنتاجاً وتصديراً للفضة في العالم؟",
    options: ["المكسيك", "البيرو", "الصين", "روسيا"],
    correctAnswer: "المكسيك",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع في أمريكا الشمالية وتشتهر بجمال مناجمها"
  },
  {
    id: "gen_b1_083",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي 'معاهدة أنتاركتيكا' الموقعة عام 1959 والتي تحظر أي نشاط عسكري في القارة القطبية الجنوبية؟",
    options: ["معاهدة تخصيص القارة للبحوث السلمية والعلماء", "تقسيم القارة بين 7 دول", "حظر دخول أي إنسان إليها", "إنشاء دولة مستقلة بها"],
    correctAnswer: "معاهدة تخصيص القارة للبحوث السلمية والعلماء",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تضمن حرية البحث العلمي وتمنع التجارب النواية أو العسكرية هناك"
  },
  {
    id: "gen_b1_084",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو المصطلح الفلسفي والأخلاقي الذي يشير إلى تفضيل مصلحة وسعادة أكبر عدد ممكن من الناس؟",
    options: ["النفعية (Utilitarianism)", "الوجودية", "الرواقية", "العدمية"],
    correctAnswer: "النفعية (Utilitarianism)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "من أبرز روادها الفيلسوف جيريمي بنثام وجون ستيوارت ميل"
  },
  {
    id: "gen_b1_085",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم العالم النمساوي مؤسس علم الوراثة الحديث بفضل تجاربه الشهيرة على نبات البسلة؟",
    options: ["جريجور مندل", "تشارلز داروين", "لويس باستور", "توماس مورغان"],
    correctAnswer: "جريجور مندل",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "اكتشف القوانين المحددة لوراثة الصفات السائدة والمتنحية"
  },
  {
    id: "gen_b1_086",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو المصطلح القانوني الدولي الذي يمنح الدبلوماسيين حصانة من الملاحقة القضائية في الدولة المستضيفة؟",
    options: ["الحصانة الدبلوماسية", "الجوء السياسي", "حق الاقتراع", "الفرار الدولي"],
    correctAnswer: "الحصانة الدبلوماسية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "منظمة بموجب اتفاقية فيينا للعلاقات الدبلوماسية 1961"
  },
  {
    id: "gen_b1_087",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي النظرية الفيزيائية التي صاغها أينشتاين وتلخصها المعادلة الشهيرة $E=mc^2$؟",
    options: ["النسبية الخاصة", "النسبية العامة", "ميكانيكا الكم", "النظرية الموجية"],
    correctAnswer: "النسبية الخاصة",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "نُشرت عام 1905 وتربط بين الطاقة والكتلة وسرعة الضوء"
  },
  {
    id: "gen_b1_088",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي المدينة السويسرية التي تُعد المقر الثاني للأمم المتحدة وتستضيف مقرات منظمة التجارة والصحة والأنكتاد؟",
    options: ["جنيف", "زيورخ", "برن", "لوزان"],
    correctAnswer: "جنيف",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تُعرف بمدينة السلام والمؤتمرات الدولية"
  },
  {
    id: "gen_b1_089",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الوثيقة التاريخية الإنجليزية الصادرة عام 1215 والتي حدت من سلطة الملك وقيدت صلاحياته المطلقة؟",
    options: ["الماجنا كارتا (Magna Carta)", "إعلان حقوق الإنسان", "وثيقة الدستور", "عريضة الحقوق"],
    correctAnswer: "الماجنا كارتا (Magna Carta)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "تُعرف أيضاً بـ 'الميثاق الأعظم للحريات'"
  },
  {
    id: "gen_b1_090",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم جهاز تسريع ومصادمة الجسيمات الذرية الأكبر والأقوى في العالم والموجود تحت الحدود الفرنسية السويسرية؟",
    options: ["مصادم الهادرونات الكبير (LHC)", "مفاعل إيتر (ITER)", "تلسكوب هابل", "مشروع مانهاتن"],
    correctAnswer: "مصادم الهادرونات الكبير (LHC)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تشرفه عليه المنظمة الأوروبية للأبحاث النواية (CERN)"
  },
  {
    id: "gen_b1_091",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الفيلسوف الفرنسي الذي قال جملته الخالدة 'أنا أفكر، إذن أنا موجود' (الكوغيتو)؟",
    options: ["رينيه ديكارت", "فولتير", "جان جاك روسو", "مونتيسكيو"],
    correctAnswer: "رينيه ديكارت",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "أبو الفلسفة الحديثة وصاحب المنهج الشكي"
  },
  {
    id: "gen_b1_092",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي العاصمة الإدارية الرسمية لدولة بولندا؟",
    options: ["وارسو", "كراكوف", "غدانسك", "فروتسواف"],
    correctAnswer: "وارسو",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "مدينة على نهر فيستولا أُعيد بناؤها بعد الحرب العالمية الثانية"
  },
  {
    id: "gen_b1_093",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المصطلح النفسي المأخوذ من أسطورة يونانية والمستخدم لوصف الشخص المفتون بذاته بشكل مفرط؟",
    options: ["النرجسية (Narcissism)", "السيكوباتية", "البارانويا", "الهستيريا"],
    correctAnswer: "النرجسية (Narcissism)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "نسبة لـ نرجس (Narcissus) الذي وقع في حب انعكاس صورته في الماء"
  },
  {
    id: "gen_b1_094",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العلم المسؤول عن دراسة اللغات وتطورها وقواعدها وبنيتها الصوتية والدلالية؟",
    options: ["علم اللغويات (Linguistics)", "علم الفيلولوجيا", "السيميوطيقا", "الانثروبولوجيا"],
    correctAnswer: "علم اللغويات (Linguistics)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "يشمل الصوتيات والتراكيب والمعاني"
  },
  {
    id: "gen_b1_095",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الهيئة الدولية المعنية بمكافحة غسل الأموال وتمويل الإرهاب ومقرها باريس؟",
    options: ["مجموعة العمل المالي (FATF)", "الإنتربول", "صندوق النقد", "منظمة الشفافية الدولية"],
    correctAnswer: "مجموعة العمل المالي (FATF)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "تُصدر 'القائمة السوداء' و'القائمة الرمادية' للدول غير الممتثلة"
  },
  {
    id: "gen_b1_096",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو أقرب جسم فضائي طبيعي يدور حول كوكب الأرض ويتحكم في ظاهرتي المد والجزر؟",
    options: ["القمر", "المريخ", "الشمس", "الزهرة"],
    correctAnswer: "القمر",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "يبعد عن الأرض حوالي 384 ألف كيلومتر"
  },
  {
    id: "gen_b1_097",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أصغر عضلة في جسم الإنسان حجماً وتوجد داخل الأذن الوسطى؟",
    options: ["العضلة الركابية (Stapedius)", "العضلة الخياطية", "العضلة القاسية", "العضلة المأبضية"],
    correctAnswer: "العضلة الركابية (Stapedius)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "طولها أقل من 2 مليمتر وتدعم عظمة الركاب"
  },
  {
    id: "gen_b1_098",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الاتفاقية التجارية التي تجمع بين الولايات المتحدة والمكسيك وكندا وتعرف بـ 'USMCA'؟",
    options: ["اتفاقية يو إس إم سي إيه (النافتا سابقاً)", "اتفاقية التجارة الحرة للحياد", "الأبيك", "الميركوسور"],
    correctAnswer: "اتفاقية يو إس إم سي إيه (النافتا سابقاً)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "حلّت محل اتفاقية NAFTA القديمة"
  },
  {
    id: "gen_b1_099",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم النظام السياسي والاقتصادي الذي ساد في أوروبا خلال القرون الوسطى والمبني على ملكية الأراضي والخدمة العسكرية؟",
    options: ["الإقطاعية (Feudalism)", "الرأسمالية", "الإمبريالية", "المركانتيلية"],
    correctAnswer: "الإقطاعية (Feudalism)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "يقوم على العلاقة بين النبلاء اللوردات والأقنان (العمال)"
  },
  {
    id: "gen_b1_100",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المبدأ السياسي الشهير المنسوب إلى رئيس أمريكي عام 1823 والذي رفض أي تدخل أوربي في شؤون القارتين الأمريكيتين؟",
    options: ["مبدأ مونرو (Monroe Doctrine)", "مبدأ ترومان", "مبدأ إيزنهاور", "مبدأ وودرو ويلسون"],
    correctAnswer: "مبدأ مونرو (Monroe Doctrine)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "أعلنه الرئيس الخامس جيمس مونرو وشكل أساس السياسة الخارجية الأمريكية"
  }
];
