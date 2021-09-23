/**  the user will enter a number(prompt)
* detect his number if its prime or not
* if so: 
*    document: the number {number} is prime
* or:
document: the number {number} is not prime
* hint:
    prime numbers: is any number dividable with himself and 1 only
    "common case: not prime"
    ex: 3, 5, 7, 11, 13, ...
    1- loop from 2 until the user's number
    2- check if all other numbers dividable by him 
    3- use % to check the rest
*/
// number = 25 
// loop i = 2
// number % i == 25 % 2 = 1

// loop i = 3
// number % i == 25 % 3 = 1

// loop i = 4
// number % i == 25 % 4 = 1

// loop i = 5
// number % i == 25 % 5 = 0

// [2, 14]

var number =prompt ("Enter Number to check if it is prime number")

//console.log(number)
var msg = 'the number is prime';
for(var i = 2; i < number; i++)
    if(number % i == 0)
        {
        msg = 'the number is not prime';
        break;
        }

document.write(msg);
// else {
//     document.write("the number is  prime")
// }

// number = 15
// loop i = 2
// number % i = 15 % 2 = 1

// loop i = 3
// number % i = 15 % 3 = 0
