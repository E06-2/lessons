// debugger
var firstName = "Mostafa"
console.log(firstName)
var lastName = "Othman"
console.log(lastName)
var age = 30
console.log(age)
var married = true
var single = !married
console.log(married)
var phoneNumber = "0123445566"
console.log(phoneNumber)
var country = "Syria"
console.log(country)
var mother_language = "Arabic"
console.log(mother_language)
// var const = 0;(Syntax error)==>Debugger off
// var x = 10 / y;(Runtime Error)
// var skills = {keyword1: "javascript", keyword2: "python"}
var skills =["javascript", "python", "HTML"]
console.log(skills)
// var summary = "I am " + firstName + " " + lastName + " from " + country + ", and I am " + age + " years old, my Mother Language is: " + mother_language
var summary = `I am ${firstName} ${lastName} from ${country}, and I am ${age} years old, my Mothe Language is: ${mother_language}.`
console.log(summary)
document.write(`
    <style>
        h1{
            background: blue;
        }
    </style>
    <h1>Hello</h1>
    <p style="color:red">Created by Javascript</p>
    <h2>${firstName}</h2>
    <p style="border: 1px solid">${summary}</p>

`)
/*
in all strings `string area ${code}`
var firstName = "Mostafa"
//var st = "Hello " + firstName
var st = `Hello ${firstName}`
var st1 = 'Hello ${firstName}'
console.log(st)==> Hello Mostafa
console.log(st1)==> Hello ${firstName}
*/ 