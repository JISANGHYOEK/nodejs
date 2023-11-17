const fs = require('fs');

//비동기식으로 파일 읽기
fs.readFile("./nodejs/chap11/input.txt",(error, file) => {
    console.log(file);
    
    console.log(file.toString());
});