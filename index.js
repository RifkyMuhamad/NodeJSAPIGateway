import express from "express";
import dotenv from "dotenv";
import { logger } from "./log/log.js";
import router from "./routes/routes.js";
import { pool } from "./database/dbconnection.js";

// configuration .env
dotenv.config();

// access PORT key
const port = process.env.PORT;

// create application
const app = express();

// database connection
pool.connect((err) => {
  if (err) console.log(err);
  logger.log({
    level: "info",
    message: "Database connection",
  });
});

// setting up route
app.use(router);

// for running server
app.listen(
  port,
  logger.log({
    level: "info",
    message: `Server is running in port ${port}`,
  })
);
