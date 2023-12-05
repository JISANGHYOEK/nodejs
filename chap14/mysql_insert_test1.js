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
  hakbun: 20227788,
  irum: "박보검",
  sex: "남",
  age: 28,
  dept: "연극영화과",
  tel: "010-345-6789",
};

let sql1 = "ALTER TABLE member ADD PRIMARY KEY (hakbun)";
let sql2 =
  "insert into member(hakbun, irum, sex, age, dept, tel) values(?,?,?,?,?,?)";
let sql3 = "ALTER TABLE member ADD remark varchar(20)";

let params = [
  data["hakbun"],
  data["irum"],
  data["sex"],
  data["age"],
  data["dept"],
  data["tel"],
];

con.query(sql1, params, function (err, rows, fields) {
  if (err) return console.error(err.message);
  else console.log("프라이머리키가 추가 되었습니다.");
});

con.query(sql2, params, function (err, rows, fields) {
  if (err) return console.error(err.message);
  else console.log("데이터" + rows.affectedRows + "이 잘 삽입되었습니다.");
});

con.query(sql3, function (err, rows, fields) {
  if (err) return console.error(err.message);
  else console.log("필드" + rows.affectedRows + "이 잘 삽입되었습니다.");
});

con.end();
