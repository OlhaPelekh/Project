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

nameInput.addEventListener("input", function (event) {
  const name = event.target.value;
  if (name.trim() !== "") {
    nameSpan.innerText = "";
  } else {
    nameSpan.innerText = `Введіть своє ім'я.`;
  }
});

const messageInput = document.querySelector("#message");
const messageSpan = document.querySelector("#messageInvalid");

messageInput.addEventListener("input", function (event) {
  const message = event.target.value.trim();
  if (message.length >= 5) {
    messageSpan.innerText = "";
  } else {
    messageSpan.innerText = "Повідомлення повинно бути не менше 5 символів.";
  }
});

const phoneNumberInput = document.querySelector("#phone_number");
const phoneNumberSpan = document.querySelector("#phone_numberInvalid");

phoneNumberInput.addEventListener("input", function (event) {
  const phoneNumber = event.target.value;
  const phoneRegex = /^\+380\d{9}$/;
  if (phoneRegex.test(phoneNumber)) {
    phoneNumberSpan.innerText = "";
  } else {
    phoneNumberSpan.innerText =
      "Неправильно введений номер, введіть +380XXXXXXXXX";
  }
});

const emailInput = document.querySelector("#email");
const emailSpan = document.querySelector("#emailInvalid");

emailInput.addEventListener("input", function (event) {
  const email = event.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    emailSpan.innerText = "";
  } else {
    emailSpan.innerText = "Неправильний формат email адреси.";
  }
});

const allInput = document.querySelectorAll(".input");
const allSpan = document.querySelectorAll("span");

function formIsValid() {
  let isValid = true;

  allInput.forEach((element) => {
    if (element.value.trim() === "") {
      isValid = false;
    }
  });

  allSpan.forEach((element) => {
    if (element.innerText !== "") {
      isValid = false;
    }
  });
  return isValid;
}

const form = document.querySelector("#my-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (formIsValid()) {
    const formData = new FormData(form);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    const url = "https://example.com/api/submit";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Помилка: " + error);
      });
    alert("Успішно");
  } else {
    alert("Bad");
  }
});
