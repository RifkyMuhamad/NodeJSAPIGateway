import {
    setJustThisLang, setExceptVocab, setExceptLang
} from "../../config/AppConfig.js";
import vocabService from "../../services/VocabService.js";
import {setAppConfigFromQueryParam} from "../../helper/SetAppConfigFromQueryParam.js";

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

    /**
     * Variable result ini menampung array untuk response
     * @type { (Number | String)[] }
     */
    const result = await vocabService.get();

    if (result.length === 0) {
        get(req, res);
    } else {
        res.json({
            message: "Hai",
            result: result,
        });

        setJustThisLang([]);
        setExceptVocab([]);
        setExceptLang([]);
    }
}

export default { get };