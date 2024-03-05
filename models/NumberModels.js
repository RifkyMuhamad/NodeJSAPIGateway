import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const Number = mongoose.model("numbers", vocabularySchema);