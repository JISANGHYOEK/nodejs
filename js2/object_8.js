class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }


    print(){
        console.log(`${this.name}의 가격은 ${this.price}입니다.`);
    }
};

let aa = [
    new Product("바나나",1200),
    new Product("사과",2000),
    new Product("배",3000),
    new Product("고구마",7000)
];

for(let i of aa){
    i.print();
}
