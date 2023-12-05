let express = require("express");
let mysql = require("mysql");

const { clearCookie } = require("express/lib/response");

let con = mysql.createConnection({
  host: "localhost",
  user: "hong",
  password: "hong",
  database: "scott",
  port: 3307,
});

let app = express();

con.connect(function (err) {
  if (err) throw err;
  else console.log("DB 연결이 잘 되었습니다.");
});

let ageThreshold = 30;

let sql = "DELETE FROM sinsang WHERE age >= ?";
let params = [ageThreshold];

con.query(sql, params, function (err, rows, fields) {
  if (err) return console.error(err.message);
  else console.log("데이터" + rows.affectedRows + "이 삭제되었습니다.");
});

con.end();
