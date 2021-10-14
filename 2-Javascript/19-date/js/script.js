const date = new Date();
console.log(date);

const dateSeconds = Date.now();
const date2 = new Date(dateSeconds);
console.log(date2);

console.log(date2.toUTCString());

console.log(date.getFullYear());
// get current month BUT start counting from 0
console.log(date.getMonth());
// get current day of the week
console.log(date.getDay());
// get current day of the month
console.log(date.getUTCDate());
// print only time
console.log(date.toTimeString());
// get current hours of the day
console.log(date.getHours());
console.log(date.getSeconds());

let date3 = new Date(1986, 1, 2);
console.log(date3);

const currentDate = new Date(); 
// difference between two dates by days
console.log(((currentDate - date3) / (24 * 60 * 60 * 1000)) );

// date3.setDate(date3.getDate()+ (5 * 365))
// console.log(date3);
// add years to certain date
const date3Year = date3.getFullYear();
const date3Month = date3.getMonth();
const date3Days = date3.getDate();

date3 = new Date(date3Year + 5, date3Month, date3Days);

console.log(date3);

// comment ctrl + k + c
// uncomment ctrl + k + u