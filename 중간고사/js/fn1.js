function myFunction(){
    console.log("첫 번째 함수 호출");
    console.log("두 번째 함수 호출");
}

myFunction = function(){
}

let myFunction=()=>{}

myFunction(); //함수 호출
console.log(myFunction); //함수에 대한 문자 출력
