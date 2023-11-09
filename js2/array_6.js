let arr = [10,15,20,25,30];
let sum=0;

console.log(`[실행 결과]`);
arr.forEach((item,index) =>{
    sum+=item;
    console.log(`${index} ----> ${item}`);
});
console.log("합계: " + sum);
