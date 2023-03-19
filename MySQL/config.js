const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ecb",
});

conn.connect((err) => {
  if (err) {
    console.warn("Error");
  } else {
    console.warn("Connected");
  }
});

module.exports = conn;