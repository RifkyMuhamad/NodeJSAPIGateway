import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line no-undef
export const databaseConfig = process.env.MONGOURI;