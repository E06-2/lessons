// const declare a variable that MUST NOT be changed
// let variables only will be seen or known inside the scope 
// var is a global variable that will be known or seen anywhere

const x = 0;


// x = 1; it will give an error

console.log(x);

let z = 0;

z = 5;

console.log(z);

{
    let i = 7;
}
let i = 6;
console.log(i);