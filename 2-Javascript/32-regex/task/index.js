// Break camelCase
//
// Complete the solution so that the function will break up camel casing
// using a space between words
//
//  "camelCasing"  =>  "camel Casing"
//  "identifier"   =>  "identifier"
//  ""             =>  ""

const breakCamelCase = (str) => {
    //TODO
    let re = /([a-z])([A-Z])/g
    return str.replace(re, '$1 $2')
}

//console.log(breakCamelCase("camelCase"));


// Vowel remover
// Given a string or text, remove all the vowel (aeiou) case insennsitive.
// For example, the string:
// "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

const disemvowel = (str) => {
    //TODO
    let re = /[aeiou]/ig;
    return str.replace(re, "")
}

//console.log(disemvowel("This website is for losers LOL!"));

// Filter information from URL
// Given string of text retung the URL domain name
//
// https://google.com => google

const domainExtractor = (url) => {
    //TODO
    return url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www", "")
        .split('.')[1]

    // return url.replace("https://", "").split(".")[1]
}

console.log(domainExtractor('https://www.google.com'));