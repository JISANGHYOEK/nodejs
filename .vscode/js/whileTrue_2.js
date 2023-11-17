let i=0;
let arr = [1, 33, 35, 23, 25, 26];

let output;

while(true){
    if(arr[i] % 2 == 0){
        output = arr[i];
        break;
    }
    i += 1;
}

console.log(`처음으로 발견한 짝수는 ${output} 입니다.`);