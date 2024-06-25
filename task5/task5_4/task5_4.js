let n;
do {
    n = prompt('Введіть ціле число: ', 10);
    n = parseInt(n);
} while (isNaN(n) || !Number.isInteger(n));

let res;
let count = 0;
for (let i = 1; i <= n; i++) {
    res = n % i;
    if (res === 0) {
        count++;
    }
}
if (count !== 2) {
    alert(`Число не є простим`);
} else {
    alert(`Число є простим`);
}
