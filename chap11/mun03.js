//모듈 추출
const fs = require('fs');

//파일 읽기
const file=fs.readFileSync("./nodejs/chap11/input.txt");

//바이트코드 출력
console.log(file);

//문자로 출력
console.log(file.toString());