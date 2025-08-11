for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 5; i <= 20; i++) {
    console.log(i);
}

for (let set = 1; set <= 3; set++) {
    for (let rep = 1; rep <= 5; rep++) {
        console.log("Set " + set + ", Rep " + rep + ": Done");
    }
}

for (let set = 1; set <= 3; set++) {
    for (let rep = 1; rep <= 5; rep++) {
        if (rep === 3) {
            console.log("Set " + set + ", Rep " + rep + ": Done");
        }
    }
}

const fruits = ["apple", "mango", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//while loop example
let j = 1;
while (j <= 10) {
    console.log("While J: " + j);
    j++;
}
//Do the Sets and Reps thing with a while loop
let set = 1;
while (set <= 3) {
    let rep = 1;
    while (rep <= 5) {
        console.log("Set " + set + ", Rep " + rep + ": Done");
        rep++;
    }
    set++;
}

// let myname = prompt("Enter your name:");
// console.log(myname);

let input;

while (input !== "yes" && input !== "no") {
    input = prompt("Please enter 'yes' or 'no':");
}
console.log("User Entered: " + input);


