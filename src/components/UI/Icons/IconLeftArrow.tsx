import { FC } from 'react';

import type { IconProps } from 'shared/types';

/* eslint-disable max-len */
export const IconLeftArrow: FC<IconProps> = ({ size, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 -960 960 960"
  >
    <path d="M640-80L240-480l400-400 71 71-329 329 329 329-71 71z"></path>
  </svg>
);