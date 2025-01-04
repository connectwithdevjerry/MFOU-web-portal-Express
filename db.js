const mysql = require("mysql2");
require("dotenv").config();

const mycon = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  password: "",
  database: process.env.DB_NAME,
});

mycon.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + mycon.threadId);
});

module.exports = mycon;
