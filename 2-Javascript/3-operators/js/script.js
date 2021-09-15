// Operators
// plus (+)
console.log(5 + 10)//=>15
// number + number = number
console.log("a " + " b")
// string + string = string
console.log(true + false)
// true = 1, false = 0
// boolean + boolean = number
console.log(typeof (true + false))//=>number
console.log([1,2] + [6,9])
console.log(typeof ([1,2] + [6,9]))
// array + array = string
console.log({key1:2, key2:"s"} + {key3:14, key4:false})
// number + string = string
console.log(60 + "hi")//=>string
console.log(60 + "")//=>string
// convert number to string just +""
console.log(22 + "22")
// (-) subtraction
console.log("abcd" - "efgh")//=>NaN
console.log(50 - 152)
// (*) Multiplication
console.log(5 * 7)
// (/) Divistion
console.log(8/3)
console.log(9 / 0)//=>Infinity

// (%) Rest Of Division
console.log(8 % 3)//=>2
console.log(9 % 3)//=>0
console.log(11 % 9)//=>2
// example even or odd
console.log(20 % 2)
console.log(23 % 2)
///////
// Logic Operators
// Comparing: >, <, ==
// more than >, less than <, ==, ===
// return boolean result
console.log( 5 > 3)//=> boolean
console.log(10 < 3)//=>false
console.log(4 > 4)//=>false
console.log(7 == 6)//=>false
console.log(12 === 12)//=>true

console.log(4 >= 4)
console.log("smart" == "smart")
// ===: same value & same data type
// ===: matching value & type
console.log(2 === "2")//=> false
console.log(2 == "2")//=> true
console.log(false == 0)//=>true
console.log(false === 0)//=>false
// boolean operators
// and(&&), or(||)
// true = 1, false = 0, && = *, || = +
// true && true = true
// true && false = false
// false && false = false
// true || true = true
// false || false = false
console.log(true && false)
// console.log(10 && 3)
// 1010
// 0011
// 0010