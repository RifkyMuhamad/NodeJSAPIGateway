import { getRandomIndexArray } from "./GetRandomIndexArray.js";

function getRandomObjectValue(obj, except, functionCall, ...scenario){

    // jika object berisi properti kosong
    if (Object.keys(obj).length === 0) {
        console.error(`Object yang kamu masukkan ke dalam parameter function ${getRandomObjectValue.name} bernilai kosong`);
        process.exit();
    }

    /**
     * exceptFilteredKeys menampung properti dari database kecuali properti _id
     *
     * @type { String[] }
     */
    const exceptFilteredKeys = Object.keys(obj).filter((key) => !except.includes(key));

    // filter properti validation
    if (exceptFilteredKeys.length === 0) {
        console.error("Semua properti dikecualikan");
        process.exit();
    }

    /**
     * filteredKeys menampung properti vocabulary, explanation dan bahasa yang memiliki
     * setidaknya satu vocab
     *
     * @type { String[] }
     */
    const filteredKeys = Object.keys(obj).filter(key =>
        key === "vocabulary" || key === "explanation" ||
        (obj[key].vocab && obj[key].vocab.length !== 0)
    );

    /**
     * vocabularyValue menampung nilai vocab dalam bahasa indonesia
     *
     * @type { String }
     */
    const vocabularyValue = obj[filteredKeys[filteredKeys.indexOf("vocabulary")]];

    let returnValue;

    if (functionCall === "vocabService.get") {
        returnValue = scenario[getRandomIndexArray(scenario)](
            obj,
            filteredKeys,
            filteredKeys[filteredKeys.indexOf("vocabulary")],
            vocabularyValue,
            filteredKeys.filter((key) => !["vocabulary", "explanation"].includes(key))
        );
    } else if (functionCall === "programmingMainEngine") {
        returnValue = 1;
    } else if (functionCall === "tiga") {
        returnValue = 2;
    }

    return returnValue;
}

export { getRandomObjectValue }