let output = '';

for(let i = 1; i<=5; i++){
    for(let j = 1; j <= i; j++){
        output += i;   
    }
    output += '\n';
}
console.log(output);