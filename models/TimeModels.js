import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const Time = mongoose.model("times", vocabularySchema);