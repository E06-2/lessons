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