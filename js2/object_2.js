let product = {
    제품명: "망고",
    가격 : 5000,
    원산지: "필리핀",
    제조사: "필리핀 후르츠"
};

console.log(product);
console.log(product.제품명);
console.log(product.가격);
console.log(product.원산지);

for(let i in product) {
    console.log(`${i}:${product[i]}`);
}