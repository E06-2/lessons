/**
 * create a function convertToArray(str:string):array of each word from this str.
 * ex: convertToArray("This is my Function")
 *  returns: ["This", "is", "my", "Function"]
 * keyword: .split(something)
 */

function convertToArray(str){
    return str.split(" ")
}
let x = convertToArray("Mostafa Othman Hamburg DCI.")
console.log(x)
///////////////////////////////////////////////
/**
 * create a function letterCounter(str: string): count of letters only.
 * ex: letterCounter("Hello World")// ==>10
 * ex: letterCounter("Am Hungry!")// ==>8
 * Regular Expression
 */
function letterCounter(str){
    let tempStr = str
    let sum = 0
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
        if(str[i] !== " " && str[i] !== "!"){
            sum++;
        }
    }
    console.log(sum)
}
let original_text = "bl bla!"
letterCounter(original_text)
/////////////////////////////////////////////////////
/**
 * we have a text stored in DB, this text contains informations about some users, this information could be shown to anyone (not only for registerd users).
 * we need to cover any email address in that text
 * ex: mostafa@dci.org ==> most...@dci.org
 * generate a function to do that, hideEmail(text: string): string (with hided emails)
 * keywords: replace, slice, charAt, indexOf
 */
let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam quo harum molestiae placeat necessitatibus, id sed molestias magnam inventore cum! abc@ccc.ccc non deleniti quaerat exercitationem quibusdam voluptates eveniet quos?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam mostafa@dci.org accusantium delectus a@b.c libero, minima deleniti expedita impedit id vitae reiciendis ducimus, ahmad@gmail.com, animi labore? Provident, dolores. Necessitatibus, fugiat!
Lorem ipsum karim@yahoo.com sit amet consectetur adipisicing elit. Quasi, numquam beatae! Corporis, explicabo? Hic veritatis culpa provident soluta. Repellendus distinctio neque libero voluptas unde sapiente, eos aut voluptatum maiores quis?`

// text = text.replace("@", "...@")
// console.log(text)
/**
 * loop throw the text
 * search of emails, look for "@"
 * change first three letters from this email to "."
 * merge those emails to the text again (in same position)
 */

function hideEmail(t){
    // return convertToArray(t)
    let words = t.split(" ");
    for(let i = 0; i < words.length; i++){
        let email = words[i];
        if(email.includes("@")){
            console.log(email)
            let e = email.split("@")
            let firstPart = e[0]
            e[0] = firstPart.slice(0, -3) + "..."
            email = e.join("@")
            words[i] = email
        }
    }
    //console.log(words)
    return words.join(" ")
}
// hideEmail(text)
console.log(hideEmail(text))
// console.log(hideEmail(text))
// let tx = "mostafa@dci.org"
// let e = tx.split("@")
// let firstPart = e[0]
// e[0] = firstPart.slice(0, -3) + "..."
// // tx[6] = "." works only with arrays
// tx = e.join("@")// array to string
// console.log("First Part ===> ", firstPart)
// console.log("e ===> ",e)
// console.log("tx==> ",tx)