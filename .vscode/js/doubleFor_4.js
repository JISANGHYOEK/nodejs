let output = '';

for(let i = 1; i<=5; i++){
    for(let j = 6-i; j >= 1; j--){
        output += j;   
    }
    output += '\n';
}
console.log(output);