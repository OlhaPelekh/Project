// Пишемо свій слайдер зображень, який повинен:

// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

const architecture = [
  {
    img: 'img/Eifeleva-vezha.jpg',
    description:
      'Освітлення Ейфелевої вежі – це не просто технічний елемент, а справжня мистецька подія, яка вбирає в себе естетику, технологію та неймовірну красу архітектурного шедевра.',
    name: 'Ейфелева вежа',
    city: 'Париж',
  },
  {
    img: 'img/Brandenburzki-vorota.jpg',
    description:
      'Вони стали символом Німеччини і легендарними свідками правління короля Пруссії та інших монархів, пережили Другу світову війну і спорудження Берлінської стіни. Через свою надзвичайну красу, величність й особливості будови вони по праву заслужили звання однієї зі значущих європейських пам’яток.',
    name: 'Бранденбурзькі ворота',
    city: 'Берлін',
  },
  {
    img: 'img/Afinskyi-Akropol.jpg',
    description:
      'Цікаве місце, що претендувало на звання одного з чудес світу і є всесвітньою спадщиною. Знаходиться на вершині пагорба, являє собою ансамбль із храмових та жертовних споруд, зведених у різні періоди, починаючи з XV-XIII століть до нашої ери.',
    name: 'Афінський Акрополь',
    city: 'Афіни',
  },
  {
    img: 'img/Stounkhendzh.jpg',
    description:
      'Легендарний монумент, який, на думку вчених, був створений ще у XX столітті до нашої ери. Історики досі ламають голову, визначаючи справжнє призначення цієї пам’ятки Англії, яка щорічно збирає біля свого підніжжя мільйони туристів.',
    name: 'Стоунхендж',
    city: 'Солсбері',
  },
];

function createSlider() {
  const container = document.querySelector('.container');

  const sliders = document.createElement('div');
  sliders.className = 'sliders';
  container.appendChild(sliders);

  const dots = document.createElement('div');
  dots.className = 'dots';
  for (let i = 0; i < architecture.length; i++) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'slider';
    radio.id = i;
    if (i === 0) {
      radio.checked = true;
    }
    dots.appendChild(radio);
  }
  container.appendChild(dots);

  const arrowLeft = document.createElement('button');
  arrowLeft.className = 'arrowLeft';
  arrowLeft.innerHTML = '&#11164';
  sliders.appendChild(arrowLeft);
  arrowLeft.style.display = 'none';

  const slider = document.createElement('div');
  slider.className = 'slider';

  const img = document.createElement('img');
  img.setAttribute('src', architecture[0].img);
  slider.appendChild(img);

  const sliderContent = document.createElement('div');
  sliderContent.className = 'slider__content';

  const link = document.createElement('a');
  link.className = 'slider__content-img';
  link.href = '#';
  link.innerHTML  = 'Архітектура &#11166';
  sliderContent.appendChild(link);

  const description = document.createElement('h3');
  description.className = 'slider__content-describe';
  description.textContent = architecture[0].description;
  sliderContent.appendChild(description);

  const nameArchitecture = document.createElement('h4');
  nameArchitecture.className = 'slider__content-name';
  nameArchitecture.textContent = architecture[0].name;
  sliderContent.appendChild(nameArchitecture);

  const city = document.createElement('p');
  city.className = 'slider__content-city';
  city.textContent = architecture[0].city;
  sliderContent.appendChild(city);

  slider.appendChild(sliderContent);

  sliders.appendChild(slider);

  const arrowRight = document.createElement('button');
  arrowRight.className = 'arrowRight';
  arrowRight.innerHTML = '&#11166';
  sliders.appendChild(arrowRight);
}

function getSlider(index) {
  document.querySelector('img').setAttribute('src', architecture[index].img);
  document.querySelector('.slider__content-describe').textContent =
    architecture[index].description;
  document.querySelector('.slider__content-name').textContent =
    architecture[index].name;
  document.querySelector('.slider__content-city').textContent =
    architecture[index].city;

  document.querySelectorAll('.dots input[type="radio"]').checked = false;
  document.querySelectorAll('.dots input[type="radio"]')[index].checked = true;

  document.querySelector('.arrowLeft').style.display =
    index === 0 ? 'none' : 'block';
  document.querySelector('.arrowRight').style.display =
    index === architecture.length - 1 ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  createSlider();
  const arrowRight = document.querySelector('.arrowRight');
  const arrowLeft = document.querySelector('.arrowLeft');
  const dots = document.querySelectorAll('.dots input[type="radio"]');

  let index = 0;

  arrowRight.addEventListener('click', function () {
    if (index < architecture.length - 1) {
      index++;
      getSlider(index);
    } 
  });

  arrowLeft.addEventListener('click', function () {
    if (index > 0) {
      index--;
      getSlider(index);
    }
  });

  dots.forEach(dot => {
    dot.addEventListener('click', function (event) {
      index = parseInt(event.target.id);
      console.log(index);
      getSlider(index);
    });
  });
});
