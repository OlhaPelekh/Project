let yearOfBirth = prompt('Введіть свій рік народження:');
let age;
if(yearOfBirth===null){
    alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);
    age = '';
}else if(isNaN(+yearOfBirth)){
    alert(`Рік народження введено некоректно.`);
    age = '';
}else{
    let date = new Date();
    age = date.getFullYear() - yearOfBirth;
}

let city = prompt('Введіть місто, в якому живете:');
let strCity;
if(city===null){
    alert(`Шкода, що Ви не захотіли ввести своє місто.`);
    strCity='';

}else{
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
        strCity = 'Ти живеш у столиці';
    } else {
        strCity = 'Ти живеш у місті';
    }
}

let favoriteSport = prompt('Введіть улюблений вид спорту:');
let strChampion;
if(favoriteSport===null){
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту.`);
    strChampion = '';
}else{
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
    if (champion!=null) {
        strChampion = 'Круто! Хочеш стати '+ champion + '!';
    } else {
        strChampion='';
    }
}

alert(`Твій вік є ${age}. ${strCity} ${city}. ${strChampion}`);

