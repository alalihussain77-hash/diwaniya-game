export type CategoryType = 'general' | 'specific';

export interface Question {
  id: string;
  category?: string;
  question: string;
  questionText?: string;
  imageUrl?: string; // Optional image URL for visual questions (flags, logos, products)
  image?: string; // Alias for imageUrl
  answerImageUrl?: string; // Image to display when answer is revealed or inside question
  hideImageUntilAnswer?: boolean; // If true, image is hidden until answer is revealed so it doesn't spoil factual questions
  options?: string[]; // Optional multiple choice options
  correctAnswer: string;
  explanation?: string;
  hint?: string;
  points: number; // e.g., 200, 300, 400, 500, 600
  isAnswered?: boolean;
  answeredByTeamId?: string | null;
}

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  iconName: string; // Lucide icon identifier
  imageUrl?: string; // Optional category image URL
  description: string;
  color: string; // Tailwind color class for styling badges/cards
  bgGradient: string;
  tags: string[];
  questions: Question[];
  selectedByTeamId?: string | null; // 'team1' or 'team2'
  section?: string; // Section title (e.g., '🔥 أجدد الفئات', '🇰🇼 الكويت والتراث')
  hidden?: boolean; // Optional flag to hide category for now
}

export interface Team {
  id: 'team1' | 'team2';
  name: string;
  color: string; // e.g., 'blue', 'rose', 'emerald', 'amber', 'purple'
  avatar: string; // tactical assistance choice or logo
  powerups?: string[]; // Tactical assistance options: 'double', 'steal', 'silence', 'call'
  usedPowerups?: string[]; // List of used powerup IDs: ['double', 'steal', 'silence', 'call']
  score: number;
  selectedGeneralCategories: string[]; // Category IDs
  selectedSpecificCategories: string[]; // Category IDs
  correctAnswersCount: number;
  wrongAnswersCount: number;
}

export type GameStage = 
  | 'team-setup'
  | 'draft-general'
  | 'draft-specific'
  | 'draft-summary'
  | 'playing'
  | 'game-over';

export interface ActiveQuestionState {
  category: Category;
  question: Question;
  timerSeconds: number;
  isTimerRunning: boolean;
  showAnswer: boolean;
  showHint: boolean;
  selectedOptionIndex?: number | null;
  buzzedTeamId?: 'team1' | 'team2' | null;
}

export interface GameSettings {
  timerDuration: number; // e.g., 30 seconds
  soundEnabled: boolean;
  multipleChoiceMode: boolean; // toggle between multiple choice options vs direct answer reveal
}

export interface QuestionData {
  id?: string;
  points?: 200 | 300 | 400 | 500 | 600 | number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
  imageUrl?: string;
  hideImageUntilAnswer?: boolean;
}
