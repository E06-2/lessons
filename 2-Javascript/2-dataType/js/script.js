console.log("javascript linked!");
// alert(false);
document.write("<h1>Javascript Data Type</h1>");
// numbers//////////////////////////
console.log(5); //=>number
// typeof return the data type of any data or variable as a string output
console.log(typeof 10); //=>number
console.log(typeof "Hummer"); //=>string
console.log(typeof true); //=>boolean
console.log(typeof typeof false); //=>string

// nigative numbers
console.log(-50);
// double numbers
console.log(300.5201);
console.log(1.0);
// min -2^64 max(2^64)-1
console.log(999999);

console.log(0b110010); // binary number
console.log(0xff); // hex number
//////////////////////////////////////////
// () Parenthesis
console.log(5);
// {} Curly-braces functions, objects
// [] square-brackets arrays.

// Strings
console.log("Normal text");
console.log(typeof "Normal text");
console.log("here another Text");
console.log(`an other text here`);
// escaping charactar
console.log('my name is "Mostafa"');
// "\" inside strings: escaping
console.log('my name is "Mostafa" ');
console.log(`my name is \`Mostafa\``);
// use thes charactors to define strings: `` or '' or ""
console.log("use thes charactors to define strings: `` or '' or \"\"");
console.log("use \\ to escape");

// special charactars
// \t tap space between
console.log("this is a \t text");
// \n new line
console.log("this is first \n line");
// alert("this is first \n line")
document.write("this is first \n line");
console.log(typeof "30"); //=>string
console.log(typeof "30"); //=>string
console.log(typeof `30`); //=>string
console.log(typeof "false"); //=>string

// Boolean///////////////////
console.log(false);
console.log(typeof false);
console.log(true);
console.log(typeof true);
///////////////////////////////
// Array
// arrays are a packet of data [element_1, element_2, ..... , element_n]
console.log([
  0,
  5,
  "text,",
  false,
  {
    name: "mostafa",
    age: 20,
  },
]);
console.log(typeof [0, 5, "text,", false]); //=>object
/////////////////////////////
// Objects
// a packet od data organized with keywords
// Object: {key_1: val, key_2: val, ........, key_n:val}
console.log({
  a: 10,
//   a: 20,No repeat keyword
  name: false,
  c: "string",
  e: [5, 20],
  f: { l: false, t: "d", a: true }
});

/////////////// unhandeld data types
// in runtime appear
// undefined
console.log(undefined)
console.log(typeof undefined)
// + Infinity, -Infinity
console.log(Infinity)
console.log(typeof Infinity)
// NaN
console.log(NaN)
console.log(typeof NaN)
// null
console.log(null)
console.log(typeof null)

