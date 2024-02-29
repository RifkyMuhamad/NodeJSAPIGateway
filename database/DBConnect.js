import mongoose from "mongoose";
import { logger } from "../log/log.js";

export async function connectMongo(mongoUri) {
    try {
        await mongoose.connect(mongoUri)
        logger.log({
            level: "info",
            message: 'MongoDB connected',
        })
    } catch (err) {
        logger.log({
            level: "error",
            message: err.message,
        })
    }
}