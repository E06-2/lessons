function askUser(cb) {
    let like = null;

    setTimeout(() => {
        like = confirm('Did you like our Website?');
        cb(like);
    }, 5000);

    //return like;
    
}


function showResult (check) {
    if (check) {
        document.write('thank you');
    } else {
        document.write('Sorry');
    }
}

askUser(showResult);
