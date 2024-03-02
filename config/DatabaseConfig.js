import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
    // eslint-disable-next-line no-undef
    db: process.env.MONGOURI,
};