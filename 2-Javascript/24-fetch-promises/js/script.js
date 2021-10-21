function getData(keyWord) {
    return new Promise((resolve, reject) => {
        const url = `https://pixabay.com/api/?key=23836825-d28900a4f5025893278996a18&q=${keyWord}`;
        fetch(url).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data);
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject('there is an error')
            }
        }).catch(error => {
            reject(error);
        })
    })
}


const word = prompt('enter key Word');
getData(word).then(result => {
console.log(result.hits);
const htmlString = result.hits.map(element => {
    return `<a href="${element.largeImageURL}" target="_blank">
    <img src="${element.previewURL}" />
    </a>
    `
});
console.log(htmlString);
document.write(htmlString.join(''))
}).catch(error => {
    console.log(error);
})

// task: change the previous code to make the photos clickable
// and when the photo is clicked the large photo should be shown in 
// a new tab