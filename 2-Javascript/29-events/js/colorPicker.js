let r_input = document.getElementById("r")
let b_input = document.getElementById("b")
let g_input = document.getElementById("g")
// getting preview div
let previewDiv = document.getElementById("preview")
// getting result div
let resultDiv = document.getElementById("result")
// add eventListener fo all inputs
r_input.addEventListener("mousemove", e=>{
    // console.log(r_input.value)
    applyColors()
})
g_input.addEventListener("mousemove", e=>{
    // console.log(g_input.value)
    applyColors()
})
b_input.addEventListener("mousemove", e=>{
    // console.log(b_input.value)
    applyColors()
})

function applyColors(){
    previewDiv.style.backgroundColor = `rgb(${r_input.value}, ${g_input.value}, ${b_input.value})`
    resultDiv.innerHTML = `rgb(${r_input.value}, ${g_input.value}, ${b_input.value})`
}
// for test
// setTimeout(()=>{
//     r_input.value = 200
// }, 5000)


