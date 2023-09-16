import { FC, PropsWithChildren } from 'react';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};