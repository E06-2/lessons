// const myDiv = document.getElementById("myDiv")
// const myDiv = document.querySelector(".bla")// one element (first Element)
// const myDiv = document.querySelectorAll(".bla")[0]// multiple (Collection)
const myDiv = document.getElementsByTagName("div")[0]
// myDiv: it's NOT a COPY, it's the element it self
console.log(myDiv)
myDiv.style.border = "1px solid"

// document.title = "My First"
console.log(document.URL)

// DOM Methods are any function member of document
// console.log(document)

// let myDiv_parent = myDiv.parentElement

// console.log(myDiv_parent)

// console.log(myDiv_parent.parentElement)
console.log(myDiv.parentElement.parentElement)
// html node has NO PARENT
// ANY_HTML_ENEMENT.parentElement ===> only one element

// let str = "Today is Holiday"
// let t =str.replace("T", "t").replace("H", "h").replace("y", "Y")
// console.log(t)

let ulCollection = myDiv.children// [ul] HTMLCollection
// ul = allKidsInMyDiv[0] HTML Element
// ulCollection.addEventListener("click", e=>{
//     console.log(e)
// })
// ANY_HTML_ENEMENT.children ===> HTMLCollection (Multiple)

// IMPORTANT: we cannot loop throgh HTML ELEMENTS, but we can loop throgh any HTMLELEMENT.children

console.log(ulCollection)
// for (let kid of children){
//     console.log(kid)
// }
// Array.from(children).forEach((el, index)=>{
//     console.log(index, el)
// })
// for(let i = 0; i< children.length; i++){
//     console.log(i, children[i])
// }
console.log(ulCollection[0].parentElement)

// task0
// using (start point is: myDiv): log all <li> inside myDiv
console.clear()
console.log(ulCollection[0].children)
for(let li of ulCollection[0].children){
    console.log(li)
}
console.clear()
// Task1
// color each odd <li> red
// Array.from(ulCollection[1].children).forEach((li, index)=>{
//     // console.log(li)
//     if(index % 2 === 0){
//         li.style.color = "red"
//     }
// })
// get all children inside myDiv
Array.from(myDiv.children).forEach(ul=>{
    // get all <li> inside each <ul>
    Array.from(ul.children).forEach((li, index)=>{
        // only even ... do so
        if(index % 2 === 0){
            li.style.color = "red"
        }
    })
})