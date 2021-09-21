// General form for if statment
// if(condition==>"logic operator or boolean variable"){
    // code to be executed if condtitin is true
// }
var bo = true
if(bo == true){
    console.log("This is the part of code executed because bo is true")
}
var x = 0
if(x > 2){
    console.log(`${x} is grater then 2`)
}
else{
    // this part will be executed when the condition is false
    console.log(`${x} is less then 2`)
}
// y ]20,....,50]
var y = 50.001
// if(20<y<50)
if(y > 20 && y <= 50){
    console.log("OK")
}else{
    console.log("NO")
}
var z =-100// [-10, 100[
var zIsInRange = (z >= -10 && z<100)
console.log(zIsInRange)
// we can put just boolean variable inside condition
if(zIsInRange){
    console.log("z is in range")
}else{
    console.log("z is out of range")
}
/**
 * Sensor 0 until 1024
 * good signal [10, 255[
 * good signal ]512, 954]
 * all other values are bad signal.
 * good signal: sig ((more or equals)10 and (less than) 255) or (sig (more than)512 and (less or equal)954)  
 */
var signal = 1000
var goodSignal = (signal >=10 && signal < 255) || (signal > 512 && signal<=954)
if(goodSignal){
    console.log("we have got a good signal")
}else{
    console.log("we have got a bad signal")
}
// enter data to javascript
// prompt("message")
// var input = prompt("Please Enter your Name")
// // always prompt returns a string
// console.log("type of input is:", typeof input)
// console.log(input)

// school [6, 18]  [28, 50]
var age = prompt("Please Enter your age:")
console.log(age)
// allow to enter: (the age more or equal  6 and less than or equal 18) or (the age more than equal 28 and less equal than 50)
if((age >= 6 && age <= 18)||(age >= 28 && age <= 50)){
// allwo to enter
console.log("You are allowed to enter")
}else{
// all other cases blocked
console.log("You are not allowed ton enter")
}

