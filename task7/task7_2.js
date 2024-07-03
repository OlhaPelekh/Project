// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
//Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function curryMultiply(a) {
  return function (b) {
    if (
      typeof a === "number" &&
      !isNaN(a) &&
      typeof b === "number" &&
      !isNaN(b)
    ) {
      return a * b;
    } else {
      return "Введіть коректні дані";
    }
  };
}

const multiplierFirst = 5;
const multiplierSecond = 10;

//Використання функції curryMultiply
const multiply = curryMultiply(multiplierFirst);
console.log(
  `${multiplierFirst} * ${multiplierSecond} = ${multiply(multiplierSecond)}\n`
);

//Інший спосіб використання функції curryMultiply
console.log(
  `${multiplierFirst} * ${multiplierSecond} = ${curryMultiply(multiplierFirst)(
    multiplierSecond
  )}`
);
