export interface TurkishQuestion {
  id: string;
  category: string;
  points: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  answerImageUrl?: string;
  hint?: string;
}

export const turkishDramaQuestions: TurkishQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل - 35 سؤالاً) ---
  // ==========================================
  {
    id: "tr_q2_001",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل التركي الشهير الذي جسد فيه الفنان بوراك أوزجيفيت دور 'كمال سويدري'؟",
    options: ["حب أعمى (Kara Sevda)", "الحفرة (Çukur)", "قيامة أرطغرل", "العشق الممنوع"],
    correctAnswer: "حب أعمى (Kara Sevda)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "مسلسل رومانسي درامي فاز بجائزة إيمي العالمية"
  },
  {
    id: "tr_q2_002",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم النجم التركي الذي اشتهر بدور 'مهند' في مسلسلي 'نور' و'العشق الممنوع'؟",
    options: ["كيفانش تاتليتوغ", "بوراك أوزجيفيت", "أنجين أكيوريك", "شغتاي أولسوي"],
    correctAnswer: "كيفانش تاتليتوغ",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "عارض أزياء وممثل تركي يلقبه الجمهور العربي بـ 'مهند'"
  },
  {
    id: "tr_q2_003",
    category: "فن تركي",
    points: 200,
    questionText: "ما هو المسلسل التاريخي الذي استعرض حياة والد عثمان الأول مؤسس الدولة العثمانية؟",
    options: ["قيامة أرطغرل", "حريم السلطان", "المؤسس عثمان", "ألف ليلة وليلة"],
    correctAnswer: "قيامة أرطغرل",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "قام ببطولته الممثل إنجين ألتان دوزياتان"
  },
  {
    id: "tr_q2_004",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم الممثلة التي لعبت دور 'سمر' (Bihter) في مسلسل 'العشق الممنوع'؟",
    options: ["بيرين سات", "توبا بويوكوستين", "هاندا أرتشيل", "نسليهان أتاغول"],
    correctAnswer: "بيرين سات",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "شاركت أيضاً في بطولة مسلسل 'فاطمة'"
  },
  {
    id: "tr_q2_005",
    category: "فن تركي",
    points: 200,
    questionText: "في مسلسل 'الحفرة' (Çukur)، ما هو شكل الرمز الشهير لحي الحفرة؟",
    options: ["ثلاث نقاط وسهمين (< • • • >)", "أسد بداخل تاج", "جمجمة مقنعة", "هلال ونجمة"],
    correctAnswer: "ثلاث نقاط وسهمين (< • • • >)",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "رمز يعبر عن الحماية والبيت والعائلة"
  },
  {
    id: "tr_q2_006",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم الفنانة التي أبدعت في دور 'السلطانة هويام' في مسلسل حريم السلطان؟",
    options: ["مريم أوزرلي", "فخرية أوجن", "ديميت أوزديمير", "بيرغوزار كوريل"],
    correctAnswer: "مريم أوزرلي",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "عرفت بشعرها الأحمر البرتقالي وضحكتها المميزة"
  },
  {
    id: "tr_q2_007",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الرومانس الكوميدي الذي جمع بين هاندا أرتشيل وكرم بورسين؟",
    options: ["أنت أطرق بابي (Sen Çal Kapımı)", "طائر المبكر", "الحب لا يفهم الكلام", "رائحة التوت"],
    correctAnswer: "أنت أطرق بابي (Sen Çal Kapımı)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "يدور حول قصة 'إيدا' و'سيركان بولات'"
  },
  {
    id: "tr_q2_008",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم شخصية أراس بولوت إينملي الرئيسية في مسلسل 'الحفرة'؟",
    options: ["ياماش كوتشوفالي", "فارتولو سعد الدين", "سليم كوتشوفالي", "جومالي"],
    correctAnswer: "ياماش كوتشوفالي",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "الابن الأصغر للعائلة وكان يعزف في فرقة روك"
  },
  {
    id: "tr_q2_009",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل التركي المقتبس من المسلسل الأمريكي الشهير 'The Good Doctor'؟",
    options: ["الطبيب المعجزة (Mucize Doktor)", "العهد", "نبضات قلب", "طبيب المدينة"],
    correctAnswer: "الطبيب المعجزة (Mucize Doktor)",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "يحكي قصة الطبيب علي وفاء المصاب بالتوحد"
  },
  {
    id: "tr_q2_010",
    category: "فن تركي",
    points: 200,
    questionText: "ما المدينة التركية التي صُوّرت فيها أحداث مسلسل 'اشرح أيها البحر الأسود'؟",
    options: ["طرابزون (Trabzon)", "إسطنبول", "إزمير", "أنطاليا"],
    correctAnswer: "طرابزون (Trabzon)",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "منطقة تقع في شمال تركيا وتطل على البحر الأسود"
  },
  {
    id: "tr_q2_011",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الذي خاضت بطولته توبا بويوكوستين بدور 'لميس' وبولنت إينال بدور 'يحيى'؟",
    options: ["سنوات الضياع", "عاصي", "بائع الورد", "جسور والجميلة"],
    correctAnswer: "سنوات الضياع",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "من أوائل المسلسلات التركية المدبلجة للعربية"
  },
  {
    id: "tr_q2_012",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم الممثل الذي قام بدور البطولة في مسلسل 'طائر المبكر' مع ديميت أوزديمير؟",
    options: ["جان يامان", "ألب نافروز", "بوراك دينيز", "أنور أوزتورك"],
    correctAnswer: "جان يامان",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "نقل مسيرته الفنية لاحقاً إلى إيطاليا"
  },
  {
    id: "tr_q2_013",
    category: "فن تركي",
    points: 200,
    questionText: "من هو الممثل الذي جسد دور البطولة 'عثمان بن أرطغرل' في مسلسل 'المؤسس عثمان'؟",
    options: ["بوراك أوزجيفيت", "إنجين ألتان", "كنان إميرزالي أوغلو", "أراس بولوت"],
    correctAnswer: "بوراك أوزجيفيت",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "تولى البطولة بعد انتهاء مسلسل قيامة أرطغرل"
  },
  {
    id: "tr_q2_014",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم العمل الشبابي الشهير الذي يدور حول غموض وانتقام داخل مدرسة خاصة؟",
    options: ["اسمعني (Duy Beni)", "الأزهار الحزينة", "حكايتنا", "بنات الشمس"],
    correctAnswer: "اسمعني (Duy Beni)",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "تضمن شخصيات مثل إيكيم وكاناي"
  },
  {
    id: "tr_q2_015",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم الشخصية التي جسدتها نسليهان أتاغول في مسلسل 'ابنة السفير'؟",
    options: ["ناره", "ملاك", "ساراي", "دريا"],
    correctAnswer: "ناره",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "لعبت الدور أمام الممثل أنجين أكيوريك (سنجار)"
  },
  {
    id: "tr_q2_016",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الذي لعب فيه شتاي أولسوي دور شاب فقير يدخل عالم الأغنياء بفضل المحامي سليم؟",
    options: ["مد وجزر (Medcezir)", "في الداخل", "محافظ", "أسرار بنات"],
    correctAnswer: "مد وجزر (Medcezir)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "جسد فيه شخصية 'يمان كوبر'"
  },
  {
    id: "tr_q2_017",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الكوميدي الرومانسي الذي جمع بين بوراك دينيز وهاندا أرتشيل؟",
    options: ["الحب لا يفهم الكلام", "أنت أطرق بابي", "العشق الممنوع", "طائر المبكر"],
    correctAnswer: "الحب لا يفهم الكلام",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "جسدا فيه شخصيتي مراد وحياة"
  },
  {
    id: "tr_q2_018",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الدرامي التاريخي الذي يتناول قصة حياة السلطان عبد الحميد الثاني؟",
    options: ["عاصمة عبد الحميد", "قيامة أرطغرل", "المؤسس عثمان", "كوت العمارة"],
    correctAnswer: "عاصمة عبد الحميد",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "قام ببطولته الممثل بولنت إينال"
  },
  {
    id: "tr_q2_019",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الذي اشتهرت فيه هاندا أرتشيل مع تولغا ساريتش وبوراك بيركاي بدور 'سيلين'؟",
    options: ["بنات الشمس (Güneşin Kızları)", "الحب لا يفهم الكلام", "اللؤلؤة السوداء", "شخص آخر"],
    correctAnswer: "بنات الشمس (Güneşin Kızları)",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "يحكي قصة المعلمة شمس وبناتها الثلاث"
  },
  {
    id: "tr_q2_020",
    category: "فن تركي",
    points: 200,
    questionText: "ما المسلسل الشهير الذي تدور أحداثه حول انتقام 'ميران' من عائلة 'شاد أوغلو'؟",
    options: ["زهرة الثالوث (Hercai)", "ابنة السفير", "مرعشلي", "أمانات"],
    correctAnswer: "زهرة الثالوث (Hercai)",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "شخصيات البطولة فيه هما ميران وريان"
  },
  {
    id: "tr_q2_021",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الذي يتناول بطولات القوات الخاصة التركية بقيادة الياوز (تولغا ساريتش)؟",
    options: ["العهد (Söz)", "المحارب", "تشكيلات", "الذئب"],
    correctAnswer: "العهد (Söz)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "مسلسل عسكري وحقق نسب مشاهدة قياسية"
  },
  {
    id: "tr_q2_022",
    category: "فن تركي",
    points: 200,
    questionText: "ما هو المسلسل التركي الشهير الذي عُرض باسم 'فاطمة' في الوطن العربي؟",
    options: ["ما ذنب فاطمة جول؟", "العشق الممنوع", "سنوات الضياع", "اسمها زهرة"],
    correctAnswer: "ما ذنب فاطمة جول؟",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "بطولة بيرين سات وأنجين أكيوريك"
  },
  {
    id: "tr_q2_023",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل القصير الكوميدي الرومانسي الذي جمع ديميت أوزديمير وفوركان أنديتش؟",
    options: ["رقم 309 (No 309)", "طائر المبكر", "رائحة التوت", "العريس الرائع"],
    correctAnswer: "رقم 309 (No 309)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "يبدأ بلقاء بالخطأ في غرفه فندق رقم 309"
  },
  {
    id: "tr_q2_024",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم مسلسل المافيا والأكشن الشهير الذي جسد فيه أقطاي كينارجا شخصية 'خضر شاكر بيلار'؟",
    options: ["قطاع الطرق لن يحكموا العالم", "وادي الذئاب", "الحفرة", "العهد"],
    correctAnswer: "قطاع الطرق لن يحكموا العالم",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "يعرف اختصاراً بـ EDHO"
  },
  {
    id: "tr_q2_025",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم الممثلة التي جسدت دور 'فريدة' في مسلسل 'طائر النمنمة' أمام بوراك أوزجيفيت؟",
    options: ["فخرية أوجن", "نسليهان أتاغول", "مريم أوزرلي", "هاندا أرتشيل"],
    correctAnswer: "فخرية أوجن",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "تزوجت من بوراك أوزجيفيت في الواقع بعد هذا العمل"
  },
  {
    id: "tr_q2_026",
    category: "فن تركي",
    points: 200,
    questionText: "ما المسلسل الذي لعبت فيه الممثلة آلتشين سانجو دور 'ديمة' (Defne) أمام باريش أردوتش؟",
    options: ["حب للإيجار (Kiralık Aşk)", "اصطدام", "المعلم", "اصطدام الحب"],
    correctAnswer: "حب للإيجار (Kiralık Aşk)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "قصة حب تجمع بين عمر وعمر وديمة"
  },
  {
    id: "tr_q2_027",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم مسلسل الغموض والجريمة الشهير الذي أدى فيه كنعان إميرزالي أوغلو دور 'عمر / إيزل'؟",
    options: ["إيزل (Ezel)", "قبضاي", "وادي الذئاب", "في الداخل"],
    correctAnswer: "إيزل (Ezel)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "من أشهر مسلسلات الانتقام في الدراما التركية"
  },
  {
    id: "tr_q2_028",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الذي يدور حول قصة الطبيبة 'أسلي' والمجرم 'فرهاد'؟",
    options: ["حب أبيض وأسود (Siyah Beyaz Aşk)", "حكايتنا", "رامو", "ابنة السفير"],
    correctAnswer: "حب أبيض وأسود (Siyah Beyaz Aşk)",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "بطولة إبراهيم تشيليكول وبرتشين أكالاي"
  },
  {
    id: "tr_q2_029",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الدرامي المقتبس عن المسلسل الأمريكي 'Shameless'؟",
    options: ["حكايتنا (Bizim Hikaye)", "عائلة أصلان", "الأزهار الحزينة", "الحب الأول"],
    correctAnswer: "حكايتنا (Bizim Hikaye)",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "بطولة هازال كايا وبوراك دينيز"
  },
  {
    id: "tr_q2_030",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم الشخصية الرئيسية التاريخية في مسلسل 'وادي الذئاب'؟",
    options: ["مراد علمدار (Polat Alemdar)", "ميماتي باش", "عبد الحي", "أصلان بك"],
    correctAnswer: "مراد علمدار (Polat Alemdar)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "جسد الدور الممثل نجاتي شاشماز"
  },
  {
    id: "tr_q2_031",
    category: "فن تركي",
    points: 200,
    questionText: "ما المسلسل الذي جمع بين كيفانش تاتليتوغ وتوبا بويوكوستين لأول مرة؟",
    options: ["جسور والجميلة (Cesur ve Güzel)", "العشق الممنوع", "عاصي", "سيد أورتانوش"],
    correctAnswer: "جسور والجميلة (Cesur ve Güzel)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "جسدا فيه شخصيتي جسور وسوهان"
  },
  {
    id: "tr_q2_032",
    category: "فن تركي",
    points: 200,
    questionText: "ما هي المهنة الحقيقية لشخصية 'سيركان بولات' في مسلسل أنت أطرق بابي؟",
    options: ["مهندس معماري وصاحب شركة", "طبيب جراح", "محامي", "طيار مدني"],
    correctAnswer: "مهندس معماري وصاحب شركة",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "يدير شركة Art Life للمقاولات والتصميم"
  },
  {
    id: "tr_q2_033",
    category: "فن تركي",
    points: 200,
    questionText: "ما هو اسم المسلسل الشهير الذي يتناول حياة المافيا والاستخبارات ويستمر لأجزاء متعددة؟",
    options: ["وادي الذئاب", "الحفرة", "العهد", "المنظمة"],
    correctAnswer: "وادي الذئاب",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "بدأ عرضه عام 2003 واستمر لسنوات طويلة"
  },
  {
    id: "tr_q2_034",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم المسلسل الاجتماعي الذي يدور حول أربع أخوة يفقدون والديهم في يوم واحد؟",
    options: ["إخوتي (Kardeşlerim)", "الأزهار الحزينة", "حكايتنا", "أمي"],
    correctAnswer: "إخوتي (Kardeşlerim)",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "قدير وعمر وأسية وأمل"
  },
  {
    id: "tr_q2_035",
    category: "فن تركي",
    points: 200,
    questionText: "ما اسم الممثلة الشابة التي لعبت دور 'سيران' في مسلسل 'طائر الرفراف' (Yalı Çapkını)؟",
    options: ["عفراء ساراتش أوغلو", "هاندا أرتشيل", "ديميت أوزديمير", "إلشين سانجو"],
    correctAnswer: "عفراء ساراتش أوغلو",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "شاركت البطولة مع ميرت رمضان ديمير (فريد)"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط - 35 سؤالاً) ---
  // ==========================================
  {
    id: "tr_q2_036",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم الفيلم الرومانسي على نتفليكس الذي أعاد جمع بيرين سات وكيفانش تاتليتوغ عام 2023؟",
    options: ["النداء الأخير إلى إسطنبول", "ذكريات من الغرب", "طريق العودة", "عشق في نيويورك"],
    correctAnswer: "النداء الأخير إلى إسطنبول",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "فيلم تم تصوير معظم مشاهده في نيويورك"
  },
  {
    id: "tr_q2_037",
    category: "فن تركي",
    points: 400,
    questionText: "ما الرواية العالمية الشهيرة التي اقتُبس منها سيناريو مسلسل 'إيزل'؟",
    options: ["الكونت دي مونت كريستو", "البؤساء", "الفرسان الثلاثة", "أحدب نوتردام"],
    correctAnswer: "الكونت دي مونت كريستو",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "قصة الكاتب ألكسندر دوما عن الخيانة والانتقام"
  },
  {
    id: "tr_q2_038",
    category: "فن تركي",
    points: 400,
    questionText: "من هو الممثل القدير الذي فاز بجائزة إيمي العالمية كأفضل ممثل عن مسلسل 'شخصية' (Şahsiyet)؟",
    options: ["هالوك بيلغينر", "تحسين تكيندور", "أركان بتككايا", "شيتين تكيندور"],
    correctAnswer: "هالوك بيلغينر",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "جسّد شخصية 'أغاه بيوغلو' المصاب بالزهايمر"
  },
  {
    id: "tr_q2_039",
    category: "فن تركي",
    points: 400,
    questionText: "في مسلسل 'في الداخل'، ما الاسمان الشخصيان للأخوين المفصولين منذ الطفولة؟",
    options: ["سرب ومَرت", "عمر وإيزل", "كمال وسليم", "ياماش وصالح"],
    correctAnswer: "سرب ومَرت",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "أدى دوريهما شتاي أولسوي وأراس بولوت"
  },
  {
    id: "tr_q2_040",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الذي جسدت فيه بليين كاراهان دور 'الأميرة مهرماه سلطان'؟",
    options: ["حريم السلطان", "السلطانة كوسيم", "عاصمة عبد الحميد", "الملكة نازلي"],
    correctAnswer: "حريم السلطان",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "ابنة السلطان سليمان والسلطانة هويام"
  },
  {
    id: "tr_q2_041",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل النفسي المقتبس من كتب الدكتورة غولسيرين والمكون من جلسات علاجية؟",
    options: ["غرفة حمراء (Kırmızı Oda)", "شقة الأبرياء", "فتاة النافذة", "طبيب النفس"],
    correctAnswer: "غرفة حمراء (Kırmızı Oda)",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "يعرض قصصاً واقعية لمرضى في عيادة نفسية"
  },
  {
    id: "tr_q2_042",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الذي يجسد فيه كنان إميرزالي أوغلو دور محامٍ يسعى لتبرئة والده المحكوم بالإعدام؟",
    options: ["قبضاي (Karadayı)", "إيزل", "الوشم", "الهاوية"],
    correctAnswer: "قبضاي (Karadayı)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "شاركت فيه الممثلة برغوزار كوريل بدور القاضية فريدة"
  },
  {
    id: "tr_q2_043",
    category: "فن تركي",
    points: 400,
    questionText: "ما هو المسلسل القانوني الذي فاز بجائزة إيمي الدولية كأفضل مسلسل درامي عام 2023؟",
    options: ["القضاء (Yargı)", "الاصطدام", "المحاكمة", "السقف"],
    correctAnswer: "القضاء (Yargı)",
    answerImageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    hint: "يدور حول المدعي العام إيلغاز والمحامية جيلين"
  },
  {
    id: "tr_q2_044",
    category: "فن تركي",
    points: 400,
    questionText: "في مسلسل 'الأزهار الحزينة'، أين كانت تعيش فتيات المسلسل الرئيسيّات؟",
    options: ["في دار أيتام حكومي", "في مدرسة داخلية", "في حارة شعبية", "في إصلاحية الأحداث"],
    correctAnswer: "في دار أيتام حكومي",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "خمس فتيات يواجهن تحديات الحياة"
  },
  {
    id: "tr_q2_045",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم القناة التلفزيونية الحكومية الرسمية المنتجة لمسلسلات مثل أرطغرل وألب أرسلان؟",
    options: ["TRT 1", "ATV", "Kanal D", "Star TV"],
    correctAnswer: "TRT 1",
    answerImageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800",
    hint: "القناة الرسمية الأولى لهيئة الإذاعة والتلفزيون التركية"
  },
  {
    id: "tr_q2_046",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الكلاسيكي الذي يتناول تفكك عائلة 'علي رضا بك'؟",
    options: ["الأوراق المتساقطة", "على مر الزمان", "حكاية خريف", "العاصفة"],
    correctAnswer: "الأوراق المتساقطة",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "مقتبس عن رواية بالاسم نفسه لرشاد نوري غونتكين"
  },
  {
    id: "tr_q2_047",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم الشخصية الشريرة الأبناء غير الشقيق لياماش في 'الحفرة' والذي يعشق الأربيسك؟",
    options: ["فارتولو سعد الدين", "أكشين", "إدريس", "جلاسون"],
    correctAnswer: "فارتولو سعد الدين",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "لعب دوره الممثل أركان كولتشاك كوستنديل"
  },
  {
    id: "tr_q2_048",
    category: "فن تركي",
    points: 400,
    questionText: "ما هو اسم المسلسل التاريخي الملحمي الذي تناول سيرة السلطان الملوكي ألب أرسلان؟",
    options: ["نهضة السلاجقة العظمى / ألب أرسلان", "قيامة أرطغرل", "المؤسس عثمان", "جلال الدين الرومي"],
    correctAnswer: "نهضة السلاجقة العظمى / ألب أرسلان",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "بطولة باريش أردوتش وفخرية أوجن"
  },
  {
    id: "tr_q2_049",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الدرامي الذي تناول قصة مرض الوسواس القهري والتنظيف في شقة عائلة 'هان'؟",
    options: ["شقة الأبرياء (Masumlar Apartmanı)", "فتاة النافذة", "غرفة حمراء", "بيت الكوابيس"],
    correctAnswer: "شقة الأبرياء (Masumlar Apartmanı)",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "شخصيات صفيّة وغلبن وهان"
  },
  {
    id: "tr_q2_050",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل الذي جمع بين كنان إميرزالي أوغلو وجانسو دري (إيشان)؟",
    options: ["إيزل", "قبضاي", "الرحمة", "سيلا"],
    correctAnswer: "إيزل",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "أشهر ثنائي انتقامي في الدراما التركية"
  },
  {
    id: "tr_q2_051",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم مسلسل المافيا والأكشن الذي قام ببطولته أنجين أكيوريك بدور 'داهان' بتهمة قتل مظلوم؟",
    options: ["حتى الممات (Ölene Kadar)", "العريس الرائع", "العهد", "رامو"],
    correctAnswer: "حتى الممات (Ölene Kadar)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "شاركت فيه فخرية أوجن بدور المحامية سيلفي"
  },
  {
    id: "tr_q2_052",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الرومانسي الناجح الذي شارك في بطولته بوراك دينيز مع ألينا بوز بدور الحارس الشخصي؟",
    options: ["مرعشلي (Maraşlı)", "شخص آخر", "الحب لا يفهم الكلام", "المعلم"],
    correctAnswer: "مرعشلي (Maraşlı)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "قصة الجندي السابق والمصورة ماهور"
  },
  {
    id: "tr_q2_053",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل الدرامي الذي يعالج قضية تبادل طفلتين في المستشفى عند الولادة لتبدأ صراعات العائلتين؟",
    options: ["عشق ودموع / حطام (Paramparça)", "الأوراق المتساقطة", "على مر الزمان", "اسمها زهرة"],
    correctAnswer: "عشق ودموع / حطام (Paramparça)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "بطولة أركان بتككايا ونورجول يشيلتشاي"
  },
  {
    id: "tr_q2_054",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الذي قامت ببطولته جانسو دري بدور معلمة تحاول إنقاذ الطفلة 'ملاَك' من التعذيب؟",
    options: ["أمي (Anne)", "خائنة", "سيلا", "شخصية"],
    correctAnswer: "أمي (Anne)",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "مقتبس عن مسلسل ياباني شهير بنفس الفكرة"
  },
  {
    id: "tr_q2_055",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل النفسي والدرامي الإسباني المقتبس الذي قامت ببطولته جانسو دري بدور 'آسيا'؟",
    options: ["عديم الوفاء / خائنة (Sadakatsiz)", "أمي", "إيزل", "شخصية"],
    correctAnswer: "عديم الوفاء / خائنة (Sadakatsiz)",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "طبيبة تكتشف خيانة زوجها فولكان وتبدأ بالانتقام"
  },
  {
    id: "tr_q2_056",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم الممثلة التي جسدت دور 'نالان' في مسلسل 'فتاة النافذة' (Camdaki Kız)؟",
    options: ["بورجو بيريجيك", "ديميت أوزديمير", "نسليهان أتاغول", "بيرين سات"],
    correctAnswer: "بورجو بيريجيك",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "فتاة نشأت تحت سيطرة صارمة من جدتها هاندن"
  },
  {
    id: "tr_q2_057",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل التاريخي الضخم الذي تناول حكاية أمير البحار العثماني وخير الدين بربروس؟",
    options: ["بربروسا: سيف البحر المتوسط", "حريم السلطان", "عاصمة عبد الحميد", "المؤسس عثمان"],
    correctAnswer: "بربروسا: سيف البحر المتوسط",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "بطولة إنجين ألتان دوزياتان أولوش ريس"
  },
  {
    id: "tr_q2_058",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل المافيا الدرامي الذي حظي بشعبية كبيرة وقام ببطولته مراد يلدريم بدور 'رامو'؟",
    options: ["رامو (Ramo)", "العزيز", "الرجل الخفي", "القبضاي"],
    correctAnswer: "رامو (Ramo)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "يدور حول عصابة حارة في مدينة أضنة"
  },
  {
    id: "tr_q2_059",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الذي جمع أراس بولوت وديلان تشيشيك دينيز في الموسم الأول بدوري ياماش وسنا؟",
    options: ["الحفرة", "في الداخل", "العهد", "الاصطدام"],
    correctAnswer: "الحفرة",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "قصة حب تنتهي بتضحية سنا الغرق داخل الصندوق"
  },
  {
    id: "tr_q2_060",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل الكلاسيكي الشهير المقتبس عن رواية 'عاصي' والذي تدور أحداثه في مزارع أنطاكيا؟",
    options: ["عاصي (Asi)", "سنوات الضياع", "بائع الورد", "مزرعة الهانم"],
    correctAnswer: "عاصي (Asi)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "بطولة توبا بويوكوستين ومورات يلدريم (أمير)"
  },
  {
    id: "tr_q2_061",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل الأكشن والغموض الذي يتناول جهاز الاستخبارات التركي وحقق نجاحاً كبيراً منذ 2021؟",
    options: ["المنظمة (Teşkilat)", "العهد", "الذئب", "الوادي"],
    correctAnswer: "المنظمة (Teşkilat)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "بطولة تشاغلار أرطغرل ودنيز بايسال في أجزائه الأولى"
  },
  {
    id: "tr_q2_062",
    category: "فن تركي",
    points: 400,
    questionText: "ما هو المسلسل الذي شارك فيه الممثل باريش أردوتش وبورجو بيريجيك وتناول الانتقام والحب باسم 'ديلا وكوزغون'؟",
    options: ["الغراب (Kuzgun)", "حب للإيجار", "فتاة النافذة", "الاصطدام"],
    correctAnswer: "الغراب (Kuzgun)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "يعود كوزغون بعد 20 عاماً للانتقام لمقتل والده الشرطي"
  },
  {
    id: "tr_q2_063",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الذي ظهر فيه الممثل ألب نافروز بشخصية 'جينك' أمام ألينا بوز بدور 'عذراء'؟",
    options: ["لا تترك يدي (Elimi Bırakma)", "فضيلة وبناتها", "أسرار البنات", "وجع القلب"],
    correctAnswer: "لا تترك يدي (Elimi Bırakma)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "يحكي قصة طاهية شابة تلتقي بواريث عائلة غنية"
  },
  {
    id: "tr_q2_064",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم مسلسل الدراما والعائلة الشهير الذي قامت ببطولته نازان كسال بدور الأم 'فضيلة'؟",
    options: ["فضيلة وبناتها (Fazilet Hanım ve Kızları)", "بنات الشمس", "الأزهار الحزينة", "حكايتنا"],
    correctAnswer: "فضيلة وبناتها (Fazilet Hanım ve Kızları)",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "ابنتاها هما هازان وياغيز وإيجيه"
  },
  {
    id: "tr_q2_065",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل الذي جمع بين كيفانش تاتليتوغ والتشين سانجو وتأثر بأحداث حادث سير مأساوي؟",
    options: ["الاصطدام (Çarpışma)", "جسور والجميلة", "سعيد وشورى", "العشق الممنوع"],
    correctAnswer: "الاصطدام (Çarpışma)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "يبدأ بحادث تصادم 4 سيارات يغير حياة الأبطال"
  },
  {
    id: "tr_q2_066",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم فيلم الأنيميشن والدراما التاريخي الذي يحكي قصة فتاة كورية وضابط تركي في الحرب الكورية؟",
    options: ["أيلا: ابنة الحرب (Ayla: The Daughter of War)", "معجزة 7", "جرح أمي", "فداء"],
    correctAnswer: "أيلا: ابنة الحرب (Ayla: The Daughter of War)",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "فيلم مقتبس من قصة حقيقية للضابط سليمان"
  },
  {
    id: "tr_q2_067",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الذي أدت فيه ديميت أوزديمير دور 'زينب' أمام إبراهيم تشيليكول بدور 'مهدي'؟",
    options: ["قدري هو المنزل الذي ولدت فيه", "طائر المبكر", "حب أبيض وأسود", "رائحة التوت"],
    correctAnswer: "قدري هو المنزل الذي ولدت فيه",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "مقتبس من كتاب الدكتورة غولسيرين بودايتشي أوغلو"
  },
  {
    id: "tr_q2_068",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الرومانسي الشبابي الذي شارك فيه يوسف جيم وأصلي أ Enver بـ 'أسلي وبوراك'؟",
    options: ["رائحة التوت (Çilek Kokusu)", "رقم 309", "العريس الرائع", "موسم الكرز"],
    correctAnswer: "رائحة التوت (Çilek Kokusu)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "تدور قصته بين فتاة تصنع الحلويات وشاب ثري"
  },
  {
    id: "tr_q2_069",
    category: "فن تركي",
    points: 400,
    questionText: "ما اسم المسلسل الرومانسي الكوميدي الشهير الذي جمع بين أوزغي غوريل وسيركان تشاي أوغلو بدور 'إياد وأييز'؟",
    options: ["موسم الكرز (Kiraz Mevsimi)", "رائحة التوت", "الحب لا يفهم الكلام", "العريس الرائع"],
    correctAnswer: "موسم الكرز (Kiraz Mevsimi)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "من أشهر المسلسلات الشبابية لعام 2014"
  },
  {
    id: "tr_q2_070",
    category: "فن تركي",
    points: 400,
    questionText: "ما المسلسل المافيا والأكشن الذي قام ببطولته تولغا ساريتش بشخصية 'علي رضا' وعُرض عام 2020؟",
    options: ["خطأ / علي رضا (Arıza)", "العهد", "المنظمة", "رامو"],
    correctAnswer: "خطأ / علي رضا (Arıza)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "سائق تاكسي يتحول لمواجهة أباطرة الجريمة"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب - 30 سؤالاً) ---
  // ==========================================
  {
    id: "tr_q3_071",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الفيلم التركي للمخرج نوري بيلغي جيلان الذي فاز بالسعفة الذهبية في مهرجان كان عام 2014؟",
    options: ["بيات شتوي (Winter Sleep)", "حدث ذات مرة في الأناضول", "ثلاثة قردة", "شجرة الإجاص"],
    correctAnswer: "بيات شتوي (Winter Sleep)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "فيلم درامي فلسفي مصور في كابادوكيا"
  },
  {
    id: "tr_q3_072",
    category: "فن تركي",
    points: 600,
    questionText: "في 'وادي الذئاب'، ما اسم العملية السرية الحقيقية التي تحول فيها 'علي جاندان' إلى 'مراد علمدار'؟",
    options: ["عملية وادي الذئاب", "عملية السيف", "عملية الظل", "عملية الهلال"],
    correctAnswer: "عملية وادي الذئاب",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "تخطيط أصلان أكلين مديراً للمخابرات السرية"
  },
  {
    id: "tr_q3_073",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الرواية الكلاسيكية المنشورة عام 1943 للكاتب 'صباح الدين علي' وتعد من أروع الأعمال الأدبية التركية؟",
    options: ["مادونا صاحب المعطف الفرو", "الشيطان الذي في داخلنا", "يوسف المديت", "العشق الخالد"],
    correctAnswer: "مادونا صاحب المعطف الفرو",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "قصة رائف أفندي والرسامة ماريا بودر"
  },
  {
    id: "tr_q3_074",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم أول مسلسل تركي أصلي قامت منصة 'نتفليكس' بإنتاجه بالكامل وعرضه عام 2018؟",
    options: ["المحافظ / الحامي (The Protector)", "عطايا (The Gift)", "عشق 101", "المصمم"],
    correctAnswer: "المحافظ / الحامي (The Protector)",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "بطولة شتاي أولسوي بشخصية 'هاكان'"
  },
  {
    id: "tr_q3_075",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الطبيبة النفسية والمؤلفة الشهيرة صاحبة روايات 'فتاة النافذة' و'شقة الأبرياء'؟",
    options: ["غولسيرين بودايتشي أوغلو", "إليف شافاق", "خالدة أديب أديفار", "عائشة كولين"],
    correctAnswer: "غولسيرين بودايتشي أوغلو",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "معظم رواياتها تحولت إلى أشهر مسلسلات تركية"
  },
  {
    id: "tr_q3_076",
    category: "فن تركي",
    points: 600,
    questionText: "في مسلسل 'إيزل'، ما اسم الشطرنجي والأب الروحي الذي علّم إيزل قواعد الحياة والانتقام؟",
    options: ["الخال رامز كرايسكي (Ramiz Dayı)", "سردار", "كنعان بيركان", "علي القشة"],
    correctAnswer: "الخال رامز كرايسكي (Ramiz Dayı)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "أدى دوره في الكبر الممثل القدير تونجل كورتيز"
  },
  {
    id: "tr_q3_077",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الفيلم التركي التأثري الصادر عام 2019 وتدور أحداثه حول أب مصاب بمرض عقلي وابنته 'أوفا'؟",
    options: ["معجزة في الزنزانة رقم 7", "أيلا: ابنة الحرب", "همس لو أنسيت", "جرح أمي"],
    correctAnswer: "معجزة في الزنزانة رقم 7",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "بطولة أراس بولوت إينملي بشخصية ميمو"
  },
  {
    id: "tr_q3_078",
    category: "فن تركي",
    points: 600,
    questionText: "ما هي الحقبة الزمنية التي بدأت فيها أحداث مسلسل 'على مر الزمان'؟",
    options: ["أواخر ستينيات القرن العشرين (1967)", "ثمانينيات القرن العشرين", "خمسينيات القرن العشرين", "عام 1990"],
    correctAnswer: "أواخر ستينيات القرن العشرين (1967)",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "قصة القبطان علي وعائلته"
  },
  {
    id: "tr_q3_079",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل الذي يستعرض حياة مجتمع اليهود السفارديم في إسطنبول في الخمسينيات على نتفليكس؟",
    options: ["النادي (Kulüp)", "الناشز", "فاطمة", "الوشم"],
    correctAnswer: "النادي (Kulüp)",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "بطولة قوكشي باهادير وباريش أردوتش"
  },
  {
    id: "tr_q3_080",
    category: "فن تركي",
    points: 600,
    questionText: "ما هو المسلسل الذي يعتبر أول عمل تركي تمت دبلجته إلى اللغة العربية وعرضه تلفزيونياً عام 2008؟",
    options: ["إكليل الورد (Çemberimde Gül Oya)", "نور", "سنوات الضياع", "ميرنا وخليل"],
    correctAnswer: "إكليل الورد (Çemberimde Gül Oya)",
    answerImageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800",
    hint: "عرض قبل شهرة نور وسنوات الضياع بأسابيع"
  },
  {
    id: "tr_q3_081",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المخرج التركي الشهير الذي أخرج فيلم 'حدث ذات مرة في الأناضول' وتُرشح لأبرز الجوائز العالمية؟",
    options: ["نوري بيلغي جيلان", "فاتح أكين", "سينان تشيتين", "سميح كابلانوغلو"],
    correctAnswer: "نوري بيلغي جيلان",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "أبرز مخرجي السينما الفلسفية والمهرجانات في تركيا"
  },
  {
    id: "tr_q3_082",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الممثل القدير الذي جسد شخصية 'سليمان القانوني' في مسلسل حريم السلطان؟",
    options: ["خالد أرغينتش", "كنان إميرزالي أوغلو", "أركان بتككايا", "بوراك أوزجيفيت"],
    correctAnswer: "خالد أرغينتش",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "قدم أداءً أسطورياً استمر لـ 4 مواسم متتالية"
  },
  {
    id: "tr_q3_083",
    category: "فن تركي",
    points: 600,
    questionText: "في مسلسل 'العشق الممنوع'، ما اسم القرية أو المنطقة التي انتحرت فيها سمر (Bihter) في النهاية؟",
    options: ["قصر عدنان زياكيل في إسطنبول", "المزرعة في سابانجا", "باريس", "إزمير"],
    correctAnswer: "قصر عدنان زياكيل في إسطنبول",
    answerImageUrl: "https://images.unsplash.com/photo-1518100070043-30f14f177341?w=800",
    hint: "المشهد الأيقوني الشهير داخل غرفتها في القصر"
  },
  {
    id: "tr_q3_084",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل التاريخي الذي ركز على صراع الدولة العثمانية ضد الجواسيس والفرسان في القدس والبلقان؟",
    options: ["عاصمة عبد الحميد", "كوت العمارة", "المؤسس عثمان", "فلينتا (Filinta)"],
    correctAnswer: "فلينتا (Filinta)",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "مسلسل بوليسي تاريخي يدور حول محقق يدعى مصطفى فلينتا"
  },
  {
    id: "tr_q3_085",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل الذي يستند إلى سيرة الشاعر والصوفي الشهير 'يونس أمره'؟",
    options: ["يونس أمره: رحلة العشق", "جلال الدين الرومي", "أحمد يسوي", "الحلاق أصلان"],
    correctAnswer: "يونس أمره: رحلة العشق",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "عرض على قناة TRT1 وحقق نجاحاً روحانياً كبيراً"
  },
  {
    id: "tr_q3_086",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الممثلة التي شاركت البطولة في مسلسل 'سعيد وشورى' (Kurt Seyit ve Şura) بجانب كيفانش تاتليتوغ؟",
    options: ["فرح زينب عبد الله", "بيرين سات", "توبا بويوكوستين", "هازال كايا"],
    correctAnswer: "فرح زينب عبد الله",
    answerImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    hint: "لعبت دور الشابة الروسية النبيلة شورى"
  },
  {
    id: "tr_q3_087",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الفيلم التركي الشهير الذي مثل تركيا في سباق الأوسكار لأفضل فيلم أجنبي عام 2018؟",
    options: ["أيلا: ابنة الحرب", "بيات شتوي", "شجرة الإجاص البرية", "معجزة في الزنزانة 7"],
    correctAnswer: "أيلا: ابنة الحرب",
    answerImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    hint: "قصة الجندي سليمان والطفلة الكورية"
  },
  {
    id: "tr_q3_088",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل الخيالي الفنتازي المستوحى من الأسطورة العثمانية 'عطايا' (The Gift) على نتفليكس؟",
    options: ["عطايا (Atiye)", "المحافظ", "شاهماران", "101"],
    correctAnswer: "عطايا (Atiye)",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "بطولة بيرين سات بدور رسامة تكتشف ارتباطها بموقع غوبكلي تبه التاريخي"
  },
  {
    id: "tr_q3_089",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل الذي يدور حول قصة طبيب جراح ينتقل إلى قرية نائية في الأناضول ويسمى 'طبيب المدينة'؟",
    options: ["طبيب المدينة (Town Doctor)", "الطبيب المعجزة", "نبضات قلب", "الملك"],
    correctAnswer: "طبيب المدينة (Town Doctor)",
    answerImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    hint: "بطولة أوزان أكتشالي وخالد أوزغور ساري"
  },
  {
    id: "tr_q3_090",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الكاتب والسيناريست التركي الذي كتب سيناريو مسلسل 'الحفرة' و'في الداخل' و'ثلاث قرش'؟",
    options: ["داملا سيمار / جوكهان هورزوم", "بيتر غولد", "إيتشين بولوت", "أتاكان يلماز"],
    correctAnswer: "داملا سيمار / جوكهان هورزوم",
    answerImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    hint: "اشتهر بكتابة ثلاثية الأكشن الدرامي لشركة القمر"
  },
  {
    id: "tr_q3_091",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الشركة الإنتاجية التركية الضخمة المملوكة للمنتج كرم تشاتاي والمسؤولة عن العشق الممنوع وإيزل والحفرة؟",
    options: ["Ay Yapım (شركة القمر للإنتاج)", "TIMS&B", "Bozdağ Film", "OGM Pictures"],
    correctAnswer: "Ay Yapım (شركة القمر للإنتاج)",
    answerImageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800",
    hint: "أكبر وأشهر شركة إنتاج درامي في تركيا"
  },
  {
    id: "tr_q3_092",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم شركة الإنتاج التي يملكها المنتج محمد بوزداغ والمسؤولة عن قيامة أرطغرل والمؤسس عثمان؟",
    options: ["Bozdağ Film (بوزداغ فيلم)", "Ay Yapım", "Gold Film", "MF Yapım"],
    correctAnswer: "Bozdağ Film (بوزداغ فيلم)",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "متخصصة في إنتاج المسلسلات التاريخية الملحمية"
  },
  {
    id: "tr_q3_093",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل الذي شارك فيه شتاي أولسوي بدور خياط شهير يخفي أسراراً عائلية مظلمة على نتفليكس؟",
    options: ["الخياط (Terzi)", "المحافظ", "في الداخل", "المد والجزر"],
    correctAnswer: "الخياط (Terzi)",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "لعب فيه دور الخياط 'بيمامي'"
  },
  {
    id: "tr_q3_094",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل الأسطوري الذي أدى فيه خالد أرغينتش دور 'جودت' الضابط العثماني المنتقل للجيش اليوناني كجاسوس؟",
    options: ["أنت وطني (Vatanım Sensin)", "حريم السلطان", "على مر الزمان", "كوت العمارة"],
    correctAnswer: "أنت وطني (Vatanım Sensin)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "شاركت ببطولته زوجته بيرغوزار كوريل بدور عزیزة"
  },
  {
    id: "tr_q3_095",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل الذي تناول حكاية 'عارف' وسلسلة الجرائم الغامضة في السبعينيات وقام ببطولته كنان إميرزالي أوغلو؟",
    options: ["ألف (Alef)", "قبضاي", "إيزل", "الوشم"],
    correctAnswer: "ألف (Alef)",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "مسلسل تحقيقات صوفي وغموض قصير من 8 حلقات"
  },
  {
    id: "tr_q3_096",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الرواية التاريخية الشهيرة المقتبس منها مسلسل 'طائر النمنمة' للكاتب رشاد نوري غونتكين؟",
    options: ["Çalıkuşu (طائر النمنمة)", "Yaprak Dökümü", "Aşk-ı Memnu", "Kurt Seyit"],
    correctAnswer: "Çalıkuşu (طائر النمنمة)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تحكي قصة المعلمة الشابة فريدة وشاب يدعى كامران"
  },
  {
    id: "tr_q3_097",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم الممثل الذي أدى شخصية 'سليمان بيك' في مسلسل 'قيامة أرطغرل' وكان والداً لأرطغرل؟",
    options: ["سردار غوكهان", "إنجين ألتان", "عثمان سوكوت", "نور الدين سونمز"],
    correctAnswer: "سردار غوكهان",
    answerImageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    hint: "سليمان شاه زعيم قبيلة القاي"
  },
  {
    id: "tr_q3_098",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل المقتبس عن الأسطورة الثعبانية الشعبية التركية والذي قامت ببطولته سيرينات ساريكايا وبوراك دنيز على نتفليكس؟",
    options: ["شاهماران (Şahmaran)", "عطايا", "المحافظ", "المستيقظون"],
    correctAnswer: "شاهماران (Şahmaran)",
    answerImageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    hint: "قصة مخلوقة أسطورية نسيج بين الإنسان والأفعى"
  },
  {
    id: "tr_q3_099",
    category: "فن تركي",
    points: 600,
    questionText: "ما هو اسم الشخصية الأسطورية المقاتلة التي جسدها الممثل 'نور الدين سونمز' في مسلسلي أرطغرل وعثمان واشتهر بفأسه؟",
    options: ["بامسي بيروك", "تورغوت ألب", "دوغان ألب", "عبد الرحمن ألب"],
    correctAnswer: "بامسي بيروك",
    answerImageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    hint: "المقاتل الفكاهي والشجاع الذي يقاتل بسيفين"
  },
  {
    id: "tr_q3_100",
    category: "فن تركي",
    points: 600,
    questionText: "ما اسم المسلسل التاريخي الضخم الذي يتناول قصة فتح القسطنطينية على يد السلطان محمد الفاتح والذي أُنتج كمسلسل وثائقي درامي من نتفليكس؟",
    options: ["بزوغ الإمبراطورية: العثمانيون (Rise of Empires: Ottoman)", "الفاتح", "مملكة الشرق", "سلطان الفتوحات"],
    correctAnswer: "بزوغ الإمبراطورية: العثمانيون (Rise of Empires: Ottoman)",
    answerImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    hint: "قام ببطولته الممثل جيم يغيت أوزوموغلو بدور السلطان محمد الفاتح"
  }
];
