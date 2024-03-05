import express from "express";
import dotenv from "dotenv";
import { logger } from "./log/log.js";
import router from "./routes/routes.js";
import { connectMongo } from "./database/DBConnect.js";
import { databaseConfig } from "./config/DatabaseConfig.js";

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
////////////////////////////////

/** Mengatur req body harus json */
app.use(express.json());

/** Menambah object Router*/
app.use(router);

/** Mengatur direktori public bisa diakses public*/
app.use(express.static("public"));

/** Database Connection */
connectMongo(databaseConfig)
    .then(() => logger.log({
        level: "info",
        message: "MongoDB connected",
    }))
    .catch((err) => { throw err; });


/** Running Application */
app.listen(
    port,
    logger.log({
        level: "info",
        message: `Server is running in port ${ port }`,
    })
);
