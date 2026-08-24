import { Question } from '../types';

const peakyImages = [
  '/peaky_blinders/peaky_1.jpg',
  '/peaky_blinders/peaky_2.jpg',
  '/peaky_blinders/peaky_3.jpg',
  '/peaky_blinders/peaky_4.jpg',
];

const rawPeakyQuestions: Array<{
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
  points?: number;
}> = [
  {
    question: "في أي مدينة صناعية بريطانية تدور معظم أحداث ومقرات عصابة Peaky Blinders؟",
    options: ["بيرمنغهام (Birmingham)", "لندن", "مانشستر", "ليفربول"],
    correctAnswer: "بيرمنغهام (Birmingham)",
    explanation: "تأسست العصابة وبدأت إمبراطوريتها في منطقة سمول هيث بمدينة بيرمنغهام.",
    hint: "المدينة الصناعية بوسط إنجلترا",
    points: 200,
  },
  {
    question: "أين تخفي عصابة البيكي بليندرز شفرات الحلاقة القاتلة السريعة في ملابسهم؟",
    options: ["في حافة قبعاتهم (Flat caps)", "في أكمام معاطفهم", "في أحذيتهم الجلدية", "في بطانة ستراتهم"],
    correctAnswer: "في حافة قبعاتهم (Flat caps)",
    explanation: "يخفي أفراد العصابة شفرات الحلاقة داخل حواف قبعاتهم المسطحة لاستخدامها كأسلحة مباغتة.",
    hint: "القبعات المسطحة الشهيرة",
    points: 200,
  },
  {
    question: "ما اسم الممثل الأيرلندي الأسطوري الذي أدى دور بطل المسلسل توماس شيلبي (Tommy Shelby)؟",
    options: ["كيليان ميرفي (Cillian Murphy)", "توم هاردي", "بول أندرسون", "سام نيل"],
    correctAnswer: "كيليان ميرفي (Cillian Murphy)",
    explanation: "قدم كيليان ميرفي أداءً أيقونياً لشخصية تومي شيلبي على مدار 6 مواسم ونال عليه إشادة عالمية.",
    hint: "الممثل الأيرلندي الحائز على الأوسكار عن فيلم Oppenheimer",
    points: 200,
  },
  {
    question: "ما اسم الحانة والبار التاريخي المملوك لعائلة شيلبي وملتقى اجتماعاتهم الرسمية في بيرمنغهام؟",
    options: ["حانة الجاريسون (The Garrison Pub)", "البلاتينيوم", "حانة كامدن تاون", "المرسى الذهبي"],
    correctAnswer: "حانة الجاريسون (The Garrison Pub)",
    explanation: "The Garrison Pub هي الحانة التي اشترتها عائلة شيلبي وجعلتها مقراً لاجتماعاتها.",
    hint: "The Garrison",
    points: 200,
  },
  {
    question: "ما اسم الشقيق الأكبر المتهور والعنيف لـ تومي شيلبي والمعروف بصرخته الشهيرة 'By order of the Peaky Blinders'؟",
    options: ["آرثر شيلبي (Arthur Shelby)", "جون شيلبي", "فين شيلبي", "مايكل غراي"],
    correctAnswer: "آرثر شيلبي (Arthur Shelby)",
    explanation: "آرثر شيلبي هو الأخ الأكبر المقاتل الشرس ذو الشارب العريض والمخلص دائماً لتومي.",
    hint: "الأخ الأكبر صاحب الشارب العريض",
    points: 200,
  },
  {
    question: "ما اسم عمة عائلة شيلبي والعقل المالي وأم العائلة الروحية التي جسدتها الممثلة هيلين مكروري؟",
    options: ["بولي غراي (Polly Gray)", "إيدا شيلبي", "ليز غراي", "إسمي شيلبي"],
    correctAnswer: "بولي غراي (Polly Gray)",
    explanation: "العمة بولي أدارت أعمال العصابة أثناء الحرب العالمية وكانت السند والحكمة للعائلة.",
    hint: "العمة بولي (Aunt Polly)",
    points: 300,
  },
  {
    question: "ما اسم زعيم العصابة اليهودية في كامدن تاون وصاحب مصنع التقطير الذي جسد دوره الممثل توم هاردي؟",
    options: ["ألفي سولومونز (Alfie Solomons)", "لوكا تشانغريتا", "داربي سابيني", "بيلي كيمبر"],
    correctAnswer: "ألفي سولومونز (Alfie Solomons)",
    explanation: "ألفي سولومونز زعيم العصابة اليهودية المعروف بحديثه الفلسفي وحواراته الساخرة مع تومي.",
    hint: "Alfie Solomons من كامدن تاون",
    points: 300,
  },
  {
    question: "ما اسم الحب الحقيقي والزوجة الأولى لـ تومي شيلبي التي كانت تعمل جاسوسة لصالح الشرطة في البداية؟",
    options: ["غريس بورغيس (Grace Burgess)", "ليز ستارك", "ماي كارلتون", "جيسي إيدن"],
    correctAnswer: "غريس بورغيس (Grace Burgess)",
    explanation: "غريس دخلت حياته كجاسوسة ونادلة في الجاريسون ثم وقعا في حب حقيقي وتزوجا.",
    hint: "Grace",
    points: 300,
  },
  {
    question: "ما اسم زعيم المافيا الإيطالية من نيويورك الذي جاء لبيرمنغهام في الموسم الرابع للانتقام لمقتل والده؟",
    options: ["لوكا تشانغريتا (Luca Changretta)", "دون كورليوني", "داربي سابيني", "ألفي سولومونز"],
    correctAnswer: "لوكا تشانغريتا (Luca Changretta)",
    explanation: "جسد دوره الممثل أدريان برودي وجاء بعصابته الإيطالية في ثأر 'Vendetta' ضد عائلة شيلبي.",
    hint: "Luca Changretta جسده Adrien Brody",
    points: 300,
  },
  {
    question: "ما اسم الشقيقة الوحيدة للإخوة شيلبي التي كانت ترفض أفعال العصابة في البداية ولها ميول شيوعية؟",
    options: ["إيدا شيلبي (Ada Shelby)", "بولي شيلبي", "ليز شيلبي", "إسمي شيلبي"],
    correctAnswer: "إيدا شيلبي (Ada Shelby)",
    explanation: "إيدا ثورن (شيلبي) هي الأخت الذكية التي حافظت على استقلاليتها وتزوجت من فريدي ثورن.",
    hint: "Ada",
    points: 300,
  },
  {
    question: "في أي حرب عالمية خدم تومي شيلبي وإخوته كجنود وأنفاق حفر قبل بداية أحداث المسلسل؟",
    options: ["الحرب العالمية الأولى (WWI)", "الحرب العالمية الثانية", "حرب فيتنام", "حرب القرم"],
    correctAnswer: "الحرب العالمية الأولى (WWI)",
    explanation: "خدم تومي وآرثر وجون كحفاري أنفاق في فرنسا بالحرب العالمية الأولى وعادوا بصدمات نفسية عميقة.",
    hint: "حرب 1914 - 1918 في خنادق فرنسا",
    points: 400,
  },
  {
    question: "ما اسم زعيم العصابة والمراهنات الذي واجهه تومي شيلبي في الموسم الأول ليسيطر على مراهنات الخيول؟",
    options: ["بيلي كيمبر (Billy Kimber)", "داربي سابيني", "لوكا تشانغريتا", "أوزوالد موزلي"],
    correctAnswer: "بيلي كيمبر (Billy Kimber)",
    explanation: "بيلي كيمبر كان يدير كبرى حلبات سباق الخيل ومات برصاصة من تومي شيلبي في نهاية الموسم الأول.",
    hint: "Billy Kimber",
    points: 400,
  },
  {
    question: "ما اسم المحقق الأيرلندي الصارم الذي أرسله ونستون تشرشل لاستعادة الأسلحة المسروقة والقضاء على العصابة؟",
    options: ["المفتش تشيستر كامبل (Inspector Campbell)", "المفتش موس", "المفتش بارو", "المفتش جيمس"],
    correctAnswer: "المفتش تشيستر كامبل (Inspector Campbell)",
    explanation: "المفتش كامبل (جسده سام نيل) كان العدو اللدود لتومي في الموسمين الأول والثاني.",
    hint: "Major Chester Campbell",
    points: 400,
  },
  {
    question: "ما اسم ابن العمة بولي الذي عاد من الريف وأصبح شريكاً في إدارة أعمال الشركة ثم تمرد على تومي؟",
    options: ["مايكل غراي (Michael Gray)", "فين شيلبي", "جون شيلبي", "كارل ثورن"],
    correctAnswer: "مايكل غراي (Michael Gray)",
    explanation: "مايكل غراي تولى إدارة استثمارات نيويورك وخسر أموال العائلة في انهيار وول ستريت 1929 ثم خان تومي.",
    hint: "Michael Gray",
    points: 400,
  },
  {
    question: "ما اسم السياسي الفاشي البريطاني الحقيقي الذي ظهر كعدو رئيسي لـ تومي شيلبي في الموسمين الخامس والسادس؟",
    options: ["السير أوزوالد موزلي (Oswald Mosley)", "ونستون تشرشل", "آرثر نيفيل", "رامزي مكدونالد"],
    correctAnswer: "السير أوزوالد موزلي (Oswald Mosley)",
    explanation: "أوزوالد موزلي قاد الاتحاد البريطاني للفاشيين وكان تومي يتظاهر بالتحالف معه للتجسس عليه.",
    hint: "Sir Oswald Mosley",
    points: 400,
  },
  {
    question: "ما اسم الشقيق الثالث اللطيف والمحب لعائلته الذي تزوج الغجرية إسمي وقُتل في بداية الموسم الرابع؟",
    options: ["جون شيلبي (John Shelby)", "فين شيلبي", "مايكل شيلبي", "بيلي شيلبي"],
    correctAnswer: "جون شيلبي (John Shelby)",
    explanation: "جون شيلبي قُتل على يد رجال المافيا الإيطالية التابعين للوكا تشانغريتا في منزله الريفي.",
    hint: "John Boy",
    points: 500,
  },
  {
    question: "ما اسم الزوجة الثانية لـ تومي شيلبي التي كانت سكرتيرته السابقة وصديقة طفولته؟",
    options: ["ليز ستارك (Lizzie Stark)", "ماي كارلتون", "تاتيانا بتروفنا", "جينا غراي"],
    correctAnswer: "ليز ستارك (Lizzie Stark)",
    explanation: "ليز ستارك تزوجت تومي وأنجبت ابنته روبي وظلت مخلصة له حتى نهاية الموسم السادس.",
    hint: "Lizzie Stark",
    points: 500,
  },
  {
    question: "ما اسم الأسلحة العسكرية التي سرقها أفراد البيكي بليندرز بالخطأ في الموسم الأول وأشعلت كل الصراعات؟",
    options: ["بنادق ومدافع رشاشة مخصصة للحكومة (BSA Guns)", "صواريخ حربية", "بارود ومدافع هاون", "مسدسات ريفولفر صغيرة"],
    correctAnswer: "بنادق ومدافع رشاشة مخصصة للحكومة (BSA Guns)",
    explanation: "شحنة أسلحة ضخمة من مصنع BSA في بيرمنغهام سرقها تومي واستخدمها كورقة ضغط مع الحكومة.",
    hint: "أسلحة مصنع Birmingham Small Arms",
    points: 500,
  },
  {
    question: "ما اسم القناص الغجري الحليف الشرس لتومي الذي قُتل ابنه بوني غولد على يد عصابة بيلي بويز؟",
    options: ["أبيراما غولد (Aberama Gold)", "جوني دوغز", "تشارلي سترونغ", "كورلي"],
    correctAnswer: "أبيراما غولد (Aberama Gold)",
    explanation: "أبيراما غولد (جسده إيدان غيلن) تحالف مع شيلبي وتزوج العمة بولي قبل مقتله في مسرح محاولة اغتيال موزلي.",
    hint: "Aberama Gold",
    points: 500,
  },
  {
    question: "ما اسم الحصان السباق الأصيل الشهير الذي اشتراه تومي شيلبي في الموسم الثاني ودربته ماي كارلتون؟",
    options: ["سر غريس (Grace's Secret)", "بلاك بيوتي", "بيرمنغهام بوي", "شيلبي كينغ"],
    correctAnswer: "سر غريس (Grace's Secret)",
    explanation: "أطلق تومي على فرسه الأصيل اسم Grace's Secret واستخدمه للوصول لطبقة النبلاء.",
    hint: "Grace's Secret",
    points: 500,
  },
  {
    question: "ما هي الجملة الشهيرة التي يصرخ بها آرثر شيلبي عند اقتحام أو فرض سيطرة العصابة؟",
    options: ["By order of the Peaky Blinders!", "Long live Tommy Shelby!", "Welcome to Birmingham!", "No fighting in here!"],
    correctAnswer: "By order of the Peaky Blinders!",
    explanation: "العبارة الأيقونية الشهيرة التي تحولت لشعار المسلسل في كافة أنحاء العالم.",
    hint: "By order of the...",
    points: 600,
  },
  {
    question: "ما اسم المنظمة السياسية والمسلحة الأيرلندية التي احتكت معها عائلة شيلبي في صفقات أسلحة؟",
    options: ["الجيش الجمهوري الأيرلندي (IRA)", "البلاك آند تانز", "الفرسان الحمر", "عصبة دبلن"],
    correctAnswer: "الجيش الجمهوري الأيرلندي (IRA)",
    explanation: "دخل تومي في صراعات ومفاوضات مع الجيش الجمهوري الأيرلندي IRA والمخابرات البريطانية.",
    hint: "Irish Republican Army",
    points: 600,
  },
  {
    question: "ما هو المنصب السياسي الرفيع الذي وصل إليه تومي شيلبي في البرلمان البريطاني؟",
    options: ["عضو برلمان (MP - Member of Parliament)", "رئيس وزراء", "عمدة بيرمنغهام", "وزير الحرب"],
    correctAnswer: "عضو برلمان (MP - Member of Parliament)",
    explanation: "انتُخب تومي كعضو برلمان عن حزب العمال الاشتراكي ليحمي مصالح عائلته وأعماله.",
    hint: "Member of Parliament (MP)",
    points: 600,
  },
  {
    question: "ما اسم المشروب الروحي المفضل والأساسي لجميع أفراد عائلة شيلبي في جميع جلساتهم؟",
    options: ["الويسكي الأيرلندي / الاسكتلندي (Whiskey)", "الفودكا الروسية", "الرم الكاريبي", "البيرة السوداء"],
    correctAnswer: "الويسكي الأيرلندي / الاسكتلندي (Whiskey)",
    explanation: "الويسكي كان المشروب الدائم لتومي وآرثر في كل مشهد واجتماع تقريباً.",
    hint: "Irish Whiskey",
    points: 600,
  },
  {
    question: "ما هو المرض الخطير الذي زعم الطبيب الفاسد أن تومي شيلبي مصاب به في الموسم السادس لدفعه للانتحار؟",
    options: ["السل (Tuberculoma)", "السرطان", "التيفوئيد", "الملاريا"],
    correctAnswer: "السل (Tuberculoma)",
    explanation: "خدعه طبيبه الخاص الموالي لموزلي بأنه مصاب بورم السل غير القابل للعلاج ليدفعه للانتحار.",
    hint: "ورم التدرن / السل الرئوي",
    points: 600,
  }
];

export const peakyBlinders100Questions: Question[] = rawPeakyQuestions.map((q, idx) => {
  const assignedImg = peakyImages[idx % peakyImages.length];
  return {
    id: `spec-foreign-peaky-q${idx + 1}`,
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
