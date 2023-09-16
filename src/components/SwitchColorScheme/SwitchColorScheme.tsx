import { IconMoon, IconSun } from 'components/UI';
import { ColorScheme } from 'shared/utils';

import style from './index.module.scss';

export const SwitchColorScheme = () => {
  const onSwitch = () => {
    const prev = ColorScheme.get();
    const scheme = prev === 'dark' ? 'light' : 'dark';
    ColorScheme.set(scheme);
  };

  return (
    <button className={style.button} onPointerDown={onSwitch}>
      <div className={style.button__switcher} />
      <IconMoon size={24} />
      <IconSun size={24} />
    </button>
  );
};