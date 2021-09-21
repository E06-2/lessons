//Primitive values

//String
var string = "Hello World";

var single = 'Hello "me" world'

var Myname = "John";
var lastName = "Smith";

// var fullName = Myname + " " + lastName;
var fullName = `${Myname} ${lastName}`

// console.log(fullName);
//Number +- (2^53 -1)
var age = 22;
var temp = -15;

var floats = 1.555;


//Booleon
var isOld = true;
var canEnter = false;


//Undefined
var person;
//console.log(person)

//Null
var cookies = null;


// Operators

//Assignment operators =
var x = 10;

x += 10;

// console.log("x: ", x);

// Comparison

//Equality checks for value
//2 == "2"
//2 != 3

//Strick equality checks for value and type
//2 === "2"
// 3 !== 3

// greater than
//1 > 2 -> false

//2 >= 3 

// small than
//1 < 0
// 1 <= 2

// Arithmetic

// + - / * % **

// increment
// ++ 

var count = 0;
// count

count++;

//console.log(count);

// decrement
// --

// Logical operators
//AND &&
// var y = (2 === 2 && 3 > 2);

// OR ||

var y = (2 !== 2 || 3 < 2);
//console.log(y);
//!

//Automatic type conversion.
console.log(2 + 2 + "2"); // "42"

console.log("2" - 2); // 