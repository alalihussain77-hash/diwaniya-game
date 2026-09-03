import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { INITIAL_CATEGORIES } from '../src/data/categories';

type SmokeError = {
  location: string;
  message: string;
};

const errors: SmokeError[] = [];
const categoryIds = new Set<string>();
const questionIds = new Set<string>();

const addError = (location: string, message: string) => {
  errors.push({ location, message });
};

if (!Array.isArray(INITIAL_CATEGORIES) || INITIAL_CATEGORIES.length === 0) {
  addError('INITIAL_CATEGORIES', 'expected a non-empty category list');
}

let generalCategoryCount = 0;
let specificCategoryCount = 0;
let questionCount = 0;

for (const [categoryIndex, category] of INITIAL_CATEGORIES.entries()) {
  const location = `category[${categoryIndex}]`;

  if (!category || typeof category !== 'object') {
    addError(location, 'expected a category object');
    continue;
  }

  if (!category.id?.trim()) addError(location, 'missing id');
  if (category.id && categoryIds.has(category.id)) {
    addError(location, `duplicate category id "${category.id}"`);
  }
  if (category.id) categoryIds.add(category.id);

  if (!category.name?.trim()) addError(location, 'missing name');
  if (category.type === 'general') generalCategoryCount += 1;
  if (category.type === 'specific') specificCategoryCount += 1;
  if (!Array.isArray(category.questions) || category.questions.length === 0) {
    addError(location, 'expected a non-empty question list');
    continue;
  }

  for (const [questionIndex, question] of category.questions.entries()) {
    const questionLocation = `${location}.questions[${questionIndex}]`;
    questionCount += 1;

    if (!question || typeof question !== 'object') {
      addError(questionLocation, 'expected a question object');
      continue;
    }

    if (!question.id?.trim()) addError(questionLocation, 'missing id');
    if (question.id && questionIds.has(question.id)) {
      addError(questionLocation, `duplicate question id "${question.id}"`);
    }
    if (question.id) questionIds.add(question.id);

    if (!question.question?.trim()) addError(questionLocation, 'missing question text');
    if (!question.correctAnswer?.trim()) addError(questionLocation, 'missing correct answer');
    if (!Number.isFinite(question.points) || question.points <= 0) {
      addError(questionLocation, 'points must be a positive number');
    }

    if (question.options !== undefined) {
      if (!Array.isArray(question.options)) {
        addError(questionLocation, 'options must be an array when present');
      } else if (question.options.some((option) => typeof option !== 'string' || !option.trim())) {
        addError(questionLocation, 'options must contain non-empty strings');
      }
    }
  }
}

if (generalCategoryCount < 4) {
  addError('game setup', `expected at least 4 general categories, found ${generalCategoryCount}`);
}
if (specificCategoryCount < 4) {
  addError('game setup', `expected at least 4 specific categories, found ${specificCategoryCount}`);
}

const authSource = readFileSync(resolve(process.cwd(), 'src/components/AuthScreen.tsx'), 'utf8');
if (!authSource.includes('handleGuestSignIn') || !authSource.includes('signInAnonymously')) {
  addError('guest entry', 'guest sign-in handler is not connected to Firebase anonymous auth');
}

const appSource = readFileSync(resolve(process.cwd(), 'src/App.tsx'), 'utf8');
if (!appSource.includes("stage === 'playing'") || !appSource.includes('<GameBoard')) {
  addError('game entry', 'the playing stage is not connected to the game board');
}

if (errors.length > 0) {
  console.error(`Quiz smoke check failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error.location}: ${error.message}`);
  }
  process.exit(1);
}

console.log(
  `Quiz smoke check passed: ${INITIAL_CATEGORIES.length} categories and ${questionCount} questions validated; guest entry and game board hooks found.`,
);