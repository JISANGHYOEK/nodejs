let gradeArr = [
    {name: "은지원", score:100},
    {name: "강호동", score:90},
    {name: "유재석", score:80},
    {name: "김동현", score:95},
    {name: "송지효", score:70},
];

let scoreArr = gradeArr.sort((itemA, itemB)=>{
    return itemB.score - itemA.score
});

for(let i in gradeArr){
    console.log(gradeArr[i]);
}