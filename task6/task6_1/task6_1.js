// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteLetter(text, letter) {
    let textArray = text.split('');
    for (let i = 0; i < textArray.length; i++) {
        for (let j = 0; j < letter.length; j++) {
            if (textArray[i] === letter[j]) {
                textArray.splice(i, 1);
                i--;
                break;
            }
        }
    }
    alert(textArray.join(''));
}

const text = prompt('Введіть текст');
const letters = prompt('Введіть літери, які потрібно видалити');

deleteLetter(text, letters);