import express from "express";
import dotenv from "dotenv";
import { logger } from "./log/log.js";
import router from "./routes/routes.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(router);

app.listen(
  port,
  logger.log({
    level: "info",
    message: `Server is running in port ${port}`,
  })
);
