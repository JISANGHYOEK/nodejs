let output ='';

for(let i = 1; i<=5; i++){
    for(let j = 1; j<6-i; j++){
        output += ' ';
    }
    for(let j = 1; j<=i; j++){
        output += '*';
    }
    output +='\n';
}
console.log(output);