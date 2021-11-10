const addBtn = document.querySelector('.input-section > button');
const todoInp = document.querySelector('.input-section > input');
const todoList = document.querySelectorAll('.lists-container > div > ul')[0];
const progressList = document.querySelectorAll('.lists-container > div > ul')[1];
const doneList = document.querySelectorAll('.lists-container > div > ul')[2];

//access local storage
// const localStorage = window.localStorage;
// ex. save value to local storage
// localStorage.setItem('key', 'value');
// localStorage.setItem('item1', 'some text');
// localStorage.setItem('item2', 'some text2');
// localStorage.setItem('item3', 'some text3');
// retrieve value from local storage
// const val1 = localStorage.getItem('item1');
// console.log(val1);


// select todoList using children
//const todoList = document.querySelector('.lists-container').children[0].children[1]

//task1:
// add event listener to add button to add todo item to todo list
// create "li" element and add it to the todoList with textContent value from todoInp
const localStorage = window.localStorage;
let todoArr = [];
// Fill the todoArr with values from localStorage IF EXISTS
const localStorageTodos = localStorage.getItem('todos')
if (localStorageTodos) {
    // JSON.parse convert a json string to object
    todoArr = JSON.parse(localStorageTodos);
    renderTodoList();
}

// add items from todoArr to DOM inside todoList element
function renderTodoList() {
    todoList.innerHTml = '';
    todoArr.forEach(item => {
        addTodoItem(item);
    })
}

addBtn.addEventListener('click', () => {
    const todoText = todoInp.value;
    if (todoText.trim()) {
        addTodoItem(todoText);
        todoInp.value = '';

        //save todo item to local storage
        todoArr.push(todoText);
        // JSON.stringify() converts objects to string
        localStorage.setItem('todos', JSON.stringify(todoArr));
    }
})
todoInp.addEventListener('keyup', (e) => {
    // delete greater than sign after the user enter it in the input
    // if(e.keyCode === 188) {
    //     //console.log(todoInp.value.slice(0, todoInp.value.length -3));
    //     todoInp.value = todoInp.value.substring(0, todoInp.value.length -1);
    // }

    // check if enter key is pressed
    if (e.keyCode === 13) {
        // trigger click event on add button
        addBtn.click();
    }
})

// add Item to todo list
function addTodoItem(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const  deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    span.textContent = text;

    // add event listener to delete button
    deleteBtn.addEventListener('click', () => {
        // remove item from todoList
        li.remove();
        // remove item from todoArr
        todoArr = todoArr.filter(item => item !== text);
        // update todoArr to local storage
        localStorage.setItem('todos', JSON.stringify(todoArr));
    })

    li.append(span);
    li.append(deleteBtn);
    todoList.append(li);
}


// learn today
// 1- localStorage.setItem('key', 'value') save to localStorage
// 2- localStorage.getItem('key') get item from localStorage
// 3- JSON.stringify(object) convert object to json string
// 4- JSON.parse(jsonString) convert json string to object
// 5- element.remove() remove element from DOM
// 6- use functions to reduce redundancy (repeat code, hard to maintain and to update)