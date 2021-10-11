// Temperature converter

const celsiusToFahrenheit = (n) => n / 5 * 9 + 32;

const fahrenheitToCelsius = (n) => (n - 32) * 1.8;

// Puppy Age Calculator

const calculateDogAge = (age) => age * 7;

const isPalindrome = (name) => name.split('').reverse().join(" ") === name;

//Merger Array

const mergeArray = (arr1, arr2) => [...arr1, ...arr2];

const mergeExclusive = (ar1, ar2) => {
    const ar = [];
    for (let el of ar1) {
        if (!ar2.includes(el)) {
            ar.push(el);
        }
    }
    for (let el of ar2) {
        if (!ar1.includes(el)) {
            ar.push(el);
        }
    }
    return ar;
}

// Sum of Comma Separeted Values (CVS)
const sumCVS = (s) => {
    const ar = s.split(",");
    let sum = 0;
    for (var n of ar) {
        sum += parseFloat(n);
    }
    return sum;
}

const reduceCSV = (s) => s
    .split(',')
    .reduce((a, b) => +a + +b, 0)