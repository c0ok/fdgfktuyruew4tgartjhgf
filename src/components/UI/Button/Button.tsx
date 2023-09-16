import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import classNames from 'classnames';

import style from './index.module.scss';

export const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (
  { className, ...props }
) => {
  return (
    <button {...props} className={classNames(style.input, className)} />
  );
};