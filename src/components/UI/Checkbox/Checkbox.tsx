import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { IconCheck } from '../Icons';

import style from './index.module.scss';

interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isChecked: boolean;
  isCorrect?: boolean;
  isDisabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  children, className, isChecked, isCorrect, isDisabled = false, ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(style.input, className, {
        [style['input--checked']]: isChecked,
        [style['input--correct']]: isChecked && isCorrect === true,
        [style['input--incorrect']]: isChecked && isCorrect === false,
        [style['input--not-checked']]: !isChecked && isCorrect === true,
        [style['input--disabled']]: isDisabled
      })}
    >
      <div className={style.input__box}>
        <IconCheck size={16} />
      </div>
      {children}
    </div>
  );
};