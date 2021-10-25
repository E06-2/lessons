const nav = document.getElementById('navbar');
console.log(nav);
//nav.style.backgroundColor = 'rgb(255, 0, 0)';

// change the background color to red smoothly

// 1- declare a variable to save the color value 
// 2- use setInterval to increase and change the nav color
// 3- change should stop 255 using clearInterval

// let red = 0;
// const pId = setInterval(() => {
//     nav.style.backgroundColor = `rgb(${red}, 0, 0)`;
//     red++;
//     console.log(red);
//     if (red > 255) {
//         clearInterval(pId)
//     }
// }, 5);

// run the previous task but when the user click some button

function start() {
    let red = 0;
const pId = setInterval(() => {
    nav.style.backgroundColor = `rgb(${red}, 0, 0)`;
    red++;
    console.log(red);
    if (red > 255) {
        clearInterval(pId)
    }
}, 5);
}

function sum() {
    const input1 = document.getElementById('inp1');
    const input2 = document.getElementById('inp2');
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = Number(input1.value) + Number(input2.value);
}

const lis = document.getElementsByTagName('li');
console.log(lis);
lis[2].style.backgroundColor = 'green';


