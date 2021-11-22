/**
 * Mostafa is a student in DCI, has followning grades:
 *      HTML: 56%
 *      javascript: 65%
 *      CSS: 40%    
 *      React: 70%
 *      nodejs: 30%
 *      bootstrap: 80%
 * 1- create a new student (your name) with random grades(you will chose), SELECT a suitable data structure to store
 * 2- Add to your data, average
 */

let fff={
    t:4, p:5
}
/**
 * add average, success procedures for each object I will create in This file
 *      use (DATA_STRUCTURE).prototype.anything= ...
 * to remove prototype:
 * // delete (DATA_STRUCTURE).prototype.anything
 */
Object.prototype.average = function(){
        let sum = 0
        let counter = 0
        for(let k in this){
            // execlude average from looping
            // if(k !== "average" && k !== "success"){
            if(typeof this[k] === "number"){
                counter++;
                sum += this[k]
            }
            // console.log(k)
        }
        return sum/counter
}
// Object.prototype.mostafa = "I've just create this prototype :)"

const john = {
    HTML: 50,
    javascript: 40,
    css: 30,
    react:30,
    nodejs: 20,
    bootstrap:14,
    // average: function(){
    //     let sum = 0
    //     let counter = 0
    //     for(let k in this){
    //         // execlude average from looping
    //         // if(k !== "average" && k !== "success"){
    //         if(typeof this[k] === "number"){
    //             counter++;
    //             sum += this[k]
    //         }
    //         // console.log(k)
    //     }
    //     return sum/counter
    // },
    // success: function(){
    //     if(this.average() >=50)
    //         return true
    //     return false
    // }
}
/**
 * add procedure to average, so that all attributes(keys) need to be counted and return some value
 * Hint:
 *  if attribute is a function, call it like: obj.attr()
 */
john.sass = 43
console.log(john.average())
// john.java = 90
// console.log(john.average())
// john.math = 100
console.log(john.average())

/**
 * add another attribute (success) so that if average > 50 true, false
 */
// console.log(john.success())
john['c++'] = 100
// john.c++ = 100
john['c'] = 100// john.c = 
john['assembly'] = 100
console.log(john.average())
console.log(john)
console.log(john['c++'])
///////////////////////////////////////////
/**
 * define another guy with grades
 */
const smith = {
    HTML: 55,
    css:40,
    // average: function(){
    //     let sum = 0
    //     let counter = 0
    //     for(let k in this){
    //         // execlude average from looping
    //         // if(k !== "average" && k !== "success"){
    //         if(typeof this[k] === "number"){
    //             counter++;
    //             sum += this[k]
    //         }
    //         // console.log(k)
    //     }
    //     return sum/counter
    // },
    // success: function(){
    //     if(this.average() >=50)
    //         return true
    //     return false
    // }
}
console.clear()
console.log(john.average())
console.log(smith.average())
let foo ={
    t:4,
    g:55
}
console.clear()
console.log(foo.average())
// delete Object.prototype.average
console.log(john.average())
