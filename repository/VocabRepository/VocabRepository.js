import { logger } from "../../log/log.js";
import {
    addTerminalSource,
    getTerminalSource
} from "../../config/TerminalSourceConfig.js";
import {dataModels} from "../../JSON/DataModels.js";

/**
 * Function VocabRepository.get digunakan untuk melakukan
 * find All ke dalam collection Animal dan Fruit
 *
 * @return { Promise<String[]> }
 */
async function get () {

    logger.log({
        level: "info",
        message: `VocabRepository.get dipanggil`,
    })

    try {
        for (const { model, property } of dataModels) {
            const data = await model.find();
            const obj = { [property]: data };
            addTerminalSource(obj);
        }

        logger.log({
            level: "info",
            message: `Nilai terminalSource ${getTerminalSource()}`,
        })

        return getTerminalSource();

    } catch (error) {
        logger.log({
            level: "error",
            message: `Gagal mengambil data: ${ error }`
        });
    }
}

export default { get };