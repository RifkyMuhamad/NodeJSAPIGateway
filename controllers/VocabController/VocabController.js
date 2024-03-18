import {
    setJustThisLang,
    setExceptVocab,
    setExceptLang,
    getJustThisLang,
    getExceptLang
} from "../../config/AppConfig.js";
import vocabService from "../../services/VocabService/VocabService.js";
import { setAppConfigFromQueryParam } from "../../helper/SetAppConfigFromQueryParam.js";
import {cleanArrayJustThisLang} from "../../helper/CleanArrayJustThisLang.js";

/**
 * Function get milik VocabController ini
 * digunakan untuk mendapatkan data
 * yang mana return dari function ini
 * adalah array yang berisi macam-macam vocabulary
 * @param {
 *     {
 *         query: {
 *             justThisLang: String,
 *             exceptVocab: String,
 *             exceptLang: String
 *         }
 *     }
 *  } req
 * @param { Object } res
 * @return { Promise<void> }
 */
async function get (req, res) {

    setAppConfigFromQueryParam(req.query.justThisLang, "JTL");
    setAppConfigFromQueryParam(req.query.exceptVocab, "EV");
    setAppConfigFromQueryParam(req.query.exceptLang, "EL");

    cleanArrayJustThisLang(getJustThisLang(), getExceptLang());

    let result = await vocabService.get();

    while (result.length === 0) {
        result = await vocabService.get();
    }

    res.json({
        message: "Hai",
        result: result,
    });

    setJustThisLang([]);
    setExceptVocab([]);
    setExceptLang([]);
}

export default { get };