/**
 * fill the table wid indexing values, 
 * Hint: .children, .forEach, .innerHTML to set the text
 * 
 * HTMLELEMENT.innerHTML = "anything"
 */

// getting table
// by tagName:
// const myTable = document.getElementsByTagName("table")[0]
// by className
const myTable = document.getElementsByClassName("myTable")[0]
// console.log(myTable)

// getting all rows in table
Array.from(myTable.children[0].children).forEach((tr, r)=>{
    // console.log(r, tr)
    Array.from(tr.children).forEach((td, d)=>{
        // console.log(d, td)
        td.innerHTML = `(${r}, ${d})`
        if(r > 3){
            td.setAttribute("class", "bla")
        }
        r===d?td.style.backgroundColor = "brown":null
    })
})

