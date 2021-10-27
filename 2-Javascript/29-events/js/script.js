function foo(){
    alert("Welcome")
}


/**
 * to assign an event to any HTML element:
 * target the html element
 * .addEventListener() ==> member of all html objects
 * addEventListener("Event-type", handler "function")
 */

// let h3 = document.getElementsByTagName("h3")// return all html elementswith tagname h3 like an array
let h3 = document.getElementsByTagName("h3")[0]
console.log(h3)
// h3.addEventListener("click", (e)=>{
// // TO DOO when click
//     alert("Clicked")
// })
/**
 * we can define a function as a handlerm then we can use it inside .addEventListener("event-type", handlerFunction)
 * BUT WITHOUT ()
 */
h3.addEventListener("click", handleClick)

function handleClick(e){
    console.log(e)
    alert("Clicked")
}

/**
 * Task 0:
 * assign an eventListener (click) for all h3 elements inside the document, so that alert "Clicked" when we click on each one
 */
let allH3 = document.getElementsByTagName("h3")// returns HTMLCollection .forEach NOT WORK
// .forEach ONLY ONLY ONLY for real ARRAYS
// Convert HTMLCollection To Array: Array.from(HTMLCollection)
// OLD SCHOOL==> for-while loop
// for(let i = 0; i < allH3.length; i++){
//     console.log(allH3[i])
//     allH3[i].addEventListener("click", (e)=>{
//         console.log("Clicked!")
//         alert("Clicked!")
//     })
// }
console.clear()
// Array.from(allH3).forEach((el, index) => {
//         console.log(el)
//         // el === > any HTML element (h3)
//         el.addEventListener("click", handleClick)
//     });

/// using for-of (FOR HTMLCollection)
for (let el of allH3){
    // console.log(el)
    el.addEventListener("click", handleClick)
}

