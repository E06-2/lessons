// 
// for(let i = 0; i< 10; i++){
//     document.write("Hello World<br>")
// }
// refactor this to while-loop
/**
 * while(condition){// condition true= keep looping, false stop
 *  //to do
 * }
 */
// let i = 0
// while(i<10){
//     document.write("Hello World<br>")
//     i += 1// i++
// }

// display even numbers from [0, 50]
// for(let  i = 0; i<=50; i +=2){
//     document.write(i+"<br>")
// }
// let  i = 0
// while(i<=50){
//     document.write(i+"<br>")
//     i +=2
// }


// let the user enter a number (Infinity times)
// if the number is negative ex(-3) then:
//  document ==> sum of all numbers that the user enterd


// define a boolean variable will be used in while to stop it
///////////// First Method
// var isPositive = true
// var sum = 0
// // start while loop
// while(isPositive){
//     // define a variable to store the number, convert to number
//     var number = Number(prompt("please enter a number"))
//     // negative number
//     if(number < 0){
//         isPositive = false
//     }else{
//         // the number is positive
//         sum += number
//     }
// }
// document.write(sum+"<br>")
// show the result (sum) variable to store all numbers inside
/////////////////// second Method recommanded
// extra: find the count of entries (positive numbers)
// var sum = 0
// var counter = 0
// while(true){
//     // any variable you defined here, it will be reseted or (overrided)
//     var number = Number(prompt("please enter a number"))
//     if(number < 0){
//         break// kill the loop
//     }else{
//         sum += number
//         counter++
//     }
// }
// document.write(sum+"<br>")
// document.write(`you have enterd ${counter} numbers.`)
//////////////// third method
// var i = 0
// var sum = 0
// while( i < Infinity){
//     var number = Number(prompt("please enter a number"))
//     if(number < 0){
//         // break
//         i = Infinity
//     }else{
//         sum += number
//     }
// }
// document.write(sum+"<br>")
//////////////////// forth method
// var sum = 0
// for(let i = 0; i<Infinity; i++){
//     var number = Number(prompt("please enter a number"))
//     if(number < 0){
//         // i = Infinity
//         break
//     }else{
//         sum += number
//     }
// }
// document.write(sum+"<br>")


// for(i = 1; i <=6; i++){
//     document.write(`<h${i}>${i}</h${i}>`)
// }

/**
 * h1
 * h2
 * ..
 * h6
 * h1
 * h2
 * ..
 * 
 */
let i = 1
let h = 1
while(i<=22){
    if(h == 3){
        document.write(`<h${h} style="color: red;">${i}</h${h}>`)
    }else{
        document.write(`<h${h}>${i}</h${h}>`)
    }
    i++
    h++
    if(h >6 ){
        h = 1
    }
    if (i % 4 == 1){
        document.write(`<hr>`)
    }
}