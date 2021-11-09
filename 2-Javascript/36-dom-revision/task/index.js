// Assign all elements
const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all')

// Change border of ID demo to purple
demoId.style.border = '1px solid purple';

// Change border of class demo to orange
// console.log(demoClass);
for (let i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = "1px solid orange";
}

// Array.from(demoClass).forEach(el => {
//     el.style.border = "1px solid orange";
// })


// const arrayish = {
//     0: 'value',
//     1: 'vaues1', 
//     length: 2
// }
// Change border of tag demo to blue
for (let i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = "1px solid blue"
}

// Change border of ID demo-query to red
demoQuery.style.border = "1px solid red"

// Change border of class query-all to green
demoQueryAll.forEach(el => el.style.border = "1px solid green")
