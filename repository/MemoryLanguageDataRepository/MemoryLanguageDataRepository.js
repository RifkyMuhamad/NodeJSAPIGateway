import mongoose from "mongoose";
import {collectionNames} from "../../JSON/CollectionNames.js";
import {logger} from "../../log/log.js";

async function get() {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        return collections.map(collection => {
            return collectionNames[collection.name] || collection.name;
        });
    } catch (error) {
        logger.log({
            level: "error",
            message: `Terjadi kesalahan ${ error }`,
        })
        return "Kodenya Error";
    }
}

export default { get };