import type { ColorSchemeType } from 'shared/types';

const key = 'color-scheme';

export class ColorScheme {
  static init() {
    ColorScheme.set(ColorScheme.get());
  }

  static set(scheme: ColorSchemeType) {
    document.querySelector('html')!.style.colorScheme = scheme;
    window.localStorage.setItem(key, scheme);
  }

  static get(): ColorSchemeType {
    return document.querySelector('html')?.getAttribute(key) as ColorSchemeType
      || window.localStorage.getItem(key)
      || 'dark';
  }
}