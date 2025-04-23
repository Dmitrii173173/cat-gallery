import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'; // подключение перевода

ReactDOM.render(<App />, document.getElementById('root'));

import translationEN from './en.json';
import translationRU from './ru.json';

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

i18n
  .use(LanguageDetector) // автоматически определяет язык браузера
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
