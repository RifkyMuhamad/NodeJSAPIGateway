import memoryLanguageDataRepository
    from "../../repository/MemoryLanguageDataRepository/MemoryLanguageDataRepository.js";
import {vocabularySchema} from "../../models/schema/SchemaVocabularyList.js";

async function get() {
    const listLanguage = Object.keys(vocabularySchema.obj).filter(key => key !== "explanation" && key !== "vocabulary");
    const memoryLanguageData = await memoryLanguageDataRepository.get();
    return [listLanguage, memoryLanguageData];
}

export default { get };