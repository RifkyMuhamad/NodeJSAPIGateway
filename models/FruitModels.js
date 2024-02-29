import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const Fruit = mongoose.model('fruit', vocabularySchema);