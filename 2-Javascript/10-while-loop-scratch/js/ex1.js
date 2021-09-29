// x, y to cells, rows
// var rows = 10
// var cells = 10
// // somthing repeat 3 times: start from 0 == < 3
// // 0    1   2
// // [0, 5] ==> 6
// var counter = 1
// document.write(`<table>`)
// for(let y = 0; y < rows; y++){// 3
//     document.write(`<tr>`)
//     // cells area
//     for(let x = 0; x < cells; x++){//4
//         if(y == x ){
//             document.write(`<td style="background:red">`)
//         }else{
//             document.write(`<td>`)
//         }
//         document.write(`(${y}, ${x})`)
//         document.write(`</td>`)
//         counter++
//     }
//     document.write(`</tr>`)
// }
// document.write(`</table>`)
// //////////////////////////////////////////////////
// document.write(`<hr>`)

// document.write(`<table>`)
// for(let y = 0; y < rows; y++){// 3
//     document.write(`<tr>`)
//     // cells area
//     for(let x = 0; x < cells; x++){//4
//         if(x + y == rows - 1  ){
//             document.write(`<td style="background:red">`)
//         }else{
//             document.write(`<td>`)
//         }
//         document.write(`(${y}, ${x})`)
//         document.write(`</td>`)
//         counter++
//     }
//     document.write(`</tr>`)
// }
// document.write(`</table>`)

// //////////////////////////////////////////////////
// document.write(`<hr>`)

// document.write(`<table>`)
// for(let y = 0; y < rows; y++){// 3
//     document.write(`<tr>`)
//     // cells area
//     for(let x = 0; x < cells; x++){//4
//         if(2*y -1 == 3){
//             document.write(`<td style="background:red">`)
//         }else{
//             document.write(`<td>`)
//         }
//         document.write(`(${y}, ${x})`)
//         document.write(`</td>`)
//         counter++
//     }
//     document.write(`</tr>`)
// }
// document.write(`</table>`)
//////////////////////////////////////////
var arr = [2,5, "text", true, false, null, undefined, NaN, [2, 6], {k:5, h: "s"}]
var arr1 = [5,6,9,0,2,3,7,1,2]
// to display any item from array
// arrayName[index], index [integer positive number including 0]: index E [0, 1, 2, ...., length -1]
// document.write(arr1[0]+ "<br>")
// document.write(arr1[1]+ "<br>")
// document.write(arr1[2]+ "<br>")
// document.write(arr1[3]+ "<br>")
// document.write(arr1[4]+ "<br>")
// document.write(arr1[5]+ "<br>")
var elementsCount = arr1.length// like we counting (9)
document.write(`There is ${elementsCount} elements in arr1<br>`)
console.log(arr1[arr1.length -1])// =>2
// for(let i = 0; i< arr1.length ;i++){
//     document.write(arr1[i]+ "<br>")
// }
// [5,6,9,0,2,3,7,1,2]

let i = 0
while(i < arr1.length){
    //1- display only even numbers (0, 2, 4, 6, ..., 2n)
    // if(arr1[i] % 2 == 0){
    //     document.write(arr1[i]+ "<br>") 
    // }
    //2- display all numbers which are more than 3
    // if(arr1[i] > 3){
    //     document.write(arr1[i]+ "<br>") 
    // }
    i++
}
// 3- find the sum of all numbers inside arr1
console.log(arr1[2*4])//== console.log(arr1[8])
console.log(arr1[4%3])//== console.log(arr1[1])
console.log(arr1[9/2])//== console.log(arr1[4.5]) undefined