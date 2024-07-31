// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю
// додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити
// обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.
// Покроковий план:
// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const newUl = document.createElement("ul");
const parentElement = document.querySelector(".container");

const headline = document.createElement('h3');
headline.textContent = 'Todo List';
parentElement.appendChild(headline);

const div = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Додати';
div.appendChild(input);
div.appendChild(button);
parentElement.appendChild(div);

(function () {
  for (let i = 0; i < 3; i++) {
    const task = document.createElement("li");
    task.setAttribute("id", `task ${i + 1}`);

    const taskText = document.createElement("p");
    taskText.textContent = `Завдання ${i + 1}`;
    task.appendChild(taskText);

    const newButton = document.createElement("button");
    newButton.setAttribute("id", `button ${i + 1}`);
    newButton.textContent = "Видалити";
    task.appendChild(newButton);

    newUl.appendChild(task);
  }
})();
parentElement.appendChild(newUl);

function removeTask(evt){
  if (evt.target.tagName === 'BUTTON') {
    const elementToRemove = evt.target.parentNode;
    newUl.removeChild(elementToRemove);
  }
}

function addTask(){
  const task = document.createElement("li");

  const taskText = document.createElement("p");
  taskText.textContent = input.value;
  task.appendChild(taskText);

  const newButton = document.createElement("button");
  newButton.textContent = "Видалити";
  task.appendChild(newButton);

  newUl.appendChild(task);
  input.value='';
}

function toggleCompletion(evt) {
  if (evt.target.tagName === 'P') {
    evt.target.classList.toggle('completed');
  }
}

newUl.addEventListener('click', removeTask);
newUl.addEventListener('click', toggleCompletion);
button.addEventListener('click', addTask);