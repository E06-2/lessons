let x = 1;
let z = x;
z = 2;
console.log('x', x);
console.log('z', z);

let arr1 = [1, 6, 7];
 // let arr2 = arr1;

// arr1 and arr2 are same object because they are referring to the same block in the memory 
let arr2 = [...arr1, 99, 77, 66]; // array copy
arr1[1] = 55;
arr2[0] = 88;
console.log('arr1', arr1);// 1, 6, 7
console.log('arr2', arr2);// 88, 6, 7