/**
 * [5,8,6,2,1,4,0,"string", true, "false", [4,8,6], {c:5}]
 * create a function to analysis the elements inside this array
 * ex
 * count of strings is ...
 * count of numbers is :...
 * count of boolean is: ...
 * count of objects is: ...
 * count of arrays is:...
 */

let numberCounter = 0
let stringCounter = 0
let objectCounter = 0
let booleanCounter = 0
let arrayCounter = 0
function arrayAnalysis(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {
            numberCounter++
        } else if (typeof array[i] === "string") {
            stringCounter++
        } else if (typeof array[i] === "boolean") {
            booleanCounter++
        } else if (Array.isArray(array[i])) {
            arrayCounter++
            arrayAnalysis(array[i])// Recursion
        } else {
            objectCounter++
        }
    }
}
let myArray = [5, 8, 6, 2, 1, 4, 0, "string", true, "false", [4, 8, 6, [4, 2, "str", true, { c: 9 }, [5, "sss", false]]], { c: 5 }]

arrayAnalysis(myArray)
document.write(`
    <p>
        The count of Numbers is: ${numberCounter}<br>
        The count of Strings is: ${stringCounter}<br>
        The count of Boolean is: ${booleanCounter}<br>
        The count of Arrays is: ${arrayCounter}<br>
        The count of Objects is: ${objectCounter}
    </p>
`)
////////////////////////////////
/**
 * factorial number 5!= 5 * 4 * 3 * 2 * 1 
 * factorial number 7!= 7 * 6 * 5 * 4 * 3 * 2 * 1
 * factorial number 0!= 1
 * factorial number 4! = 4 * 3 * 2 * 1
 * factorial number 4! = 4 * 3!
 * factorial number 3! = 3 * 2 * 1
 * factorial number 5! = 5 * 4!
 * factorial number n! = n * (n-1)!
 */
function factorial(n) {
    let result = 1
    if (n > 0) {
        for (let i = n; i > 0; i--) {
            result = result * i
        }
    }else{
        console.log("NO NIGATIVE NUMBER")
    }
    console.log(result)
}
function recursionFactorial(n){
    if(n <= 0){
        return 1
    }else{
        return n * recursionFactorial(n - 1)
        // when n =5
        // return 5 * (4 * (3 * (2 * ( 1 * (1)))))
        //  (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
    }
}
factorial(5)
console.log(recursionFactorial(5))
/////////////////////////////////////////////
let sum = 0
for (let i = 0 ; i <= 5; i++){
    //sum += i
    sum = sum + i
}
console.log(sum)
// n should be positive not 0

function recursiveSum(n){
    if(n <= 0){
        return 0
    }else{
        return n + recursiveSum(n - 1)
    }
}
console.log(recursiveSum(5))
////////////////////////////////////////
// special function in javascript
/**
 * setTimeout(procedur (function), delay time in ms)
 */
// function cool(){
//     console.log("Hey am cool function")
//     console.log("This log after 3 second")

//     // alert("this works after 3 s")
// }
// setTimeout(function(){
//     console.log("This log after 3 second")
//     //alert("this works after 3 s")
// }, 3000)

// setTimeout(cool, 5000)

setTimeout(function(){
    console.log("my setTimeout function is started.")//wait after 5s
    setTimeout(function(){
        console.log("Humm this is setTimeout, inside setTimeout")//wait after 5s + 2s = 7s
    },2000)
}, 5000)

console.log("This log is after setTimeout function")
/**
 * setInterval(procedur (function), 1000 ms = 1s)
 */
let ii = 0
const myInterval = setInterval(function(){
    ii++
    console.log(ii)
    // if(ii>10)
    //     clearInterval(myInterval)
}, 1000)
// clearInterval()
setTimeout(function(){
    clearInterval(myInterval)
}, 10000)