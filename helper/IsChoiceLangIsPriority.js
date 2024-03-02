import { justThisLang } from "../config/AppConfig.js";

/**
 *
 * @param { String[] } choiceLang
 * @return {*}
 */
function isChoiceLangIsPriority (choiceLang) {
    return choiceLang.some(value => justThisLang.includes(value));
}

function filterPriorityLang (choiceLang) {
    return choiceLang.filter(choice => justThisLang.includes(choice));
}

function isHasPriorityLang () {
    return justThisLang.length !== 0;
}

export { isChoiceLangIsPriority, filterPriorityLang, isHasPriorityLang };