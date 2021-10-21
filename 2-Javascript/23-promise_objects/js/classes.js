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

