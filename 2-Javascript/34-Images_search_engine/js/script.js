// get required DOM Elements
const searchWordInp = document.getElementById('searchWordInp');
const searchBtn = document.getElementById('searchBtn');
const resultSection = document.getElementById('resultSection');
const overallDiv = document.getElementById('overallDiv');
const colorSelect = document.getElementById('colorSelect');

// add event listener to search button
searchBtn.addEventListener('click', async () => {
    //alert(searchWordInp.value)
    // get the value of the selected color
    const color = colorSelect.value;
    const url = 'https://pixabay.com/api/?' +
        'key=23836825-d28900a4f5025893278996a18' +
        '&q=' + searchWordInp.value +
        (color ? '&colors=' + color : '');
    resultSection.textContent = 'Loading...';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.hits);
        //resultSection.textContent = 'we got the data';
        resultSection.textContent = '';
        data.hits.forEach(result => {
            const imageDiv = document.createElement('div');
            const img = document.createElement('img');
            img.src = result.previewURL;
            //set click event listener to image
            img.addEventListener('click', () => {
                const largeImg = document.createElement('img');
                largeImg.src = result.largeImageURL;
                overallDiv.append(largeImg);
                overallDiv.style.display = 'flex';
            })
            imageDiv.append(img);
            resultSection.append(imageDiv);
        })

    } catch (error) {
        resultSection.textContent = 'there is an error with getting the data';
    }

    // fetch(url).then(response => {
    //     if (resposonse.status === 200) {
    //         response.json().then(data => {
    //             console.log(data);
    //         }).catch(error => {
    //             resultSection.textContent = 'Wrong Data has been returned';
    //         })

    //     } else {
    //         resultSection.textContent = 'A server Error accrued while getting the Data';
    //     }

    // }).catch(error => {
    //     resultSection.textContent = 'An Error accrued while getting the Data';
    // })
})

// close overall div on click
overallDiv.addEventListener('click', () => {
    overallDiv.style.display = 'none';
    overallDiv.innerHTML = '';
})

// new concepts:
// async await
// try catch