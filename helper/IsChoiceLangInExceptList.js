import { exceptVocab, exceptLang } from "../config/AppConfig.js";

/**
 *
 * @param { String[] } values
 * @param { String } criteria
 * @return { Boolean }
 */
function checkExcludedVocabOrLanguage (values, criteria = "vocab") {
    switch (criteria) {
    case "vocab":
        return exceptVocab.includes(values);
    case "lang":
        return values.some(value => exceptLang.includes(value));
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
    return values.filter(value => !exceptLang.includes(value));
}

export { checkExcludedVocabOrLanguage, filterExceptList };