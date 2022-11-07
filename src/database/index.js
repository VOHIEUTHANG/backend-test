import knex from "knex";
import * as DATABASE_INFO from "../constants/index.js";

const database = knex({
  client: "mysql2",
  connection: {
    host: DATABASE_INFO.HOST,
    port: DATABASE_INFO.PORT,
    user: DATABASE_INFO.USER,
    password: DATABASE_INFO.PASSWORD,
    database: DATABASE_INFO.DATABASE_NAME,
  },
  pool: { min: 0, max: 10 },
});

database.raw("SELECT VERSION()").then(() => {
  console.log("Connect to database successfuly !");
});

// ===> Create tables user
// database.schema
//   .createTable("user", (table) => {
//     table.increments("id");
//     table.string("name");
//     table.string("phone");
//     table.string("email");
//   })
//   .then(() => console.log("table created"))
//   .catch((err) => {
//     console.log(err);
//     throw err;
//   });

export default database;
