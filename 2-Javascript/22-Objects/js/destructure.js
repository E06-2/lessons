const obj = {
    firstName: "Mostafa",
    lastName: "Othman",
    age: 20,
    address: {
        city: "Berlin",
        street: "Vectory Strasse"
    },
    skills: ["Javascript", "Python", "Math"]
}
// Object.keys(obj)==> [all keys inside obj]
console.log(Object.keys(obj))
// Object.values(obj)==> [all values inside obj]
console.log(Object.values(obj))
// Object.entries(obj)==> arrays of [key_1, value_1]
console.log(Object.entries(obj)[2])
// console.log(obj)

// take last name from obj
// let lname = obj.lastName
// let address, lastName;
// ({address, lastName } = obj)
let {lastName } = obj
console.log(lastName)
let {a, c} = {a:"s", b: 10, c: 200}
console.log(a, c)
// let x, y
// x = 10
// y = 0
// console.log(x)
// console.log(y)

// define three variables from obj, (firstname, age, address)
// let {address, firstName, age} = obj
let {age: age, address: address, firstName: firstName} = obj
console.log(firstName, age, address)
// let address = {
//     city: 10, street: true
// }
// define city, street fom obj
// let {city, street} = obj.address
//let {address: {city, street}} = obj
let {"city": myCity, "street": myStreet} = obj.address
console.log(myCity, myStreet)


const obj2 = {
    score: 50,
    "my-avarage": 100,
    result: true
}

let {score: myScore, result: myResult} = obj2
// let {key: variable} = object
console.log(myScore, myResult)
// let {my-avarage} = obj2 ==> syntax error
let {"my-avarage": avar} = obj2
console.log(avar)