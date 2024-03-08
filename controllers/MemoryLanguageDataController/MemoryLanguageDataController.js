import memoryLanguageDataService from "../../services/MemoryLanguageDataService/MemoryLanguageDataService.js";

async function get(req, res) {
    const result = await memoryLanguageDataService.get();
    res.json({ result: result });
}

export default { get };