import vocabRepository from "../../repository/VocabRepository/VocabRepository.js";
import { getRandomArrayValue } from "../../helper/GetRandomArrayValue.js";
import { getRandomIndexArray } from "../../helper/GetRandomIndexArray.js";
import { getRandomObjectValue } from "../../helper/GetRandomObjectValue.js";
import { scenarioOneService } from "../scenario/ScenarioOneService.js";
import { getTerminalSource } from "../../config/TerminalSourceConfig.js";

/**
 * Function get milik VocabService ini berguna sebagai logika bisnis
 * dari aplikasi kita
 *
 * @return { Promise<*|number> }
 */
async function get () {

    /**
     * terminalSource menampung nilai hasil dari queries database
     *
     * @type { String[] }
     */
    const terminalSource =
        getTerminalSource().length === 0
            ? await vocabRepository.get()
            : getTerminalSource();

    /**
     * terminalSource dikirimkan ke dalam
     * parameter function getRandomArrayValue dan kemudian
     * pengembaliannya ditampung oleh objectFromArray
     *
     * @type {
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
     * }
     */
    const objectFromArray =
        getRandomArrayValue(
            terminalSource[
                getRandomIndexArray(terminalSource)
            ]
        )._doc;

    if (objectFromArray === 505) {
        return 505;
    }

    return getRandomObjectValue(
        objectFromArray,
        [ "_id" ],
        "vocabService.get",
        scenarioOneService
    );
}

export default { get };