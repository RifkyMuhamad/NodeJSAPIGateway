import {setCategories, setExceptLang, setExceptVocab, setJustThisLang} from "../config/AppConfig.js";

const nilaiArray = ["english", "japanese", "korean", "arabic", "french", "chinese"]

function setAppConfigFromQueryParam (value, arrayConfig) {
    if (arrayConfig === "C"){
        setCategories(["random vocabs"])
    }

    if (typeof value !== "undefined" && value !== null) {
        if (value !== "") {
            const arrayResult = JSON.parse(value);
            let newArrayResult;
            switch (arrayConfig) {
                case "JTL":
                    newArrayResult = arrayResult.filter(nilai => nilaiArray.includes(nilai));
                    setJustThisLang(newArrayResult);
                    break;
                case "EL":
                    newArrayResult = arrayResult.filter(nilai => nilaiArray.includes(nilai));
                    setExceptLang(newArrayResult);
                    break;
                case "EV":
                    newArrayResult = arrayResult.filter(nilai => nilaiArray.includes(nilai));
                    setExceptVocab(newArrayResult);
                    break;
                case "C":
                    setCategories(newArrayResult);
                    break;
            }
        }
    }
}

export { setAppConfigFromQueryParam };