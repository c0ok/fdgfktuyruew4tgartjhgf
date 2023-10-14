import { SwitchColorScheme } from 'components';
import { Container, Heading, Link } from 'components/UI';

import style from './index.module.scss';

export const Navbar = () => {
  return (
    <Container className={style.container}>
      <nav className={style.navbar}>
        <div className={style.navbar__main}>
          <Heading className={style.navbar__heading}>Learn&nbsp;with Tests</Heading>
          <div className={style.navbar__links}>
            <Link href='#/neurology' target='_blank'>euro neuro logy</Link>
            <Link href='#/neurosurgery' target='_blank'>euro neuro surgery</Link>
          </div>
        </div>
        <SwitchColorScheme />
      </nav>
    </Container>
  );
};