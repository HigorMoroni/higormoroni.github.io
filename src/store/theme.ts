import type { ChangeSource, ThemeValue } from '@/types';

import { defineStore } from 'pinia';

import { CHANGE_SOURCE, DOM_ATTRIBUTES, MEDIA_QUERIES, THEME_VALUES } from '@/constants';

export const useThemeStore = defineStore('theme', () => {
  const systemTheme = ref<ThemeValue>(THEME_VALUES.LIGHT);
  const userTheme = ref<ThemeValue>(THEME_VALUES.LIGHT);
  const effectiveTheme = ref<ThemeValue>(THEME_VALUES.LIGHT);
  const lastChangeSource = ref<ChangeSource>(CHANGE_SOURCE.SYSTEM);

  const detectSystemTheme = () => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia(MEDIA_QUERIES.PREFERS_DARK).matches;
      systemTheme.value = isDark ? THEME_VALUES.DARK : THEME_VALUES.LIGHT;
    }
  };

  const applyTheme = (theme: ThemeValue) => {
    if (typeof document !== 'undefined') {
      if (theme === THEME_VALUES.DARK) {
        document.documentElement.setAttribute(DOM_ATTRIBUTES.DATA_THEME, THEME_VALUES.DARK);
      }
      else {
        document.documentElement.removeAttribute(DOM_ATTRIBUTES.DATA_THEME);
      }
      effectiveTheme.value = theme;
    }
  };

  const setUserTheme = (theme: ThemeValue) => {
    userTheme.value = theme;
    lastChangeSource.value = CHANGE_SOURCE.USER;
    applyTheme(theme);
  };

  const initTheme = () => {
    detectSystemTheme();

    applyTheme(systemTheme.value);
    userTheme.value = systemTheme.value;

    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(MEDIA_QUERIES.PREFERS_DARK);
      mediaQuery.addEventListener('change', (e) => {
        systemTheme.value = e.matches ? THEME_VALUES.DARK : THEME_VALUES.LIGHT;

        lastChangeSource.value = CHANGE_SOURCE.SYSTEM;
        userTheme.value = systemTheme.value;
        applyTheme(systemTheme.value);
      });
    }
  };

  return {
    systemTheme,
    userTheme,
    effectiveTheme,
    lastChangeSource,

    setUserTheme,
    initTheme
  };
});
