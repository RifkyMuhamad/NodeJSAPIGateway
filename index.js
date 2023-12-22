import express from "express";
import dotenv from "dotenv";
import { logger } from "./log/log.js";
import { home } from "./controllers/home.js";

// configuration .env
dotenv.config();

// access PORT key
const port = process.env.PORT;

// create application
const app = express();

// for route https://dyonestrankers-nodejs-api.vercel.app/
app.get("/", home);

// for route https://dyonestrankers-nodejs-api.vercel.app/about
app.get("/about", (req, res) => {
  res.json({
    message: "DyoneStrankers in About",
  });
});

// for route https://dyonestrankers-nodejs-api.vercel.app/about/:id
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
