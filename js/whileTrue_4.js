let arr = ["Korea", "good", "banana", "university", "great", "amazing", "Seoul"];
let i = 0;
let output;

while(true){
    if(arr[i].length == 10){
        output = arr[i];
        break;
    }
    i+=1;
}
console.log(`10글자인 단어는 ${i+1}번째의 ${output}입니다.`);

