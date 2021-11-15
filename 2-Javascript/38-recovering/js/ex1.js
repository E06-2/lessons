/**
 * Task 1
 * Try to display the followning information about you in console section in browser:
 *      1- Your First Name
 *      2- Your Last Name
 *      3- Your Age
 *      4- Your Mother Language
 *      5- Married
 *      6- Your Height
 *      7- Your Skills
 *      8- Your Favorite Foods
 * 
 * Use console.log() to display.
 */
var fname = "John"
var lname = "Smith"
var age = 20
var motherLanguage = "En"
var married = true
var Height = 1.73
var Skills = ["Programming", "Javascript", "CSS", "HTML"]
var favoritFood = {
    fruits: ["Apple", "Banana"],
    meals: ["fish", "met","anything"]
}
console.log(typeof fname,fname)
console.log(typeof lname,lname)
console.log(typeof age,age)
console.log(typeof motherLanguage,motherLanguage)
console.log(typeof married,married)
console.log(typeof Height,Height)
console.log(typeof Skills,Skills)
console.log(typeof favoritFood,favoritFood)

/**
 * Task 2
 * define a variable (stuff)
 * assign a value for stuff so that gives in console the following:
 *  1- number
 *  2- string
 *  3- object
 *  4- NaN
 *  5- null
 *  6- undefined
 *  7- boolean
 *  
 * var stuff;
 * stuff = 10
 * console.log(typeof stuff)// number
 */
console.clear()
var stuff;
stuff = 10
console.log(typeof stuff)
stuff = "sss"
console.log(typeof stuff)
stuff = {}
console.log(typeof stuff)
stuff = "s" * 12
console.log(stuff)
stuff = null
console.log(stuff)
let o = {}
stuff = o.bla
console.log(typeof stuff)
stuff = Boolean(5 === 10)
console.log(typeof stuff)

/**
 * Task 3
 * Which one is Not a Number:
 *                          |Yes|No|Syntax Error
 *      1- 360              |yes|  |
 *      2- 002              |yes|  |
 *      3- 0.02             |yes|  |
 *      4- -500             |yes|  |
 *      5- 0.00             |yes|  |
 *      6- (5 + 1)          |yes|  |
 *      7- "523"            |   |no|
 *      8- null             |   |no|
 *      9- Infinity         |yes|  |
 *      10- undefiend       |   |no|
 *      11- 0b1010          |yes|  |
 *      12- 0b52            |   |  |syntax error
 *      13- 0xFF            |yes|  |
 *      14- 0xFY            |   |  |syntax error
 *      15- 5,1             |   |  |syntax error
 *      16- 0o56            |yes|  |
 *      17- '2'             |   |no|
 *      18- 0B10110         |yes|  |
 *      19- 0X410FfaA       |yes|  |
 *      20- 0XFe10R         |   |  |syntax error
 *      21- NaN             |yes|  |
 *      22- true            |   |no|
 */
// This santous contains an errorro
