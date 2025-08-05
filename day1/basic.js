// This is a simple JavaScript file for the first day of learning
console.log("Hello, World!");
console.log("Welcome to JavaScript programming!");
console.log("This is the first day of learning JavaScript.");
console.log("Let's get started with some basic concepts!");
/*
This is a multi-line comment.
I can write
as many lines as I want here.
It will not affect the execution of the code.
*/

var x = 5;
console.log(x);
var x = 20;
console.log(x);

let y = 10;
// let y = 30; // This will cause an error because y has already been declared
y = 30;
console.log(y); // Output: 30

let shenyang2 = "Hello, Shenyang!";
console.log(shenyang2);

var shenyang = "Hello, Shenyang!";
console.log(shenyang);

const a = 30;
// a = 25; // This will cause an error because a is a constant variable
console.log(a); // Output: 30

const icNumber = "071223070371";
console.log(icNumber); // Output: 071223070371

let somewords = "This is a string variable."
let stringOfNumbers ="100";
let actualNumber = 100;
let actualNumber2 = 100;

let combi = stringOfNumbers + actualNumber + actualNumber;
console.log(combi); // Output: 100100
let total = actualNumber + actualNumber2;
console.log(total); // Output: 200

const isLate = true;
console.log(isLate); // Output: true

const student = {
  name: "Jane Doe",
  age: 42,
  address: "Penang",
  "0ff-231": "Hello World",
};
console.log(student.name); // Output: Jane Doe
console.log(student["age"]); // Output: 42\

const student2 = {
  name: "Shenyang",
  age: 18,
  address: "Penang",
  hobbies: ["gaming"],
};
console.log (student2.name); // Output: Shenyang
console.log (student2["age"]); // Output: 18
console.log(student2.address); // Output: Penang
console.log(student2.hobbies[0]); // Output: gaming

const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Mango
console.log(fruits[2]); // Output: Banana

const heroes = [
  // 0         1           2
  ["ironman", "spiderman", "hulk"], // 0
  ["cabbage man", "robert cop", "kamen rider"], // 1
  ["thanos", "darkseid", "ultron"], // 2
];

console.log(heroes[0][0]); // Output: ironman
console.log(heroes[1][1]); // Output: robert cop
console.log(heroes[2][2]); // Output: ultron

// Object + Array

 const comicCharacters = {
    MCU: {
        heroes: ["ironman", "spiderman", "captain america"],
        villians: ["thanos", "ultron", "Dr Doom"],
    },
    DC: {
        heroes: ["superman", "batman" , "flash" ],
        villians: ["reverse flash", "lex luthor", "joker"],
    }
 }
 console.log(comicCharacters.MCU.heroes[2]); // Output: captain america
 console.log(comicCharacters.MCU.villians[2]); // Output: Dr Doom
 console.log(comicCharacters.DC.villians[1]); // Output: lex luthor
 console.log(comicCharacters.DC.heroes[2]); // Output: flash
 


