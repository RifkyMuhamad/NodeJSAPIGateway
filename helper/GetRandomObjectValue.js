import { getRandomIndexArray } from "./GetRandomIndexArray.js";
import { logger } from "../log/log.js";

function getRandomObjectValue (obj, except, functionCall, ...scenario) {

    logger.log({
        level: "info",
        message: `getRandomObjectValue dipanggil`,
    })

    logger.log({
        level: "info",
        message: `nilai dari obj ${obj}`,
    })

    logger.log({
        level: "info",
        message: `nilai dari except ${except}`,
    })

    logger.log({
        level: "info",
        message: `nilai dari functionCall ${functionCall}`,
    })

    logger.log({
        level: "info",
        message: `nilai dari scenario ${scenario}`,
    })

    // jika object berisi properti kosong
    if (Object.keys(obj).length === 0) {
        logger.log({
            level: "error",
            message:
                `Object yang kamu masukkan ke dalam parameter function ${
                    getRandomObjectValue.name } bernilai kosong`
        });
    }

    /**
     * exceptFilteredKeys menampung
     * properti dari database kecuali properti _id
     *
     * @type { String[] }
     */
    const exceptFilteredKeys =
        Object.keys(obj)
            .filter((key) =>
                !except.includes(key)
            );

    // filter properti validation
    if (exceptFilteredKeys.length === 0) {
        logger.log({
            level: "error",
            message: "Semua properti dikecualikan"
        });
    }

    /**
     * filteredKeys menampung properti vocabulary,
     * explanation dan bahasa yang memiliki
     * setidaknya satu vocab
     *
     * @type { String[] }
     */
    const filteredKeys = Object.keys(obj).filter(key =>
        key === "vocabulary" || key === "explanation" ||
        (obj[key].vocab && obj[key].vocab.length !== 0)
    );

    /**
     * vocabularyValue menampung nilai vocabulary dalam bahasa indonesia
     *
     * @type { String || String[] }
     */
    const vocabularyValue =
        obj[filteredKeys[
            filteredKeys.indexOf("vocabulary")
        ]];

    const newVocabularyValue =
        Array.isArray(vocabularyValue)
            ? vocabularyValue[getRandomIndexArray(vocabularyValue)]
            : vocabularyValue;

    let returnValue;

    if (functionCall === "vocabService.get") {
        returnValue = scenario[getRandomIndexArray(scenario)](
            obj,
            filteredKeys,
            filteredKeys[filteredKeys.indexOf("vocabulary")],
            newVocabularyValue,
            filteredKeys.filter((key) =>
                ![ "vocabulary", "explanation" ].includes(key)
            )
        );
    } else if (functionCall === "programmingMainEngine") {
        returnValue = 1;
    } else if (functionCall === "tiga") {
        returnValue = 2;
    }

    return returnValue;
}

export { getRandomObjectValue };