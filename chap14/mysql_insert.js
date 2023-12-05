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

const data = {
  id: 20221200,
  pw: 3333,
  name: "김유신",
  age: 40,
};

let sql = "insert into sinsang(id, pw, name, age) values(?,?,?,?)";
let params = [data["id"], data["pw"], data["name"], data["age"]];
con.query(sql, params, function (err, rows, fields) {
  if (err) return console.error(err.message);
  else console.log("데이터" + rows.affectedRows + "이 잘 삽입되었습니다.");
});

con.end();
