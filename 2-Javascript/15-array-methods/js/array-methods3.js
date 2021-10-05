// void functions
// dosent return anything, just doing job, can be only called back
function foo(){
    console.log("foo function called back")
}
foo()
foo()
foo()
// return functions
function sum(a, b){
    return a + b
}
var x = sum(2, sum(3, 4))
console.log(x)

// var c = foo()
// console.log(c)

function argsDetector(){
    // "arguments" inside functions only, returns an array of all arguments that we pass it when we call it back
    console.log(arguments.length)
}
argsDetector(5, 10, "hgdhg")

argsDetector(8, true)
/*
create a function name average, should return the average for all arguments that we pass using (arguments)
ex: average for 2, 4, 6 is (2 + 4 + 6)/3 
*/
function average(){
    // [4,6,8,4,1]
    let sum = 0
    let numberCounter = 0
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] == "number"){
            sum += arguments[i]
            numberCounter++
        }

    }
    //console.log("Numbers===>",numberCounter)
    return sum/numberCounter
}
let v1 = average(2, 4, 6, "5", true, 15)
let v2 = average(100,"200", 300)
console.log(v1)
console.log(v2)
///////////////////////
/**
 * create a function, to calculate the rectangle area, need to have 2 arguments (width, hight), returns the area for this rectangle
 * ex: rectangle
 *      width: 100
 *      hight: 5
 *        area = 100 * 5 ==> 500 
 */

function rectangleArea(width, hight){
    return width * hight
}

let area = rectangleArea(100, 5)
console.log(typeof rectangleArea(100, 5))
console.log(area)
/**
 * define another function to calculate Perimeter for rectangle, need to have 2 arguments (width, hight)
 * ex: width 100
 *      hight:5
 * perimeter = 100 + 5 + 100 + 5==> 100*2 + 5*2 ==>
 */
/* online comment */


/**
 * This function will calculate Permiter for rectangle
 * @param {Number} width 
 * @param {Number} hight 
 * @returns {Number}
 */
function perimeter(width, hight){
    return (width + hight)*2
}
console.log(perimeter(100, 5))

/**
 * This variable used for blabla
 */
var globalVariable = "string"
/**
 * create a function 2 args to print a summary for rectangle 
 * ex: "The area is ....
 *          the Permiter is ...."
 *          
 */
function summary(width, hight){
    document.write(`
    <p>
    The area is: ${rectangleArea(width, hight)}<br>
    The Permiter is: ${perimeter(width, hight)}
    </p>
    `)
}
summary(200, 10)
summary(100, 5)
summary(50, 2)
/////
/**
 * let the user enter a product prise (number)
 * let the user enter a discount [0, 100] (number)
 * create a function, takes two arguments, (prise, discount)
 * in document should display the following:
 *  "The original prise is: ...
 *   You will pay after discount: ...
 *   You save: ..."
 * ex: discountSummary(200, 50):
 *      The original prise is: 200
 *      You will pay after discount: 100
 *      You save: 100
 */

function discountSummary(prise, discount){
    document.write(`
        <p>
        The original prise is ${prise}<br>
        You will pay after discount: ${prise - (prise * discount)/100}<br>
        You save: ${prise * discount/100}
        </p>
    `)
}
let prise = Number(prompt("Please enter the original prise"))
let discount = Number(prompt("Please enter discount '%'"))
discountSummary(prise, discount)