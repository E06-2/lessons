const list = document.querySelector('#list');

const lis = list.querySelectorAll('li');

lis.forEach(element => {
    console.log(element);
    element.addEventListener('mouseup', () => {
        // alert(element.innerText)
        // remove class active from all li elements
        lis.forEach(item => {
            item.classList.remove('active')
        })
        element.classList.add('active');
    })
})