const mysql = require("mysql2");
require("dotenv").config();

const mycon = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

// mycon.connect((err) => {
//   if (err) {
//     console.error("error connecting: " + err);
//     return;
//   }
//   console.log("connected as id " + mycon.threadId);
// });

module.exports = mycon;
