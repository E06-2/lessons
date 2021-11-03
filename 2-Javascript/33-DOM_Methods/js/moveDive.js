
/**
 * <HTML>.getBoundingClientRect() ==> All Rec Data ex x, y width ...
 */

/**
 * 1- get the item that you want to =move
 * 2- add an event listener for body (big container):
 *      a- event type: keyboard event
 *      b- check if (UP, DOWN, LEFT, RIGHT) pressed
 *      c- change (top, left) for the div (box)
 *      d- check if NEXT move will not make the box outside
 */

// 1- get the item that you want to =move
const box = document.getElementById("box")
let speed = 20
document.body.addEventListener("keydown", e=>{
    // e.target ===> where are you makeing event <HTML>
    // console.log(e.target)// for now = body
    // check key
    // UP case:
    // console.log(box.offsetTop)

    debugger
    if(e.keyCode === 38){
        // box top: CURRENT top - 1px
        // <HTML>.offsetTop ===> current top position
        if(box.offsetTop - speed >0)
            box.style.top = box.offsetTop - speed + "px"
        // console.log(box.style.position)
    }else if(e.keyCode === 40){
        //
        if(box.offsetTop + speed + box.clientHeight < e.target.clientHeight)
            box.style.top = box.offsetTop + speed + "px"
            else{
                box.style.top = e.target.clientHeight - box.clientHeight  + "px"
            }
    }else if(e.keyCode === 39){
        // <HTML>.clientWidth ==> element's width
        if(box.offsetLeft + speed + box.clientWidth < e.target.clientWidth)
            box.style.left = box.offsetLeft + speed + "px"
            else{
                box.style.left = e.target.clientWidth 
            }
    }else if(e.keyCode === 37){
        if(box.offsetLeft - speed > 0)
            box.style.left = box.offsetLeft - speed + "px"
    }
    else if(e.keyCode === 13){
        move(e.target)
    }
})

function move(b){
    let frame  = 5
    let dx = 5
    let dy = 5

    setInterval(()=>{
        // check if ball close to left-right edges
        if(box.offsetLeft + dx < 0 || box.offsetLeft + dx + box.clientWidth > b.clientWidth){
            dx = - dx
        }
        if(box.offsetTop + dy <0 || box.offsetTop + dy + box.clientHeight > b.clientHeight){
            dy = - dy
        }
        box.style.left = box.offsetLeft + dx + "px"
        box.style.top = box.offsetTop + dy + "px"
    },frame)
}