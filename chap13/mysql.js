var express = require("express");
var mysql = require("mysql2");

var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "hong",
  password: "hong",
  database: "scott",
  port: 3307,
});

var app = express();

connection.connect((err) => {
  if (err) {
    console.error("서버 DB 연동 오류:", err);
    throw err;
  }
  console.log("서버가 DB와 잘 연동되었습니다.\n\n");
});

app.get("/", (req, res) => {
  // MySQL 연결 상태를 확인합니다.
  connection.query("SELECT * from scott.sinsang", (err, rows, fields) => {
    if (err) {
      console.error("Sinsang Table Query Error:", err);
      res.status(500).send("데이터베이스 오류");
      return;
    }

    console.log("sinsang table 데이터: ", rows);
    res.send(rows);
  });
});

app.listen(52273, () => {
  console.log("Server is running at http://127.0.0.1:52273");
});
