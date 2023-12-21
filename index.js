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

app.get("/", (req, res) => {
  res.json({
    "message": "DyoneStrankers use Express"
  });
});

app.listen(
  port,
  logger.log({
    level: "info",
    message: "Server is running",
  })
);
