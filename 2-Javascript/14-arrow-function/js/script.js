// Arrow function can have one parameter 
// so we dont need to add it inside () 

// Arrow function can have many parameters 
// so we  need to add it inside () 

// Arrow function can have no parameters 
// so we  need to add an empty () 

// const someFun = (s) => {
//     console.log(s);
// };

// someFun();

const someFun1 =  (a, cb) => {
    console.log(a);
    cb(45);
}

// someFun1('hi', someFun)

someFun1('hi', (s) => {
    console.log(s);
})