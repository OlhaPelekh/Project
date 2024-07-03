const number = prompt('Введіть тризначне число:');
if (isNaN(+number)) {
    alert('Будь ласка, введіть коректне число.');
} else {
    let allSame = true;
    let someSame = false;
    for (let i = 0; i < number.length - 1; i++) {
        for (let j = i + 1; j < number.length; j++)
            if (number[i] === number[j]) {
                someSame = true;
            } else {
                allSame = false;
            }
    }
    if (allSame) {
        alert('Всі цифри однакові');
    } else if (someSame) {
        alert('Cеред цифр є цифри однакові');
    } else {
        alert('Цифри різні');
    }
}
