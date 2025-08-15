import type { CHANGE_SOURCE, THEME_VALUES } from '@/constants';

// Tipos básicos derivados das constantes
export type ThemeValue = typeof THEME_VALUES[keyof typeof THEME_VALUES];
export type ChangeSource = typeof CHANGE_SOURCE[keyof typeof CHANGE_SOURCE];

// Interface para o estado da store
export interface ThemeState {
  systemTheme: ThemeValue
  userTheme: ThemeValue
  effectiveTheme: ThemeValue
  lastChangeSource: ChangeSource
}

// Interface para métodos da store (se precisar em algum lugar)
export interface ThemeActions {
  detectSystemTheme: () => void
  applyTheme: (theme: ThemeValue) => void
  setUserTheme: (theme: ThemeValue) => void
  initTheme: () => void
}

// Tipos utilitários para componentes
export interface ThemeComposable {
  systemTheme: Readonly<Ref<ThemeValue>>
  effectiveTheme: Readonly<Ref<ThemeValue>>
  isLight: ComputedRef<boolean>
  isDark: ComputedRef<boolean>
  lastChangedByUser: ComputedRef<boolean>
  lastChangedBySystem: ComputedRef<boolean>
  setLightTheme: () => void
  setDarkTheme: () => void
  initTheme: () => void
}

// Se precisar tipar eventos de tema
export interface ThemeChangeEvent {
  previousTheme: ThemeValue
  currentTheme: ThemeValue
  source: ChangeSource
  timestamp: Date
}

// Para configurações avançadas (se precisar no futuro)
export interface ThemeConfig {
  enableSystemDetection: boolean
  enableTransitions: boolean
  transitionDuration: number
  persistUserChoice: boolean
  defaultTheme: ThemeValue
}
