// 4 + 4 = 8
// 8 - 4 = 8 + (-4)
// 2 * 3 = 2 + 2 + 2 
// 8 / 2 = 8 +(-2), 6 + (-2), 4 + (-2), 2 + (-2), 0

// compare
// a, b
// a + (-b) = r
// r =0 ==> a = 0
// r >0 ==> a > b
// r <0 ==> a < b

// x^2
// sqr(x, 2) 25==>5
// PI = 3.14
// to use Math in javascript, we use Math (class)
// 2.718
console.log(Math.E)
console.log(Math.PI)
console.log(Math.LN2)

let x = 4 - 10
let distance = Math.abs(x)
console.log(distance)
console.log(Math.sin(Math.PI>>1))

// 8 = 1000 (binary)
console.log(8>>1)// 1000>>1==> 0100 >>1 ==> 0010
//                  1000<<1 ==> 10000<<1 10000

console.log(Math.pow(5, 2))
console.log(Math.sqrt(144, 2))


let y = 2.654568542
/**
 * floor(double) returns the largest number as an integer
 * if n negative returns -(n +1) as an integer
 */
console.log(Math.floor(y))

/**
 * round returns closest integet number
 * n.v if v =< 4 ===> n
 *     if v >= 5 ===> n + 1
 */
console.log(Math.round(y))

let r = Math.random()
console.log(r)// 0 to 0.9999999999

// generate a random number from 0 until n
let random = Math.random()
let myNumber = 16 * random // max is 100 * 0.9999 = 99.999
let randomIntegerNumber = Math.round(myNumber)
console.log(randomIntegerNumber)
/**  create a function generateRandom(from, to), takes 'from' Integer as an argument, 'to' as an integer number,
this function returns a random integer number between 'from' and 'to'
check if from & to are numbers (integers)
check if from < to
ex: generateRandom(5, 50) ==> 25 or 30 or .....
*/
function generateRandom(from, to){
    // check if 'from & to' are numbers
    // if from is not number or to is not a number break
    if(!Number.isInteger(from) || !Number.isInteger(to)){
        return "from, to must be numbers"
    }
    if(from > to){
        return "from should be greater than to"
    }
    let r = Math.random()// 0, 0.9999
    // max number is "to"
    // min number is "from"
    // from + r >= from
    // r * to   < to
    // 6, 12, 
    let min = Math.round(r + from)// 7 
    let max = Math.round(to * r)// 12
    return (max - min)
}
///////////////////////////////////////////////
let names = ["Mostafa", "Matteo", "Ahmet", "Asieh", "Denis", "Eddison", "Faden", "Fotis", "Haythem", " Hisham", "Karim", "Lace", "Luca", "Mohamad", "Suhaib", "Ahmad"]
let parts = ["Head", "eyes", "face", "arm", "Shulder", "Knee"]
let verbs = ["wash", "break", "cook", "sell", "draw", "throw", "burn"]
/**
 * function generate a funny sentens like:
 * (Mostafa) want to (sell)  (Ahmet)'s  (Shulder).
 * use random, result in document
 */
console.log(names[randomIntegerNumber])
document.write(`${names[randomIntegerNumber]} want to ${verbs[0]} ${names[2]}'s sdf <br>`)



