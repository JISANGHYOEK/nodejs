const express = require('express');

const app = express();

app.get('*', (req, res)=>{
    res.status(404);
    res.set('methodA', 'ABCDE');
    res.set({
        'methodB1': 'FGHIJ',
        methodB2:'KLMNO'
    });
    res.send('내 마음대로 본문을 입력합니다.');
});

app.listen(52273, ()=>{
    console.log('Server running http://127.0.0.1:52273');
}); 