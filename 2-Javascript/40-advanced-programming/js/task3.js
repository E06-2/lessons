/**
 * Add a new ptototype for Object, named: info
 *      this should analysis the object and return an object with following info:
 *      {
 *      numbers: count of numbers in this object,
 *      strings: count of strings in this object,
 *      booleans: count of booleans in this object,
 *      arrays: count of arrays in this object,
 *      objects: count of objects in this object,
 *      }
 * test it when finish
 */
// String.prototype.hummer = function(){console.log("This is 'this': "+this)}
// // "mostafa".split("t").forEach()
// "sss".hummer()

/**
 * This Function Will returns an Object of All datatypes counts
 * @returns {Object}
 */
Object.prototype.info = function(){
    let stringCounter = 0
    let numberCounter = 0
    let booleanCounter = 0
    let objectCounter = 0
    let arrayCounter = 0
    for(let k in this){
        if(k !=="info"){
            if(typeof this[k] == "string"){
                stringCounter++
            }
            else if(typeof this[k] =="number"){
                numberCounter++
            }
            else if(typeof this[k] == "boolean"){
                booleanCounter++
            }else if(Array.isArray(this[k])){
                arrayCounter++
            }else if(typeof this[k] == "object"){
                objectCounter++
            }
            else{
                // nothing
            }
        }
    } 
    return {
        strings: stringCounter,
        numbers: numberCounter,
        arrys: arrayCounter,
        booleans: booleanCounter,
        objects: objectCounter
    }
}
const foo ={
    t:5,
    g: "str",
    b: false,
    h:[4,5],
    o:{
        r:5,
        e:1
    },
    f:{
        e:2
    }
}
console.log(foo.info())
//- loop object:
// for in
for(let k in foo){
    console.log(k, foo[k])
}
Object.entries(foo).forEach(v=>{
    console.log(v)
})
Object.values(foo).forEach(v=>{
    console.log(v)
})
Object.keys(foo).forEach(k=>{
    console.log(k)
})
