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

let check = true;
while(check) {
    let msg = prompt('Enter your text');
    // check if message is empty string
    if (msg == '') {
        check = false;
    } else {
        document.write(`${msg} <br>`)
    }
}

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
