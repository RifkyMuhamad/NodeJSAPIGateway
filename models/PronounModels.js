import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const Pronoun = mongoose.model("pronouns", vocabularySchema);