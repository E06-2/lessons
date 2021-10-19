/**
 * define two objects (person1, person2), contains this data:
 *  First Name,
 *  Last Name,
 *  Email,
 *  age,
 *  single
 * 
 * put any value you want
 * log two objects in console
 */
const person1 = {
    firstName : "Karim",
    lastName : "guest",
    emai: "kkk@kkk.kkk",
    age: 20,
    single: true,
    hoppies: "",
    address: undefined
}
const person2 = {
    'firstName' : "Mostafa",
    'lastName' : "Othman",
    'emai': "mmm@mmm.mmm",
    'age': 30,
    'single': false,
    skills: null,
    score: NaN
}
console.log(person1)
console.log(person2)
/**
 * display this data on browser (page)
 * document.write()
 */
// Object.keys(person2).forEach(key=>{
//     document.write(key + ":" + person2[key]+"<br>")
// })
/**
 * for(let k in obj) loop for keys (only objects)
 * for (let item of array) loop for all items in (only arrays)
 */
for (let key in person1){
    document.write(key + ":" + person1[key]+"<br>")
    // console.log(key)
}
// let array = [1,5,6,3,2,0]
// for (let i of array){
//     console.log(i)
// }
////////////////////////////////
/**
 * define 3 variables:
 * 1- firstName = (value from person1)
 * 2- lastName  = (value from person1)
 * 3- age       = (value from person1)
 * log this variables
 */
// let firstName = person1['firstName']
// let lastName = person1.lastName
// let age = person1.age
// Destrucuring from object
let {firstName, lastName, age} = person2
console.log(firstName, lastName, age)
////////////////////////////////
// ""==> empty & "      "==>empty
/**
 * create a function cleanObject(obj:object)
 * will remove all (undefiened, null, empty, NaN) properties from this object
 * pseudocode:
 * procedure cleanObject:
 *      loop all keys in object
 *          check if the value for this key is(undefiened or null or empty or NaN):
 *              delete this key from object
 * fi
 */
const cleanObject = obj=>{
    for(let key in obj){
        let value = obj[key]
        // console.log("the key is:", key)
        // console.log(`The value for ${key} is: ${value}`)
        if(typeof value === "string"){
            if(value.trim() === ""){
                delete obj[key]
            }
        }
        if(typeof value === "undefined" || value === null ||   Number.isNaN(value)){
            delete obj[key]
        }
    }
}
cleanObject(person1)
console.log(person1)
///////////////////////////////
/**
 * nested Object
 * display all Value 0 to 5 orderd from crazyObject
 */

const crazyObject = {
    a:1,
    b:10,
    c:{
        a:25,
        g:30,
        h:{
            r: [
                {
                    v:"Value 0",
                    d:{
                        f:"Value 1"
                    }
                },"Value 2"
            ],
            z:"Value 3"
        },
        k:{
            f:"Value 4"
        }
    },
    r: 5,
    x:[
        true,
        {
            t:"Value 5"
        }
    ]
}
console.log(crazyObject.c.h.r[0].v)
console.log(crazyObject.c.h.r[0].d.f)
console.log(crazyObject.c.h.r[1])
console.log(crazyObject.c.h.z)
console.log(crazyObject.c.k.f)
console.log(crazyObject.x[1].t)
let myObj = {
    a:1,
    b: "Value 0",
    c:{
        v:"Value 1"
    },
    d:[
        {
            x:"Value 2"
        }
    ]
}