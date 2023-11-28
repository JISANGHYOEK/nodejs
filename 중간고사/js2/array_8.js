const array = ["seoul", "korea","good","hankook","great"];

let newArr=array.filter((item, index)=>{
    return item.length==5;
});

console.log(newArr);