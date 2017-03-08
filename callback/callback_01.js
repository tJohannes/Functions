
let add = function(a, b) { // anonymous function
    sum = ""
    for (let i = a; i <= b; i++) {
        sum = a + b
    }
    return sum;
};

let subtract = function(a, b) {
    return a - b;
};
let multiply = function(a, b) {
    return a * b;
};
let divide = function(a, b) {
    return Math.floor(a / b);
};
function cal(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(cal(3, 3, add));
