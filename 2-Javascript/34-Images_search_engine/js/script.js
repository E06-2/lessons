 // get required DOM Elements
 const searchWordInp = document.getElementById('searchWordInp');
 const searchBtn = document.getElementById('searchBtn');
 const resultSection = document.getElementById('resultSection');

    // add event listener to search button
    searchBtn.addEventListener('click', () => {
        //alert(searchWordInp.value)
        const url = 'https://pixabay.com/api/?'+
                    'key=23836825-d28900a4f5025893278996a18'+
                    '&q='+searchWordInp.value;
    })