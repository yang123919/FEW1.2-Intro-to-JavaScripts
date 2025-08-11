const food = ["pizza", "sushi", "nasi lemak ", "roti canai", "ice cream"];
console.log(food);

food.push("laksa");
console.log(food);

food.pop();
console.log(food);

food.shift();
console.log(food);

food.unshift("cendol");
console.log(food);

food.splice(1, 1);
console.log(food);

const TheFirstThreeFood = food.slice(0, 3);
console.log(TheFirstThreeFood);
