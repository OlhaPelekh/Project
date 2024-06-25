let n;
do {
    n = prompt('Введіть ціле число: ', 10);
    n=parseInt(n);
} while (+isNaN(n) || !Number.isInteger(n));

let res;
let count = [];
for (let i = 1; i < 100; i++) {
    res = Math.pow(i, 2);
    if (res > n) {
        break;
    }
    count.push(i)
}
alert(count);
