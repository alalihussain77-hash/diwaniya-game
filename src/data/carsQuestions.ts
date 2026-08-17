import { Question, QuestionData } from '../types';

export interface UserCarQuestionInput {
  id: string;
  question: string;
  answer: string;
  points: number;
  imageUrl: string;
}

export const rawUserCarQuestions: UserCarQuestionInput[] = [
  {
    "id": "car_16",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "سير التيمينج / سير الماكينة / Timing Belt",
    "points": 200,
    "imageUrl": "/car_parts/car_16.jpg"
  },
  {
    "id": "car_17",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "طرمبة البنزين / Fuel Pump",
    "points": 200,
    "imageUrl": "/car_parts/car_17.jpg"
  },
  {
    "id": "car_18",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "الكويل / ملف الاشتعال / Ignition Coil",
    "points": 200,
    "imageUrl": "/car_parts/car_18.jpg"
  },
  {
    "id": "car_19",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "فلتر البنزين / Fuel Filter",
    "points": 300,
    "imageUrl": "/car_parts/car_19.jpg"
  },
  {
    "id": "car_20",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "فلتر المكيف / Cabin Air Filter",
    "points": 300,
    "imageUrl": "/car_parts/car_20.jpg"
  },
  {
    "id": "car_21",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "الكومبريسور / ضاغط المكيف / AC Compressor",
    "points": 300,
    "imageUrl": "/car_parts/car_21.jpg"
  },
  {
    "id": "car_22",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "البخاخات / Fuel Injectors",
    "points": 400,
    "imageUrl": "/car_parts/car_22.jpg"
  },
  {
    "id": "car_23",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "الثروتل / بوابة الهواء / Throttle Body",
    "points": 400,
    "imageUrl": "/car_parts/car_23.jpg"
  },
  {
    "id": "car_24",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "المقصات / Control Arm",
    "points": 400,
    "imageUrl": "/car_parts/car_24.jpg"
  },
  {
    "id": "car_25",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "العكوس / CV Axle / Drive Shaft",
    "points": 500,
    "imageUrl": "/car_parts/car_25.jpg"
  },
  {
    "id": "car_26",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "الركبة / الجوزة / Ball Joint",
    "points": 500,
    "imageUrl": "/car_parts/car_26.jpg"
  },
  {
    "id": "car_27",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "القير / ناقل الحركة / Transmission",
    "points": 500,
    "imageUrl": "/car_parts/car_27.jpg"
  },
  {
    "id": "car_28",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "دبة التلوث / الكتاليزر / Catalytic Converter",
    "points": 600,
    "imageUrl": "/car_parts/car_28.jpg"
  },
  {
    "id": "car_29",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "حساس الاكسجين / Oxygen Sensor",
    "points": 600,
    "imageUrl": "/car_parts/car_29.jpg"
  },
  {
    "id": "car_30",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "الكلتش / Clutch Kit",
    "points": 600,
    "imageUrl": "/car_parts/car_30.jpg"
  },
  {
    "id": "car_31",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "كرسي الماكينة / Engine Mount",
    "points": 600,
    "imageUrl": "/car_parts/car_31.jpg"
  }
];

// Convert raw user questions to QuestionData format (for hundredQuestionsBank)
// NO options generated or provided for car questions (as requested: "و شيلي الاختياارات")
export const carsQuestionDataList: QuestionData[] = rawUserCarQuestions.map((q) => ({
  id: q.id,
  points: q.points as 200 | 300 | 400 | 500 | 600,
  question: q.question,
  correctAnswer: q.answer,
  options: [], // Empty array to hide options
  explanation: `الإجابة الصحيحة هي: ${q.answer}`,
  hint: `قطعة/جزء في ميكانيكا السيارات`,
  imageUrl: q.imageUrl,
  hideImageUntilAnswer: false,
}));

// Format for Question[] (used directly in categories.ts)
export const cars100Questions: Question[] = rawUserCarQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: [], // Empty options to remove multiple choice buttons
  correctAnswer: q.answer,
  points: q.points,
  category: "سيارات",
  explanation: `الإجابة الصحيحة هي: ${q.answer}`,
  hint: `قطعة/جزء في ميكانيكا السيارات`,
  imageUrl: q.imageUrl,
  hideImageUntilAnswer: false,
}));

