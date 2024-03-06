import {
    setExceptLang,
    setExceptVocab,
    setJustThisLang
} from "../config/AppConfig.js";
import { isStringArrayBlank } from "./IsStringArrayBlank.js";

function setAppConfigFromQueryParam (value, param) {
    if (typeof value !== "undefined" && value !== null) {
        const parts = JSON.parse(value)
                switch (param) {
                case "JTL":
                    setJustThisLang(parts);
                    break;
                case "EL":
                    setExceptLang(parts);
                    break;
                case "EV":
                    setExceptVocab(parts);
                    break;
                }
    }
}

export { setAppConfigFromQueryParam };