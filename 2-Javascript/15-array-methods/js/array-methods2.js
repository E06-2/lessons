const fruits = ['Apple', 'banana', 'watermelon', 'banana'];
fruits.push('berry');
console.log(fruits);

// indexOf will RETURN the index of the FIRST searched element
// indexOf can have another parameter to specify the start search index
// const idx = fruits.indexOf('banana', 2);

// lastIndexOf will return the index of the last occurrence of the searched value
// const idx = fruits.lastIndexOf('banana');
// console.log(idx);

// includes will return true if the searched element is found in the array
// const exist = fruits.includes('Apple');
// console.log(exist);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// forEach will iterate through the array and requires a function as a parameter
// fruits.forEach((element, idx) => {
//     console.log(element, idx);
// })

// task:
// write the code to fill odds array with odds numbers from numbers array and 
// to fill even numbers on the evens array.

// const numbers = [336, 224, 774, 885, 654, 122, 457, 585, 985, 123, 145, 126];
// const odds = [];
// const evens = [];

// numbers.forEach( num => {
//     if (num % 2 === 0) {
//         evens.push(num)
//     } else {
//         odds.push(num);
//     }
// })

// console.log(odds);
// console.log(evens);



const people = ['Ahmad', 'Lace', 'Asieh', 'Karim', 'Mohammad', 'Suhaib', 'Ahmet', 'Haytham', 'Hisham', 'Eddison', 'Thomas', 'Fotis', 'Denis', 'Walaa', 'Matteo'];
const genders = ['m', 'm', 'f', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'f', 'm'];
const weights = [90, 70, 63, 82, 65, 80, 95, 90, 65, 85, 105, 68, 83, 65, 95];
const hights = [179, 173, 170, 185, 175, 170, 186, 178, 173, 175, 191, 187, 185, 165, 183];
const parties = ['green', 'SPD', 'SPD', 'CDU', 'SPD', 'SPD', '', 'CDU', '', 'CDU', '', '', '', 'SPD', 'Pirate'];

// Task1:
// create a new array and fill it with people name that like SPD party then print
// then print the percentage of them.

const spds = [];
parties.forEach((element, idx) => {
    if (element === 'SPD') {
        spds.push(people[idx]);
    }
});
console.log(spds);
const percent = spds.length * 100 / people.length;
console.log(`SPD fans ${percent}%`);

// Task2:
// how many people are overweight?
// using BMI method :
// BMI = weight / height * height  (height in Meter)
// if BMI is greater than 25 this person considered to be overweight
// write the code to calculate the percentage of overweight people in our class.
