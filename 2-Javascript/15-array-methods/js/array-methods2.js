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

// const spds = [];
// parties.forEach((element, idx) => {
//     if (element === 'SPD') {
//         spds.push(people[idx]);
//     }
// });
// console.log(spds);
// const percent = spds.length * 100 / people.length;
// console.log(`SPD fans ${percent}%`);

// Task2:
// how many people are overweight?
// using BMI method :
// BMI = weight / height * height  (height in Meter)
// if BMI is greater than 25 this person considered to be overweight
// write the code to calculate the percentage of overweight people in our class.

// variable to save number of overweight people
/////////////////////////////////////////////
let myArray = [0,1,2,3]
// .push(element) add a new elelment to the end of the array
myArray.push(4)
myArray.push("String")
myArray.push(true)
myArray.push({c:9})
myArray.push([5,9,10])
// myArray.push(undefined)
// array.pop()==> remove the last element
// myArray.pop()
// myArray.shift()// remove the first element 
// myArray.shift()
myArray.unshift(true)// .unshift(element) add a new elelment to the start of the array
console.log(myArray)
/**
 * create a function generateArray(n), takes one argument (n), returns an array of numbers from [0, 1, 2, ..., n]
 * display the array in console
 */
/**
 * 
 * @param {Number} n count of the Elements 
 * @returns 
 */
function generateArray(n){
    let array = []
    for (let i = 0; i <= n; i++){
        array.push(i)
    }
    return array
}

let nArray = generateArray(20)
// for(let i = 0; i <nArray.length; i++){
//     console.log(nArray[i])
// }
// nArray.forEach(function(element, index){
//     console.log(index)
// })
/**
 * to remove any between items inside an array, we need to know the position (index) of the element that we want to remove
 * array.splice(position, count)
 */
nArray.splice(2, 1)
nArray.splice(6, 1)
let pos = nArray.indexOf(13)
console.log(pos)
nArray.splice(pos, 1)
// nArray.splice(2, 2)
// nArray.splice(nArray.length -1, 1)//= remove last element
// nArray.splice(-1, 1)//= remove last element
let res = nArray.splice(6, 0, 55)
// console.log("RES===>",res)
// console.log(nArray)
/**
 * create a void function removeOdd(array) takes array as an argument, this function will remove all odd numbers from the array, use .forEach instead of for loop
 */

function removeOdd(array){
    // let i = 0
    // array.forEach((element, index)=>{
    //     if(array[i] % 2 == 1){
    //         array.splice(i, 1)
    //         i--
    //     }
    //         i++
    // })

    for(let i = 0; i<array.length;i++){
        if(array[i] %2 === 1){
            array.splice(i, 1)
            i--
        }
    }
}
let testArray = [0, 1, 3, 4, 5, 6, 55, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20]
console.log(testArray)
removeOdd(testArray)
console.log(testArray)
//
/**
 * 1- Create a function, isPrime(n) n C [0, n],
 * this function will return true if n is prime number, false other case
 * 2- another function, generateArrayOfPrime(n) n C [0, n], returns array of prime numbers
 * n = 100
 * hint: 
 *      prime numbers: [2, 3, 5, 7, 11, 13, ...,p]
 *      you can use isPrime(n) function already you created
 */

/**
 * This function will check if n is prime number or not.
 * @author Mostafa Othman
 * @param {number} n Positive Natural Number.
 * @returns {Boolean} true if prime or false if not.
 */
function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false
        }
    }
    return true
}
// test isPrime function:
console.log("is 13 prime?", isPrime(13))
console.log("is 55 prime?", isPrime(55))

/**
 * This function will search for all prime numbers between 2 and n
 * @author Mostafa Othman
 * @param {number} n Positive Natural Number.
 * @returns {[number]} array of all prime numbers.
 */
function generateArrayOfPrime(n){
    let primeArray = []
    for(let i = 2; i <= n; i++){
        if(isPrime(i)){
            primeArray.push(i)
        }
    }
    return primeArray
}

// test generateArrayOfPrime function
// processing time:
console.time("process")
let primeArray = generateArrayOfPrime(100000)
console.timeEnd("process")// in ms
console.log(primeArray)