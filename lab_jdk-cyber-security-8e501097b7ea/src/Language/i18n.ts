import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Fichiers de traduction pour différentes langues
import translationEn from './locales/en/translation.json';
import translationFr from './locales/fr/translation.json';

// Configuration de i18next
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEn,
        },
        fr: {
            translation: translationFr,
        },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la langue demandée n'est pas disponible
    interpolation: {
        escapeValue: false, // Permet d'inclure des balises HTML dans les traductions
    },
}).then( ()=> {
    console.log("i18n correct")
} );
export default i18n;
