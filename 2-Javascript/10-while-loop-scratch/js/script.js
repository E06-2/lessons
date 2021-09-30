// while (condition) {
    
// }

// let num = 1;
// while (num <= 10) {
//     document.write(`${num} <br>`);
//     num = num + 1;
// }

// task:
// write a code to let user enter texts and show this text on the page
// until the user enter empty text so the prompt should stop

// let check = true;
// while(check) {
//     let msg = prompt('Enter your text');
//     // check if message is empty string
//     if (msg == '') {
//         check = false;
//     } else {
//         document.write(`${msg} <br>`)
//     }
// }

// Home Work :  
// write a code to allow user to enter  numbers using prompt and 
// when the user enter empty string the prompt will stop
// then to show the total and the average 

// enter number 1:
// user will enter some number then click enter

// enter number 2:
// user will enter some number then click enter

// after entering the last number which is number 10
// the program should show result like this:
// The Total is: []
// The Average is: []

let i = 0; // number of the entries numbers that user will enter
let sum = 0;
let check = true;
while (check) {
    // check only the string entry
    let entry = prompt('Enter a number ' + (i + 1));
    if (entry === '' || Number.isNaN(entry) || entry.includes(' ')) {
        check = false;
    } else {
        let number = Number(entry);
        sum += number;
        i++;
    }
}
// if i is 0 that means user did not enter any number
// so we should show no result
if (i === 0) {
    document.write(`No entries`);
} else {
    document.write(`The Total is : ${sum} <br>`);
    document.write(`The average is : ${sum / i} <br>`);
}


// 1 , 2 , 3 , ' '
// sum = 6
// average = 6 / 4 wrong it supposed to be 6 / 3 
