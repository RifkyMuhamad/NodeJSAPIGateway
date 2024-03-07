import {
    setExceptLang,
    setExceptVocab,
    setJustThisLang
} from "../config/AppConfig.js";
import { isStringArrayBlank } from "./IsStringArrayBlank.js";

function setAppConfigFromQueryParam (value, arrayConfig) {
    if (typeof value !== "undefined" && value !== null) {
        if (value !== "") {
            const arrayResult = JSON.parse(value)
            switch (arrayConfig) {
                case "JTL":
                    setJustThisLang(arrayResult);
                    break;
                case "EL":
                    setExceptLang(arrayResult);
                    break;
                case "EV":
                    setExceptVocab(arrayResult);
                    break;
            }
        }
    }
}

export { setAppConfigFromQueryParam };