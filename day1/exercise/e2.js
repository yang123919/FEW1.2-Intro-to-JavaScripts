function calculateArea(length, width) {
    return length * width;
}
function checkTemperature(temp) {
    if (temp > 30) {
        return "It's hot outside.";
    } else if (temp < 25) {
        return "It's cold outside.";
    }
}

console.log("Area: " + calculateArea(5, 5));  // 25
console.log("Area: " + calculateArea(5, 10)); // 50
console.log("Area: " + calculateArea(10, 10)); // 100

console.log(checkTemperature(35)); // Hot
console.log(checkTemperature(20)); // Cold
