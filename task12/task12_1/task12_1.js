// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt
//  посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const inputButton = document.createElement("button");
inputButton.setAttribute("id", "inputButton");
inputButton.textContent = "Введіть посилання";

const goButton = document.createElement("button");
goButton.setAttribute("id", "goButton");
goButton.textContent = "Перейти за посиланням";

const parentElement = document.querySelector("div");
parentElement.appendChild(inputButton);
parentElement.appendChild(goButton);

let url = "";
function inputUrl() {
  if (inputButton) {
    url = prompt("Введіть посилання на сторінку");
  }
}
function goUrl() {
  if (url) {
    if (goButton) {
      window.open(url);
    }
  } else {
    alert("Введіть посилання");
  }
}

inputButton.addEventListener("click", inputUrl);
goButton.addEventListener("click", goUrl);
