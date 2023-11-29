var express = require("express");
const { clearCookie } = require("express/lib/response");

var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hong',
    password: 'hong',
    database: 'scott',
    port: 3307,
});

var app = express();

connection.connect(function(err) {
    if (!err) {
        console.log("서버가 DB와 잘 연동되었습니다.\n\n");
    } else {
        console.log("서버 DB 연동 오류!\n\n");
    }
});

app.get("/", function(request, response) {
    // MySQL 연결 상태를 확인합니다.
    connection.query('SELECT id, pw, name, age from scott.sinsang', function(err, rows, fields) {
        connection.end();
        if(err){
            response.send(rows);
            console.log("sinsang table 데이터: ", rows);
        }
        else{
            console.log("Sinsang Table Query Error!. ");
        }
    });
});

app.listen(52273, () => {
    console.log("Server is running at http://127.0.0.1:52273");
});