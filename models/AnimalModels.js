import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const Animal = mongoose.model('animal', vocabularySchema);