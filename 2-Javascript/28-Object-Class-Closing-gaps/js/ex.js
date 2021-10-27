// Palindorme Word Checker
/*
    Palindorme word is any word readble from right to left, left to right
    ex: Anna, HuuH, deded
    Not Palindorme: Blabla, Hummer, BMW
*/
/**
 * create a function isPalindorme(word: string): true if Palindorme or false if not
 */


/**
 * A    N   N   N   A   ==> 5
 * 1- loop for all letters
 *      a- check first with last
 *      c- after first with before last
 *      d- .............
 *      if first NOT equals last
 *          return false
 * return true
 * @param {*} word 
 */
function isPalindrome(word){
    for(let i = 0; i < word.length/2; i++){
        // console.log(word[i], word[word.length -1  - i])
        if(word[i].toLowerCase() !==  word[word.length -1  - i].toLowerCase())
            return false
    }
    return true
}
let w = "Mostafa"
console.log(isPalindrome(w))

// reverse string
let rev = w.split("").reverse().join("")
console.log(rev)
/**
 * create a function getPalendrome(text: string): array of all Palindrome words inside the text
 * 1- take the text
 * 2- define array to store
 * 3- loop each word (convert to array using split(" "))
 *      check if each word is Palindrome (we can use our function isPalindrome)
 *          if palindrome: save it in extrnal array
 * 4- return this array (store)
 */
function getPalendrome(text){
    let store = []
    let arrayOfWords = text.split(" ")
    arrayOfWords.forEach(word=>{
        if(word.trim().length > 1)
            if(isPalindrome(word)){
                store.push(word)
            }
    })
    return store
}

let t = "    Lorem ipsum dolor sit amet, consectetur i BEEB adipisicing elit. Accusantium, doloribus esse deserunt ad vero unde, cumque voluptatibus, nemo  officia AnnA exercitationem   eum. Dolores huuh ad qui animi autem nobis, aliquid maxime earum."
let result = getPalendrome(t)
console.clear()
console.log(result)
// console.clear()
// let str = "         this is my text    I          "
// console.log(str.trim())

function palindromeCheck(e){
    e.preventDefault()
    // console.log(e.offsetX)
    /**
     * 1- get the text from texterea
     */
    // alert("Button Clicked!")
    const textErea = document.getElementById("myText")
    let val = textErea.value.trim().replace("\n", " ").trim()
    console.log(val)
    // console.log(val)
    let palindroms = getPalendrome(val)
    console.log(palindroms)
}