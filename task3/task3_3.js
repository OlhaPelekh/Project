// 1 спосіб
const number = 10369;
let strNumber = number.toString();
let result1 = strNumber.split('').join(' ');
console.log(result1);

// 2 спосіб
function splitNumber(number) {
    let mass = [];
    while (number > 0) {
        mass.push(number % 10);
        number = Math.floor(number / 10);
    }
    mass.reverse();
    return mass.join(' ');
}
let result2 = splitNumber(number);
console.log(result2); 

