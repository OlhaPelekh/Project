//Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
//Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
//Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації,
//то функція виводить в консоль останній введення користувача і завершує функцію.

function getRandomNumber() {
  const minRandom = 101;
  const maxRandom = 200;
  return Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
}

function checkNumber(str, number) {
  return isNaN(number) || number > 100 || str === null || str.trim() === '';
}

function getArray(maxIteration) {
  let arr = [];
  let i = 0;
  let number;
  do {
    const str = prompt("Введіть число більше 100", getRandomNumber());
    number = Number(str);
    if (checkNumber(str,number)) {
      break;
    } else {
      arr.push(str);
      i++;
    }
  } while (i < maxIteration && number <= 100);
  return arr.length === 0 ? "Масив є порожнім" : arr.join(" ");
}

const maxIteration = 5;

const result = getArray(maxIteration);

alert(result);
