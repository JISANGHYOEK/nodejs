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

let sql = "update member set remark = ? where hakbun = ?";
let data = ["졸업", 20151234];

con.query(sql, data, (err, rows, fields) => {
  if (err) return console.error(err.message);
  else console.log("데이터" + rows.affectedRows + "이 잘 갱신되었습니다.");
});
con.end();
