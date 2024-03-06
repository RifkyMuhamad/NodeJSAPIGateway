import { getJustThisLang } from "../config/AppConfig.js";

/**
 *
 * @param { String[] } choiceLang
 * @return {*}
 */
function isChoiceLangIsPriority (choiceLang) {
    return choiceLang.some(value => getJustThisLang().includes(value));
}

function filterPriorityLang (choiceLang) {
    return choiceLang.filter(choice => getJustThisLang().includes(choice));
}

function isHasPriorityLang () {
    return getJustThisLang().length !== 0;
}

export { isChoiceLangIsPriority, filterPriorityLang, isHasPriorityLang };