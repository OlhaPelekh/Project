(() => {
  const nameToFind = prompt(`Enter name`);
  const foundContact = info.findContact(nameToFind);

  if (foundContact) {
    alert(
      `Name: ${foundContact.name}, Number: ${foundContact.number}, Email: ${foundContact.email}`
    );
  } else {
    alert("Name not found");
  }

  alert(`Add contact`);
  const nameToAdd = prompt(`Enter name`);
  const numberToAdd = prompt(`Enter number`);
  const emailToAdd = prompt(`Enter email`);

  info.addContact(nameToAdd, numberToAdd, emailToAdd);

  info.displayContacts();
})();
