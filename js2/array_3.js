const fruit = [{
    fruit1: "apple",
    fruit2: "orange",
    fruit3: "banana",
    fruit4: "grape"
}]

for(let i in Object.keys(fruit)) console.log(fruit[i]);

for(let i in Object.values(fruit)) console.log(fruit[i]);

for(let i in Object.entries(fruit)) console.log(fruit[i]);