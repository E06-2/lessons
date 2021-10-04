// 1:) 
let sumOf20 = 0
for (let i = 1; i <= 20; i++) {
    sumOf20 += i
}
// console.log(sumOf20);

// 2. )
for (let i = 1; i <= 5; i++) {
    // console.log(`There is ${i} bottle of beer on the wall.`);
}

// 3
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        // console.log(i, "is even");
    } else {
        // console.log(i, "is odd");
    }
}

// 4
for (let i = 0; i <= 10; i++) {
    // console.log(i, i * 9);
}

// 6
let sumOf3and5 = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sumOf3and5 += i;
    }
}
// console.log(sumOf3and5);

// 7 
// >100 200 300 400 500 600 700 800 900 1000
// let n = 100;
let result = 0;
for (let i = 100; i <= 1000; i += 100) {
    // result = n * i
    // console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
    // console.log(i);
}

for (let i = 3; i <= 15; i += 3) {
    // console.log(i);
}

for (let i = 9; i >= 0; i--) {
    // console.log(i);
}

// 1 1 1 2 2 2 3 3 3 4 4 4
// for (let i = 1; i <= 4; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i);
//     }
// }
let n = 0;
for (let i = 0; i <= 11; i++) {
    if (i < 3) {
        n = 1;
    } else if (i < 6) {
        n = 2;
    } else if (i < 9) {
        n = 3
    } else {
        n = 4;
    }
    // console.log(n);
}

//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// for (let j = 0; j < 3; j++) {
//     for (let i = 0; i <= 4; i++) {
//         console.log(i);
//     }
// }





