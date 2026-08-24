import { Question, QuestionData } from '../types';
import { persistentStorage } from '../utils/persistentStorage';

export interface UserCarQuestionInput {
  id: string;
  question: string;
  answer: string;
  points: number;
  imageUrl: string;
  answerImageUrl?: string;
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
    "points": 200,
    "imageUrl": "/car_parts/car_19.jpg"
  },
  {
    "id": "car_20",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "فلتر المكيف / Cabin Air Filter",
    "points": 200,
    "imageUrl": "/car_parts/car_20.jpg"
  },
  {
    "id": "car_21",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "الكومبريسور / ضاغط المكيف / AC Compressor",
    "points": 400,
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
    "points": 400,
    "imageUrl": "/car_parts/car_25.jpg"
  },
  {
    "id": "car_26",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "الركبة / الجوزة / Ball Joint",
    "points": 400,
    "imageUrl": "/car_parts/car_26.jpg"
  },
  {
    "id": "car_27",
    "question": "شنو اسم هذي القطعة؟",
    "answer": "القير / ناقل الحركة / Transmission",
    "points": 600,
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

const CAR_CUSTOM_STORAGE_KEY = 'diwaniya_custom_car_questions_v1';
const CAR_OVERRIDES_STORAGE_KEY = 'diwaniya_overrides_car_questions_v1';
const CAR_DELETED_STORAGE_KEY = 'diwaniya_deleted_car_questions_v1';

// Read overrides map from localStorage
export function getCarQuestionOverrides(): Record<string, Partial<UserCarQuestionInput>> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = persistentStorage.getItem(CAR_OVERRIDES_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch (e) {
    console.warn('Error reading car question overrides:', e);
    return {};
  }
}

// Read deleted question IDs
export function getDeletedCarQuestionIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = persistentStorage.getItem(CAR_DELETED_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) || [];
  } catch (e) {
    return [];
  }
}

// Read saved custom questions from localStorage
export function getSavedCustomCarQuestions(): UserCarQuestionInput[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = persistentStorage.getItem(CAR_CUSTOM_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('Error reading custom car questions:', e);
    return [];
  }
}

// Helper to normalize points strictly to 200, 400, or 600
export function normalizeCarPoints(pts?: number): 200 | 400 | 600 {
  if (!pts || pts <= 250) return 200;
  if (pts <= 450) return 400;
  return 600;
}

// Get all raw car questions with overrides and custom questions combined
export function getAllCarRawQuestions(): UserCarQuestionInput[] {
  const custom = getSavedCustomCarQuestions();
  const overrides = getCarQuestionOverrides();
  const deletedIds = new Set(getDeletedCarQuestionIds());

  // Base list + custom list
  const combined = [...custom, ...rawUserCarQuestions];
  const uniqueMap = new Map<string, UserCarQuestionInput>();

  for (const item of combined) {
    if (deletedIds.has(item.id)) continue;
    if (uniqueMap.has(item.id)) continue;

    // Apply any edits/overrides
    const override = overrides[item.id];
    let resolvedItem: UserCarQuestionInput;
    if (override) {
      resolvedItem = {
        ...item,
        ...override,
        id: item.id,
        points: normalizeCarPoints(override.points ?? item.points),
      };
    } else {
      resolvedItem = {
        ...item,
        points: normalizeCarPoints(item.points),
      };
    }
    uniqueMap.set(item.id, resolvedItem);
  }

  return Array.from(uniqueMap.values());
}

// Add a new custom car question and persist
export function addCustomCarQuestion(q: UserCarQuestionInput): UserCarQuestionInput[] {
  const existing = getSavedCustomCarQuestions();
  const updated = [q, ...existing.filter((item) => item.id !== q.id)];
  if (typeof window !== 'undefined') {
    try {
      persistentStorage.setItem(CAR_CUSTOM_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('diwaniya_car_questions_updated'));
    } catch (e) {
      console.error('Error saving custom car question:', e);
    }
  }
  return updated;
}

// Update any car question (built-in or custom)
export function updateCarQuestion(
  id: string,
  updatedData: Partial<UserCarQuestionInput>
): void {
  if (typeof window === 'undefined') return;

  // Check if it's a custom question
  const customList = getSavedCustomCarQuestions();
  const customIndex = customList.findIndex((item) => item.id === id);

  if (customIndex !== -1) {
    customList[customIndex] = {
      ...customList[customIndex],
      ...updatedData,
      id,
    };
    try {
      persistentStorage.setItem(CAR_CUSTOM_STORAGE_KEY, JSON.stringify(customList));
    } catch (e) {
      console.error(e);
    }
  } else {
    // Save as override for built-in question
    const overrides = getCarQuestionOverrides();
    overrides[id] = {
      ...(overrides[id] || {}),
      ...updatedData,
    };
    try {
      persistentStorage.setItem(CAR_OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
    } catch (e) {
      console.error(e);
    }
  }

  window.dispatchEvent(new CustomEvent('diwaniya_car_questions_updated'));
}

// Delete a car question
export function deleteCarQuestion(id: string): void {
  if (typeof window === 'undefined') return;

  // If in custom, remove from custom array
  const customList = getSavedCustomCarQuestions().filter((q) => q.id !== id);
  persistentStorage.setItem(CAR_CUSTOM_STORAGE_KEY, JSON.stringify(customList));

  // Add to deleted IDs (in case it was a built-in question)
  const deleted = getDeletedCarQuestionIds();
  if (!deleted.includes(id)) {
    deleted.push(id);
    persistentStorage.setItem(CAR_DELETED_STORAGE_KEY, JSON.stringify(deleted));
  }

  window.dispatchEvent(new CustomEvent('diwaniya_car_questions_updated'));
}

// Reset car questions to defaults
export function resetCarQuestionsToDefaults(): void {
  if (typeof window === 'undefined') return;
  persistentStorage.removeItem(CAR_CUSTOM_STORAGE_KEY);
  persistentStorage.removeItem(CAR_OVERRIDES_STORAGE_KEY);
  persistentStorage.removeItem(CAR_DELETED_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('diwaniya_car_questions_updated'));
}

// Get all combined car questions (built-in + user added + edited)
export function getAllCarQuestions(): Question[] {
  const allRaw = getAllCarRawQuestions();

  return allRaw.map((q) => ({
    id: q.id,
    question: q.question,
    options: [],
    correctAnswer: q.answer,
    points: q.points || 200,
    category: "سيارات",
    explanation: `الإجابة الصحيحة هي: ${q.answer}`,
    hint: `قطعة/جزء في ميكانيكا السيارات`,
    imageUrl: q.imageUrl,
    answerImageUrl: q.answerImageUrl,
    hideImageUntilAnswer: false,
  }));
}

// Convert raw user questions to QuestionData format
export const carsQuestionDataList: QuestionData[] = rawUserCarQuestions.map((q) => ({
  id: q.id,
  points: q.points as 200 | 300 | 400 | 500 | 600,
  question: q.question,
  correctAnswer: q.answer,
  options: [],
  explanation: `الإجابة الصحيحة هي: ${q.answer}`,
  hint: `قطعة/جزء في ميكانيكا السيارات`,
  imageUrl: q.imageUrl,
  answerImageUrl: q.answerImageUrl,
  hideImageUntilAnswer: false,
}));

// Format for Question[] (used directly in categories.ts)
export const cars100Questions: Question[] = getAllCarQuestions();


