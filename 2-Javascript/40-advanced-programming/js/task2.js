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

const john = {
    HTML: 50,
    javascript: 40,
    css: 30,
    react:70,
    nodejs: 90,
    bootstrap:64,
    average: function(){
        let sum = 0
        let counter = 0
        for(let k in this){
            // execlude average from looping
            if(k !== "average"){
                counter++;
                sum += this[k]
            }
            // console.log(k)
        }
        return sum/counter
    }
}
/**
 * add procedure to average, so that all attributes(keys) need to be counted and return some value
 * Hint:
 *  if attribute is a function, call it like: obj.attr()
 */
john.sass = 43
console.log(john.average())
john.java = 90
console.log(john.average())
john.math = 100
console.log(john.average())