import { computed } from 'vue';
import { useThemeStore } from '@/store/theme';

export function useTheme() {
  const store = useThemeStore();

  return {
    systemTheme: store.systemTheme,
    effectiveTheme: store.effectiveTheme,
    initTheme: store.initTheme,

    setLightTheme: () => store.setUserTheme('light'),
    setDarkTheme: () => store.setUserTheme('dark'),

    isLight: computed(() => store.effectiveTheme === 'light'),
    isDark: computed(() => store.effectiveTheme === 'dark'),

    // Indica qual foi a última fonte de mudança
    lastChangedByUser: computed(() => store.lastChangeSource === 'user'),
    lastChangedBySystem: computed(() => store.lastChangeSource === 'system')
  };
}
