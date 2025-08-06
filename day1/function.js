function sayHello(name, age) {
    return "Hello, " + name + "! You are " + age + " years old." + "address.";
}
let helloStatement = sayHello("Shenyang", 18);
// helloStatement = helloStatement + "and I live in Penang."
helloStatement += " and I live in Penang.";
console.log(helloStatement); // Output: Hello, Shenyang! You are 18 years old.

function add(n1, n2) {
    return n1 + n2;
}
console.log(add(5,7)); // Output: 12
console.log(add(8,9)); // Output: 17

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(90)); //32.2222

console.log(5===5); // Output: true
console.log(5==="5"); // Output: false
console.log(5=="25"); // Output: false
console.log(1==true) // Output: true
console.log(0==false) // Output: true 

//Comparison Operators More 
console.log(5 > 3); // Output: true
console.log(6 < 7); // Output: true
console.log(9 > 9); // Output: false
console.log(10 <= 10); // Output: true
console.log(!(3>=2)); // Output: false

// Logical Operators
console.log(5>2 && 3<5); // Output: true
console.log(5>7 || 15<9); // Output: false
console.log(!(5 > 7 || 15 < 9)); // Output: true



