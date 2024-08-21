// Створіть клас BankAccount, який буде представляти банківський рахунок.
// Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {
  #balance;
  constructor(balance = 0) {
    this.#balance = balance;
  }
  getBalance() {
    return this.#balance;
  }
  deposit(sum) {
    if (sum > 0) {
      this.#balance += sum;
    } else {
      console.log("Неможлива операція");
    }
  }
  withdraw(sum) {
    if (sum > 0 && sum <= this.#balance) {
      this.#balance -= sum;
    } else if (sum > this.#balance) {
      console.log("Недостатньо коштів");
    } else {
      console.log("Неможлива операція");
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
