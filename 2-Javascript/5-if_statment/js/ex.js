// Blood Pressure stages
// 1- less than 120 ===> Normal
// 2- [120, 129] ===> Elevated
// 3- [130, 139] ===> High pressure (stage 1)
// 4- [140 or more] ===> High pressure (stage 2)
// 5- more than 180 ===> Emergency 

var bloodPressure = prompt("Please enter your blood pressure:");
if(bloodPressure < 120){
    alert("Your blood pressure is normal")
}else if(bloodPressure >= 120 && bloodPressure <= 129){
    alert("your blood pressure is Elevated")
}else if(bloodPressure >= 130 && bloodPressure <= 139){
    alert("your blood pressure is High stage 1")
}else if(bloodPressure >= 140 && bloodPressure <= 180){
    alert("your blood pressure is High stage 2")
}else{
    alert("Emergency Case")
}
// a > b
// a - b = r
// r nigative ==> a < b
//r positive ==> a > b
// r = 0 a = b
// * / 2 +-
// console.log(4 + 2 * 10)//==> 24
// console.log((4 + 2 ) * 10)// ==> 60
// console.log(4 / 2 * 5//)==>10

/*
    results: [0 50[ low
             [50, 75] good
             ]75 100] super
*/
// var result  = prompt("please enter the result")
// if(result == "low"){
//     console.log("the range should be 0 from to 49")
// }else if(result == "good"){
//     console.log("the range should be 50 from to 74")
// }else if(result == "super"){
//     console.log("the range should be 75 from to 100")
// }else{
//     console.log("pleas type low, good or super")
// }
