// let x = 'I\'m a string';
// let y = "I'm a string";
// let c = `I am a string`;

// // I'm a string
// // I have // I've

// console.log(x);


//length property will return the string characters count
const str = 'I am A text';
console.log(str.length);

// toUpperCase method will return a new uppercase string
const upStr = str.toUpperCase();
console.log(upStr);

// toLowerCase method will return a new lowercase string
const lowStr = str.toLowerCase();
console.log(lowStr);

// indexOf will return the start position of the searched string
const idx = str.indexOf('xg');
console.log(idx);


console.log(str.includes('at'));

// replace will replace the string with another one and return a new replaced string
const replacedStr = str.replace('a', 's');
console.log(replacedStr);
// if we want to replace all found strings
// g replace all strings
// i replace a string with any cases (capital or small letter)
const replacedStr1 = str.replace(/a/gi, 's');
console.log(replacedStr1);


// trim will remove the white spaces from the begging and the end of the text
// BUT not the spaces inside the text 
// const inputText = prompt('Enter some text');
// const trimmedText = inputText.trim();
// console.log(`you entered : "${trimmedText}"`);

let newStr = 'gg-tt-ee-hh-jj'
let strArr = newStr.split('ee')
console.log(strArr);

// write a code to print a sentence words number
const text = "We are a web dev class, and we learn JavaScript to be used in front-end and back-end development";

const wordsCount = text.split(' ').length;
console.log(wordsCount);


// Task
// you are an asshole

// you are an ******

// the following sentence does not contains any bad words
// please dont assault me
//  ass 

// hey man fuck off
const badWords = ['asshole', 'fuck', 'ass'];

function badWordsRemover (str) {
 // write a code to return a sentence with replaced 
 // badwords *****
}

// use prompt as an input 

