import express from "express";
import dotenv from "dotenv";
import winston from "winston";

// configuration .env
dotenv.config();

// access PORT key
const port = process.env.PORT;

// create application
const app = express();

// create logger
const logger = winston.createLogger({});

const iseng = "Hello, follow ig ku ntar ku follback kok :3 https://www.instagram.com/dyonestrankers/";

app.get("/", (req, res) => {
  res.send(iseng);
});

app.listen(
  port,
  logger.log({
    level: "info",
    message: "Server is running",
  })
);
