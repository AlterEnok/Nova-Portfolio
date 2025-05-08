// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';
import translationDE from './locales/de/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationRU from './locales/ru/translation.json';



const savedLanguage = localStorage.getItem('language') || 'en';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            ua: { translation: translationUA },
            de: { translation: translationDE },
            fr: { translation: translationFR },
            es: { translation: translationES },
            ru: { translation: translationRU },
        },
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
