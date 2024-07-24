// Вивести таблицю Піфагора (10×10), проте цього разу таблиця повинна бути створена динамічно

const mass = [];
(() => {
  for (let i = 0; i <= 10; i++) {
    let row = [];
    for (let j = 0; j <= 10; j++) {
      if (i === 0) {
        row.push(j);
      } else if (j === 0) {
        row.push(i);
      } else {
        row.push(i * j);
      }
    }
    mass.push(row);
  }
})();

console.log(mass);

const table = document.createElement('table');
mass.forEach((row, i) => {
  const tr = document.createElement('tr');
  row.forEach((columnElement, j) => {
    const td = document.createElement('td');
    td.textContent = columnElement === 0 ? '' : columnElement;
    if (i === j && i !== 0) {
      td.style.backgroundColor = 'blue';
    }
    tr.appendChild(td);
  });
  table.appendChild(tr);
});

const parentElement = document.querySelector('div');
parentElement.appendChild(table);


// const table = document.createElement('table');
// for (let i = 0; i < mass.length; i++) {
//   const row = document.createElement('tr');
//   for (let j = 0; j < mass[i].length; j++) {
//     const columnElement = document.createElement('td');
//     columnElement.textContent = mass[i][j] === 0 ? '' : mass[i][j];
//     if (i === j && i !== 0) {
//       columnElement.style.backgroundColor = 'blue';
//     }
//     row.appendChild(columnElement);
//   }
//   table.appendChild(row);
// }
