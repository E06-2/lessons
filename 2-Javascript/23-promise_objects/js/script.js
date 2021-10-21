// let pr = new Promise((resolve, reject) => {
// // we call resolve if there is no problems
// // we pass the right result to resolve

// // if there is any error we need to call reject
// // usually we pass the error to reject
// const error = true;

// if (!error) {
//     const result = "this is result";
//     resolve(result);
// } else {
//     reject('there is unknown error')
// }
// })

// promise should be called using [then] AND [catch] to handle exceptions
// pr.then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })
// console.log(pr);

let ahmad = {
    fName: 'Ahmad',
    lName: 'Osman',
    bYear: 1986,
    married: true,
    children: ['Omar', 'Ali'], 
    fullName: function() {
        return this.fName + ' ' + this.lName;
    },
    age: function() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.bYear;
    }
}

let hisham = {
    fName: 'Hisham',
    lName: 'Yones',
    bYear: 1995,
    married: false,
    children: [], 
    fullName: function() {
        return this.fName + ' ' + this.lName;
    },
    age: function() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.bYear;
    }
}

// object contains properties and Methods
// property is a certain value
// method is a function

// [this] refers to the object ITSELF
// we can use [this] inside only functinal methods 
// NOT Arrow methods
console.log(hisham.fullName());





