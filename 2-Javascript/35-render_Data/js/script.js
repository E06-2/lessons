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
    // getting selector
    const userSelector = document.getElementById("usersSelect")
    // getting title
    const title = document.getElementsByTagName("h1")[0]
    // put contentDiv inside container div
    container.append(contentDiv)
    // style the contentDiv
    // contentDiv.style.display = "grid"
    contentDiv.classList.add("content")

    // container.appendChild(contentDiv)
    getPosts(contentDiv, 0)
    /* Task1: fill select tag (userSelect) with all users found in ('https://jsonplaceholder.typicode.com/users')
     with this structure: <option value="userId">the name of the user</option>
     hint: create a function for that (getUsers()), and call it here
     */
    getUsers()
    /**
     * Task2: assign an eventlistener for usersSelect, event-type: (change), handler: function
     * call inside it getPosts(contentDiv, userId) 
     * hint: userId is the value from selected tag
     * do the some changes for getPosts to make it works like url:
     * https://jsonplaceholder.typicode.com/posts?userId=5
     */
     userSelector.addEventListener("change", e=>{
        //  console.log("Some event happend")
         // e.target ==> HTMLElement which has this eventListener <==> userSelector
        console.log(e.target.value)
        //  console.log(e.target.children[e.target.value].innerHTML)
        // get text selected from select option 
        let index = e.target.selectedIndex// which item you selected as number
        let name = e.target.options[index].innerHTML
        console.log(name)
        title.innerHTML= `<i>${name}'s</i> Posts`
         getPosts(contentDiv, e.target.value)
         title.setAttribute("title", "Name of Creator")
     })
     /**
      * Task-3:
      * 1- assign an eventListener for each post, event-type = click, handler: function:
      * create a function showPost(postId) need to be called inside handler
      *     a- clear contentDiv
      *     b- this wil make a new fetch request to this url:(https://jsonplaceholder.typicode.com/posts?id=postId) "make sure to change postId"
      *     c- when got a response (one post object):
      *         1- create a new div
      *         2- put inside it <h2>postTitle</h1>
      *         3- <span>created by: user name</span>
      *         4- <p>post body</p>
      *         5- put this div in contentDiv
      *         6- make some styling for post stuff (classes or inline styling)
      * hints:
      *     You may put some attributes for each post (while creating the posts)
      *         attribute may like: post-id='5'
      *     so that you will use it when you call showPost(postId) function,
      *      use element.getAttribute("name of the attribute").
      *     For getting username: fetch request to :https://jsonplaceholder.typicode.com/users?id=1
      *         just replace 1 with post.userId, then you got an object for the user you can get name from it.
      */

}
function getPosts(div, userId){
    let url = 'https://jsonplaceholder.typicode.com/posts'
    if(userId != 0){
        url = url + "?userId=" + userId
    }
    fetch(url).then(response=>{
        // console.log(response)
        response.json().then(data=>{
            // console.log(data).
            //0- clear div or contentDiv
            div.innerHTML = ""
            //1- loop for each object (POSTS) inside
                data.forEach(post=>{
                    // console.log(post)
                    //a- for each object(POST) inside, create anew div (postConteiner)
                    const postConteiner = document.createElement("div")
                    postConteiner.classList.add("postContainer")
                    // postConteiner.style.border = "1px solid"
                    //b- create h2 element, put inside it the title of the POST
                    const postTitle = document.createElement("h2")
                    postTitle.innerHTML = post.title
                    //c- put this h2 element inside (postConteiner)
                    postConteiner.appendChild(postTitle)
                    //d- put this postConteiner inside (contentDiv)
                    div.appendChild(postConteiner)
            })

        }).catch(er=>{
            console.log(er)
        })
    }).catch(error=>{
        console.log(error)
    })
}

function getUsers(){
    const userSelector = document.getElementById("usersSelect")
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
        response.json().then(data=>{
            data.forEach(user=>{
                // console.log(user)
                const option = document.createElement("option")
                option.innerHTML = user['name']
                // set a new attribute for html element <HTMLElement>.setAttribute(the name of atrr(STRING), value for)
                option.setAttribute("value", user.id)
                // option.setAttribute("M", "0")
                // option.setAttribute("style", "color: red")
                // <HTMLElement>.append(<HTMLElement>) ==> keep the original and add at the end  the new stuff
                userSelector.appendChild(option)
                // userSelector.innerHTML = `<option>${user.name}</option>`
            })
        }).catch(err=>{
            console.log(err)
        })
    }).catch(error=>{
        console.log(error)
    });
}


