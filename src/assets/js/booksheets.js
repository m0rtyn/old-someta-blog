/* eslint-env browser */
const table = document.getElementById('booksTable');
const thead = document.createElement('THEAD');
const tbody = document.createElement('TBODY');
const tfoot = document.createElement('TFOOT');
let index = 0;

// const setBookStatus = (cell, text) => {
//   switch (text) {
//     case '✔':
//       cell.classList.add('status-done');
//       break;
//     case '►':
//       cell.classList.add('status-in-progress');
//       break;
//     case '■':
//       cell.classList.add('status-stopped');
//       break;
//     default:
//       break;
//   }
// };

const createTableCell = (tr, cellText, i, type) => {
  const tableCell = document.createElement(type);
  const yearTitleRegex = /^(20\d{2}(-20\d{2})?)|детство$/ig;

  tableCell.appendChild(cellText);
  tr.appendChild(tableCell);
  // console.log(yearTitleRegex.test(cellText));

  if (yearTitleRegex.test(cellText.data)) {
    tr.classList.add('year-heading');
  }

  switch (i) {
    case 0:
      tableCell.classList.add('book-name');
      break;
    case 1:
      tableCell.classList.add('book-review');
      break;
    // case 2:
    //   tableCell.classList.add('book-tags');
    //   break;
    // case 3:
    //   tableCell.classList.add('book-status');
    //   setBookStatus(tableCell, cellText.data);
    //   break;
    default:
      break;
  }
};

const appendTableRow = (tr, i) => {
  const animationClass = 'transition';
  const readingTarget = 50;

  if (i === 0) {
    thead.appendChild(tr);
  } else if (i <= readingTarget) {
    const promise = new Promise((resolve) => {
      const appendedChild = tbody.appendChild(tr);
      setTimeout(() => {
        resolve(appendedChild);
      }, 133);
    });
    promise
      .then(child => child.classList.add(animationClass));
  } else {
    tr.classList.add(animationClass);
    tfoot.appendChild(tr);
  }
};

const createTableRow = (row, i, bookArray) => {
  const tr = document.createElement('TR');

  row.forEach((cell, j) => {
    const cellText = document.createTextNode(bookArray[i][j]);
    createTableCell(tr, cellText, j, 'TD');
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
  table.appendChild(tbody);
  return data;
};

fetch(
  'https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec',
)
  .then(response => response.json())
  .then(({
    result,
  }) => createTable(result))
  .then(fillTableParts);
