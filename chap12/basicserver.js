const express = require('express');

const app = express();

app.use((request, response)=>{
    response.send('<h1>hello express</h1>');
});

app.listen(52273, ()=>{
    console.log('Server running at http://127.0.0.1:52273');
});