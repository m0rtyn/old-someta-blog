/* eslint-env browser */
const table = document.getElementById('booksTable');
const thead = document.createElement('THEAD');
const tbody = document.createElement('TBODY');
const tfoot = document.createElement('TFOOT');
const queue = [];
let index = 0;

const setBookStatus = (cell, text) => {
  switch (text) {
    case '✔':
      cell.classList.add('status-done');
      break;
    case '►':
      cell.classList.add('status-in-progress');
      break;
    case '■':
      cell.classList.add('status-stopped');
      break;
    default:
      break;
  }
};

const createTableCell = (tr, cellText, i, type) => {
  const tableCell = document.createElement(type);
  tr.appendChild(tableCell);
  tableCell.appendChild(cellText);
  switch (i) {
    case 0:
      tableCell.classList.add('recommendation-weight');
      break;
    case 1:
      tableCell.classList.add('book-name');
      break;
    case 2:
      tableCell.classList.add('book-tags');
      break;
    case 3:
      tableCell.classList.add('book-status');
      setBookStatus(tableCell, cellText.data);
      break;
    default:
      break;
  }
};

const render = (target, row) => {
  target.appendChild(row);
};

const appendTableRow = (target, row, isAsync = false) => {
  const animationClass = 'transition';

  if (isAsync) {
    queue.push([render, [target, row]]);
    queue.push([row.classList.add, [animationClass]]);
  } else {
    render(target, row);
  }
};

if (queue === []) {
  setInterval(() => {
    const task = queue.pop();
    task[0].apply(task[1]);
  }, 1);
}

const defineTablePart = (tr, i) => {
  const readingTarget = 50;

  if (i === 0) {
    appendTableRow(thead, tr);
  } else if (i <= readingTarget) {
    appendTableRow(tbody, tr, true);
  } else {
    appendTableRow(tfoot, tr);
  }
};

const createTableRow = (row, i, bookArray) => {
  const tr = document.createElement('TR');

  row.forEach((cell, j) => {
    const cellText = document.createTextNode(bookArray[i][j]);
    createTableCell(tr, cellText, j, i === 0 ? 'TH' : 'TD');
  });
  defineTablePart(tr, i);
};

const fillTableParts = (bookArray) => {
  bookArray.forEach((row, i) => {
    setTimeout(() => {
      createTableRow(row, i, bookArray);
      index = i;
      if (index === 50) table.appendChild(tfoot);
    }, 100 * i);
  });
};

const createTable = (data) => {
  table.appendChild(thead);
  table.appendChild(tbody);
  fillTableParts(data);
};

fetch(
  'https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec',
)
  .then(response => response.json())
  .then(({
    result,
  }) => createTable(result));
