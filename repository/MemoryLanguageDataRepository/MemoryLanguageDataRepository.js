import mongoose from "mongoose";
import * as collectionNames from "../../JSON/CollectionNames.json" assert {type: "json"};

async function get() {
    const collections = await mongoose.connection.db.listCollections().toArray();
    return collections.map(collection => {
        return collectionNames.default[collection.name] || collection.name;
    });
}

export default { get };