const convertedValue = 26;
let dollar = 10;
do {
    console.log(`${dollar} $ = ${convertedValue * dollar} ₴`);
    dollar += 10;
} while (dollar <= 100)