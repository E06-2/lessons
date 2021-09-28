/**
 * Switch case general form
 * switch(variable){
 *  case 'value1':
 *      // variable = value1
 *      // something to do in this case
 *      // ...
 *      break;
 *  case 'value2':
 *      // something to do in this case
 *      breake;
 *  ...
 *  
 *  default:
 *      default case
 *      // block of code
 *
 * }
 */

var x = 12;

switch(x){
    case 10:
        console.log("true");
        break;
    case 15:
        console.log("true");
        break;
    default:
        console.log("False")
}

// user enter name: mostafa ===> hi Robotics
//                  Mattio  ===> hi Javascript
//                  Ahmad   ===> hi Css
//                  all other names ===> hello world
var name = "Mostafa"
// if(name == "mostafa"){
//     console.log("hi Robotics")
// }else if(name == "Mattio"){
//     console.log("hi Javascript")
// }else if(name == "Ahmad"){
//     console.log("hi Css")
// }else{
//     console.log("hello world")
// }
switch(name){
    case "mostafa":
        console.log("hi Robotics")
        break
    case "Mattio":
        console.log("hi Javascript")
        break
    case "Ahmad":
        console.log("hi Css")
        break
    default:
        console.log("hello world")
}

// let user enter any week day
//in document this day is first, second, ..., seventh day in the week
// var day = prompt("please enter a day")
// switch(day){
//     case "Monday":
//         document.write("this is the first day.")
//         break
//     case "Tuesday":
//         document.write("this is the second day.")
//         break
//     case "Wednesday":
//         document.write("this is the third day.")
//         break
//     case "Thursday":
//         document.write("this is the fourth day.")
//         break
//     case "Friday":
//         document.write("this is the fifth day.")
//         alert("Schones Wochenende")
//         break
//     case "Saturday":
//         document.write("this is the sixth day.")
//         break
//     case "Sunday":
//         document.write("this is the seventh day.")
//         break
//     default:
//         document.write("this is not a day.")
// }
/** 
 * let the user enter a number
 * 1 ===> document Janeuary
 * 2 ===> document February
 * ...
 * ...
 * ...
 * a number out or range [1, 12] document===> no month found 
 * refactor to switch case
*/
var number =  Number(prompt("please enter a number"))
switch(number){
    case 1:
        document.write("<h1>January</h1>")
        break
    case 2:
        document.write("<h1>February</h1>")
        break
    case 3:
        document.write("<h1>March</h1>")
        break
    case 4:
        document.write("<h1>April</h1>")
        break
    case 5:
        document.write("<h1>May</h1>")
        break
    case 6:
        document.write("<h1>June</h1>")
        break
    case 7:
        document.write("<h1>July</h1>")
        break
    case 8:
        document.write("<h1>August</h1>")
        break
    case 9:
        document.write("<h1>September</h1>")
        break
    case 10:
        document.write("<h1>October</h1>")
        break
    case 11:
        document.write("<h1>November</h1>")
        break
    case 12:
        document.write("<h1>December</h1>")
        break
    default:
        document.write("<h1>Out of range</h1>")
}
// we cannot use switch case in order to check renges(> or <)