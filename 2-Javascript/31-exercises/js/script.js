const container = document.querySelector('#container');

// create audio element to play explosion sound 
const explosionSound = document.createElement('audio');
explosionSound.src = './sounds/explod.mp3';
explosionSound.setAttribute('controls', 'none');
explosionSound.setAttribute('preload', 'auto');
explosionSound.style.display = 'none';

container.append(explosionSound);

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
    ball.style.top = (e.clientY - 20) + 'px';
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
        if ((containerHeight - 40) <= startTop) {
            clearInterval(pid);
            // change the background image of ball
            ball.style.backgroundImage = "url('../images/explod.png')";
            explosionSound.pause();
            explosionSound.currentTime = 0;
            explosionSound.play();
        }
    }, 15)
}


// new information
// 1- createElement
// 2- append
// 3- offsetTop
// 4- offsetHeight