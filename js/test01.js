for(let i=1; i<=5; i++){
    let line = '';
    for(let j=5; j>=1; j--){
        if(j>i) line += ' ';
        else line += j;
    }
    console.log(line);
}