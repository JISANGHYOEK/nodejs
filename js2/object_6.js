class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

}

let aa=new Product("바나나",1200);
console.log("품명: " + aa.name);
console.log("가격: " + aa.price);