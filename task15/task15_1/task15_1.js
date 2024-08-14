//TODO лист, в якому буде можливість:
// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.

function createTask(event) {
  event.preventDefault();
  const todos = document.querySelector(".js--todos-wrapper");

  const newTodo = document.createElement("li");
  newTodo.className = "todo-item";

  const text = document.querySelector(".form__input");
  if (text.value.trim() === "") {
    text.setCustomValidity("Вкажіть завдання.");
    text.reportValidity();
    return;
  }

  const input = document.createElement("input");
  input.type = "checkbox";

  const description = document.createElement("span");
  description.className = "todo-item__description";
  description.textContent = text.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "todo-item__delete";
  deleteBtn.textContent = "Видалити";

  newTodo.appendChild(input);
  newTodo.appendChild(description);
  newTodo.appendChild(deleteBtn);

  todos.appendChild(newTodo);

  text.value = "";

  saveTodos();
}

function deleteTask(event) {
  if (event.target.tagName === "BUTTON") {
    const todos = document.querySelector(".js--todos-wrapper");
    const todoToRemove = event.target.parentNode;
    todos.removeChild(todoToRemove);
    saveTodos();
  }
}

function toggleCompletion(event) {
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    event.target.parentNode.classList.toggle("todo-item--checked");
    saveTodos();
  }
}

function saveTodos() {
  const todos = document.querySelectorAll(".todo-item");
  const saveTodos = [];

  todos.forEach(todo => {
    const description = todo.querySelector(
      ".todo-item__description"
    ).textContent;
    const isChecked = todo.querySelector("input[type='checkbox']").checked;
    saveTodos.push({ description, isChecked });
  });
  localStorage.setItem("todos", JSON.stringify(saveTodos));
}

function loadTodos() {
  const parsedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const todos = document.querySelector(".js--todos-wrapper");

  parsedTodos.forEach((todo) => {
    const newTodo = document.createElement("li");
    newTodo.className = "todo-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isChecked;
    if(todo.isChecked){
      newTodo.classList.toggle("todo-item--checked");
    }

    const description = document.createElement("span");
    description.className = "todo-item__description";
    description.textContent = todo.description;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-item__delete";
    deleteBtn.textContent = "Видалити";

    newTodo.appendChild(input);
    newTodo.appendChild(description);
    newTodo.appendChild(deleteBtn);

    todos.appendChild(newTodo);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const newTask = document.querySelector(".js--form");
  newTask.addEventListener("submit", createTask);

  const textInput = document.querySelector(".form__input");
  textInput.addEventListener("input", function () {
    if (textInput.value.trim() !== "") {
      textInput.setCustomValidity("");
    }
  });

  const task = document.querySelector(".js--todos-wrapper");
  task.addEventListener("click", deleteTask);
  task.addEventListener("click", toggleCompletion);

  loadTodos();
});
