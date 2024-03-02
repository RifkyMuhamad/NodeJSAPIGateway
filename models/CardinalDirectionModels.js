import mongoose from "mongoose";
import { vocabularySchema } from "./schema/SchemaVocabularyList.js";

export const CardinalDirection =
    mongoose.model("cardinaldirection", vocabularySchema);