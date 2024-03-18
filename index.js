import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import { logger } from "./log/log.js";
import { connectMongo } from "./database/DBConnect.js";
import { databaseConfig } from "./config/DatabaseConfig.js";
import {getTerminalSource, setTerminalSource} from "./config/TerminalSourceConfig.js";

/** Mengatur server akan mengakses variable environment*/
dotenv.config();

/**
 * Port for running application
 *
 * @type { Number }
 */
// eslint-disable-next-line no-undef
const port = process.env.PORT;

/**
 * Express App
 *
 * @type { Express }
 */
const app = express();


////////////////////////////////
// add cors code for development from test.txt
import cors from "cors";

const portOrigin = process.env.PORTORIGIN;

const middlewares = [
  cors({ credentials: true, origin: portOrigin }),
  express.json(),
];

for (const middleware of middlewares) {
  app.use(middleware);
}
////////////////////////////////

/** Mengatur req body harus json */
app.use(express.json());

/** Menambah object Router*/
app.use(router);

/** Mengatur direktori public bisa diakses public*/
app.use(express.static("public"));

// eslint-disable-next-line no-undef
setInterval(() => {
    setTerminalSource([]);
    // logger.log({
    //     level: "info",
    //     message: `terminalSourceValue ${getTerminalSource()}`,
    // })
}, 21600000);

/** Database Connection */
connectMongo(databaseConfig)
    .then(() => logger.log({
        level: "info",
        message: "MongoDB connected",
    }))
    .catch((err) => { throw err; });

// logger.log({
//     level: "info",
//     message: `Nilai terminalSource ${getTerminalSource()}`,
// })

/** Running Application */
app.listen(
    port,
    logger.log({
        level: "info",
        message: `Server is running in port ${ port }`,
    })
);
