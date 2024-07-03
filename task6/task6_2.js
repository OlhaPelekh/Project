// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const mass1 = ['Hello', 56, 'world', true, false, 15, '88', 33, NaN];
const mass2 = ['Hello', '56', 'world', true, '15', '88'];

function getAverageNumbers(mass) {
    let sum = 0;
    let count = 0;
    for (let item of mass) {
        if (typeof item === 'number' && !isNaN(item)) {
            sum += item;
            count++;
        }
    }
    return count > 0 ? sum / count : 'У заданому масиві немає числових значень'
}

console.log(getAverageNumbers(mass1));
console.log(getAverageNumbers(mass2)); 