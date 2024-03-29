// eslint-disable-next-line max-len
import { checkExcludedVocabOrLanguage, filterExceptList } from "../../helper/IsChoiceLangInExceptList.js";
// eslint-disable-next-line max-len
import { isHasPriorityLang, isChoiceLangIsPriority, filterPriorityLang } from "../../helper/IsChoiceLangIsPriority.js";
// eslint-disable-next-line max-len
import { getRandomIndexArray } from "../../helper/GetRandomIndexArray.js";
import { languageDataService } from "../../JSON/LanguageData.js";
import {isFunction} from "../../helper/IsFunction.js";

/**
 *
 * @param {
 *      {
 *          german: {
 *              vocab: *[]
 *          },
 *          spain: {
 *              vocab: *[]
 *          },
 *          khmer: {
 *          },
 *          hebrew: {
 *              vocab: *[]
 *          },
 *          explanation: StringConstructor[]
 *          , norwegian: {
 *          },
 *          dutch: {
 *          }, chinese: {
 *          vocab: *[]
 *          },
 *          vocabulary: StringConstructor,
 *          japanese: {
 *              vocab: *[]
 *          },
 *          tamil: {
 *          },
 *          arabic: {
 *              vocab: *[]
 *          },
 *          dannish: {
 *          },
 *          bengali: {
 *          },
 *          urdu: {
 *          },
 *          english: {
 *              vocab: *[]
 *          },
 *          argentine: {
 *          },
 *          portuguese: {
 *          },
 *          lao: {
 *          },
 *          french: {
 *              vocab: *[]
 *          },
 *          italy: {
 *              vocab: *[]
 *          },
 *          georgian: {
 *          },
 *          greek: {
 *              vocab: *[]
 *          },
 *          swedish: {
 *              vocab: *[]
 *          },
 *          azerbaijan: {
 *          },
 *          russian: {
 *              vocab: *[]
 *          },
 *          uzbek: {
 *          },
 *          armenian: {
 *          },
 *          thai: {
 *              vocab: *[]
 *          },
 *          burmese: {
 *          },
 *          vietnamese: {
 *          },
 *          korean: {
 *              vocab: *[]
 *          },
 *          turkmen: {
 *          },
 *          tajik: {
 *          },
 *          persian: {
 *          },
 *          tagalog: {
 *          },
 *          kyrgyz: {
 *          },
 *          finnish: {
 *              vocab: *[]
 *          },
 *          turkish: {
 *          },
 *          hindi: {
 *          },
 *          kazakh: {
 *          }
 *      }
 * } obj berisi object hasil dari findAll database
 * @param { String[] } filteredKeys
 *     berisi properti vocabulary,
 *     explanation dan bahasa yang
 *     memiliki setidaknya satu vocab
 * @param { String } vocabProperty
 *     berisi properti vocabulary
 * @param { String } vocabValue berisi nilai dari properti vocabulary
 * @param { String[] } filteredLanguages
 * @return { ( Number | String | String )[] | *[] }
 */
function scenarioOneService (obj, filteredKeys, vocabProperty, vocabValue, filteredLanguages) {

    /**
     *
     * @type { ( Number | String | String )[] }
     */
    const returnValue = [ 1, "indonesia", vocabValue ];

    if (filteredLanguages.length === 0) {
        return [];
    }

    /**
     * @type { String[] }
     */
    let newFilteredLanguages;

    if (checkExcludedVocabOrLanguage(filteredLanguages, "lang")) {
        newFilteredLanguages = filterExceptList(filteredLanguages);
        if (newFilteredLanguages.length === 0) {
            return [];
        }
    } else {
        newFilteredLanguages = filteredLanguages;
    }

    /**
     * @type { String[] }
     */
    const shuffledLanguages = shuffleArray(newFilteredLanguages);

    // apakah terdapat bahasa yang diprioritaskan
    if (isHasPriorityLang()) {

        // apakah bahasa yang dimiliki terdapat bahasa prioritas
        if (isChoiceLangIsPriority(shuffledLanguages)) {
            const priorityLang = filterPriorityLang(shuffledLanguages);
            iterateArray(priorityLang, obj, returnValue);
        } else {
            return [];
        }
    } else {
        iterateArray(shuffledLanguages, obj, returnValue);
    }

    return returnValue;
}

function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ array[i], array[j] ] = [ array[j], array[i] ];
    }
    return array;
}

function iterateArray (language, obj, returnValue) {
    for (const choiceLanguage of language) {
        const languageData = languageDataService(choiceLanguage);
        if (!languageData) continue;
        const choiceVocab = obj[choiceLanguage].vocab[getRandomIndexArray(obj[choiceLanguage].vocab)];
        const vocabulary = choiceVocab[languageData.vocabulary];
        const latinValue = languageData.latin;
        const latin = latinValue
            ? ( typeof latinValue === "function"
                ? latinValue(choiceVocab)
                : choiceVocab[latinValue] )
            : undefined;

        // apakah terdapat kosakata yang dikecualikan?
        if (checkExcludedVocabOrLanguage(vocabulary)) continue;
        returnValue.push(choiceLanguage, vocabulary);
        if (latin !== undefined) returnValue.push(choiceLanguage, latin);
    }
}

export { scenarioOneService };
