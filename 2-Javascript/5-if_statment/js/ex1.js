/** 
 * let the user enter a number
 * 1 ===> document Janeuary
 * 2 ===> document February
 * ...
 * ...
 * ...
 * a number out or range [1, 12] document===> no month found 
*/
debugger
var number =  prompt("please enter a number")
if(number == 1){
    document.write("<h1>January</h1>")
}else if(number == 2){
    document.write("<h1>February</h1>")
}else if(number == 3){
    document.write("<h1>March</h1>")
}else if(number == 4){
    document.write("<h1>April</h1>")
}else if(number == 5){
    document.write("<h1>May</h1>")
}else if(number == 6){
    document.write("<h1>June</h1>")
}else if(number == 7){
    document.write("<h1>July</h1>")
}else if(number == 8){
    document.write("<h1>August</h1>")
}else if(number == 9){
    document.write("<h1>September</h1>")
}else if(number == 10){
    document.write("<h1>October</h1>")
}else if(number == 11){
    document.write("<h1>November</h1>")
}else if(number == 12){
    document.write("<h1>December</h1>")
}else{
    document.write("<h1>Out of range</h1>")
}