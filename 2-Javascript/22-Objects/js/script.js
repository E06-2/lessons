const array = [1,2, "string", true, [4,5]]// index important


// define an Object
/**
 * object keys must be same variable
 *          keys must be uniq
 * keys: attributes or property
 */
const obj = {
    key_5: [4,5],
    key_3: "string",
    key_2: 2,
    key_4: true,
    key_1: 1,
    mostafa: "myname"
}
console.log(array)
console.log(obj)
// display third element:
console.log(array[2])
console.log(obj.key_3)
// object["key"], key must be string
console.log(obj["key_3"])
/**
 * firstname    lastname    email
 * [
 *  [{firstname:"", lastName:"", email:""}]
 *  [{firstname:"", lastName:"", email:""}]
 *  [{firstname:"", lastName:"", email:""}]
 *  [{firstname:"", lastName:"", email:""}]
 * ]
 */
// console.log(typeof array[3])
// console.log(typeof obj.key_4)
// array.push(10)
// console.log(array)
// add new data to object
// obj.key_6 = 10
// console.log(obj)
// const x = 10
// x = 5
// console.log(x)
array[1] = 20
console.log(array)
obj.key_2 = 20
console.log(obj)

//////
// first-name
const obj2 = {
    'first-name':"mostafa",
    'age' : 30
}
console.log(obj2.first-name)// not works
console.log(obj2['first-name'])
console.log(obj2.age)
console.log(obj2['age'])
// [1,2, "string", true, [4,5]]
/**
 * {
    key_5: [4,5],
    key_3: "string",
    key_2: 2,
    key_4: true,
    key_1: 1,
}
 */
array.pop()
console.log(array)
// delete an item (property from object), delete objectname.key

delete obj.key_5
console.log(obj)
console.log("array length ===> ",array.length)
// Object.keys(anyObject) ==> [keys] for anyObject
console.log(Object.keys(obj))
console.log("obj lngth ===>", Object.keys(obj).length)