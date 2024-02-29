import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
    db: process.env.MONGOURI,
};