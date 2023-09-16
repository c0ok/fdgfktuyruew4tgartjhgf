import { SwitchColorScheme } from 'components';
import { Container, Heading } from 'components/UI';

import style from './index.module.scss';

export const Navbar = () => {
  return (
    <Container className={style.container}>
      <nav className={style.navbar}>
        <Heading>Learn&nbsp;with Tests</Heading>
        <SwitchColorScheme />
      </nav>
    </Container>
  );
};