function getBirthYear() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const birthYear = prompt('Enter your Birth Year');
            if ( isNaN(Number(birthYear)) ) {
                reject();
            } else {
                resolve(Number(birthYear));
            }
        }, 5000)
    })
}

function calculateAge(bYear) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - bYear;
    console.log(age);
}

function print(bYear) {
    console.log(`you are born in ${bYear}`);
}

// promis.then().catch()
// then if there is no error
// catch if there is error
getBirthYear().then(result => {
    calculateAge(result);
    print(result)
}).catch(() => {
    console.log('there were a problem with the entered data');
})


fetch('https://pixabay.com/api/?key=23836825-d28900a4f5025893278996a18&q=flower')
.then(response => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}).catch(error => {
    console.log(error);
})