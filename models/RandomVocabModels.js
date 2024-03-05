import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const RandomVocab = mongoose.model("randomvocabs", vocabularySchema);