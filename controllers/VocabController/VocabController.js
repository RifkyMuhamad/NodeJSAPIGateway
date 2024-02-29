import { exceptVocab, exceptLang, justThisLang } from "../../config/AppConfig.js";
import vocabService from "../../services/VocabService.js";

/**
 * Function get milik VocabController ini digunakan untuk mendapatkan data
 * yang mana return dari function ini adalah array yang berisi macam-macam
 * vocabulary
 * @param { Object } req
 * @param { Object } res
 * @return { Promise<void> }
 */
async function get(req, res) {

    // mengecek apakah terdapat query parameter atau tidak
    if (req.query.justThisLang && req.query.justThisLang !== "") {
        req.query.justThisLang.split(',').forEach(item => justThisLang.push(item.trim()));
    }

    // mengecek apakah terdapat query parameter atau tidak
    if (req.query.exceptVocab && req.query.exceptVocab !== "") {
        req.query.exceptVocab.split(',').forEach(item => exceptVocab.push(item.trim()));
    }

    // mengecek apakah terdapat query parameter atau tidak
    if (req.query.exceptLang && req.query.exceptLang !== "") {
        req.query.exceptLang.split(',').forEach(item => exceptLang.push(item.trim()));
    }

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

        justThisLang.length = 0;
        exceptVocab.length = 0;
        exceptLang.length = 0;
    }
}

export default { get };