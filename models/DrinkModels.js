import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const Drink = mongoose.model("drinks", vocabularySchema);