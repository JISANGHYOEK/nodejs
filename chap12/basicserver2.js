const express = require('express');

const app = express();

let str1 = "Hello Web Programming";
let str2 = "Hello nodejs";

app.use((request, response)=>{
    response.send(`<h1>${str1} <br> ${str2} </h1>`);
});

app.listen(8000, ()=>{
    console.log('Server running at http://127.0.0.1:8000');
});c