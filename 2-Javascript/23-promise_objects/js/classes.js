class Person {
    constructor (firstName, lastName, birthYear, isMarried, work = '') {
        this.fName = firstName;
        this.lName = lastName;
        this.bYear = birthYear;
        this.married = isMarried;
        this.job = work
    }
    fName = '';
    lName = '';
    bYear = 0;
    married =  false;
    job = '';
    /**
     * will return full person name
     * @returns 
     */
    fullName = function() { 
        return this.fName + ' ' + this.lName;
    }
    age = function() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.bYear;
    }
}

// const ahmad = new Person('Ahmad', 'Osman', 1986, true, 'teacher');
// const hisham = new Person('Hisham', 'Yones', 1995, false)
// console.log(ahmad.job);

class Trainer extends Person {
    constructor (firstName, lastName, birthYear, isMarried, teachin, teachmodule) {
        super(firstName, lastName, birthYear, isMarried, 'Trainer') ;
        this.teachModule = teachmodule;
        this.teachIn = teachin;
    }
    teachModule = '';
    teachIn = '';
}

const ahmad = new Trainer('Ahmad', 'Osman', 1986, true, 'E06_2', 'Web Dev');
const someOne = new Person('foo', 'boo', 2020, true)
console.log(someOne.fullName());

const arr = new Array();
arr.push(1);
arr.push(0);
arr.push(6);
console.log(arr);

class OurArray extends Array {
    constructor() {
        super();
    }
    getFirstElement = function() {
        return this[0];
    }
}

const newArr = new OurArray();
newArr.push(1);
newArr.push(6);
console.log(newArr.getFirstElement());
Person.prototype.showDescription = function() {
    return `my name is ${this.fName} ${this.lName} and I am ${this.age()} 
    years old and I work as ${this.job}`
}
console.log(ahmad.showDescription());
/**
 * this function will return a new String but every word will start with capital letter
 * @returns new capitalize string
 */
String.prototype.capitalize = function() {
    const strArr = this.split(' ');
    const capitalizeArr = strArr.map(element => {
        const newElement = element[0].toUpperCase() + element.slice(1);
        return newElement;
    });
    return capitalizeArr.join(' ');
}

let str = 'this is a string';
const newStr = str.capitalize();
console.log(newStr);