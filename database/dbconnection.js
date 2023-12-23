import pg from "pg";
import dotenv from "dotenv";

// configuration .env
dotenv.config();

// access POSTGRES_URL key
let postgres = process.env.POSTGRES_URL

// get Pool class
const { Pool } = pg;

// create database pool object
const pool = new Pool({
  connectionString: postgres + "?sslmode=require",
});

export { pool };