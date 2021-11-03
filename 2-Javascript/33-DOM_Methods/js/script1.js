// document.querySelector ===> (HTML) the first matching element
// <HTML>.parentElement  ===> one HTML Element
// <HTML>.children ===> HTMLCollection

/* HTMLCollection:
    using indexing ex HTML.children[index]
    using old school loop
    using for-of
    using Array.from(HTML.children).forEach(el)....
*/

// let board = document.querySelectorAll(".board")
// console.log(board)
let fieldA = document.querySelector(".fieldA")
console.log(fieldA)
let fieldB = fieldA.parentElement.children[1]
console.log(fieldB)

// fieldA.innerHTML = "some text"
/**
 * <HTML>.innerHTML ===> return the content as a string
 * <HTML>.innerHTML = "String"
 */
// console.log(fieldA.innerHTML)
fieldA.innerHTML = "<h3>Hi</h3>"
console.log(fieldA.innerHTML)
// fieldB.innerHTML = "DATA"
// fieldB.innerHTML = fieldB.innerHTML + " Structure"
// fieldB.innerHTML += " <b id='n' style='color: red'>Structure</b>"
// fieldA.parentElement.innerHTML = "Hello"
// document.body.innerHTML = "HAHAHA"

/**
 * <HTML>.innerText ===> the content as a string
 * <HTML>.innerText = "String"
 * NO HTML charactures (NO rendering)
 */
// fieldB.innerText = "<b>Structure</b>"
// document.body.innerText = "HAHAHA"
// let n = document.getElementById("n")
// console.log(n)

/**
 * change "ipsum" to "CHANGE"
 * 1- get the text from element
 * 2- do your changes
 * 3- returnt back to the element
 */
let text = fieldB.innerText
// console.log(text)
let newText = text.replace("ipsum", "CHANGE")
console.log(newText)
fieldB.innerText = newText
fieldB.innerText = ""