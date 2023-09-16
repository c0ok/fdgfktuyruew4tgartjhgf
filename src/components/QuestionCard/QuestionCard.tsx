/* eslint-disable no-nested-ternary */
import { FC, useEffect, useState } from 'react';
import { Radio, Spacing, Text, Checkbox } from 'components/UI';
import { calcChooseMode } from 'shared/utils';

import style from './index.module.scss';

import type { Question } from 'shared/types';

const letters = 'ABCDEFG';

interface QuestionCardProps extends Question {
  onChooseAnswer: (index: number) => void;
}

export const QuestionCard: FC<QuestionCardProps> = ({ isPassed, number, question, answers, onChooseAnswer }) => {
  const [chooseMode, setChooseMode] = useState(calcChooseMode(answers));

  useEffect(() => setChooseMode(calcChooseMode(answers)), [number]);

  return (
    <div className={style.wrapper}>
      <Text className={style.question}>{`${number}. ${question}`}</Text>
      <Spacing size={0} />
      {answers.map(({ text, isCorrect, isChecked }, index) => {
        return chooseMode === 'single'
          ? <Radio
          className={style.input}
            isChecked={isChecked || false}
            isCorrect={isPassed ? isCorrect : undefined}
            isDisabled={isPassed}
            onClick={() => onChooseAnswer(index)}
            key={number + text}
          >
            {`${letters[index]}. ${text}`}
          </Radio>
          : <Checkbox
          className={style.input}
            isChecked={isChecked || false}
            isCorrect={isPassed ? isCorrect : undefined}
            isDisabled={isPassed}
            onClick={() => onChooseAnswer(index)}
            key={number + text}
          >
            {`${letters[index]}. ${text}`}
          </Checkbox>;
      })}
    </div >
  );
};