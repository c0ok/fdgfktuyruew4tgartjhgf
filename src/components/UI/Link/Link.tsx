import style from './index.module.scss';

import type { AnchorHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler } from 'react';

export const Link: FC<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = (props) => {
  const onClick: MouseEventHandler = (event) => {
    if (props.href === document.location.hash) {
      event.preventDefault();
    }
  };

  return (
    <a {...props} className={style.link} onClick={onClick} />
  );
};