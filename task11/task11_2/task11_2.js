// Є блок із текстом на сторінці та кнопка.
// При натисканні на кнопку текст змінює колір.
// При повторному натисканні – повертається попередній колір.

const button = document.getElementById("task-button");

function changeText() {
  const textStyle = document.querySelector(".task__description");
  if (textStyle.style.color === "black" || textStyle.style.color === "") {
    textStyle.style.color = "blue";
  } else {
    textStyle.style.color = "black";
  }
}

if (button) {
  button.addEventListener("click", changeText);
}
