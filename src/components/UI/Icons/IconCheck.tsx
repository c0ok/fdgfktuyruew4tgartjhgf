import { FC } from 'react';

import type { IconProps } from 'shared/types';

/* eslint-disable max-len */
export const IconCheck: FC<IconProps> = ({ size, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 -960 960 960"
  >
    <path d="M382-240L154-468l57-57 171 171 367-367 57 57-424 424z"></path>
  </svg>
);