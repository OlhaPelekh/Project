// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення, отримане випадковим чином (Math.random).

let isTime = false;

const counter = document.querySelector("#counter");
let count = 0;

function startTimer() {
  setTimeout(() => {
    isTime = true;
    alert(`Ваш рахунок: ${count}`);
    count = 0;
    isTime = false;
    counter.textContent = `Рахунок: ${count}`;
    startTimer();
  }, 5000);
}

function updateCounter() {
  count++;
  counter.textContent = `Рахунок: ${count}`;
}

function getRandomNumber() {
  const minRandom = 1;
  const maxRandom = 9;
  return Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
}

function createImg(img) {
  const numberPhoto = getRandomNumber();
  img.setAttribute("src", `img/${numberPhoto}.jpg`);
  return img;
}

function getPositionImg() {
  if (isTime) return;
  updateCounter();
  createImg(img);
  img.onload = function () {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;

    const randomX = Math.random() * (bodyWidth - img.width);
    const randomY = Math.random() * (bodyHeight - img.height);

    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;
  };
}

startTimer();

let img = document.querySelector("img");

if (img) {
  img.addEventListener("mouseover", getPositionImg);
} else {
  img = document.createElement("img");
  const newImg = createImg(img);
  const parentElement = document.querySelector(".task");
  parentElement.appendChild(newImg);
  newImg.addEventListener("mouseover", getPositionImg);
}

// const img = document.createElement('img');
// const numberPhoto = getRandomNumber();
// img.setAttribute('src',`img/${numberPhoto}.jpg`);

// const parentElement=document.querySelector('.task');
// parentElement.appendChild(img);

// const img = document.createElement('img');
// const numberPhoto = getRandomNumber();
// img.setAttribute('src',`img/${numberPhoto}.jpg`);

// const parentElement=document.querySelector('.task');
// parentElement.appendChild(img);

// const img = document.getElementById("task-button");
