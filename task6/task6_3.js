// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
            i--;
        }
    }
}

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array, 4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]