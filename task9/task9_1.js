// Дізнатись суму всіх зарплат користувачів.
// Об'єкт може містити невідому кількість департаментів та співробітників.

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: {
      web1: [
        { name: "Peter", salary: 2000 },
        { name: "Alex", salary: 1800 },
      ],
      web2: [
        { name: "Peter", salary: 150 },
        { name: "Alex", salary: 150 },
      ],
    },
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
function salaryDepartment(department) {
  if (department.length === 0) {
    return 0;
  }
  return department[0].salary + salaryDepartment(department.slice(1));
}
function salaryEmployees(company) {
  let sum = 0;
  if (Array.isArray(company)) {
    return salaryDepartment(company);
  }
  for (let temp of Object.values(company)) {
    sum += salaryEmployees(temp);
  }
  return sum;
}

console.log("Сума всіх зарплат користувачів:", salaryEmployees(company));
