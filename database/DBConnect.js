import mongoose from "mongoose";

/**
 * Function connectMongo digunakan untuk
 * melakukan koneksi terhadap database cloud mongodb
 *
 * @param { String } mongoUri
 * @return { Promise<void> }
 */
export async function connectMongo (mongoUri) {
    try {
        await mongoose.connect(mongoUri);
    } catch (err) {
        throw new Error(`Failed to connect to MongoDB: ${ err.message }`);
    }
}