import type { Question } from '../types';

// Independently worded geography questions, replacing the game's generic
// 'المعلومة المعتمدة' placeholders. Original picture-backed questions
// remain in their existing source entries (handled in hundredQuestionsBank).
// Background references: National Geographic physical geography education,
// CIA World Factbook physical world, and UNESCO Lake Baikal / Grand Canyon.
const reviewed: Array<Pick<Question, 'question' | 'correctAnswer' | 'points'>> = [
  {
    "points": 200,
    "question": "كم عدد القارات في التقسيم الجغرافي الشائع ذي القارات السبع؟",
    "correctAnswer": "سبع قارات"
  },
  {
    "points": 200,
    "question": "ما اسم المحيط الواقع بين آسيا والأمريكتين؟",
    "correctAnswer": "المحيط الهادئ"
  },
  {
    "points": 200,
    "question": "ما اسم المحيط الذي يفصل أوروبا عن الأمريكتين؟",
    "correctAnswer": "المحيط الأطلسي"
  },
  {
    "points": 200,
    "question": "ما اسم المحيط الممتد جنوب آسيا بين أفريقيا وأستراليا؟",
    "correctAnswer": "المحيط الهندي"
  },
  {
    "points": 200,
    "question": "في أي جزء من أفريقيا تقع الصحراء الكبرى؟",
    "correctAnswer": "شمال أفريقيا"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة البرازيل؟",
    "correctAnswer": "أمريكا الجنوبية"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة كندا؟",
    "correctAnswer": "أمريكا الشمالية"
  },
  {
    "points": 200,
    "question": "في أي قارة يقع معظم أراضي مصر؟",
    "correctAnswer": "أفريقيا"
  },
  {
    "points": 200,
    "question": "في أي دولة تقع مدينة باريس؟",
    "correctAnswer": "فرنسا"
  },
  {
    "points": 200,
    "question": "على أي بحر تطل مدينة الإسكندرية المصرية؟",
    "correctAnswer": "البحر المتوسط"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة الأرجنتين؟",
    "correctAnswer": "أمريكا الجنوبية"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة اليابان؟",
    "correctAnswer": "آسيا"
  },
  {
    "points": 200,
    "question": "ما أكبر محيط في العالم من حيث المساحة؟",
    "correctAnswer": "المحيط الهادئ"
  },
  {
    "points": 200,
    "question": "ما اسم المحيط المحيط بمنطقة القطب الشمالي؟",
    "correctAnswer": "المحيط المتجمد الشمالي"
  },
  {
    "points": 200,
    "question": "ما اسم القارة التي يقع فيها القطب الجنوبي؟",
    "correctAnswer": "القارة القطبية الجنوبية (أنتاركتيكا)"
  },
  {
    "points": 200,
    "question": "ما المضيق الذي يفصل المغرب عن إسبانيا؟",
    "correctAnswer": "مضيق جبل طارق"
  },
  {
    "points": 200,
    "question": "ما البحر الذي يقع بين شمال أفريقيا وجنوب أوروبا؟",
    "correctAnswer": "البحر المتوسط"
  },
  {
    "points": 200,
    "question": "ما النهر الذي يمر بمدينة القاهرة؟",
    "correctAnswer": "نهر النيل"
  },
  {
    "points": 200,
    "question": "في أي دولة تقع مدينة إسطنبول؟",
    "correctAnswer": "تركيا"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع جبال الألب؟",
    "correctAnswer": "أوروبا"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة جنوب أفريقيا؟",
    "correctAnswer": "أفريقيا"
  },
  {
    "points": 200,
    "question": "ما البحر الذي يقع بين السعودية والسودان؟",
    "correctAnswer": "البحر الأحمر"
  },
  {
    "points": 200,
    "question": "ما أكبر دولة في العالم من حيث المساحة؟",
    "correctAnswer": "روسيا"
  },
  {
    "points": 200,
    "question": "ما أصغر دولة مستقلة في العالم من حيث المساحة؟",
    "correctAnswer": "دولة الفاتيكان"
  },
  {
    "points": 200,
    "question": "ما أعلى قمة جبلية في العالم فوق مستوى سطح البحر؟",
    "correctAnswer": "قمة إفرست"
  },
  {
    "points": 200,
    "question": "في أي منطقة جغرافية كبرى تقع جزر نيوزيلندا؟",
    "correctAnswer": "أوقيانوسيا"
  },
  {
    "points": 200,
    "question": "ما البحر الواقع غرب الهند؟",
    "correctAnswer": "بحر العرب"
  },
  {
    "points": 200,
    "question": "على أي محيط يطل الساحل الشرقي لأستراليا؟",
    "correctAnswer": "المحيط الهادئ"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة نيجيريا؟",
    "correctAnswer": "أفريقيا"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة تايلاند؟",
    "correctAnswer": "آسيا"
  },
  {
    "points": 200,
    "question": "في أي قارة تقع دولة النرويج؟",
    "correctAnswer": "أوروبا"
  },
  {
    "points": 200,
    "question": "ما النهر الذي يعبر مدينة لندن؟",
    "correctAnswer": "نهر التايمز"
  },
  {
    "points": 400,
    "question": "أين تقع مدغشقر بالنسبة إلى البر الرئيسي لأفريقيا؟",
    "correctAnswer": "شرق أفريقيا في المحيط الهندي"
  },
  {
    "points": 400,
    "question": "ما السلسلة الجبلية التي تشكل حاجزاً طبيعياً بين فرنسا وإسبانيا؟",
    "correctAnswer": "جبال البرانس"
  },
  {
    "points": 400,
    "question": "ما المضيق البحري الذي يفصل آسيا عن أمريكا الشمالية؟",
    "correctAnswer": "مضيق بيرنغ"
  },
  {
    "points": 400,
    "question": "في أي قارة يجري نهر الأمازون؟",
    "correctAnswer": "أمريكا الجنوبية"
  },
  {
    "points": 400,
    "question": "ما النهر الذي يمر بفيينا وبودابست؟",
    "correctAnswer": "نهر الدانوب"
  },
  {
    "points": 400,
    "question": "بين أي دولتين يشكل نهر ريو غراندي جزءاً من الحدود؟",
    "correctAnswer": "الولايات المتحدة والمكسيك"
  },
  {
    "points": 400,
    "question": "ما أكبر بحيرة في أفريقيا من حيث المساحة السطحية؟",
    "correctAnswer": "بحيرة فيكتوريا"
  },
  {
    "points": 400,
    "question": "ما أعمق بحيرة في العالم؟",
    "correctAnswer": "بحيرة بايكال"
  },
  {
    "points": 400,
    "question": "ما أكبر صحراء حارة في العالم؟",
    "correctAnswer": "الصحراء الكبرى"
  },
  {
    "points": 400,
    "question": "في أي دولة تقع معظم صحراء أتاكاما؟",
    "correctAnswer": "تشيلي"
  },
  {
    "points": 400,
    "question": "ما السلسلة الجبلية الممتدة على طول غرب أمريكا الجنوبية؟",
    "correctAnswer": "جبال الأنديز"
  },
  {
    "points": 400,
    "question": "في أي بحر يصب نهر النيل عند نهايته؟",
    "correctAnswer": "البحر المتوسط"
  },
  {
    "points": 400,
    "question": "على أي محيط يطل الساحل الغربي لقارة أمريكا الجنوبية؟",
    "correctAnswer": "المحيط الهادئ"
  },
  {
    "points": 400,
    "question": "ما المضيق الذي يصل البحر الأسود ببحر مرمرة؟",
    "correctAnswer": "مضيق البوسفور"
  },
  {
    "points": 400,
    "question": "ما المضيق الذي يصل بحر مرمرة ببحر إيجه؟",
    "correctAnswer": "مضيق الدردنيل"
  },
  {
    "points": 400,
    "question": "ما القناة البحرية التي تربط البحر الأحمر بالبحر المتوسط؟",
    "correctAnswer": "قناة السويس"
  },
  {
    "points": 400,
    "question": "ما القناة البحرية التي تصل المحيطين الأطلسي والهادئ في أمريكا الوسطى؟",
    "correctAnswer": "قناة بنما"
  },
  {
    "points": 400,
    "question": "ما أكبر جزر اليابان من حيث المساحة وتوجد عليها طوكيو؟",
    "correctAnswer": "جزيرة هونشو"
  },
  {
    "points": 400,
    "question": "ما اسم شبه الجزيرة الأوروبية التي تضم النرويج والسويد؟",
    "correctAnswer": "شبه الجزيرة الإسكندنافية"
  },
  {
    "points": 400,
    "question": "في أي دولة تقع شلالات آنجل أعلى شلال متصل في العالم؟",
    "correctAnswer": "فنزويلا"
  },
  {
    "points": 400,
    "question": "ما اسم الهضبة الآسيوية التي توصف بأنها سقف العالم؟",
    "correctAnswer": "هضبة التبت"
  },
  {
    "points": 400,
    "question": "في أي دولة تقع قمة كليمنجارو؟",
    "correctAnswer": "تنزانيا"
  },
  {
    "points": 400,
    "question": "ما النهر الذي يمر بوسط مدينة باريس؟",
    "correctAnswer": "نهر السين"
  },
  {
    "points": 400,
    "question": "ما النهر الذي يقسم مدينة بغداد إلى جانبي الرصافة والكرخ؟",
    "correctAnswer": "نهر دجلة"
  },
  {
    "points": 400,
    "question": "في أي جزء من مصر تقع دلتا النيل؟",
    "correctAnswer": "شمال مصر"
  },
  {
    "points": 400,
    "question": "ما المسطح المائي الواقع بين شبه الجزيرة العربية وإيران؟",
    "correctAnswer": "الخليج العربي"
  },
  {
    "points": 400,
    "question": "ما الدولة التي تشترك مع بيرو في بحيرة تيتيكاكا؟",
    "correctAnswer": "بوليفيا"
  },
  {
    "points": 400,
    "question": "ما البحر الذي يقع بين إيطاليا وشبه جزيرة البلقان؟",
    "correctAnswer": "البحر الأدرياتيكي"
  },
  {
    "points": 400,
    "question": "ما النهر الذي يمر بمدينة روما؟",
    "correctAnswer": "نهر التيبر"
  },
  {
    "points": 400,
    "question": "في أي دولة تقع مدينة كيب تاون عند الطرف الجنوبي الغربي لأفريقيا؟",
    "correctAnswer": "جنوب أفريقيا"
  },
  {
    "points": 400,
    "question": "ما الجزر البركانية التي تضم تينيريفي وتتبع إسبانيا في الأطلسي؟",
    "correctAnswer": "جزر الكناري"
  },
  {
    "points": 600,
    "question": "في أي مدينة سودانية يلتقي النيل الأبيض بالنيل الأزرق؟",
    "correctAnswer": "الخرطوم"
  },
  {
    "points": 600,
    "question": "من أي بحيرة إثيوبية ينبع النيل الأزرق؟",
    "correctAnswer": "بحيرة تانا"
  },
  {
    "points": 600,
    "question": "إلى أي بحر داخلي يصب نهر الفولغا؟",
    "correctAnswer": "بحر قزوين"
  },
  {
    "points": 600,
    "question": "في أي دولة يجري نهر الفولغا بالكامل؟",
    "correctAnswer": "روسيا"
  },
  {
    "points": 600,
    "question": "ما اسم النظام الجيولوجي الذي يشمل أخاديد وبحيرات الانهدام بشرق أفريقيا؟",
    "correctAnswer": "الأخدود الأفريقي العظيم"
  },
  {
    "points": 600,
    "question": "ما اسم ظاهرة انخفاض حرارة سطح المحيط الهادئ الاستوائي عن المعتاد؟",
    "correctAnswer": "لا نينيا"
  },
  {
    "points": 600,
    "question": "ما اسم ظاهرة ارتفاع حرارة سطح المحيط الهادئ الاستوائي عن المعتاد؟",
    "correctAnswer": "إل نينيو"
  },
  {
    "points": 600,
    "question": "ما اسم التيار المحيطي البارد الممتد قرب ساحلي بيرو وتشيلي؟",
    "correctAnswer": "تيار همبولت"
  },
  {
    "points": 600,
    "question": "ما التيار المحيطي الدافئ الشهير الذي ينقل الحرارة شمال شرق الأطلسي؟",
    "correctAnswer": "تيار الخليج"
  },
  {
    "points": 600,
    "question": "ما اسم حدود الصفائح التي تتقارب عندها صفيحتان تكتونيتان؟",
    "correctAnswer": "حدود تقاربية"
  },
  {
    "points": 600,
    "question": "ما اسم حدود الصفائح التي تبتعد عندها صفيحتان تكتونيتان؟",
    "correctAnswer": "حدود تباعدية"
  },
  {
    "points": 600,
    "question": "ما الاسم الشائع للحزام الزلزالي والبركاني المحيط بالمحيط الهادئ؟",
    "correctAnswer": "حلقة النار"
  },
  {
    "points": 600,
    "question": "ما اسم أعمق موضع معروف في خندق ماريانا؟",
    "correctAnswer": "تشالنجر ديب"
  },
  {
    "points": 600,
    "question": "ما السلسلة الجبلية الغارقة الممتدة عبر وسط المحيط الأطلسي؟",
    "correctAnswer": "ظهر وسط الأطلسي"
  },
  {
    "points": 600,
    "question": "ما أكبر جزيرة في العالم إذا استُبعدت القارات؟",
    "correctAnswer": "غرينلاند"
  },
  {
    "points": 600,
    "question": "ما أكبر جزيرة في البحر المتوسط من حيث المساحة؟",
    "correctAnswer": "صقلية"
  },
  {
    "points": 600,
    "question": "ما المضيق الذي يفصل شبه جزيرة ملايو عن جزيرة سومطرة؟",
    "correctAnswer": "مضيق ملقا"
  },
  {
    "points": 600,
    "question": "ما المضيق الذي يربط البحر الأحمر بخليج عدن؟",
    "correctAnswer": "باب المندب"
  },
  {
    "points": 600,
    "question": "ما المضيق الذي يصل الخليج العربي بخليج عمان؟",
    "correctAnswer": "مضيق هرمز"
  },
  {
    "points": 600,
    "question": "ما القناة الاصطناعية في اليونان التي تقطع برزخ كورنث؟",
    "correctAnswer": "قناة كورنث"
  },
  {
    "points": 600,
    "question": "ما السلسلة الجبلية الروسية التي تُعد فاصلاً تقليدياً بين أوروبا وآسيا؟",
    "correctAnswer": "جبال الأورال"
  },
  {
    "points": 600,
    "question": "ما النهر الذي يشكل جزءاً من الحدود بين ألمانيا وبولندا واسمه بالألمانية Oder؟",
    "correctAnswer": "نهر أودر"
  },
  {
    "points": 600,
    "question": "ما الهضبة المرتفعة التي تمتد عبر غربي بوليفيا وجنوبي بيرو؟",
    "correctAnswer": "هضبة ألتيبلانو"
  },
  {
    "points": 600,
    "question": "ما اسم الصدع الشهير في كاليفورنيا عند الحد بين صفيحتي الهادئ وأمريكا الشمالية؟",
    "correctAnswer": "صدع سان أندرياس"
  },
  {
    "points": 600,
    "question": "ما النهر الأفريقي الكبير الذي يعبر خط الاستواء مرتين؟",
    "correctAnswer": "نهر الكونغو"
  },
  {
    "points": 600,
    "question": "ما البحيرة التي تحتوي أكبر حجم من المياه العذبة السطحية بين بحيرات العالم؟",
    "correctAnswer": "بحيرة بايكال"
  },
  {
    "points": 600,
    "question": "إلى أي بحر يصب نهر الراين في أوروبا؟",
    "correctAnswer": "بحر الشمال"
  },
  {
    "points": 600,
    "question": "على حدود أي دولتين تقع شلالات فيكتوريا؟",
    "correctAnswer": "زامبيا وزيمبابوي"
  },
  {
    "points": 600,
    "question": "ما النهر الذي يمر بمدينة براغ التشيكية؟",
    "correctAnswer": "نهر فلتافا"
  },
  {
    "points": 600,
    "question": "ما القناة البحرية التي تفصل جنوب إنجلترا عن شمال فرنسا؟",
    "correctAnswer": "القنال الإنجليزي (المانش)"
  },
  {
    "points": 600,
    "question": "ما القناة الملاحية التي تتجاوز شلالات نياغارا وتصل بحيرتي إيري وأونتاريو؟",
    "correctAnswer": "قناة ويلاند"
  },
  {
    "points": 600,
    "question": "ما اسم الرياح الموسمية التي تجلب أمطاراً غزيرة إلى جنوب آسيا صيفاً؟",
    "correctAnswer": "الرياح الموسمية الجنوبية الغربية"
  }
];

export const reviewedGeographyQuestions: Question[] = reviewed.map((item, index) => ({
  id: `geo_reviewed_${String(index+1).padStart(3, '0')}`,
  points: item.points,
  question: item.question,
  correctAnswer: item.correctAnswer,
  options: [],
  explanation: `الإجابة الصحيحة: ${item.correctAnswer}`,
}));
