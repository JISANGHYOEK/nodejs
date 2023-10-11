let i=0;
let arr = [11,22,33,44,55,66,77,99];
let output;

while(true){
    if(arr[i]>=80){
        output = arr[i];
        break;
    }
    i += 1;
}
console.log(`80보다 큰 수는 ${i+1}번째에 있는 ${output}입니다.`);
