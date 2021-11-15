//Primitive Data Type
// 1- Number
// var x = 5
// var c = 0.6
// var v = 5/9
// var z = 0xF// 0-9, A- F HEX
// var b = 0b10110 
// var n = Infinity
// var t = b/0
// var m = NaN

console.log(typeof m)

var str = "string"
var g = str * 10
console.log(g)
const info = {
    customer_id: "100.0005"
}
var nextCustomer;
// info.customer_id = info.customer_id +1
// var customerId = parseFloat(info.customer_id)
// nextCustomer = info.customer_id + 1
nextCustomer =  Number(info.customer_id) + 1
console.log(typeof nextCustomer, nextCustomer)
////////////////////////////
console.clear()
// 2- Boolean
// var b = true
// var r = false
// console.log(typeof b)
// var h = (10 >= 0)// define boolean with operator
// console.log(typeof h, h)
// var o = Boolean(-500)
// console.log(typeof o, o)
////////////////////////////////
// 3- null
let v = null// {1,2,3}, O{}
console.log(typeof v, v)
console.log(v === undefined)// false
console.log(v == undefined)// true
console.log(!v)
console.log(0 === null)// false
//////////////////////////////////////////
// 4- undefined
var x;
console.log(typeof x)
let obj = {
    age:10,
    name: "name"
}
console.log(obj.attr)
//////////////////////////////////////////
console.clear()
// 5- Strings
var str = 'this is a string'
console.log(typeof str, str)
str = 'this is my string wit doble qutation mark, my name "Mostafa"'
console.log(typeof str, str)
str = `this is normal string, my name is 'Mostafa'`
console.log(typeof str, str)
var s = "2000"
console.log(typeof s, s)
var k = str + s
console.log(k)
let w = 30
 s = s + NaN
 console.log(s)
 let ba = ('b' + 'a' +  + 'a'  + 'a').toLowerCase()
 console.log(ba)
 /////////////////////////////////////////
// Objects
// 1- Arrays
console.clear()
const array = [1, 5, 6, null, undefined, false, [5,2]]
console.log(typeof array, array)
// to check if array: Array.isArray(variable/value you want to check)==> true/false
console.log(Array.isArray("hi"))
// indexing for arrays refare to the elements inside the array
//array[n] n refare to item in array, positive integer number: nE[0, max_length[
console.log(array[7/3])// undefined
// to get the count of the elements in array use .length
console.log(array.length)
////////////////////////////////////////////////
console.clear()
// 2- Objects
const object = {
    key_1: 5,
    key_2: "str", 
    key_3: false,
    key_4: array,
    key_5: {n:1, b: true},
    "5star": 5
}
console.log(typeof object,object)
console.log(object.key_2)
console.log(object['5star'])
console.log(object['key_3'])