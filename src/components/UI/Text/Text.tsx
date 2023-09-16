import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import style from './index.module.scss';

export const Text: FC<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = (
  { className, ...props }
) => {
  return (
    <p {...props} className={classNames(className, style.text)} />
  );
};