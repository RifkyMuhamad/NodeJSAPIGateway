import {setCategories, setExceptLang, setExceptVocab, setJustThisLang} from "../config/AppConfig.js";

const nilaiArray = ["english", "japanese", "korean", "arabic", "french", "chinese"]

function setAppConfigFromQueryParam (value, arrayConfig) {
    if (arrayConfig === "C"){
        setCategories(["random vocabs"])
    }
    if (typeof value !== "undefined" && value !== null) {
        if (value !== "") {
            const parsedValue = JSON.parse(value);
            let arrayResult;
            switch (arrayConfig) {
                case "JTL":
                    arrayResult = filterByArray(parsedValue, nilaiArray);
                    setJustThisLang(arrayResult);
                    break;
                case "EL":
                    arrayResult = filterByArray(parsedValue, nilaiArray);
                    setExceptLang(arrayResult);
                    break;
                case "EV":
                    setExceptVocab(
                        [...new Set(
                            parsedValue
                                .flatMap(item =>
                                    item.split(',')
                                        .filter(item =>
                                            item !== '')
                                        .map(word =>
                                            word
                                                .trim()
                                                .replace(/-/g, ' ')
                                                .replace(/[^a-zA-Z\s'-]/g, '')
                                                .toLowerCase())
                                        .sort(
                                            (a, b) =>
                                                a.localeCompare(b, 'id', { sensitivity: 'base' })
                                        )
                                )
                        )]
                    );
                    break;
                case "C":
                    arrayResult = parsedValue.length === 0 ? ["random vocabs"] : parsedValue;
                    setCategories(arrayResult);
                    break;
            }
        }
    }
}

function filterByArray(array, filterArray) {
    return array.filter(value => filterArray.includes(value));
}

export { setAppConfigFromQueryParam };