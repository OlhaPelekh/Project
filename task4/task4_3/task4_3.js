const yearOfBirth = prompt('Введіть свій рік народження:');
let age;
let strAge;
if (yearOfBirth === null || yearOfBirth === '') {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);
    strAge = '';
} else if (isNaN(+yearOfBirth)) {
    alert(`Рік народження введено некоректно.`);
    age = '';
} else {
    let date = new Date();
    age = date.getFullYear() - yearOfBirth;
    strAge = `Твій вік є ${age}.`;
}

const city = prompt('Введіть місто, в якому живете:');
let strCity;
if (city === null || city === '') {
    alert(`Шкода, що Ви не захотіли ввести своє місто.`);
    strCity = '';
} else {
    let isCapital = false;
    switch (city) {
        case 'Київ':
            isCapital = true;
            break;
        case 'Вашингтон':
            isCapital = true;
            break;
        case 'Лондон':
            isCapital = true;
            break;
        default:
            isCapital;
    }
    if (isCapital) {
        strCity = `Ти живеш у столиці ${city}.`;
    } else {
        strCity = `Ти живеш у місті ${city}.`;
    }
}

const favoriteSport = prompt('Введіть улюблений вид спорту:');
let strChampion;
if (favoriteSport === null || favoriteSport === '') {
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту.`);
    strChampion = '';
} else {
    let champion;
    switch (favoriteSport) {
        case 'Легка атлетика':
            champion = 'Діаною Гончаренко';
            break;
        case 'Плавання':
            champion = 'Юрієм Юркевичем';
            break;
        case 'Бокс':
            champion = 'Олександром Усиком';
            break;
        default:
            champion = null;
    }
    if (champion != null) {
        strChampion = 'Круто! Хочеш стати ' + champion + '?';
    } else {
        strChampion = '';
    }
}

if (strAge && strCity && strChampion !== null) {
    alert(`${strAge} ${strCity} ${strChampion}`);
} else {
    alert(`Шкода, що Ви не захотіли ввести ніяких даних.`);
}


