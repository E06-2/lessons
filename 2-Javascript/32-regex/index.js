let text = '10081005101210121015'
let re = /\d{4}/g;

//let re = new RegExp(/cdb/)

let textSplit = text.match(re);

// console.log(textSplit);

let text2 = "The brown Fox runs wild";
let reFox = /fox/i

let indexOfFox = text2.search(reFox)

//console.log(indexOfFox);

// test

let testRe = new RegExp("wild");

//console.log(testRe.test(text2));

// replace

let colorText = text2.replace("brown", "red");

let fullName = "Smith, John"
let formatName = fullName.replace(/([a-z]+), ([a-z]+)/ig, "$2 $1")

console.log(formatName);