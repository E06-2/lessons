function check123(num) {
    // num is number
    // this function should return 
    // 1 if the num ends with 1
    // 2 if the num ends with 2
    // 3 if the num ends with 3
    // else it should return false
    const numStr = num.toString();
    const lastChar = numStr[numStr.length - 1];
    switch (lastChar) {
        case '1':
            return 1;
            break;
        case '2':
            return 2;
            break;
        case '3':
            return 3;
            break;
        default:
            return false;
            break;
    }
}
// check123(1) => 1
// check123(32) => 2
// check123(543) => 3
// check123(104) => false
console.log(check123(125)); 

function humanize(num) {
    
    if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
        return num + 'th';
    } else {
        // const check = check123(num);
        switch (num % 10) {
            case 1:
                return num + 'st';
            case 2:
                return num + 'nd';
            case 3:
                return num + 'rd';
        
            default:
                return num + 'th';
        }
    }
}

console.log(humanize(1020));
// 2 => 2nd
    // 23 => 23rd
    // 91 => 91st
    // 25 => 25th
    // 11 => 11th
    // 12 => 12th
    // 13 => 13th
    // 68 => 68th
    // 62 => 62nd

const chars = [
    [' ', 1000],
    ['a', 1001],
    ['b', 1002],
    ['c', 1003],
    ['d', 1004],
    ['e', 1005],
    ['f', 1006],
    ['g', 1007],
    ['h', 1008],
    ['i', 1009],
    ['j', 1010],
    ['k', 1011],
    ['l', 1012],
    ['m', 1013],
    ['n', 1014],
    ['o', 1015],
    ['p', 1016],
    ['q', 1017],
    ['r', 1018],
    ['s', 1019],
    ['t', 1020],
    ['u', 1021],
    ['v', 1022],
    ['w', 1023],
    ['x', 1024],
    ['y', 1025],
    ['z', 1026],
];

console.log(chars[0][0]);

function encrypt(str) {
    // hello => '10081005101210121015'
    // return str.toLowerCase().split('')
    // .map(element => chars.find(elem => elem[0] === element)[1]).join('');
    const strArr = str.toLowerCase().split('');
    console.log(strArr);
    let result = '';
    strArr.forEach(element => {
        const key = chars.find(elem => elem[0] === element)
        console.log(key[1]);
        result += key[1];
    })
    return result;
}
console.log(encrypt('hello'));

// task for Monday
function decrypt(text) {
    // should return the decrypted text
    // '10081005101210121015' => 'hello'
}
// next week
// setTimeOut , setInterval
// callbacks, promises, async await
// oop: objects properties, methods
// classes: build class inheriting, methods, properties