// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';


const savedLanguage = localStorage.getItem('language') || 'en';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            ua: { translation: translationUA },
        },
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
