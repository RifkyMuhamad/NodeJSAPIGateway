import { setExceptLang, setExceptVocab, setJustThisLang } from "../config/AppConfig.js";
import { isStringArrayBlank } from "./IsStringArrayBlank.js";

function setAppConfigFromQueryParam(value, param){
    if (typeof value !== 'undefined' && value !== null) {
        const cleanValue = value.trim();
        if (cleanValue) {
            const arrayHasil = cleanValue.slice(1, -1).split(',');
            if (!isStringArrayBlank(arrayHasil)) {
                switch (param) {
                    case "JTL":
                        setJustThisLang(arrayHasil);
                        break;
                    case "EL":
                        setExceptLang(arrayHasil);
                        break;
                    case "EV":
                        setExceptVocab(arrayHasil);
                        break;
                }
            }
        }
    }
}

export { setAppConfigFromQueryParam }