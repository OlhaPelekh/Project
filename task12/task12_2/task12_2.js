// Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу,
// який відслідковуватиме кліки на всіх кнопках.
// Покроковий план:
// 1. Створіть HTML-елементи: батьківський контейнер з декількома вкладеними кнопками.
// 2. Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.
// 3. Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.

const parentElement = document.querySelector(".container");

(function () {
  for (let i = 0; i < 5; i++) {
    const newButton = document.createElement("button");
    newButton.setAttribute("id", i + 1);
    newButton.textContent = `Кнопка ${i + 1}`;
    parentElement.appendChild(newButton);
  }
})();

function showMessage(evt) {
  alert(`Клікнуто на кнопці: ${evt.target.textContent}`);
}

parentElement.addEventListener("click", showMessage);
