import type { Answer, ChooseMode } from 'shared/types';

export const calcChooseMode = (answers: Answer[]): ChooseMode => {
  let correctsAmount = 0;
  for (const answer of answers) {
    if (answer.isCorrect) {
      correctsAmount++;
    }
    if (correctsAmount === 2) {
      return 'multiple';
    }
  }
  return 'single';
};