import {
    setJustThisLang,
    setExceptVocab,
    setExceptLang,
    getJustThisLang,
    getExceptLang, getCategories, getExceptVocab
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
    setAppConfigFromQueryParam(req.query.categories, "C");

    cleanArrayJustThisLang(getJustThisLang(), getExceptLang());

    console.log(getExceptVocab())

    let result = await vocabService.get();
    let newResult = result.map(item => {
        if (typeof item === "string") {
            return item.toLowerCase().replace(/-/g, ' ')
        } else {
            return item
        }
    });

    for (
        let i = 0;
        i < 11 &&
            (newResult.length === 0
                || newResult.length === 3
                || newResult.some(value =>
                    getExceptVocab().includes(value)
                )
            )
        ; i++) {
        result = await vocabService.get();
        newResult = result.map(item => {
            if (typeof item === "string") {
                return item.toLowerCase().replace(/-/g, ' ')
            } else {
                return item
            }
        });
    }

    res.json({
        message: "Hai",
        result: newResult,
    });

    setJustThisLang([]);
    setExceptVocab([]);
    setExceptLang([]);
}

export default { get };