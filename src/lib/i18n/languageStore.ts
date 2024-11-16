import { create } from 'zustand';
import i18n from '../../i18n/config';

type LanguageStore = {
  customLanguages: string[];
  addCustomLanguage: (lang: string) => void;
  isCustomLanguageSupported: (lang: string) => boolean;
};

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  customLanguages: [],
  addCustomLanguage: (lang: string) => {
    if (!get().isCustomLanguageSupported(lang)) {
      set(state => ({ customLanguages: [...state.customLanguages, lang] }));
      const currentSupportedLngs = i18n.options.supportedLngs || [];
      i18n.options.supportedLngs = [...currentSupportedLngs, lang];
    }
  },
  isCustomLanguageSupported: (lang: string) => {
    return get().customLanguages.includes(lang);
  },
}));