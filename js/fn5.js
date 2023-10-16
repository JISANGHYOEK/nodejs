let fact=(a, callback) =>{
    let res = 1;
    for(let i=1; i<=a; i++){
        res *= i;
    }
    callback(res);
}

fact(5, function(res){
    console.log( "5! =  "+ res);
});