import mongoose from "mongoose";
import {collectionNames} from "../../JSON/CollectionNames.js";

async function get() {
    const collections = await mongoose.connection.db.listCollections().toArray();
    return collections.map(collection => {
        return collectionNames[collection.name] || collection.name;
    });
}

export default { get };