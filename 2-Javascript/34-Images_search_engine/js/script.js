// get required DOM Elements
const searchWordInp = document.getElementById('searchWordInp');
const searchBtn = document.getElementById('searchBtn');
const resultSection = document.getElementById('resultSection');

// add event listener to search button
searchBtn.addEventListener('click', async () => {
    //alert(searchWordInp.value)
    const url = 'https://pixabay.com/api/?' +
        'key=23836825-d28900a4f5025893278996a18' +
        '&q=' + searchWordInp.value;
    resultSection.textContent = 'Loading...';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        resultSection.textContent = 'we got the data';
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

// new concepts:
// async await
// try catch