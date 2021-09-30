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

console.log(sum(2, 3));
console.log(sum(5, 6));


let x = 5 * sum(3 , 4);

console.log(x);


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