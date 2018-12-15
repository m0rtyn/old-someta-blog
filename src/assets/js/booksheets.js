/* eslint-env browser */
const table = document.getElementById('booksTable');
const thead = document.createElement('THEAD');
const tbody = document.createElement('TBODY');
const tfoot = document.createElement('TFOOT');
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

const appendWithAnimation = (animationClass) => {
  if (tbody.lastChild) tbody.lastChild.classList.add(animationClass);
};

const appendTableRow = (tr, i) => {
  const animationClass = 'transition';
  const readingTarget = 50;

  if (i === 0) {
    thead.appendChild(tr);
  }

  if (i <= readingTarget) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        tbody.appendChild(tr);
      }, 1);
      resolve();
    });
    promise.then(appendWithAnimation(animationClass));
  } else {
    tr.classList.add(animationClass);
    tfoot.appendChild(tr);
  }
};

const createTableRow = (row, i, bookArray) => {
  const tr = document.createElement('TR');

  row.forEach((cell, j) => {
    const cellText = document.createTextNode(bookArray[i][j]);
    createTableCell(tr, cellText, j, i === 0 ? 'TH' : 'TD');
  });
  appendTableRow(tr, i);
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
