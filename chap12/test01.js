const express = require('express');

const app = express();

let sum=0;

app.get('*', (req, res) => {
    const num = req.query;
    let sum=0;
    for(let i=1; i<=Number(num.a); i++) sum += i;
    res.send(`<h1>1-${num.a}까지 합: ${sum}`);
});

app.listen(8000, ()=>{
    console.log('server running at http://127.0.0.1:8000');
});