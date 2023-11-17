let product = {
    제품명:"볼펜",
    단가:1200,
    수량:30,
    제조사: "모나미",

    print:function(){
        console.log(`${this.제조사} ${this.제품명} 판매금액=${this.단가*this.수량}원 입니다.`)
    }
};

product.print();