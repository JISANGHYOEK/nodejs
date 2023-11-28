let fruit={
    name:"바나나",
    price:1200,
    product:"필리핀",

    print:function(){
        console.log(`품명은 ${this.name}, 가격은 ${this.price}, 생산지는 ${this.product}입니다.`)
    }
};

fruit.print();