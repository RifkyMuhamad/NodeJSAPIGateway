import { postgres } from "../database/dbconnection.js";

let db;

postgres ? (db = "postgres diakses") : (db = "postgres tidak diakses");

export const home = async (req, res) => {
  console.log(postgres);

  res.json({
    message: "DyoneStrankers use Express",
    database: db,
    postgres: postgres
  });
};
