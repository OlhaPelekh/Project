// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості.
// Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце,
// в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того,
// щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів)
// і показати використання цих методів.

function Student(name, surname, yearOfBirth, gradesArray) {
  this.name = name;
  this.surname = surname;
  this.yearOfBirth = yearOfBirth;
  this.gradesArray = gradesArray;
  this.attendanceArray = new Array(25).fill(null);

  this.getAge = function () {
    let date = new Date();
    let age = date.getFullYear() - this.yearOfBirth;
    return age;
  };

  this.getAverageGrade = function () {
    let average = 0;
    let count = this.gradesArray.length;
    this.gradesArray.forEach((grade) => {
      average += grade;
    });
    return average / count;
  };

  let index = 0;

  this.present = function () {
    if (index < this.attendanceArray.length) {
      this.attendanceArray[index] = true;
      index++;
    }
  };
  this.absent = function () {
    if (index < this.attendanceArray.length) {
      this.attendanceArray[index] = false;
      index++;
    }
  };
  this.getAverageAttendance = function () {
    let average = 0;
    let count = 0;
    this.attendanceArray.forEach((attendance) => {
      if (attendance === true || attendance === false) {
        average += attendance;
        count++;
      }
    });
    return average / count;
  };

  this.summary = function () {
    if (this.getAverageGrade() > 90 && this.getAverageAttendance() > 0.9) {
      console.log("Молодець!");
    } else if (
      this.getAverageGrade() > 90 ||
      this.getAverageAttendance() > 0.9
    ) {
      console.log("Добре, але можна краще!");
    } else {
      console.log("Редиска!");
    }
  };

  this.getData = function () {
    console.log(`Ім'я: ${this.name}. Прізвище: ${this.surname}. Вік: ${this.getAge()}.`);
    console.log(
      `Середня відвідуваність: ${this.getAverageAttendance()}. Середній бал: ${this.getAverageGrade()}.`
    );
    this.summary();
  };
}

const student1 = new Student(
  "John",
  "Nikol",
  1999,
  [90, 95, 88, 88, 88, 99, 100, 75, 99, 98, 98, 95, 95, 95, 95, 95, 94]
);

for (let i = 0; i < student1.attendanceArray.length - 1; i++) {
  student1.present();
}
student1.absent();
student1.present();

student1.getData();

const student2 = new Student(
  "Lilly",
  "Jonni",
  2001,
  [90, 95, 88, 88, 88, 99, 71, 75, 66, 98, 98, 55, 95, 95, 77, 76, 66]
);

for (let i = 0; i < student2.attendanceArray.length; i++) {
  if (i % 5 === 0) {
    student2.absent();
  }
  student2.present();
}

student2.getData();
