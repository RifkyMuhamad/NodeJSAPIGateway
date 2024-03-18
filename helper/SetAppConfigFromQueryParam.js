import { setExceptLang, setExceptVocab, setJustThisLang } from "../config/AppConfig.js";

const nilaiArray = ["english", "japanese", "korean", "arabic", "french", "chinese"]

function setAppConfigFromQueryParam (value, arrayConfig) {
    if (typeof value !== "undefined" && value !== null) {
        if (value !== "") {
            const arrayResult = JSON.parse(value)
            const newArrayResult = arrayResult.filter(nilai => nilaiArray.includes(nilai));
            switch (arrayConfig) {
                case "JTL":
                    setJustThisLang(newArrayResult);
                    break;
                case "EL":
                    setExceptLang(newArrayResult);
                    break;
                case "EV":
                    setExceptVocab(newArrayResult);
                    break;
            }
        }
    }
}

export { setAppConfigFromQueryParam };