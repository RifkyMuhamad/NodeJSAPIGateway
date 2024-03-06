import { getExceptLang, getExceptVocab } from "../config/AppConfig.js";

/**
 *
 * @param { String[] } values
 * @param { String } criteria
 * @return { Boolean }
 */
function checkExcludedVocabOrLanguage (values, criteria = "vocab") {
    switch (criteria) {
    case "vocab":
        return getExceptVocab().includes(values);
    case "lang":
        return values.some(value => getExceptLang().includes(value));
    default:
        return false;
    }
}

/**
 *
 * @param { String[] } values
 * @return { String[] }
 */
function filterExceptList (values) {
    return values.filter(value => !getExceptLang().includes(value));
}

export { checkExcludedVocabOrLanguage, filterExceptList };