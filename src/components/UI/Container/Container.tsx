import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import style from './index.module.scss';

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div {...props} className={classNames(className, style.container)} />
  );
};