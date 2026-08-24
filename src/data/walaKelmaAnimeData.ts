import { Question } from '../types';
import { animeQuestionsByPoints } from './anime100Questions';

export interface AnimeQuestionItem {
  question: string;
  answer: string;
}

export const animeQuestions: Record<number, AnimeQuestionItem[]> = {
  200: animeQuestionsByPoints[200].map(item => ({ question: item.question, answer: item.answer })),
  400: animeQuestionsByPoints[400].map(item => ({ question: item.question, answer: item.answer })),
  600: animeQuestionsByPoints[600].map(item => ({ question: item.question, answer: item.answer }))
};

// Also export flat word list for backward compatibility
export const animeList: string[] = [
  ...animeQuestions[200].map(i => i.answer),
  ...animeQuestions[400].map(i => i.answer),
  ...animeQuestions[600].map(i => i.answer)
];

// Helper to select random anime question by points
export const getRandomAnimeQuestion = (currentPoints: number = 200) => {
  const pointsKey = (currentPoints === 400 || currentPoints === 600) ? currentPoints : 200;
  const list = animeQuestions[pointsKey] || animeQuestions[200];
  const selectedAnimeItem = list[Math.floor(Math.random() * list.length)];
  return {
    selectedAnimeItem,
    currentQuestionText: selectedAnimeItem.question,
    currentAnswerText: selectedAnimeItem.answer,
    qrUrl: `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(selectedAnimeItem.question)}`
  };
};

// Generate full 100 questions for Wala Kelma Anime
export const walaKelmaAnimeQuestions: Question[] = [
  ...animeQuestionsByPoints[200].map((item, idx) => ({
    id: `wk_ani_200_${String(idx + 1).padStart(3, '0')}`,
    points: 200,
    category: 'أنمي - مسلسلات وشخصيات',
    question: 'امسح الباركود للحصول على السؤال',
    questionText: item.question,
    options: item.options,
    correctAnswer: item.answer,
    explanation: `السؤال: ${item.question}\nالإجابة: ${item.answer}`,
    hint: item.hint || `أنمي: ${item.answer}`
  })),
  ...animeQuestionsByPoints[400].map((item, idx) => ({
    id: `wk_ani_400_${String(idx + 1).padStart(3, '0')}`,
    points: 400,
    category: 'أنمي - مسلسلات وشخصيات',
    question: 'امسح الباركود للحصول على السؤال',
    questionText: item.question,
    options: item.options,
    correctAnswer: item.answer,
    explanation: `السؤال: ${item.question}\nالإجابة: ${item.answer}`,
    hint: item.hint || `أنمي: ${item.answer}`
  })),
  ...animeQuestionsByPoints[600].map((item, idx) => ({
    id: `wk_ani_600_${String(idx + 1).padStart(3, '0')}`,
    points: 600,
    category: 'أنمي - مسلسلات وشخصيات',
    question: 'امسح الباركود للحصول على السؤال',
    questionText: item.question,
    options: item.options,
    correctAnswer: item.answer,
    explanation: `السؤال: ${item.question}\nالإجابة: ${item.answer}`,
    hint: item.hint || `أنمي: ${item.answer}`
  }))
];
