import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationUK from './locales/ua/translation.json';
import translationDE from './locales/de/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationRU from './locales/ru/translation.json';

// Явно задаём язык
const savedLanguage = localStorage.getItem('language') || 'uk';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            uk: { translation: translationUK },
            de: { translation: translationDE },
            fr: { translation: translationFR },
            es: { translation: translationES },
            ru: { translation: translationRU },
        },
        lng: savedLanguage,
        fallbackLng: 'uk',
        interpolation: {
            escapeValue: false,
        },
        detection: {

            order: [],
            caches: [],
        },
    });
export default i18n;
