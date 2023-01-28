var a = 4
var b = 5

function addNumbers (a, b) {
    return a + b;
};
var result = addNumbers(a,b);
console.log(result);

function subNumbers (a,b) {
    return a - b;
};
var result = subNumbers(a,b);
console.log(result);

function multiplyNumbers(a,b) {
    return a * b;
};
var result = multiplyNumbers(a,b);
console.log(result);

function divideNumbers(a,b) {
    return a / b;
};
var result = divideNumbers(a,b);
console.log(result);

var add = (a,b) => (a + b);
console.log(add(a,b));

var subtract = (a,b) => (a - b);
console.log(subtract(a,b));

var multiply = (a,b) => (a * b);
console.log(multiply(a,b));

var divide = (a,b) => (a / b);
console.log(divide(a,b));