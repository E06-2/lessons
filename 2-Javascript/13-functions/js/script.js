// function print() {
//     console.log('I am a function');
//     console.log('I am a function1');
// }


// print();
// print();

// function with parameters
// let a = 111;
// let b = 555;
function sum(a, b) {
    let z = a + b;
    //console.log(z);
    return z;

}

// console.log(sum(2, 3));
// console.log(sum(5, 6));


let x = 5 * sum(3, 4);

// console.log(x);


// task: 
// write a program to do the following steps:
// 1. show a prompt asking to enter the first number
// 2. show a prompt asking to enter the operation (+, -, *, /, %)
// 3. show a prompt asking to enter the second number
// 4. show the result on the page

// tools:
// you need to create 5 functions (sum, reduce, multiply, divide, percentage)
// call these function using switch case 
// for example if user entered + you need to call sum function
// or if user entered - you need to call reduce function and so on

let number1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter operator number: ");
let number2 = Number(prompt("Enter Second number: "));
let result = 0;

// console.log(number1, operator, number2);

function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function reduce(a, b) {
    return a - b;
}
function percentage(a, b) {
    return multiply(divide(number1, number2), 100)
    // return a * (100 / b);
}

switch (operator) {
    case "+":
        result = sum(number1, number2);
        break;
    case "-":
        result = reduce(number1, number2);
        break;
    case "*":
        result = multiply(number1, number2);
        break;
    case "/":
        result = divide(number1, number2);
        break;
    case "%":
        result = percentage(number1, number2);
        break;
}

console.log("The result is: ", result);