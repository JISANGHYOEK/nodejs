let products = [
    {name:"바나나", price:1200},
    {name:"사과", price:2000},
    {name:"망고", price:2200},
    {name:"딸기", price:5000},
];

function ptr(i){
    console.log(`${i.name}의 가격은 ${i.price}입니다.`);
}

for(let product of products){
    ptr(product);
}