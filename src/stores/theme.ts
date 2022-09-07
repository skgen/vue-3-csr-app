import { defineStore } from 'pinia';
import { Theme, getPersistedTheme, persistTheme } from '@/lib/modules/theme';

type ThemeStoreState = {
  theme: Theme;
};

const defaultTheme = getPersistedTheme() ?? Theme.auto;
if (defaultTheme !== Theme.auto) {
  document.documentElement.setAttribute('data-theme', Theme[defaultTheme]);
}

export const useThemeStore = defineStore({
  id: 'theme',
  state: (): ThemeStoreState => ({
    theme: defaultTheme,
  }),
  actions: {
    updateTheme(newTheme: Theme) {
      this.theme = newTheme;
      if (newTheme !== Theme.auto) {
        document.documentElement.setAttribute('data-theme', Theme[newTheme]);
        persistTheme(newTheme);
      } else {
        document.documentElement.removeAttribute('data-theme');
        persistTheme(null);
      }
    },
  },
});

export default {};
