import memoryLanguageDataRepository
    from "../../repository/MemoryLanguageDataRepository/MemoryLanguageDataRepository.js";
import {vocabularySchema} from "../../models/schema/SchemaVocabularyList.js";

function ambilPropertiTidakKosong(obj) {
    const propertiTidakKosong = {};
    for (const prop in obj) {
        if (typeof obj[prop] !== "object" || Object.keys(obj[prop]).length !== 0) {
            propertiTidakKosong[prop] = obj[prop];
        }
    }
    return propertiTidakKosong;
}

async function get() {
    const listLanguageRaw = Object.keys(ambilPropertiTidakKosong(vocabularySchema.obj));
    const listLanguage = listLanguageRaw.filter(key => key !== "explanation" && key !== "vocabulary");
    const memoryLanguageData = await memoryLanguageDataRepository.get();

    return [listLanguage, memoryLanguageData];
}

export default { get };