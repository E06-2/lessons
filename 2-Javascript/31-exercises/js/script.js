const container = document.querySelector('#container');

// create click event listener for container element
container.addEventListener('click', e => {
    //console.log(e.clientX, e.clientY);

    // create a new div element
    const ball = document.createElement('div');
    // add class [ball] to the new element
    ball.classList.add('ball');
    // set left style for tha new div
    ball.style.left = (e.clientX - 15) + 'px';
    // set the top style for the new div
    ball.style.top = (e.clientY - 15) + 'px';
    // add the ball div to container
    container.append(ball);
    move(ball);
})


function move (ball) {
    console.log(container.offsetHeight);
    // offsetTop will get the top position of the ball
    let startTop = ball.offsetTop;

    const pid = setInterval(() => {
        // offsetHeight will return the height of the div
        const containerHeight = container.offsetHeight;
        startTop += 5;
        ball.style.top = startTop + 'px';
        // check if the ball reaches the bottom edge of the container
        if ((containerHeight - 30) <= startTop) {
            clearInterval(pid);
        }
    }, 15)
}


// new information
// 1- createElement
// 2- append
// 3- offsetTop
// 4- offsetHeight