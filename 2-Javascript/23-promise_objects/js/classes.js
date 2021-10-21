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

