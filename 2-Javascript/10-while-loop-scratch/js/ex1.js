// x, y to cells, rows
var rows = 10
var cells = 10
// somthing repeat 3 times: start from 0 == < 3
// 0    1   2
// [0, 5] ==> 6
var counter = 1
document.write(`<table>`)
for(let y = 0; y < rows; y++){// 3
    document.write(`<tr>`)
    // cells area
    for(let x = 0; x < cells; x++){//4
        if(y == x ){
            document.write(`<td style="background:red">`)
        }else{
            document.write(`<td>`)
        }
        document.write(`(${y}, ${x})`)
        document.write(`</td>`)
        counter++
    }
    document.write(`</tr>`)
}
document.write(`</table>`)
//////////////////////////////////////////////////
document.write(`<hr>`)

document.write(`<table>`)
for(let y = 0; y < rows; y++){// 3
    document.write(`<tr>`)
    // cells area
    for(let x = 0; x < cells; x++){//4
        if(x + y == rows - 1  ){
            document.write(`<td style="background:red">`)
        }else{
            document.write(`<td>`)
        }
        document.write(`(${y}, ${x})`)
        document.write(`</td>`)
        counter++
    }
    document.write(`</tr>`)
}
document.write(`</table>`)