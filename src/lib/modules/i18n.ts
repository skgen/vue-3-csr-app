import messages from '@intlify/vite-plugin-vue-i18n/messages';
import { isValue } from '@/lib/modules/definition';

const locales = Object.keys(messages);

export function getPersistedLocale(): string | null {
  const locale = localStorage.getItem('app-locale');
  if (isValue(locale) && locales.includes(locale)) {
    return locale;
  }
  return null;
}

export function persistLocale(locale: string | null) {
  if (isValue(locale)) {
    localStorage.setItem('app-locale', locale);
  } else {
    localStorage.removeItem('app-locale');
  }
}
