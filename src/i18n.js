import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "header.title": "Cat Gallery",
      "header.lightshot": "Lightshot",
      "header.description": "screenshot tool",
      "header.download": "Download Lightshot for free",
      "header.login": "Login",
      "footer.download": "Download",
      "footer.videoTour": "Video Tour",
      "footer.privacy": "Privacy",
      "footer.help": "Help",
      "footer.ads": "Advertising",
      "footer.copyright": "© 2009-2022",
      "social.like": "Like",
      "social.tweet": "Tweet",
      "social.vkShare": "Share VK",
      "social.findSimilar": "Find Similar",
      "social.report": "Report",
      "social.likes": "{{count}} likes",
      "social.reported": "Reported",
      "social.shareTwitter": "Share on Twitter",
      "social.shareVK": "Share on VK"
    }
  },
  ru: {
    translation: {
      "header.title": "Галерея котиков",
      "header.lightshot": "Lightshot",
      "header.description": "инструмент для скриншотов",
      "header.download": "Бесплатно скачать Lightshot",
      "header.login": "Войти",
      "footer.download": "Скачать",
      "footer.videoTour": "Видеотур",
      "footer.privacy": "Privacy",
      "footer.help": "Помощь",
      "footer.ads": "Реклама",
      "footer.copyright": "© 2009-2022",
      "social.like": "Нравится",
      "social.tweet": "Твитнуть",
      "social.vkShare": "Поделиться",
      "social.findSimilar": "Найти похожие",
      "social.report": "Пожаловаться",
      "social.likes": "{{count}} отметок \"Нравится\"",
      "social.reported": "Жалоба отправлена",
      "social.shareTwitter": "Поделиться в Twitter",
      "social.shareVK": "Поделиться в VK"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 