"use strict";

/* eslint-env browser */
var table = document.getElementById('booksTable');
var thead = document.createElement('THEAD');
var tbody = document.createElement('TBODY');
var tfoot = document.createElement('TFOOT');
var index = 0; // const setBookStatus = (cell, text) => {
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

var createTableCell = function createTableCell(tr, cellText, i, type) {
  var tableCell = document.createElement(type);
  var yearTitleRegex = /^(20\d{2}(-20\d{2})?)|детство$/ig;
  tableCell.appendChild(cellText);
  tr.appendChild(tableCell); // console.log(yearTitleRegex.test(cellText));

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

var appendTableRow = function appendTableRow(tr, i) {
  var animationClass = 'transition';
  var readingTarget = 50;

  if (i === 0) {
    thead.appendChild(tr);
  } else if (i <= readingTarget) {
    var promise = new Promise(function (resolve) {
      var appendedChild = tbody.appendChild(tr);
      setTimeout(function () {
        resolve(appendedChild);
      }, 133);
    });
    promise.then(function (child) {
      return child.classList.add(animationClass);
    });
  } else {
    tr.classList.add(animationClass);
    tfoot.appendChild(tr);
  }
};

var createTableRow = function createTableRow(row, i, bookArray) {
  var tr = document.createElement('TR');
  row.forEach(function (cell, j) {
    var cellText = document.createTextNode(bookArray[i][j]);
    createTableCell(tr, cellText, j, 'TD');
  });
  appendTableRow(tr, i);
};

var fillTableParts = function fillTableParts(bookArray) {
  bookArray.forEach(function (row, i) {
    setTimeout(function () {
      createTableRow(row, i, bookArray);
      index = i;
      if (index === 50) table.appendChild(tfoot);
    }, 100 * i);
  });
};

var createTable = function createTable(data) {
  table.appendChild(tbody);
  return data;
};

fetch('https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec').then(function (response) {
  return response.json();
}).then(function (_ref) {
  var result = _ref.result;
  return createTable(result);
}).then(fillTableParts);