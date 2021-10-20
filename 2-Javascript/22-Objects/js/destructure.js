const obj = {
    firstName: "Mostafa",
    lastName: "Othman",
    age: 20,
    address: {
        city: "Berlin",
        street: "Vectory Strasse"
    }
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
let {address, lastName } = obj
console.log(lastName)
console.log(address)
let {a, c} = {a:"s", b: 10, c: 200}
console.log(a, c)
// let x, y
// x = 10
// y = 0
// console.log(x)
// console.log(y)

// define three variables from obj, (firstname, age, address)