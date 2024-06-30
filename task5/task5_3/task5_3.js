let n;
do {
    n = prompt('Введіть ціле число: ', 10);
    n = parseInt(n);
} while (isNaN(n) || !Number.isInteger(n));

let res;
let count = [];
const startValue = 1;
const finishValue = 100;
for (let i = startValue; i < finishValue; i++) {
    res = Math.pow(i, 2);
    if (res > n) {
        break;
    }
    count.push(i)
}
alert(count);
