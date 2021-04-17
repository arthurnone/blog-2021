import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import Languages from "@/languages"

i18n
    .use(initReactI18next)
    .init({
        resources: Languages,
        lng: "En",
        fallbackLng: "En",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n