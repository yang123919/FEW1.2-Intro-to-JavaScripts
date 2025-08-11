const fruits = ["apple", "mango"];

fruits.push("banana");

console.log(fruits); // Output: ['apple', 'mango', 'banana']

fruits.pop();

console.log(fruits); // Output: ['apple', 'mango']

// Unshift - Adds one or more elements to the beginning of an array
fruits.unshift("cempedak");
console.log(fruits); // Output: ['cempedak', 'apple', 'mango']

// Shift - Removes the first element from an array
fruits.shift();
console.log(fruits); // Output: ['apple', 'mango']

//Splice - Adds/removes elements from an array
fruits.splice(1, 0, "orange", "grape");
console.log(fruits); // Output: ['apple', 'orange', 'grape', 'mango']

// Create a new array with the first three elements
const firstThree = fruits.slice(0, 3);

console.log(firstThree); // Output: ['apple', 'mango', 'banana']

// Create a new array with the last two elements
const lastTwo = fruits.slice(3);

console.log(lastTwo); // Output: ['kiwi', 'orange']

// Adds a new element at index 1
fruits.splice(1, 0, "strawberry");

console.log(fruits); // Output: ['apple', 'strawberry', 'mango', 'banana', 'kiwi', 'orange']

// slice - Removes the element at index 2
const carBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];

const lastTwoCarBrands = carBrands.slice(3);
console.log(lastTwoCarBrands); // Output: ['Chevrolet', 'Nissan']

const LastThreeCarBrands = carBrands.slice(2);
console.log(LastThreeCarBrands); // Output: ['Ford', 'Chevrolet', 'Nissan']

const middleThreeCarBrands = carBrands.slice(1, 4);
console.log(middleThreeCarBrands); // Output: ['Honda', 'Ford', 'Chevrolet']

const middleTwoCarBrands = carBrands.slice(2, 4);
console.log(middleTwoCarBrands); // Output: ['Ford', 'Chevrolet']

//Basically, first parameter use computer position
//And

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number);
});

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
