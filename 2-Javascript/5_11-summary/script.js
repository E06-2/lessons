// Flow of a program (left to right, top to bottom)
// What is an Algorithm
// If...Else Statement
// Switch Case
// For Loop
// While Loop
// Scope
// Var, Let and Const

//exercise FizzBuzz 20 min.
// For Loop < 60min.

/* JavaScript if statement */
let iceCream = "vanilla";
if (iceCream === "banana"/*boolean conditional*/) {
    // code to execute if the conditional is true
    // console.log("true");
} else {
    // code to execute if the conditional is false
    // console.log("false");
}

// console.log(iceCream);

//multiple condition 
// if (condition1)
//   statement1
// else if (condition2)
//   statement2
// else if (condition3)
//   statement3
// ...
// else
//   statementN

// switch (expression) {
//   case value1:
//     //Statements executed when the
//     //result of expression matches value1
//     break;
//   case value2:
//     //Statements executed when the
//     //result of expression matches value2
//     break;
//   ...
//   case valueN:
//     //Statements executed when the
//     //result of expression matches valueN
//     break;
//   default:
//     //Statements executed when none of
//     //the values match the value of the expression
//     break;
// }

const action = 'say_Hello';
let message = ''
switch (action) {
    case 'say_hello':
        message = 'hello';
        // console.log(message);
        break;
    case 'say_hi':
        message = 'hi';
        // console.log(message);
        break;
    default:
        // console.log('Empty action received.');
        break;
}

// Scope

// let var1;
var x = 1;
const c = 2;
{
    var var1 = "banana"
    var x = 10;
}
// console.log(x);
// let is for variables (value you want to change or update);
// const is for constant. Does not change value.
// const PI = 3.14

// for ([initialization]; [condition]; [final-expression]){
//     statement
// }

let str = '';
// for (let i = 0; i < 9; i++) {
//     str = str + i;
// }
// console.log(str);

let n = 0; //initialization
while (/*condition*/ n < 9) {
    //statement
    str = str + n;
    n++ //final-expression
}

console.log(str);