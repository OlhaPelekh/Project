//Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

let ladder1 = {
  step: 0,
  up: function () {
    // підніматиме вас на одну сходинку
    this.step++;
  },
  down: function () {
    // опускатиме вас на одну сходинку
    this.step--;
  },
  showStep: function () {
    // показує поточну сходинку
    console.log(this.step);
  },
};

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

ladder1.up();

ladder1.up();

ladder1.down();

ladder1.showStep(); // 1

//Методи up, down і showStep можна викликати по ланцюжку:

let ladder2 = {
  step: 0,
  up: function () {
    // підніматиме вас на одну сходинку
    this.step++;
    return this;
  },
  down: function () {
    // опускатиме вас на одну сходинку
    this.step--;
    return this;
  },
  showStep: function () {
    // показує поточну сходинку
    console.log(this.step);
    return this;
  },
};

ladder2.up().up().down().showStep(); // 1
