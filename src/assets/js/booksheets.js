const booksRoot = document.getElementById('books')
const table = document.getElementById('booksTable')
const tbody = document.createElement('TBODY')
const thead = document.createElement('THEAD')
const secondaryTbody = document.createElement('TBODY')
let index = 0;

const createTableParts = bookArray => {
  table.appendChild(thead)
  table.appendChild(tbody)

  bookArray.forEach((row, i, arr) => {
    setTimeout(() => {
      fillTableParts(row, i, bookArray)
      index = i
      if (index === 50) table.appendChild(secondaryTbody)
    }, 100 * i);
  })
}

const fillTableParts = (row, i, bookArray) => {
  let tr = document.createElement('TR')
  row.forEach((cell, j, arr) => {
    const cellText = document.createTextNode(bookArray[i][j])
    createTableCell(tr, cellText, j, i === 0 ? 'TH' : 'TD')
  })
  createTableRow(tr, i)
}

const createTableRow = (tr, i) => {
  const animationClass = 'transition'
  if (i === 0) {
    thead.appendChild(tr)
  } else if (i <= 33) {
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        tbody.appendChild(tr)
      }, 1);
      resolve()
    });
    promise
      .then(() => {
        console.log(i, tbody.lastChild)
        tbody.lastChild &&
          tbody.lastChild.classList.add(animationClass)
      })
  } else {
    tr.classList.add(animationClass)
    secondaryTbody.appendChild(tr)
  }
}

const createTableCell = (tr, cellText, index, type) => {
  let tableCell = document.createElement(type)
  tr.appendChild(tableCell)
  tableCell.appendChild(cellText)
  switch (index) {
    case 0:
      tableCell.classList.add('recommendation-list-names')
      break
    case 1:
      tableCell.classList.add('recommendation-weight')
      break
    case 2:
      tableCell.classList.add('book-name')
      break
    case 3:
      tableCell.classList.add('book-tags')
      break
    case 4:
      tableCell.classList.add('book-status')
      setBookStatus(tableCell, cellText.data)
      break
  }
}

const setBookStatus = (cell, text) => {
  switch (text) {
    case '✔':
      cell.classList.add('status-done')
      break
    case '►':
      cell.classList.add('status-in-progress')
      break
    case '■':
      cell.classList.add('status-stopped')
    default:
      break
  }
}

fetch(
    'https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec'
  )
  .then(response => response.json())
  .then(({
    result
  }) => createTableParts(result))