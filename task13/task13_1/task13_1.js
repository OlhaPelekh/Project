// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
// Поля:
// Name - обовьязкове текстове поле
// Message - текстове поле не меньше 5 символів
// Phone number - обовьязкове поле типу phone. З початком на +380
// Email - email обовьязково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.

const nameInput = document.querySelector("#name");
const nameSpan = document.querySelector("#nameInvalid");
let formIsValid = false;

nameInput.addEventListener("input", function (event) {
  const name = event.target.value;
  if (name.trim() !== "") {
    nameSpan.innerText = "";
    formIsValid = true;
  } else {
    nameSpan.innerText = `Введіть своє ім'я.`;
    formIsValid = false;
  }
});

const messageInput = document.querySelector("#message");
const messageSpan = document.querySelector("#messageInvalid");

messageInput.addEventListener("input", function (event) {
  const message = event.target.value.trim();
  if (message.length >= 5) {
    messageSpan.innerText = "";
    formIsValid = true;
  } else {
    messageSpan.innerText = "Повідомлення повинно бути не менше 5 символів.";
    formIsValid = false;
  }
});

const phoneNumberInput = document.querySelector("#phone_number");
const phoneNumberSpan = document.querySelector("#phone_numberInvalid");

phoneNumberInput.addEventListener("input", function (event) {
  const phoneNumber = event.target.value;
  const phoneRegex = /^\+380\d{9}$/;
  if (phoneRegex.test(phoneNumber)) {
    phoneNumberSpan.innerText = "";
    formIsValid = true;
  } else {
    phoneNumberSpan.innerText =
      "Неправильно введений номер, введіть +380XXXXXXXXX";
    formIsValid = false;
  }
});

const emailInput = document.querySelector("#email");
const emailSpan = document.querySelector("#emailInvalid");

emailInput.addEventListener("input", function (event) {
  const email = event.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    emailSpan.innerText = "";
    formIsValid = true;
  } else {
    emailSpan.innerText = "Неправильний формат email адреси.";
    formIsValid = false;
  }
});

const form = document.querySelector("#my-form");
let mass = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  if (formIsValid) {
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
      mass.push(` ${key}: ${value}`);
    });
  }
  alert(mass);
});


