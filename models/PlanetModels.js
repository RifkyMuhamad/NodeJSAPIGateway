import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const Planet = mongoose.model("planets", vocabularySchema);