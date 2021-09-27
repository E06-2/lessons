let arr = [2, 5, 70, 1, -2, 9, 8];
// Array index STARTS from 0 
console.log(arr[6]);
console.log(arr.length)
// book: 
// topic1: 3 - 15
// topic2: 16 - 20

// task: 
// show each number of the array on the page 
// above each other 
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]);
//     document.write('<br>');

// }

// task:
// write the code to show the sum of the numbers in arr

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]; // sum = sum + arr[i];
// }
// document.write('the total is : ' + sum);

// task:  change the previous code to calculate the multiply of the previous array items
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//     sum *= arr[i]; // sum = sum * arr[i];
// }
// document.write('the total is : ' + sum);

// write a code using for loop and if statement to find the GREATER number in the arr:

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
document.write(`the max number is : ${max}`);

