function print (str) {
    document.body.innerHTML = '';
    document.write(str);
}

// setTimeout will run code after certain time
// it will return timeOutId
// const num = setTimeout(() => {
// print('hello')
// }, 5000)



// clearTimeout will stop setitmeout with a certain Id
//clearTimeout(num);
//console.log(num);

// setInterval will run a function every certain time
// it will return process id 
// const id = setInterval(() =>{
//     print('hello<br/>');

// }, 1000)

// console.log(id);

// stop setInterval after 5 second
// using clearInterval
// setTimeout(() => {
//     clearInterval(id)
// }, 5000)

// task:
// print numbers from 1 to 5 above each other and make sure the time
// between every print is ONE second

// let i = 1;
// const pId = setInterval(() =>{
//     // to make it work in every browser 
//     // we add this if statement
//     if (i < 6){
//         print(i + '<br />');
//         i++;
//     }
    
// }, 1000)

// setTimeout(() => {
//     clearInterval(pId)
// }, 6000)

// task:
// create a counter 
// 00:00:00
// hh:mm:ss
// seconds should be increased to 59
// then when second reaches 59 it should be reset to 00 AND increase minutes by 1
// then if minutes reaches 59 it should be reset to 00 and increase hours by 1

function format(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}
let seconds = 0;
let minutes = 0;
let hours = 0;
setInterval(() => {
    // your code is here
    print(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
    seconds++;
    if (seconds === 60) {
        seconds = 00;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
}, 1000)