// var item = items[Math.floor(Math.random() * items.length)];
const cars = ["750", "s40", "BMW", 125, "mk", "i", 4];
//console.log(Math.min.apply(cars)); gave me infinity
//console.log(Math.min(...cars));//gave me Nan
let mini = Infinity

for (let i = 0; i < cars.length; i++) { 

    if (typeof(cars[i]) === "number"){
        if (mini>cars[i]) {
        mini = cars[i];
    }
}
    
}

console.log(mini);


