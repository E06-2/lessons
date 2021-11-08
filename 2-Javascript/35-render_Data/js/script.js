/**
 * Getting Data from:
 * https://jsonplaceholder.typicode.com
 */

/**
 * 0-Task
 * when page loaded, display all posts like boxes, contains the title of this post
 * use grid, or flex or float to order this posts,
 * make it like a function getPosts()
 */

/**
 * when document loaded, do some procedures
 */
window.onload = ()=>{
    // console.log("Document loaded")
    // create content div
    const contentDiv = document.createElement("div")
    // getting container div
    const container = document.getElementsByClassName('container')[0]
    // put contentDiv inside container div
    container.append(contentDiv)
    // style the contentDiv
    // contentDiv.style.display = "grid"
    contentDiv.classList.add("content")

    // container.appendChild(contentDiv)
    getPosts()
}
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{
        // console.log(response)
        response.json().then(data=>{
            console.log(data)
            //1- loop for each object (POSTS) inside
                // TODO
                //a- for each object(POST) inside, create anew div (postConteiner)
                // TODO
                //b- create h2 element, put inside it the title of the POST
                // TODO
                //c- put this h2 element inside (postConteiner)
                // TODO
                //d- put this postConteiner inside (contentDiv)
                // TODO

        }).catch(er=>{
            console.log(er)
        })
    }).catch(error=>{
        console.log(error)
    })
}
// Promise.then(data=>{
//     // no error
// }).catch(errrror=>{
// // handle error
// })
