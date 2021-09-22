// user should enter his salary (Brutto)
/**
 * salary < 500 ==> 0%
 * salary [500, 1000[ ==> 5%
 * salary [1000, 2000[ ==>15%
 * salary [2000, 4500[ ==>25%
 * salary more than 4500 ==> 45%
 * document ===> your tax is (tax)
 *                  your Netto is (netto) 
 * ex: salary = 1000
 *      your tax is 150 (150 = (1000 * 15)/100)
 *      your Netto is 850
 * hint:
 * x = 100 ===>  amount(5%)
 * amount = (x * 5) / 100 = 5
 */

var salary = prompt("please enter your salary")
var tax = 0

if(salary < 500){
    tax = 0;
}else if(salary >= 500 && salary <1000){
    tax = 5
}else if(salary >= 1000 && salary < 2000 ){
    tax = 15
}else if(salary >= 2000 && salary < 4500){
    tax = 25
}else{
    tax = 45
}
tax = (salary * tax) / 100
// the rest after discounting the tax
var netto = salary - tax
document.write(`<p>your Tax is: ${tax} &euro;</p><br>
    <p>your netto is: ${netto} &euro;</p>
`)
console.log(tax)
