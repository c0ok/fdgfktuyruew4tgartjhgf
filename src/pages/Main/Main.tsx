import { QuestionCard } from 'components';
import { Button, Container, IconLeftArrow, IconRightArrow, Input, Text } from 'components/UI';
import { useRef, useState } from 'react';
import { calcChooseMode } from 'shared/utils';
import { shuffleArray } from 'shared/utils/shuffleArray';

import hematology from '../../../public/hematology.json';
import MBDGPKnI88YzrM from '../../../public/ji2FrFvJxpcvXU.json';
import neurology from '../../../public/neurology.json';
import neurosurgery from '../../../public/neurosurgery.json';
import pneumology from '../../../public/pneumology.json';

import style from './index.module.scss';

import type { Question } from 'shared/types';

const getQuestion = () => {
  switch (window.location.hash.slice(2)) {
    case 'hematology':
      return hematology;

    case 'neurology':
      return neurology;

    case 'neurosurgery':
      return neurosurgery;

    case 'pneumology':
      return pneumology;

    case 'sRqicsRNXJtpjq':
      return MBDGPKnI88YzrM;

    default:
      window.location.hash = '#/neurology';
      return neurology;
  }
};
const questions = getQuestion();

window.addEventListener('hashchange', () => window.location.reload());

export const Main = () => {
  const [renderingQuestion, setRenderingQuestion] = useState<Question | null>(null);
  const shuffledQuestions = useRef<Question[]>([]);
  const questionIndex = useRef<number | null>(null);

  const min = useRef(1);
  const max = useRef(questions.length);

  const updateRenderingQuestion = () => {
    if (questionIndex.current === null) {
      return;
    }
    setRenderingQuestion({ ...shuffledQuestions.current[questionIndex.current] });
  };

  const onStartTest = () => {
    const total = questions.length;
    console.log(min.current, max.current);
    if (min.current > max.current || min.current > total && max.current > total) {
      return;
    }
    if (min.current < 1) {
      min.current = 1;
    }
    if (max.current > total || max.current === 0) {
      max.current = total;
    }

    questionIndex.current = 0;
    shuffledQuestions.current = shuffleArray(questions.slice(min.current - 1, max.current));
    updateRenderingQuestion();
  };

  const onSwitchQuestion = (increment: -1 | 1) => {
    if (
      questionIndex.current === null
      || !shuffledQuestions.current.length
      || (questionIndex.current === 0 && increment === -1)
      || (questionIndex.current === shuffledQuestions.current.length - 1 && increment === 1)
    ) {
      return;
    }

    questionIndex.current += increment;
    updateRenderingQuestion();
  };

  const onPassQuestion = () => {
    const index = questionIndex.current;
    if (
      index === null
      || shuffledQuestions.current[index]?.isPassed
      || shuffledQuestions.current[index].answers.every(({ isCorrect }) => !isCorrect)
    ) {
      return;
    }
    shuffledQuestions.current[index].isPassed = true;
    updateRenderingQuestion();
  };

  const onChooseAnswer = (answerIndex: number) => {
    const index = questionIndex.current;
    if (index === null || shuffledQuestions.current[index]?.isPassed) {
      return;
    }
    if (answerIndex < 0) {
      throw new Error('Answer index can not be smaller than 0');
    }

    const { answers } = shuffledQuestions.current[index];
    calcChooseMode(answers) === 'single'
      ? answers.forEach((_, index) => answers[index].isChecked = index === answerIndex)
      : answers[answerIndex].isChecked = !answers[answerIndex].isChecked;
    updateRenderingQuestion();
  };

  return (
    <Container className={style.wrapper}>
      <Text>Current chosen Test: {window.location.hash.slice(2)} (1-{questions.length})</Text>
      <div className={style.inputs}>
        <Input
          placeholder='First question number (min: 1)'
          onChange={(event) => min.current = Number(event.target.value)}
        />
        <Input
          placeholder={`Last question number (max: ${questions.length})`}
          onChange={(event) => max.current = Number(event.target.value)}
        />
        <Button onClick={onStartTest}>{renderingQuestion ? 'Restart Test' : 'Start Test'}</Button>
      </div>
      {renderingQuestion && (
        <QuestionCard
          isPassed={renderingQuestion?.isPassed}
          number={renderingQuestion.number}
          question={renderingQuestion.question}
          answers={renderingQuestion.answers}
          onChooseAnswer={onChooseAnswer}
        />
      )}
      <div className={style.buttons}>
        <Button onClick={() => onSwitchQuestion(-1)}><IconLeftArrow size={24} /></Button>
        <Button onClick={onPassQuestion}>Try it</Button>
        <Button onClick={() => onSwitchQuestion(1)}><IconRightArrow size={24} /></Button>
      </div>
    </Container>
  );
};