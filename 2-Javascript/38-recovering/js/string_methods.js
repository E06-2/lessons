let str = "This is a normal Text s"
console.log(str)
// to find letter in string in position n str[n]
// console.log(typeof str[0], str[0])
console.log(str.length)// return length of the string as number starts from 1
// 1- charAt(n) === str[n], nE[0, str.length -1] ==> string
// console.log(str.charAt(1))
console.log(str.charAt(str.length -1))
console.clear()
// 2- indexOf(string), position of the first string founded as number (if -1) didnt found
console.log(str.indexOf("normal"))
// 3- lastIndexOf same indexOf but the last stuff he found it
console.log(str.lastIndexOf("s"))
console.log(str.lastIndexOf("z"))
console.clear()
// 4- .includes(string)==> true/false
console.log(str.includes("text"))// false
console.log(str.includes("Text"))// true
// 5- .search(string)// string could be like regular expression
console.log(str.search("ist"))
console.log(str.valueOf())

// 6- .trim(), ignore all empty spaces before and after the sting
console.log("  rr ".trim())

// 7- .split(string s) returns an array of all words splitted by s
console.clear()
console.log(str.split(""))

// 8- .slice(from, to), returns part of string [from, to[
console.clear()
str = "abcdefghijklmnopqrstuvwxyz"
console.log(str.slice(2, 6))
// try to display from n to z
// console.log(str.slice(str.indexOf("n")))
// try to display from f to w
// console.log(str.slice(str.indexOf("f"), str.indexOf("w") +1))
// console.clear()
// console.log(str.slice(3))
// .slice(n) ==> string from n to end, n< 0, start count from right to left

// console.log(str.slice(-7))
console.log(str.slice(-1)) // returns the last letter
// console.log(str.slice(4, 5))
/**
 * try to get the last WORD from the text
 */
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae numquam doloremque, ducimus quos animi facilis non nesciunt sapiente illo nobis aliquam amet. Quae obcaecati veniam iste eaque reiciendis laborum nesciukkkkkknt?"
// console.log(text.slice(-9))
console.log(text.split(" ")[text.split(" ").length -1])
console.clear()
// "abcdefghijklmnopqrstuvwxyz"
// 9- .substr(from, count)==> string  [from, count]
// console.log(str.substr(0, 5))
// console.log(str.substr(4, 3))
// console.log(str.substr(3, 4))
// console.log(str.substr(2))
console.log(str.substr(-5, 4))// start count from right to left 4 letters
console.log(str.substr(-5, -1))// nothing
console.log(str.substr(-10))// start count from right to left until end
// try t display from r ==> x
console.log(str.substr(-9, 7))
// try t display from c ==> x
console.log(str.substr(str.indexOf("c"), str.length-1 -3))
console.log(str.slice(str.indexOf("c"), str.length -2))

// 10- .substring(indexStart, indexEnd)  [indexstart, indexEnd[
// "abcdefghijklmnopqrstuvwxyz"
console.clear()
console.log(str.substring(2, 5))
console.log(str.substring(3))
console.log(str.substring(0, 2))
// Summary
/**
 * 1- slice(start, endIndex) ===> [start, end[
 *      slice(start) ==>if start > 0 ==> from left to end, start< 0 ==> from right to left
 * 2- substr(start, count) ===> [start, count[
 *      ==>if start > 0 ==> from left (count), start< 0 ==> from right to left (count)
 * 3- substring(startIndex, endIndex) NO nigative
 */
console.clear()
console.log(str.slice(2, 4))
console.log(str.substr(2, 4))
console.log(str.substring(2, 4))

let st = "My Text\n"
let repeat = st.repeat(10000)
console.log(repeat)

