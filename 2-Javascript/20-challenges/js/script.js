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
        const check = check123(num);
        switch (check) {
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

console.log(humanize(10511));
// 2 => 2nd
    // 23 => 23rd
    // 91 => 91st
    // 25 => 25th
    // 11 => 11th
    // 12 => 12th
    // 13 => 13th
    // 68 => 68th
    // 62 => 62nd