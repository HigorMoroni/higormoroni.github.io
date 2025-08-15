import { CHANGE_SOURCE, THEME_VALUES } from '@/constants';
import { useThemeStore } from '@/store/theme';

export function useTheme() {
  const store = useThemeStore();

  return {
    systemTheme: store.systemTheme,
    effectiveTheme: store.effectiveTheme,
    initTheme: store.initTheme,

    // Métodos para os botões
    setLightTheme: () => store.setUserTheme(THEME_VALUES.LIGHT),
    setDarkTheme: () => store.setUserTheme(THEME_VALUES.DARK),

    // Estados computados para os botões
    isLight: computed(() => store.effectiveTheme === THEME_VALUES.LIGHT),
    isDark: computed(() => store.effectiveTheme === THEME_VALUES.DARK),

    // Indica qual foi a última fonte de mudança
    lastChangedByUser: computed(() => store.lastChangeSource === CHANGE_SOURCE.USER),
    lastChangedBySystem: computed(() => store.lastChangeSource === CHANGE_SOURCE.SYSTEM)
  };
}
