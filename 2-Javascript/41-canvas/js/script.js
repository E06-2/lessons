const canvas = document.getElementById('canvas1');

// create canvas context to be used 
// to draw on canvas
const ctx = canvas.getContext('2d');
// fill canvas with some color
ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// draw lines on canvas
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(50, 50);
ctx.lineTo(50, 100);
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(100, 100);
ctx.rect(100, 100, 150, 100);
ctx.strokeStyle = 'red';
ctx.stroke();
ctx.closePath();

// get the button from DOM
const loadImgBtn = document.getElementById('loadImgBtn');
// add event listener to button
loadImgBtn.addEventListener('click', () => {
    // create image element
    const img = document.createElement('img');
    // set src attribute to image
    img.src = './images/img.jpg';
    // create load event to load image
    img.addEventListener('load', () => {
        // change canvases width and height to image width and height
        console.log(img.width);
        console.log(img.height);
        canvas.width = img.width;
        canvas.height = img.height;
        // this code will run after image is loaded
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // draw image on canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
});

// get the grayscale button from DOM
const grayScaleBtn = document.getElementById('grayScaleBtn');
// add event listener to button
grayScaleBtn.addEventListener('click', () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData.data[0]); // red channel value for pixel at (0, 0)
    console.log(imageData.data[1]); // green channel value for pixel at (0, 0)
    console.log(imageData.data[2]); // blue channel value for pixel at (0, 0)
    for (let i = 0; i <imageData.data.length; i += 4 ) {
        // console.log(imageData.data[i]);
        // console.log(imageData.data[i + 1]); 
        // console.log(imageData.data[i + 2]);
        const averageColor = (
                                imageData.data[i] + 
                                imageData.data[i + 1] + 
                                imageData.data[i + 2]
                                ) / 3;
        imageData.data[i] = averageColor;
        imageData.data[i + 1] = averageColor;
        imageData.data[i + 2] = averageColor;
    }
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the image data on the canvas
    ctx.putImageData(imageData, 0, 0);
})





// get the invert button from DOM
const invertBtn = document.getElementById('invertBtn');
// add event listener to button
invertBtn.addEventListener('click', () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData.data[0]); // red channel value for pixel at (0, 0)
    console.log(imageData.data[1]); // green channel value for pixel at (0, 0)
    console.log(imageData.data[2]); // blue channel value for pixel at (0, 0)
    for (let i = 0; i <imageData.data.length; i += 4 ) {
        // console.log(imageData.data[i]);
        // console.log(imageData.data[i + 1]); 
        // console.log(imageData.data[i + 2]);
        
        imageData.data[i] = 255 - imageData.data[i];
        imageData.data[i + 1] = 255 - imageData.data[i + 1];
        imageData.data[i + 2] = 255 - imageData.data[i + 2];
    }
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the image data on the canvas
    ctx.putImageData(imageData, 0, 0);
})



// get the rmBlueBtn button from DOM
const rmBlueBtn = document.getElementById('rmBlueBtn');
// add event listener to button
rmBlueBtn.addEventListener('click', () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData.data[0]); // red channel value for pixel at (0, 0)
    console.log(imageData.data[1]); // green channel value for pixel at (0, 0)
    console.log(imageData.data[2]); // blue channel value for pixel at (0, 0)
    const FACTOR = 10;
    for (let i = 0; i <imageData.data.length; i += 4 ) {
        // console.log(imageData.data[i]);
        // console.log(imageData.data[i + 1]); 
        // console.log(imageData.data[i + 2]);
        const r = imageData.data[i]
        const g = imageData.data[i + 1]
        const b = imageData.data[i + 2]
        if (b - r > FACTOR && b - g > FACTOR) {
            const averageColor = (
                imageData.data[i] + 
                imageData.data[i + 1] + 
                imageData.data[i + 2]
                ) / 3;
            imageData.data[i] = averageColor;
            imageData.data[i + 1] = averageColor;
            imageData.data[i + 2] = averageColor;
        }
        
    }
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the image data on the canvas
    ctx.putImageData(imageData, 0, 0);
})