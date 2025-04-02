


// const table = document.querySelector('table');
// table.id = 'table';
// table.style.border = "2px solid red";

// // for (let i = 0; i < 6; i++) {
// document.querySelectorAll('table tr').forEach(('tr', index) => { 
//   tr.classList.add("rows"));
// })

let row;
const rows = document.querySelectorAll('table tr');

document.querySelectorAll('table tr').forEach(function (row, index) {
  row += index;
  rows.id = 'row';
});

console.log(rows.id);