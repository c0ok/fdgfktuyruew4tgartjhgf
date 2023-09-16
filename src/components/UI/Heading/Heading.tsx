import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import style from './index.module.scss';

export const Heading: FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (
  { className, ...props }
) => {
  return (
    <h1 {...props} className={classNames(className, style.heading)} />
  );
};