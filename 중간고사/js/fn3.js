let hap=(min, max)=>{
    let sum = 0;
    for(let i=min; i<=max; i++){
        sum+=i;
    }
    return sum;
}

let result = hap(1,100);
console.log("hap = " + result);