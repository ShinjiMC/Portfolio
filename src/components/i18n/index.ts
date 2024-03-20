import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locale/en.json";
import translationES from "./locale/es.json";

// Configura i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
