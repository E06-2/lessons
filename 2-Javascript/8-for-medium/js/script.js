// loop to print numbers above each other from 0 to 9
// for(let i = 0; i < 10; i++) {
//     document.write(i);
//     document.write('<br>');
// }

// make changes on the following loop to print numbers from 9 to 0
// for(let i = 9; i >= 0; i--) {
//     document.write(i);
//     document.write('<br>');
// }

// write a for loop to print even numbers 
// above each other from 1 to 10 WITHOUT using if statement

// 2
// 4
// 6
// 8
// 10

// for(let i = 2; i <= 10; i += 2) {
//     document.write(i);
//     document.write('<br>');
// }

// let c = 5;
// c +=  2; // c = c + 2;
// let v = c++;
// console.log(v);
// console.log(c);

// for(let i = 0; i < 10; i++) {
//     for(let x = 0; x < 10; x++){
//         document.write('*');
//     }
//     document.write('<br>');
// }

// task: change the previous code to print the following pattern

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// for(let i = 1; i <= 10; i++) {
//     for(let x = 0; x < i; x++){
//         document.write('*');
//     }
//     document.write('<br>');
// }

// loop1 i = 1 
// loop2 0 --> 1 * <br>

// loop1 i = 2
// loop2 0 --> 2 ** <br>

// loop1 i = 3
// loop2 0 --> 3 *** <br>

// loop1 i = 4
// loop2 0 --> 4 **** <br>

// task: write code to print the following pattern:

// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// for(let i = 10; i >= 1; i--) {
//     for(let x = 0; x < i; x++){
//         document.write('*');
//     }
//     document.write('<br>');
// }

// task: write code to print the following pattern:

// ---------*
// --------**
// -------***
// ------****
// -----*****
// ----******
// ---*******
// --********
// -*********
// **********

// for(let i = 0; i < 10; i++){
//     for(let x = 10 - i; x > 1; x--){
//         document.write('&nbsp; ');
//     }
//     for(x = 0; x <= i; x++) {
//         document.write('*');
//     }
//     document.write('<br>')
// }


// home work
// task1: write code to find the sum number of numbers between 1 --> 100
// task2: write a program to print the multiple table from 1 to 100
// 1 X 1 = 1
// 1 X 2 = 2
//- - -
// 1 X 10 = 10
// 2 X 1 = 2
// 2 X 2 = 4

// 10 X 10 = 100

// Task 1: 
// let storage = 0;
// for (let i = 1; i <= 100; i++) {
//     storage += i; // storage = storage + i;
// }
// document.write('the sum number is: ' + storage);

// storage = 0

// loop1: i = 1
// storage = storage + i = 0 + 1 = 1

// loop2: i = 2
// storage = storage + i = 1 + 2 = 3

// loop3: i = 3
// storage = storage + i = 3 + 3 = 6

// task2:

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        //document.write(i + ' x ' + j + ' = ' + (i * j) + '<br>' );
        document.write(`${i} x ${j} = ${i * j} <br>`);
    }
    document.write('<br>');
}
