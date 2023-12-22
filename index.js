import express from "express";
import dotenv from "dotenv";
import { logger } from "./log/log.js";

// configuration .env
dotenv.config();

// access PORT key
const port = process.env.PORT;

// create application
const app = express();

// for route /
app.get("/", (req, res) => {
  res.json({
    message: "DyoneStrankers use Express",
  });
});

// for route /about
app.get("/about", (req, res) => {
  res.json({
    message: "DyoneStrankers in About",
  });
});

app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    message: "DyoneStrankers in About",
    id: id
  });
});

// for running server
app.listen(
  port,
  logger.log({
    level: "info",
    message: `Server is running in port ${port}`,
  })
);
