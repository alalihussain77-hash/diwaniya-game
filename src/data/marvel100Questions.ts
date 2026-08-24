import { Question } from '../types';

const marvelImages = [
  '/marvel/marvel_1.jpg',
  '/marvel/marvel_2.jpg',
  '/marvel/marvel_3.jpg',
  '/marvel/marvel_4.jpg',
];

const rawMarvelQuestions: Array<{
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
  points?: number;
}> = [
  {
    question: "ما هو الاسم الحقيقي لشخصية الرجل الحديدي (Iron Man) في عالم مارفل؟",
    options: ["توني ستارك (Tony Stark)", "ستيف روجرز", "بروس بانر", "بيتر باركر"],
    correctAnswer: "توني ستارك (Tony Stark)",
    explanation: "توني ستارك هو الملياردير والمخترع والعبقري ومؤسس تكنولوجيا دروع Iron Man.",
    hint: "الملياردير العبقري صاحب مفاعل القوس",
    points: 200,
  },
  {
    question: "ما اسم الجاسوسة الروسية الخارقة وبطلة فريق المنتقمين (Black Widow)؟",
    options: ["ناتاشا رومانوف (Natasha Romanoff)", "كارول دانفرز", "واندا ماكسيموف", "يلينا بيلوفا"],
    correctAnswer: "ناتاشا رومانوف (Natasha Romanoff)",
    explanation: "ناتاشا رومانوف هي الأرملة السوداء Black Widow.",
    hint: "العميلة السابقة في برنامج الغرفة الحمراء",
    points: 200,
  },
  {
    question: "ما اسم المعدن الفائق الصلابة المكون لدرع كابتن أمريكا والموجود بوفرة في واكاندا؟",
    options: ["الفايبرانيوم (Vibranium)", "الأدامانتيوم", "الكربتونايت", "التيتانيوم"],
    correctAnswer: "الفايبرانيوم (Vibranium)",
    explanation: "الفايبرانيوم هو المعدن النادر الذي يمتص الاهتزازات والطاقة الحركية.",
    hint: "معدن مملكة واكاندا النادر",
    points: 200,
  },
  {
    question: "ما اسم الشرير الفضائي العملاق القادم من تيتان والباحث عن أحجار الأبدية الستة؟",
    options: ["ثانوس (Thanos)", "لوكي", "أولترون", "كانغ الفاتح"],
    correctAnswer: "ثانوس (Thanos)",
    explanation: "ثانوس سعى لجمع أحجار الأبدية لمسح نصف كائنات الكون بإصبعه.",
    hint: "صاحب قفاز الأبدية الأرجواني",
    points: 200,
  },
  {
    question: "ما اسم الشقيق المتبنى لـ ثور وإله الخديعة والحيل في عالم مارفل؟",
    options: ["لوكي (Loki)", "أودين", "هيلا", "بالدر"],
    correctAnswer: "لوكي (Loki)",
    explanation: "لوكي هو أمير أزغارد وإله الحيل والدهاء.",
    hint: "إله الحيل صاحب الخوذة ذات القرنين",
    points: 200,
  },
  {
    question: "ما اسم العالم العبقري الذي يتحول إلى العملاق الأخضر الخارق (Hulk) عند غضبه؟",
    options: ["د. بروس بانر (Bruce Banner)", "ستيف روجرز", "بيتر كويل", "ستيفن سترينج"],
    correctAnswer: "د. بروس بانر (Bruce Banner)",
    explanation: "الدكتور بروس بانر تعرض لأشعة غاما وتحول للعملاق الأخضر الغاضب Hulk.",
    hint: "عالم أشعة غاما",
    points: 300,
  },
  {
    question: "ما اسم المراهق من كوينز الذي اكتسب قدرات العنكبوت وتدرب تحت إشراف توني ستارك؟",
    options: ["بيتر باركر (Peter Parker)", "مايلز موراليس", "هاري أوزبورن", "نيد ليدز"],
    correctAnswer: "بيتر باركر (Peter Parker)",
    explanation: "بيتر باركر هو سبايدرمان (Spider-Man).",
    hint: "مراهق كوينز صاحب خيوط العنكبوت",
    points: 300,
  },
  {
    question: "ما اسم ملك مملكة واكاندا الأفريقية المتطورة الذي يحمل لقب الفهد الأسود (Black Panther)؟",
    options: ["تشالا (T'Challa)", "مباكو", "كيلمنغر", "أوكوي"],
    correctAnswer: "تشالا (T'Challa)",
    explanation: "الملك تشالا هو البطل الخارق Black Panther الذي جسده الممثل الراحل تشادويك بوزمان.",
    hint: "ملك واكاندا الشجاع (Wakanda Forever)",
    points: 300,
  },
  {
    question: "ما اسم مطرقة ثور السحرية المصنوعة من معدن أورو والتي لا يستطيع حملها إلا من كان جديراً؟",
    options: ["ميولنير (Mjolnir)", "ستورمبريكر", "غونغنير", "إكسكاليبور"],
    correctAnswer: "ميولنير (Mjolnir)",
    explanation: "مطرقة ميولنير هي السلاح الأسطوري لإله الرعد ثور.",
    hint: "Mjolnir",
    points: 300,
  },
  {
    question: "ما هي العبارة الأخيرة الأيقونية التي قالها توني ستارك قبل أن يفرقع أصابعه بالقفاز في Endgame؟",
    options: ["\"And I... am... Iron Man!\"", "\"I am inevitable!\"", "\"Avengers assemble!\"", "\"We are Groot!\""],
    correctAnswer: "\"And I... am... Iron Man!\"",
    explanation: "رد بها توني ستارك على مقولة ثانوس 'I am inevitable' مضحياً بنفسه لإنقاذ الكون.",
    hint: "أنا هو الرجل الحديدي",
    points: 300,
  },
  {
    question: "ما اسم الذكاء الاصطناعي الصوتي الأصلي الذي صممه توني ستارك لإدارة دروعه وقصره قبل 'جمعة' (FRIDAY)؟",
    options: ["جارفيس (J.A.R.V.I.S.)", "كارين", "إيديث (EDITH)", "أولترون"],
    correctAnswer: "جارفيس (J.A.R.V.I.S.)",
    explanation: "JARVIS هو المساعد الرقمي الذي تحول لاحقاً إلى شخصية Vision بدمجه مع حجر العقل.",
    hint: "Just A Rather Very Intelligent System",
    points: 400,
  },
  {
    question: "ما اسم الكوكب وموطن الإله ثور الذي دُمّر في فيلم Thor: Ragnarok؟",
    options: ["أزغارد (Asgard)", "سوكوفيا", "زاندر", "تيتان"],
    correctAnswer: "أزغارد (Asgard)",
    explanation: "دُمّر كوكب أزغارد على يد الشرير سورتور لهزيمة هيلا أخت ثور الشريرة.",
    hint: "مملكة الآلهة الإسكندنافية",
    points: 400,
  },
  {
    question: "ما اسم جراح الأعصاب العبقري الذي تعرض لحادث سير وأصبح الساحر الأعظم وحامي الأرض من الأخطار الصوفية؟",
    options: ["د. ستيفن سترينج (Doctor Strange)", "د. هانك بيم", "د. بروس بانر", "د. أوتو أوكتافيوس"],
    correctAnswer: "د. ستيفن سترينج (Doctor Strange)",
    explanation: "الدكتور ستيفن سترينج تعلم فنون السحر في كامار-تاج وأصبح حارس عين أغاموتو وحجر الزمن.",
    hint: "Doctor Strange",
    points: 400,
  },
  {
    question: "ما اسم الرامي الماهر صاحب القوس والسهام الدقيقة العضو المؤسس في المنتقمين؟",
    options: ["كلينت بارتون (Hawkeye)", "سام ويلسون", "باكي بارنز", "سكوت لانغ"],
    correctAnswer: "كلينت بارتون (Hawkeye)",
    explanation: "كلينت بارتون هو هوك آي (Hawkeye) وبطل القوس في الفريق.",
    hint: "عين الصقر Hawkeye",
    points: 400,
  },
  {
    question: "ما اسم الشخصية الفضائية الشجرية الناطقة بعبارة واحدة فقط والمحبوبة في Guardians of the Galaxy؟",
    options: ["غروت (Groot)", "روكيت راكون", "دراكس", "يوندا"],
    correctAnswer: "غروت (Groot)",
    explanation: "غروت يردد دائماً جملته الأيقونية 'I am Groot'.",
    hint: "I am Groot",
    points: 400,
  },
  {
    question: "من هو الصديق المقرب لـ ستيف روجرز منذ الحرب العالمية والذي غُسل دماغه ليصبح جندي الشتاء (Winter Soldier)؟",
    options: ["باكي بارنز (Bucky Barnes)", "سام ويلسون", "جون ووكر", "جيمس رودس"],
    correctAnswer: "باكي بارنز (Bucky Barnes)",
    explanation: "باكي بارنز حُوّل لذراع معدنية قاتلة عبر هايدرا قبل استعادة وعيه بمساعدة ستيف.",
    hint: "Bucky ذو الذراع المعدنية الفضية",
    points: 500,
  },
  {
    question: "ما اسم قائد منظمة شيلد (S.H.I.E.L.D.) ذو الرقعة على عينه الذي جمع فريق المنتقمين لأول مرة؟",
    options: ["نيك فيوري (Nick Fury)", "فيل كولسون", "ألكسندر بيرس", "ماريا هيل"],
    correctAnswer: "نيك فيوري (Nick Fury)",
    explanation: "نيك فيوري (جسده صامويل إل جاكسون) هو العقل المدبر وراء مبادرة المنتقمين (Avengers Initiative).",
    hint: "Nick Fury",
    points: 500,
  },
  {
    question: "ما هو حجر الأبدية الذي كان موجوداً داخل صولجان لوكي ثم زُرع في جبهة البطل فيجن (Vision)؟",
    options: ["حجر العقل (Mind Stone)", "حجر القوة", "حجر الفضاء", "حجر الروح"],
    correctAnswer: "حجر العقل (Mind Stone)",
    explanation: "حجر العقل الأصفر هو الذي منح فيجن وعيه وقوته وكان داخل صولجان لوكي.",
    hint: "الحجر الأصفر المسؤول عن الوعي",
    points: 500,
  },
  {
    question: "ما اسم الكوكب المهجور الذي كان يتطلب التضحية بروح شخص تحبه للحصول على حجر الروح (Soul Stone)؟",
    options: ["فورمير (Vormir)", "تيتان", "موراغ", "نيدافيلير"],
    correctAnswer: "فورمير (Vormir)",
    explanation: "فورمير هو الكوكب الذي يحرسه الجمجمة الحمراء وتطلّب التضحية بـ غامورا وناتاشا.",
    hint: "Vormir",
    points: 500,
  },
  {
    question: "ما هي الجملة الحماسية التي ينادي بها كابتن أمريكا لجمع كافة الأبطال في المعارك الحاسمة؟",
    options: ["\"Avengers... Assemble!\"", "\"Wakanda Forever!\"", "\"To infinity and beyond!\"", "\"Suit up!\""],
    correctAnswer: "\"Avengers... Assemble!\"",
    explanation: "قالها كابتن أمريكا لأول مرة مكتملة في المعركة الكبرى ضد ثانوس في Avengers: Endgame.",
    hint: "Avengers... Assemble!",
    points: 500,
  },
  {
    question: "ما هو اسم منظمة الشر السرية التي اخترقت منظمة شيلد لعقود حاملة شعار 'اقطع رأساً ينمو اثنان'؟",
    options: ["هايدرا (HYDRA)", "إيم (A.I.M.)", "الخواتم العشرة", "السحرة السود"],
    correctAnswer: "هايدرا (HYDRA)",
    explanation: "هايدرا هي المنظمة النازية الفاشية السرية التي تغلغلت داخل شيلد حتى أحداث The Winter Soldier.",
    hint: "Hail HYDRA",
    points: 600,
  },
  {
    question: "من هو صانع أسلحة النجوم القزم العملاق في نيدافيلير الذي صنع قفاز ثانوس وفأس ستورمبريكر لـ ثور؟",
    options: ["إيتري (Eitri)", "غراندماستر", "كوليكتور", "كورغ"],
    correctAnswer: "إيتري (Eitri)",
    explanation: "إيتري ملك الأقزام في نيدافيلير (جسده بيتر دينكلاج) صاغ أعظم أسلحة الكون.",
    hint: "الملك القزم في نيدافيلير",
    points: 600,
  },
  {
    question: "ما اسم الكيان الذكاء الاصطناعي الشرير الذي صنعه توني وبانر لحماية العالم لكنه قرر إبادة البشرية في فيلمه الشهير 2015؟",
    options: ["أولترون (Ultron)", "كانغ", "مودوك", "أرنيم زولا"],
    correctAnswer: "أولترون (Ultron)",
    explanation: "أولترون تمرد على صانعيه وسعى لرفع مدينة سوكوفيا وإسقاطها كالنيزك لإبادة الجنس البشري.",
    hint: "Avengers: Age of Ultron",
    points: 600,
  },
  {
    question: "ما هو الاسم الحقيقي للبطل النملة (Ant-Man) السارق السابق الذي أصبح عضواً حاسماً في المنتقمين؟",
    options: ["سكوت لانغ (Scott Lang)", "هانك بيم", "إيريك أوغرادي", "لويس"],
    correctAnswer: "سكوت لانغ (Scott Lang)",
    explanation: "سكوت لانغ (جسده بول رود) هو من اقترح خطة السفر عبر الزمن عبر عالم الكم (Quantum Realm).",
    hint: "Scott Lang",
    points: 600,
  },
  {
    question: "ما اسم الساحرة القرمزية القوية القادرة على تغيير الواقع والتي أنشأت واقع ويكسفيلد الافتراضي؟",
    options: ["واندا ماكسيموف (Wanda Maximoff)", "أغاثا هاركنيس", "هيلا", "أنشينت ون"],
    correctAnswer: "واندا ماكسيموف (Wanda Maximoff)",
    explanation: "واندا ماكسيموف هي الساحرة القرمزية (Scarlet Witch) ذات القوى السحرية الفوضوية العظمى.",
    hint: "Scarlet Witch",
    points: 600,
  }
];

export const marvel100Questions: Question[] = rawMarvelQuestions.map((q, idx) => {
  const assignedImg = marvelImages[idx % marvelImages.length];
  return {
    id: `spec-foreign-marvel-q${idx + 1}`,
    points: q.points || 200,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    hint: q.hint || '',
    imageUrl: assignedImg,
    answerImageUrl: assignedImg,
    hideImageUntilAnswer: false,
  };
});
