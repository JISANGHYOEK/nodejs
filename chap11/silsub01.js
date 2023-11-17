let json = {id:'2020100071', name: '지상혁', major:'Dron', age:'23'};

Object.keys(json).forEach((i)=>{
    console.log(`key: ${i} \t value: ${json[i]}`);
});