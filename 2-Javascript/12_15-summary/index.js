// Call Stack (LIFO)

// synchronous programming

// asynchronous programming

// function f1() {

// }

// function f2() {

// }

// function f3() {

// }

// Declare a Function
function functionName(/*paramethers*/) {
    //Function body

    //Code goes here

    return /*some value*/
}

functionName()

// void function
function functionVoid(/*paramethers*/) {
    //Function body

}

//Function parameters 

// Paramenter
// function sayHello(name = "World") {
//     console.log(`Hello ${name}`);
// }

//Argument
// sayHello("Mat")

// Function Expression
// const sum = function (a, b) {
//     return a + b;
// }


// Arrow Function
// const sum = (a, b) => {
//     return (
//         a + b
//     );
// }

// console.log(sum(2, 4));

// const sum = (a,b) => a + b


// Pure functions and side effect

const sum = (a, b) => {
    return a + b
}

//pure function
function priceAfterTax(productPrice) {
    return (productPrice * 0.20) + productPrice;
}

//impure function
let tax = 20;

function calculateTax(productPrice) {
    return (productPrice * (tax / 100)) + productPrice;
}

let number = 1;

function sideEffects() {
    number++
}
sideEffects()

console.log(number);

let arr = [1, 2, 3, 4, 4]
//arr.splice(2)

// let r = arr.slice(2)

// console.log(arr);
// console.log(r);

let str = "Hello"


for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

console.log(str.split(""));