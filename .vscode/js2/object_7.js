class Product{
    constructor(name, price, num){
        this.name = name;
        this.price = price;
        this.num = num;
    }
}
let aa = new Product("초코파이",2400,10);
console.log(`제품명:${aa.name}`);
console.log(`단가:${aa.price}`);
console.log(`수량:${aa.num}`);
console.log(`판매금액:${aa.price*aa.num}`);