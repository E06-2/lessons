// querySelector will return ONLY the FIRST found element or null if no element was found
// querySelectorAll will return ALL  elements as an Array or null if no element was found
const title = document.querySelector('.title');
console.log(title);
// task1: make title align centered
// text-align
title.style.textAlign = 'center';
// title.style.color = 'blue';
// title.style = 'text-align: center; color: blue;';

// task2:
const main = document.querySelector('.main');
main.style.display = 'flex';
main.style.justifyContent = 'space-around';

// task3: 
const categories = document.querySelectorAll('.food-category');
const category1 = categories[0];
const category2 = categories[1];
const category3 = categories[2];
category1.style.backgroundColor = '#e5c4af';
category2.style.backgroundColor = '#e8ccf1';
category3.style.backgroundColor = '#eeafaf';

categories.forEach(element => {
    element.style.width = '25%';
    element.style.padding = '20px';
    const label = element.querySelector('label');
    label.style.fontSize = '25px';
    label.style.textDecoration = 'underline';
    label.style.display = 'block';
    label.style.marginBottom = '20px';
})

// complete the task to match the photo menu-desktop.png
