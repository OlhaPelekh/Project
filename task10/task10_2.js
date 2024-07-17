// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
// в якому лише парні числа з оригінального масиву.

let numbers = [];

function getRandomNumber() {
  const minRandom = 1;
  const maxRandom = 100;
  return Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
}

(function () {
  const numbersLength = 10;
  for (let i = 0; i < numbersLength; i++) {
    numbers.push(getRandomNumber());
  }
  console.log(numbers);
})();

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);