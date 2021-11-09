const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('div')

const queryId = document.querySelector('#demo')
const queryClass = document.querySelectorAll('.demo')

const buttons = document.getElementById('buttons');

//const buttonClass = document.querySelectorAll('.buttonClass')


// difference bwt Nodelist and HTMLCollection ???
//console.log(queryClass);
//queryClass.forEach(el => console.log(el))



// Array.from() -> converts array-like object into Array

// for (let i = 0; i < demoClass.length; i++) {
//     console.log(demoClass[i]);
// }

// Interacting
// demoId.addEventListener('click', (e) => {

//     console.log(typeof e);
// });

// preventing defalt
const btn = document.querySelector('#btn')

//console.log(btn);

btn.addEventListener("click", (e) => {
    e.preventDefault()
})

// Event Delegation
buttons.addEventListener('click', (event) => {


    // console.log(event.target.className);

    if (event.target.className === "buttonClass") {
        console.log("click");
    }
})


// buttonClass[0].addEventListener('click', (e) => {
//     console.log("I was clicked");
// })