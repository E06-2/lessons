const container = document.querySelector('#container');

let lost = 0;
let score = 0;
// create top bar 
const topBar = document.createElement('div');
topBar.classList.add('top-bar');
topBar.innerHTML = `
<h2>Score: ${score}</h2>
<h2>Lost: ${lost}</h2>
`
container.append(topBar);

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
            // play sound
            explosionSound.pause();
            explosionSound.currentTime = 0;
            explosionSound.play();
            // setTimeout after one seconds
            setTimeout(() => {
                // remove the ball from the dom
                ball.remove();
            }, 1000)
        }
    }, 15)
}

// create a tank div


setInterval(() => {
    // this code should be inside interval
const tank = document.createElement('div');
tank.classList.add('tank');
container.append(tank);
moveTank(tank);
}, 1000)



function moveTank(panzer) {

    let left = 0;
    const pid = setInterval(() => {
        const containerWidth = container.offsetWidth;
        left += 5;
        panzer.style.left = left + 'px';
        if (left >= containerWidth) {
            clearInterval(pid);
            panzer.remove();
            lost++;
            topBar.children[1].textContent = `Lost: ${lost}`;
        }

        const ballArray = Array.from(document.querySelectorAll('.ball'));
        ballArray.forEach(ball => {
            if (ball.offsetTop + 40 >= panzer.offsetTop && 
                ((ball.offsetLeft >= panzer.offsetLeft 
                    && ball.offsetLeft <= panzer.offsetLeft + 70) 
                    || ball.offsetLeft + 30 >= panzer.offsetLeft 
                    && ball.offsetLeft + 30 <= panzer.offsetLeft + 70 
                    )
                    ){
                        // check if ball has exploded
                        if(!ball.style.backgroundImage.includes('explod')){
                        ball.remove();
                        clearInterval(pid);
                        panzer.remove();
                        score++;
                        topBar.children[0].textContent = `Score: ${score}`;
                        }
                    } 
        })


    }, 20)
}
// new information
// 1- createElement
// 2- append
// 3- offsetTop, offsetWidth
// 4- offsetHeight
// 5- create and play sound via javascript
// 6- element remove from DOM

// check if the ballon hits the tank 
// so the tank should be removed and the score should be increased