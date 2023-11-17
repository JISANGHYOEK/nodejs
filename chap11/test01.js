const fs = require('fs');

fs.readFile('input.txt', (err, data)=>{
    if(err) console.log("Error reading file");
    else{
        fs.writeFileSync('prt.txt', data, (err)=>{
            if(err) console.log("Error writing file");
            else{
                console.log("success wrting file");
            }
        });
    }   
});