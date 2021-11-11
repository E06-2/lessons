const addBtn = document.querySelector('.input-section > button');
const todoInp = document.querySelector('.input-section > input');
const todoList = document.querySelectorAll('.lists-container > div > ul')[0];
const progressList = document.querySelectorAll('.lists-container > div > ul')[1];
const doneList = document.querySelectorAll('.lists-container > div > ul')[2];

// public variables
let todoArr = [];
let progressArr = [];
let doneArr =[];


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



// task 6: 
// read local storage and try to get the value of [progress] key
// if exists, add the values to progressArr
// create a function to render elements from progressArr to progressList
const localStorageProgress = localStorage.getItem('progress');
if (localStorageProgress) {
    progressArr = JSON.parse(localStorageProgress);
    renderProgressList();
}
function renderProgressList () {
    progressList.innerHTML = '';
    progressArr.forEach(item => {
        addProgressItem(item);
    })
}

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
    // Task 2:
    // create move to progress list button and add it to the li element
    const moveToProgressListBtn = document.createElement('button');
    moveToProgressListBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-right"></i>';

    // task 4:
    // add event listener to move to progress list button and call addProgressItem
    // function with parameter text
    moveToProgressListBtn.addEventListener('click', () => {
        addProgressItem(text);
        // trigger delete button click
        deleteBtn.click();

        // task 5:
        // add item to progressArr
        progressArr.push(text);
        // save progressArr to local storage with a key 'progress'
        localStorage.setItem('progress', JSON.stringify(progressArr));
        

    })


    // create a div to hold the buttons
    const buttonsHolder = document.createElement('div');
    buttonsHolder.append(moveToProgressListBtn);
    buttonsHolder.append(deleteBtn);
    
    li.append(span);
    li.append(buttonsHolder);
    todoList.append(li);
}



// task 11: 
// read local storage and try to get the value of [done] key
// if exists, add the values to doneArr
// create a function to render elements from doneArr to doneList
const localStorageDone = localStorage.getItem('done');
if (localStorageDone) {
    doneArr = JSON.parse(localStorageDone);
    renderDoneList();
}

function renderDoneList() {
    doneList.innerHTML = '';
    doneArr.forEach(item => {
        addDoneItem(item);
    })
}


function addProgressItem (text) {
    // task 3: 
    // add the text parameter as an li element and append it inside progressList
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;

    // task7: 
    // create buttons holder div to add the buttons inside it and append it to the li element
    // create a button with arrow left icon and add it to the buttons holder element
    // create a button with arrow right icon and add it to the buttons holder element
    // create a delete button and add it to the buttons holder element
    const buttonsHolder = document.createElement('div');

    const moveToDoListBtn = document.createElement('button');
    moveToDoListBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-left"></i>';
    
    const moveToDoneListBtn = document.createElement('button');
    moveToDoneListBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-right"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

    buttonsHolder.append(moveToDoListBtn, moveToDoneListBtn, deleteBtn);

    
    li.append(span, buttonsHolder);
    progressList.append(li);

    // task8: 
    // add click event listener to moveToDoneListBtn to make item move back to todoList
    moveToDoListBtn.addEventListener('click', () => {
        todoArr.push(text);
        localStorage.setItem('todos', JSON.stringify(todoArr));
        addTodoItem(text);
        deleteBtn.click();
    })

    // task 9: 
    // create addDoneItem function to add text in li element and li 
    // should be appended in doneList
    // add click event listener to moveToDoneListBtn to make item move to doneList
    moveToDoneListBtn.addEventListener('click', () => {
        addDoneItem(text);
        deleteBtn.click();
        doneArr.push(text);
        localStorage.setItem('done', JSON.stringify(doneArr));
    })

    // task 10:
    // add click event listener to delete button to: 
    // remove item from progressList
    // remove the item from the progressArr
    // update local storage progress
    deleteBtn.addEventListener('click', () => {
        li.remove();
        progressArr = progressArr.filter(item => item !== text);
        localStorage.setItem('progress', JSON.stringify(progressArr));
    })


}

function addDoneItem(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;

    li.append(span);
    doneList.append(li);
}
// addProgressItem('test');

// learn today
// 1- localStorage.setItem('key', 'value') save to localStorage
// 2- localStorage.getItem('key') get item from localStorage
// 3- JSON.stringify(object) convert object to json string
// 4- JSON.parse(jsonString) convert json string to object
// 5- element.remove() remove element from DOM
// 6- use functions to reduce redundancy (repeat code, hard to maintain and to update)