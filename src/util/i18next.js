import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "../locales/pt.json";
import en from "../locales/en.json";

i18n.use(initReactI18next).init({
    // todos os idiomas do site
    resources: {
        pt: { translation: pt },
        en: { translation: en },
    },

    lng: "pt", //Idioma inicial
    fallbackLng: "pt", //caso falte chave para tradução
    interpolation: { escapeValue: false },
});

export default i18n;
