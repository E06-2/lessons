// function, method, subprogramm, object
function foo(){
    // console.log("Function foo")
    // console.log(arguments[0])
    Array.from(arguments).forEach(arg=>{
        console.log(arg)
    })
}
foo(1, true, "str")
foo([1,2,3])

function sayHi(name, age){
    
    if(typeof arguments[0] == "string"){
        console.log(`Hi ${arguments[0]}, you are ${arguments[1]} years old`)
    }else{
        console.log(`Hi ${arguments[1]}, you are ${arguments[0]} years old`)
    }
}
sayHi(20, "John")
sayHi("Mostafa", 30)

// two types of functions
// Void Functions, NO RETURN, to use them just call it
// Return Functions, should return something, save them in variable, or log them
function add(a, b){
    return a + b
}
let a = add(4, 3)
console.log(a)
// console.log(sayHi("Mostafa", 30))
console.log(add(10, 20))

const f1 = ()=>{
    console.log("f1 function works")
}
f1()