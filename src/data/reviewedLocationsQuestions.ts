import type { Question } from '../types';

// Kuwait locations and administrative divisions, drawn from the Kuwait
// Central Statistical Bureau GIS/administrative districts and Kuwait Government
// Online tourism and governorate guides. Avoid time-dependent opening hours.
const facts: Array<Pick<Question, 'question' | 'correctAnswer' | 'points'>> = [
  {
    "points": 200,
    "question": "في أي مدينة كويتية يقع سوق المباركية التاريخي؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 200,
    "question": "في أي منطقة تقع أبراج الكويت على شارع الخليج العربي؟",
    "correctAnswer": "شرق"
  },
  {
    "points": 200,
    "question": "في أي منطقة ساحلية يقع المركز العلمي الكويتي؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة السالمية؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الفحيحيل؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة العارضية؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة النسيم السكنية؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الزهراء؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة صباح السالم؟",
    "correctAnswer": "مبارك الكبير"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة المهبولة؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 200,
    "question": "في أي منطقة يوجد مجمع الأفنيوز الشهير؟",
    "correctAnswer": "الري"
  },
  {
    "points": 200,
    "question": "في أي منطقة يوجد مجمع 360؟",
    "correctAnswer": "الزهراء"
  },
  {
    "points": 200,
    "question": "في أي منطقة يوجد مجمع الكوت؟",
    "correctAnswer": "الفحيحيل"
  },
  {
    "points": 200,
    "question": "في أي منطقة يوجد مارينا مول؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي منطقة توجد الحديقة الكبيرة المعروفة بحديقة الشهيد؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 200,
    "question": "في أي منطقة يوجد مجمع بووليفارد؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 200,
    "question": "في أي مدينة تقع أبراج الحمراء التجارية؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 200,
    "question": "في أي محافظة يوجد المطار الدولي الرئيسي في الكويت؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع جزيرة فيلكا إدارياً؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 200,
    "question": "في أي محافظة يقع ميناء الشعيبة؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 200,
    "question": "ما المنطقة الساحلية التي تقع قربها مدينة صباح الأحمد البحرية؟",
    "correctAnswer": "الخيران"
  },
  {
    "points": 200,
    "question": "ما المنطقة الكويتية التي تضم القصر الأحمر التاريخي؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة المنقف؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة خيطان؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الجابرية؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الشامية؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة سلوى؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الرقة؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الصليبيخات؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الرميثية؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة الفنطاس؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 200,
    "question": "في أي محافظة تقع منطقة مشرف؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 400,
    "question": "في أي منطقة تقع حديقة بوليفارد الكويت ذات البحيرة والممشى؟",
    "correctAnswer": "السالمية"
  },
  {
    "points": 400,
    "question": "في أي منطقة يقع متحف طارق رجب للفنون الإسلامية؟",
    "correctAnswer": "الجابرية"
  },
  {
    "points": 400,
    "question": "في أي منطقة يقع بيت ديكسون التاريخي على شارع الخليج؟",
    "correctAnswer": "شرق"
  },
  {
    "points": 400,
    "question": "في أي منطقة يقع بيت السدو بالقرب من متحف الكويت الوطني؟",
    "correctAnswer": "قبلة (مدينة الكويت)"
  },
  {
    "points": 400,
    "question": "في أي مدينة يقع متحف الكويت الوطني؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 400,
    "question": "في أي مدينة يقع مركز الشيخ جابر الأحمد الثقافي؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الرقعي؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة جليب الشيوخ؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الفردوس؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الأندلس؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة بيان؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الشهداء؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة حطين؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة العديلية؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة كيفان؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الدسمة؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الدعية؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة المنصورية؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة النهضة؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة إشبيلية؟",
    "correctAnswer": "الفروانية"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة أبو حليفة؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الصباحية؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الوفرة؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة أبو فطيرة؟",
    "correctAnswer": "مبارك الكبير"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة المسيلة؟",
    "correctAnswer": "مبارك الكبير"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة القصور؟",
    "correctAnswer": "مبارك الكبير"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة العدان؟",
    "correctAnswer": "مبارك الكبير"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة القرين؟",
    "correctAnswer": "مبارك الكبير"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الدوحة؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 400,
    "question": "في أي منطقة يقع سوق شرق المطل على الخليج؟",
    "correctAnswer": "شرق"
  },
  {
    "points": 400,
    "question": "في أي محافظة تقع منطقة الصبية شمال جون الكويت؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي منطقة يوجد بيت العثمان التراثي المعروف بمتحفه الشعبي؟",
    "correctAnswer": "حولي"
  },
  {
    "points": 600,
    "question": "في أي منطقة يقع متحف طارق رجب للخط الإسلامي؟",
    "correctAnswer": "الجابرية"
  },
  {
    "points": 600,
    "question": "في أي منطقة يقع مركز تذكار الشهداء ضمن حديقة الشهيد؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 600,
    "question": "في أي مدينة يقع مسجد الدولة الكبير قرب شارع الخليج العربي؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 600,
    "question": "في أي منطقة توجد قاعة الأمير الثقافية داخل مركز الشيخ جابر الأحمد؟",
    "correctAnswer": "مدينة الكويت"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة النزهة؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة القادسية؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة قرطبة؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الفيحاء؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة اليرموك؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الروضة؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الصوابر القديمة بوسط الكويت؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة بنيد القار؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة المرقاب؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة غرناطة؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة جابر الأحمد؟",
    "correctAnswer": "العاصمة"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة سعد العبدالله السكنية؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة النسيم؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة القصر؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة العيون؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة تيماء؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة أمغرة الصناعية؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة كبد؟",
    "correctAnswer": "الجهراء"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الشعيبة الصناعية؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الشعيبة السكنية؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الفحيحيل الصناعية؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة جابر العلي؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الظهر؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة فهد الأحمد؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة علي صباح السالم (أم الهيمان سابقاً)؟",
    "correctAnswer": "الأحمدي"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة أبو الحصانية؟",
    "correctAnswer": "مبارك الكبير"
  },
  {
    "points": 600,
    "question": "في أي محافظة تقع منطقة الفنيطيس؟",
    "correctAnswer": "مبارك الكبير"
  }
];
export const reviewedLocationsQuestions: Question[] = facts.map((item,index) => ({
  id: `locations_reviewed_${String(index+1).padStart(3,'0')}`,
  ...item,
  options: [],
  explanation: `الإجابة الصحيحة: ${item.correctAnswer}`,
}));
