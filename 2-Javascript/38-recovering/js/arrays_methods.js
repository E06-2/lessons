let array = ["zero", "one", "two", "three", "four"]
let length  =  array.length
// console.log(length)
// .push(datatype) put this datatype to the END of the array
array.push("five")
// .unshift(datatype) put this datatype to the begin of the array
array.unshift("minus one")

array.forEach((item, index)=>{
    console.log(index, item)
})

// .pop() to delete last item from array
array.pop()
array.forEach((item, index)=>{
    console.log(index, item)
})

// .shift() to delete first item from array
array.shift()
array.forEach((item, index)=>{
    console.log(index, item)
})
console.clear()
// .splice(position, count) position +-(left/right), count: none==> take only first (position)items
// ["zero", "one", "two", "three", "four"]
array.splice(-1)
array.forEach((item, index)=>{
    console.log(index, item)
})
/**
 * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
 * from 10 ===> 16
 * 
 */
 console.clear()
let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// myArray.splice(0, 9)
// console.log(myArray)
// myArray.splice(7)
// console.log(myArray)
console.log(myArray)// add [21,22,23,24,25]
let myArray1 = [21,22,23,24,25]
// myArray += myArray1
// myArray1.forEach(item=>{
//     myArray.push(item)
// })
// myArray.concat(myArray1)
let newArray = myArray.concat(myArray1, [26,27,28,29,30])
console.log(newArray)
console.clear()
// array.map
let arr = [1,2,3,4,5,6,7,8,9]
let arr1 = arr.map(i=> i<5)
console.log(arr1) 
// console.log(arr)

console.clear()
// .filter
let arr2 = arr.filter(i => i<5)
console.log(arr2)// filter
console.log(arr1)// map
/**
 * 1- display all students more than 23 years old
 * 2- generate a new array of students, with real age after 3 years later
 */
let students = [{
    name: "student1",
    age: 25
},{
    name: "student2",
    age: 21
},{
    name: "student3",
    age: 30
},{
    name: "student4",
    age: 19
},{
    name: "student5",
    age: 17
},{
    name: "student6",
    age: 34
}]

let studentsMore23 = students.filter(student=> student.age>23)
console.log(studentsMore23)
// let studentsAfter3Years = students.filter(student=>student.age+=3)
let studentsAfter3Years = students.map(student=> {return {...student, age:student.age+3, happy: true}})
console.log(studentsAfter3Years)

// Destrucuring
console.clear()
let arrr = [ 4,6,9,10]
// let [a, b, c, d] = arrr
// console.log(a, b, c, d)
// let [a, b] = arrr
// console.log(a,b)// a = 4, b = 6 
// let [a, ...b] = arrr
// console.log(a, b)// a = 4, b = [6,9,10]
// let [a, , , b] = arrr
// console.log(a, b)// a = 4, b = 10
let [,a, ...b]= arrr
console.log(a, b)
console.clear()
let x = 4
// if(x >= 5){
//     console.log("More than five")
// }else{
//     console.log("less than five")
// }
// condition?code to be executed when condition is true : code to be executed when condition is false
x>=5?console.log("More than five"): console.log("less than five")



