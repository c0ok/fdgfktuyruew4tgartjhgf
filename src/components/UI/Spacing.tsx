import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface Spacing extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: number;
}

export const Spacing: FC<Spacing> = ({ size, ...props }) => {
  return (
    <div {...props} style={{ height: size }} />
  );
};