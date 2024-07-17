// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі.
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const info = {
  contacts: [
    { name: "Tom", number: "0123456789", email: "tom@gmail.com" },
    { name: "Jerry", number: "0234567891", email: "jerry@gmail.com" },
    { name: "Droopy", number: "0345678912", email: "droopy@gmail.com" },
    { name: "Spike", number: "0456789123", email: "spike@gmail.com" },
  ],
  findContact: function (nameToFind) {
    return this.contacts.find(
      (contact) => contact.name.toLowerCase() === nameToFind.toLowerCase()
    );
  },
  addContact: function (name, number, email) {
    if (name && number && email) {
      return this.contacts.push({ name, number, email });
    } else return false;
  },
  displayContacts: function () {
    let allContacts = [];
    this.contacts.forEach((contact) => {
      allContacts.push(
        `\nName: ${contact.name}, Number: ${contact.number}, Email: ${contact.email}`
      );
    });
    alert(allContacts);
  },
};

(() => {
  const nameToFind = prompt("Enter name");
  const foundContact = info.findContact(nameToFind);

  if (foundContact) {
    alert(
      `Name: ${foundContact.name}, Number: ${foundContact.number}, Email: ${foundContact.email}`
    );
  } else {
    alert("Name not found");
  }

  alert("Add contact");
  const nameToAdd = prompt("Enter name");
  const numberToAdd = prompt("Enter number");
  const emailToAdd = prompt("Enter email");

  info.addContact(nameToAdd, numberToAdd, emailToAdd);

  info.displayContacts();
})();
