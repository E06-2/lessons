/**
 * 1- get /save any element that you will use
 * 2- assign an event listener to textarea: 
 *      a- event type: "keyup"
 *      b- get the text from texterea (value) as innerHTML
 *      c- put that text in result div (innerHTML)
 */
const textArea = document.getElementById("hCode")
const result = document.getElementById("result")


/**
 * Keyboard events:
 * 1- keydown: when you start pressing (with Holding)
 * 2- keypress: when you press on key (with Holding)
 * 3- keyup: when you release your finger on button (AFTER Holding)
 */
textArea.addEventListener("keyup", e=>{
    //e.keyCode ==> keyCode as number
    console.log(e.keyCode) 
    // console.log(textArea.value)
    if(e.keyCode === 46){// if del key pressed
        // alert("enter pressed")
        result.innerHTML = ""
        textArea.value = ""
    }
    result.innerHTML = textArea.value

    Array.from(result.getElementsByTagName("script")).forEach(script=>{
        eval(script.textContent)
    })
})