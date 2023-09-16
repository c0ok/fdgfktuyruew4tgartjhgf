import { useEffect } from 'react';
import { Main } from 'pages';
import { Navbar } from 'components';
import { ColorScheme } from 'shared/utils';

import { AppProvider } from './AppProvider';

import './index.scss';

export const App = () => {
  useEffect(ColorScheme.init, []);

  return (
    <AppProvider>
      <Navbar />
      <Main />
    </AppProvider>
  );
};