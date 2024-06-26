import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./translation/english.json";
import French from "./translation/french.json";

const resources = {
  en: {
    translation: English,
  },
  fr: {
    translation: French,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "fr",
});

export default i18next;
