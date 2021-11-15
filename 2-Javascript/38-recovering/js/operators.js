// 1- assign "="
let x;
console.log(x)
x = 4
console.log(x)
let y;
y = x // NOT x = y
let z = 10
// 2- addition (+)
let k = x + 10
console.log(k)
let fullName = "John" + " " + "Smith"
console.log(fullName)
let str = fullName + 5
console.log(str)
// 3- Subtraction (-)
console.log("John" - "Smith")// we cannot use (-) with strings
// 4- Muliplication (*)
console.log(4*5)
console.log("John" * "Smith")// we cannot use (*) with strings
// 5- Divistion (/)
console.log(8/2)
console.log("John" / "Smith")// we cannot use (/) with strings
console.log(5/0)// Infinity
// Praiority: (*/) then (+-)
console.log(4+5*2-3*4)// 4 + (5 * 2) - (3 * 4) ===> 2

// 6- Exponentiation (**) (power)
console.log(2**4)// 2 * 2 * 2 * 2 ==> 16
console.log(5**0)// ====> 1 (any_number)**0 ===>1
console.log(4**-1) // 1/4

// 7- increment (++)
let n = 4
// n++ // n = n + 1 (increas after use)
// ++n // n = n +1 (increas before use)
console.log(++n)
// console.log(n)
// 8- Decrement (--)
let m = 6
// m-- // m = m - 1 (decreas after use)
// --m // m = m - 1 (decreas before use)
console.log(--m)

// 9- increment by ( +=number)
let h = 5
h += 4// h = h + 4
console.log(h)
// 10- Decrement by (-=number)
let f = 7
f -= 4 // f = f - 4
console.log(f)
// 11- multiple by (*=number)
let t = 2
t *= 3// t = t * 3
console.log(t)
// 12- division by (/=number)
let u = 8
u /= 4// u = u / 4
console.log(u)
// 13- Modulus (%) The rest of division
let r  = 5%3// 5/3= 1, the rest is 2, "returns positive integer number" [0, n]
console.log(r)
// 14- shifting >> or <<
let b = 4 // 0100
b = b >> 1 // 0010 == 2 (divid by 2)
console.log(b)
let b1 = 5 // 0101
b1 = b1 << 1 // 1010 (multiple by 2)
console.log(b1)