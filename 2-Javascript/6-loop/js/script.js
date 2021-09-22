// in console: print(hello world)
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
//ituration

console.log("loop start")
for(var i = 0; i <= 10; i++){
    console.log(i)
}
console.log("loop is done")
// debugger
for(var j = 2; j < 20; j++){
    console.log(j)
}
// general form for for_loop
/**
 * for(variable_from; logic operator; increment "where should stop max value for variable"){
 * block of code line (scope)
 * }
 */
// [-5, 5[
// for(var i = -5; i<5; i++){
//     // repeat this block several times
//     document.write(`<h6>${i}</h6>`)
// }
// all [-2, 0[ U ]0, 5]
// debugger
// for(i = -2; i<=5; i++){
//     if(i !=0){
//         document.write(`<h6>${i}</h6>`)
//         console.log(i)
//     }
// }
// 

// display all even numbers [0, 50]
// even numbers: {0, 2, 4, 6, ..., 2n}
// for(i = 0; i <=50; i++){
//     if(i % 2 == 0){
//         document.write(`<h6>${i}</h6>`)
//     }
// }
// another way control increment
// for(i = 0; i <=50; i +=2){
//     document.write(`<h6>${i}</h6>`)
// }

// break in for loop kills the loop, should be also inside a condition
// for(i = 0 ; i <= 10; i++){  
//     document.write(`<h6>${i}</h6>`)
// if(i >= 6){
//         break
//     }
// }
// find the first number from 0, dividble by 171

for (i = 2; i <= 171; i ++){
    if(171 % i == 0){
        document.write(`<h6>${i}</h6>`)
        break
    }
    // break
}