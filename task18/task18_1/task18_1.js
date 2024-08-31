// Реалізувати таймер відліку:
// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

const divTimer = document.querySelector(".timer");
let valueTimer;

do {
  valueTimer = prompt("Введіть секунди", 85);
} while (
  isNaN(valueTimer) ||
  valueTimer === null ||
  valueTimer.trim() === "" ||
  valueTimer < 0
);

function getTime() {
  let minutes = Math.floor(valueTimer / 60);
  let seconds = valueTimer % 60;

  minutes = minutes >= 10 ? minutes : `0${minutes}`;
  seconds = seconds >= 10 ? seconds : `0${seconds}`;

  divTimer.textContent = `${minutes}:${seconds}`;

  if (valueTimer === 0) {
    clearInterval(timer);
    divTimer.textContent = `00:00`;
  } else {
    valueTimer--;
  }
}

getTime();
const timer = setInterval(getTime, 1000);
