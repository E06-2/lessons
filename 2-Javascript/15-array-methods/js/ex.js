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
    }
}
factorial(7)
console.log(recursionFactorial(7))
