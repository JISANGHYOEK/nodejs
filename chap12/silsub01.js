const express = require('express');

const app = express();

app.get('/name/:name', (req, res)=>{
    const name = req.params.name;
    res.send(`<h1>안녕하세요 제 이름은 ${name} 입니다.</h1>`);
});

app.listen(8000, ()=>{
    console.log('Server running http://127.0.0.1:8000');
}); 