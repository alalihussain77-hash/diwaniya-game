import React from 'react';
import { createRoot } from 'react-dom/client';
import { QuestionModal } from '../src/components/QuestionModal';
import { INITIAL_CATEGORIES } from '../src/data/categories';
import { getAllCarQuestions } from '../src/data/carsQuestions';
import type { Team } from '../src/types';

// Vite dev-only test fixture. Not imported into the production application.
export function mountCarImageFixture(mode: 'normal' | 'empty' | 'broken'): void {
  const category = INITIAL_CATEGORIES.find((entry) => entry.id === 'gen-cars');
  const original = getAllCarQuestions().find((entry) => entry.id === 'car_7');
  if (!category || !original) throw new Error('Built-in car_7 question not found');

  const question = {
    ...original,
    imageUrl: mode === 'empty' ? '' : mode === 'broken' ? '/ci-missing-question-image.jpg' : original.imageUrl,
    answerImageUrl: mode === 'empty' ? '' : mode === 'broken' ? '/ci-missing-answer-image.jpg' : original.answerImageUrl,
  };
  const team1: Team = {
    id: 'team1',
    name: 'الفريق الأول',
    color: 'blue',
    avatar: '',
    score: 0,
    selectedGeneralCategories: [],
    selectedSpecificCategories: [],
    correctAnswersCount: 0,
    wrongAnswersCount: 0,
  };
  const team2: Team = { ...team1, id: 'team2', name: 'الفريق الثاني' };

  const element = document.createElement('div');
  element.id = 'car-image-ci-fixture';
  document.body.appendChild(element);
  const root = createRoot(element);
  root.render(
    <QuestionModal
      category={category}
      question={question}
      team1={team1}
      team2={team2}
      activeTurnTeamId="team1"
      timerDuration={30}
      onAwardPoints={() => {}}
      onUsePowerup={() => {}}
      onClose={() => {
        root.unmount();
        element.remove();
      }}
    />,
  );
}
