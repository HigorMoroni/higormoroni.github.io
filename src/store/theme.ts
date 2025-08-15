import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const systemTheme = ref<'light' | 'dark'>('light');
  const userTheme = ref<'light' | 'dark'>('light');
  const effectiveTheme = ref<'light' | 'dark'>('light');
  const lastChangeSource = ref<'system' | 'user'>('system');

  const detectSystemTheme = () => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      systemTheme.value = isDark ? 'dark' : 'light';
    }
  };

  const applyTheme = (theme: 'light' | 'dark') => {
    if (typeof document !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      else {
        document.documentElement.removeAttribute('data-theme');
      }
      effectiveTheme.value = theme;
    }
  };

  const setUserTheme = (theme: 'light' | 'dark') => {
    userTheme.value = theme;
    lastChangeSource.value = 'user';
    applyTheme(theme);
  };

  const initTheme = () => {
    detectSystemTheme();

    applyTheme(systemTheme.value);
    userTheme.value = systemTheme.value;

    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        systemTheme.value = e.matches ? 'dark' : 'light';

        lastChangeSource.value = 'system';
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
