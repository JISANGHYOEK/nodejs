const fs = require('fs');

let file = fs.readFileSync('./nodejs/chap11/enetry.txt');

let str = file.toString();

console.log(str);
