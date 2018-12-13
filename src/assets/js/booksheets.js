const booksRoot = document.getElementById('books')
const table = document.getElementById('booksTable')
const tbody = document.createElement('TBODY')
const thead = document.createElement('THEAD')

const createTable = bookArray => {
  table.appendChild(thead)
  table.appendChild(tbody)

  bookArray.forEach((row, i, arr) => {
    setTimeout(() => {
      fillTable(row, i, bookArray)
    }, 100 * i)
  })
}

const fillTable = (row, i, bookArray) => {
    let tr = document.createElement('TR')
    row.forEach((cell, j, arr) => {
      const cellText = document.createTextNode(bookArray[i][j])
      createTableCell(tr, cellText, j, i === 0 ? 'TH' : 'TD')
    })
    if (i === 0) {
      thead.appendChild(tr)
    } else {
      let promise = new Promise((resolve) => {
          setTimeout(() => {
              tbody.appendChild(tr)
            }, 33; resolve()
          }); promise
        .then(
          () => tbody.lastChild.classList.add('transition')
        )
      };
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
      }) => createTable(result))