import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { logger } from "./log/log.js";
import router from "./routes/routes.js";

dotenv.config();

const port = process.env.PORT;
const portOrigin = process.env.PORTORIGIN;

console.log(portOrigin);

const app = express();

const middlewares = [
  cors({ credentials: true, origin: portOrigin }),
  express.json(),
];

for (const middleware of middlewares) {
  app.use(middleware);
}

app.use(router);

app.listen(
  port,
  logger.log({
    level: "info",
    message: `Server is running in port ${port}`,
  })
);
