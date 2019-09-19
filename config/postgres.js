const { Pool } = require("pg");

const postgres = new Pool({
  host: "localhost",
  user: "postgres",
  password: "",
  database: "postgres",
  idleTimeoutMillis: 30000, // close idle clients after 1 second
  connectionTimeoutMillis: 2000 // return an error after 1 second if connection could not be established
});

module.exports = postgres;
