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
let { lastName } = obj
console.log(lastName)
let { a, c } = { a: "s", b: 10, c: 200 }
console.log(a, c)
// let x, y
// x = 10
// y = 0
// console.log(x)
// console.log(y)

// define three variables from obj, (firstname, age, address)
// let {address, firstName, age} = obj
let { age: age, address: address, firstName: firstName } = obj
console.log(firstName, age, address)
// let address = {
//     city: 10, street: true
// }
// define city, street fom obj
// let {city, street} = obj.address
//let {address: {city, street}} = obj
let { "city": myCity, "street": myStreet } = obj.address
console.log(myCity, myStreet)


const obj2 = {
    score: 50,
    "my-avarage": 100,
    result: true
}

let { score: myScore, result: myResult } = obj2
// let {key: variable} = object
console.log(myScore, myResult)
// let {my-avarage} = obj2 ==> syntax error
let { "my-avarage": avar } = obj2
console.log(avar)


// default values
/**
 * let {key: variable = default} = obj ==> if key exist ==> variable = obj[key], if not==> variable = default
 */
// let {score = 0, result = false, order = 0, s} = obj2
let { score: sc = 0, result: res = false, "my-avarage": ma = 25, ff: cc = 10, rr: g } = obj2
console.log(sc, res, ma, cc, g)
// console.log(score, result, order, s)

// function foo(x=0, y=0){
//     return x + y
// }
// let res = foo()
// console.log(res)


const person = {
    name: "Joo",
    lastName: "Smith",
    skills: {
        javasrcipt: 50,
        html: 70,
        style: {
            css: 90,
            sass: 60
        }
    }
}
// get css, sass as  variables using destructuring
console.clear()
let { css: css, sass: sass } = person.skills.style
console.log(css, sass)
// get name, html as variables using destructuring
let { name, skills: { html } } = person
console.log(name, html)
let { name: myName, skills: { html: myHtml } } = person
console.log(myName, myHtml)
// get last name, sass as variables using destructuring
let { lastName: lName, skills: { style: { sass: mySass } } } = person
console.clear()
console.log(lName, mySass)
// get html as frontEnd, css as design from person
// let {skills:{html: frontEnd, style:{css: design}}} = person
let { skills: { html: frontEnd }, skills: { style: { css: design } } } = person
console.clear()
console.log(frontEnd, design)
/**
 * run js code in vscode:
 * the script should NOT contains (document, window, alert, prumpt)
 * to install nodemon (only once): sudo npm i -g nodemon
 * nodemon nameOfJsFile.js
 */
const school = {
    classes: [
        { className: "FBW1" },
        { className: "FBW2" },
        { className: "FBW3" },
        { className: "FBW4" },
    ],
    teachers:[
        "Ahmad",
        "Mostafa"
    ]
}
console.clear()// clear all previous logs
console.log(school)
// get FBW2 as f2 from school using destructuring

// let {className: f2} = school.classes[1]
// let {classes: [{}, {className: f2}]} = school
// find last item using array destructuring
let {classes:[,,,{className: f2}], teachers:[,t]} = school
console.log(f2, t)

///////////// REST
console.clear()
let array = [4,6,9,4]
let [,,...a1] = array

console.log(a1)

let newObject = {
    a2:10,
    b:20,
    c:30,
    d:50,
    e: 100
}
// generate an object same original but with sum attr
// let {a2, b, ...rest } = newObject // rest = {c=>end}
console.clear()
// console.log(a2, b, rest)
// let {a2: o, ...d} = newObject// k = 10, d= {b==> end}
// console.log( d)
// let obj4 = {t: "string", ...newObject}// add before
let obj4 = {...newObject, t:true}// add afte
console.log(obj4)