//Control Structures in JavaScript
//If-Else Statement

const color = "black";
if (color == "green"){
    console.log("Go");
} else {
    console.log("Stop");
}

const age = 16;
if (age >= 18) {
    console.log("You may enter the club.");
}else {
    console.log("You are not allowed to enter the club.");
}

//If-else if Statement
let marks = 95
if (marks >= 90) {
    console.log("Your grade is A,Congratulations!")
} else if (marks < 90 && marks >= 70) {
    console.log("Your grade is B")
} else if (marks < 70 && marks >= 60) {
    console.log("Your grade is C")
} else if (marks < 60 && marks >= 50) {
    console.log("Your grade is D")
}else if (marks < 50 && marks >= 40) {
    console.log("Your grade is E")
}else if (marks < 40 && marks >= 0) {
    console.log("Your grade is F,you failed")
}