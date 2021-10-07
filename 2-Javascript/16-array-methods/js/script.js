let arr = [2, 6, 7, 1, 3, 12];

// create a new array which its elements are double of arr elements
// let doubleArr = [];
// arr.forEach(element => {
//     doubleArr.push(element * 2);
// })
// console.log(doubleArr);

// map will return a new array from the original array 
// without effecting on the original one

// map MUST have a return statement if we use {}
// let doubleArr = arr.map(element => {
//     return element * 2 ;
// });


// we can write map without {} if it contains only one command 
// and we dont to write return statement 
let doubleArr = arr.map(element => element * 2);



console.log(doubleArr);

// create a new array with even numbers ONLY from the original one
// map is not going to help us to solve this task
// because it MUST have return for EVERY element on the original array
// let evenArr = arr.map(element => {
//     if (element % 2 === 0) {
//         return element;
//     }
// });

// let evenArr = arr.filter(element => {
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// })

// let evenArr = arr.filter(element => {
//     return (element % 2 === 0);
// })

let evenArr = arr.filter(element => element % 2 === 0);

console.log(evenArr);

// task : create a new array called doubleEvenArr which will contain
// only the double of the even numbers ONLY in Array arr


// let doubleEvenArr = evenArr.map(element => element * 2);
let doubleEvenArr = arr.filter(element => element % 2 === 0)
    .map(element => element * 2);
console.log(doubleEvenArr);


// find a number that can be divided by 2 and 3
// find will return the first element that matches the condition
let num = arr.find(element => element % 2 === 0 && element % 3 === 0);
console.log(num);

const people = ['Ahmad', 'Lace', 'Asieh', 'Karim', 'Mohammad', 'Suhaib', 'Ahmet', 'Haytham', 'Hisham', 'Eddison', 'Thomas', 'Fotis', 'Denis', 'Walaa', 'Matteo'];
const genders = ['m', 'm', 'f', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'f', 'm'];
const weights = [90, 70, 63, 82, 65, 80, 95, 90, 65, 85, 105, 68, 83, 65, 95];
const hights = [179, 173, 170, 185, 175, 170, 186, 178, 173, 175, 191, 187, 185, 165, 183];
const parties = ['green', 'SPD', 'SPD', 'CDU', 'SPD', 'SPD', '', 'CDU', '', 'CDU', '', '', '', 'SPD', 'Pirate'];


// task1:
// create a new array which contains the weights that are more than or equal  70kg 
// in grams

let arr1 = weights.filter(index => index >= 70).map(index => index * 1000);
console.log(arr1);

// task2: 
// create new array that contains the following text 
// "[name] weights [weight] KG  and [hight] CM long" for only females members


// let arr2 = weights.map((element, idx) => {
//     return (`${people[idx]} weights ${weights[idx]} KG  and ${hights[idx]} CM long`)
// }).filter((elem, index) => {
//     return genders[index] === 'f'
// });


let arr2 = weights.map((_, idx) =>
 (`${people[idx]} weights ${weights[idx]} KG  and ${hights[idx]} CM long`))
.filter((_, index) => genders[index] === 'f');

console.log(arr2);

// homework:
let nestedArr = [
    [
        2,
        3,
        8,
        [
            5,
            3,
            8,
            7
        ]
    ],
    8,
    5,
    [
        2,
        4,
        1,
        [
            5,
            4,
            3,
            7
        ]
    ],
    [
        5,
        4,
        8,
        [
            2,
            5,
            8,
            7
        ]
    ]
];

// write a code to calculate the sum of all numbers and nested numbers in the array
