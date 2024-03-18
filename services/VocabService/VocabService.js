import vocabRepository from "../../repository/VocabRepository/VocabRepository.js";
import { getRandomArrayValue } from "../../helper/GetRandomArrayValue.js";
import { getRandomIndexArray } from "../../helper/GetRandomIndexArray.js";
import { getRandomObjectValue } from "../../helper/GetRandomObjectValue.js";
import { scenarioOneService } from "../scenario/ScenarioOneService.js";
import { getTerminalSource } from "../../config/TerminalSourceConfig.js";
import {getCategories} from "../../config/AppConfig.js";

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

    const newTerminalSource =
        getCategories()
            .map(item =>
                terminalSource.find(obj =>
                    obj.hasOwnProperty(item)
                )[item]);

    /**
     * terminalSource dikirimkan ke dalam
     * parameter function getRandomArrayValue dan kemudian
     * pengembaliannya ditampung oleh objectFromArray
     *
     * @type {*[]}
     */
    const objectFromArray =
        getRandomArrayValue(
            newTerminalSource[
                getRandomIndexArray(newTerminalSource)
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