let add=(a, b, callback)=>{
    let result=a + b;
    callback(result);
}

add(10,20,function(result) {
    console.log("합계: " + result);
})