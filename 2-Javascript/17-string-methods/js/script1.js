let str = "0123456789"
console.log(str)
/**
 * slice(start, end)
 * start, end are positive: left to right
 * new string := [start, end[ := [start, end -1]
 */
// str = str.slice(2, 9)// []
// console.log(str)
/**
 * costumer number DB
 * DCI2214511
 */

/**
 * slice(start, end)
 * start, end are negative: right to left
 * new string := ]-start, -end] := [-(start+1), -end]
 */
str = str.slice(-8, -4)
console.log(str)
let str1 = "595123548745623648"//1235487
// positive case:
let positiveCase = str1.slice(3, 10)
let negativeCase = str1.slice(-15, -8)
console.log(positiveCase)
console.log(negativeCase)
let text  = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat culpa nulla cupiditate error ducimus autem cumque vel dolores illo perspiciatis! Repudiandae quidem voluptatibus laudantium inventore soluta accusamus at@delectus in."
console.log(text.length)
// try to display "delectus in"
//charAt()==> char, indexOf("")==> the first position
// let myWord = text.slice(-12, text.length)
let myWord = text.slice(-12)
// console.log(text[text.length -1])
console.log(myWord)

/**
 * slice(n)
 * n positive: str := [n, end of the text]
 * n negative: str := [-(n+1), end of the text]
 *  take the position from n until end
 */
let str2 = "my Text"
let str3 = str2.slice(-4)
console.log(str3)
/**
 * slice(positive, negative) 
 * slice(negative, positive)  
 * always start position should be before end position,
 * dosnt matter if we count from left to right or right to left 
 */
let str4 = "0123456789"
// let strr = str4.slice(-3, -2 )// 7
// let strr = str4.slice(2, -3 )// 23456
// let strr = str4.slice(7, -3 )// nothing [start position > end position]===> nothing
// let strr = str4.slice(-4, 8 )// 67, [ start position < end position]
let strr = str4.slice(3,1)// empty
console.log(strr)
//////////////////////////////////////////////////////////

/**
 * substring 
 * same slice but cannot accept negative values
 */
let str5 = "0123456789"
let str4res = str5.substring(0, 3)
console.log(str4res)
let str4res1 = str5.substring(5)
console.log(str4res1)
/////////////////////////////////////////////////////////
/**
 * substr()
 * same of slice but the second argument refare to the lenght of the text we want
 * substr(start from, length)
 * substr(index) ==> from index to end
 * substr(negative, length) start count from right side
 */
let str6 = "0123456789"
let str6res = str6.substr(2, 6)
console.log(str6res)
let str6res1 = str6.substr(5)
console.log(str6res1)
// let str6res2 = str6.substr(-4)// 6789 := until end
let str6res2 = str6.substr(-4, 3)// 678
console.log(str6res2)
/**
 * slice(n,n) == substring(0...n, 0...n)
 * substr(n, length)
 */
let array = [5, "t", true]
array[2] = false
console.log(array[2])
let test = "this is a string"
test[2] = "A"// this will not make an effect
console.log(test[2])
///////////////////////////////////////////
/**
 * write a function turncate(str, n), takes string as an argument, n integer number
 * function should return the same string from position n until end of that string
 * the function returns "str should be a string" if str not a string, returns "n should be an integer number" if n is not an integer number
 */

function turncate(str, n){
    // check if str is string
    if(typeof str !== "string"){
        return "str should be a string"
    }
    // check if n is number
    if(typeof n !== "number"){// 2 , 2.3
        return "n should be an integer number"
    }
    // check if n is an integer
    // integer numbers: 0, 5 , -9, 10
    // not integer numbers: 1.5, 2.2, 3.5, 5/2, 
    if(!Number.isInteger(n)){
        return `${n} is not an Integer`
    }
    // continuo the process
    return str.slice(n)
}
let gText = "Sehr geehrte Damen und Herren"
let tuText = turncate(gText, 5)
console.log(tuText)