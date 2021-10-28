// const list = document.getElementById('list');
// console.log(list.children);
// // Array,from will convert HtmlCollection 
// // to Array so we can use forEach method
// Array.from(list.children).forEach((li, idx) => {
//     // add event listener for each li
//     li.addEventListener('click', () => {
//         alert(idx);
//     })
// })

// using querySelector
const list = document.querySelectorAll('#list li');
//console.log(list);
list.forEach((li, idx) => {
    li.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        alert(e.target.innerText);
    })
})

const link = document.querySelector('#link')
link.addEventListener('click', e => {
    // preventDefault is method to prevent default behavior of the element
    e.preventDefault();
    alert('clicked');
})

const div1 = document.querySelector('#div1');
div1.addEventListener('click', e => {
    alert('I am Div1')
})

const div2 = document.querySelector('#div2');
div2.addEventListener('click', e => {
    // stop triggering the same event for the PARENT element
    e.stopPropagation();
    alert('I am Div2')
})