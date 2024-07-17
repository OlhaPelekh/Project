// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

const person ={
  name: 'Tom',
  age: 20,
  city: 'New York',
  getData: function(){
    console.log(`Name: ${this.name}.\nAge: ${this.age}.\nCity: ${this.city}.`);
  }
};

person.getData();

