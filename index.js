import express from "express";
import dotenv from "dotenv";
import { logger } from "./log/log.js";
import router from "./routes/routes.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

/**
 * CORS FOR DEVELOPMENT
 */
// import cors from "cors";

// const portOrigin = process.env.PORTORIGIN;

// const middlewares = [
//   cors({ credentials: true, origin: portOrigin }),
//   express.json(),
// ];

// for (const middleware of middlewares) {
//   app.use(middleware);
// }
/**
 * END OF CORS
 */


app.use(router);

app.listen(
  port,
  logger.log({
    level: "info",
    message: `Server is running in port ${port}`,
  })
);
