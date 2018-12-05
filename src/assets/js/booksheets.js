const xhr = new XMLHttpRequest()

xhr.open(
  'GET',
  'https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec',
  false
)

xhr.send()

const errorMessage = xhr.status + ': ' + xhr.statusText
const createTableCell = (tr, cellText, index, type) => {
  let tableCell = document.createElement(type)
  tr.appendChild(tableCell)
  tableCell.appendChild(cellText)
  switch (index) {
    // case 0:
    //   tableCell.classList.add('recommendation-list-names')
    //   break
    // case 1:
    //   tableCell.classList.add('recommendation-weight')
    //   break
    case 2:
      tableCell.classList.add('book-name')
      break
    // case 3:
    //   tableCell.classList.add('book-tags')
    //   break
    case 4:
      tableCell.classList.add('book-status')
      cellText.data == '✔'
        ? tableCell.classList.add('status-done')
        : cellText.data == '►'
        ? tableCell.classList.add('status-in-progress')
        : cellText.data == '■'
        ? tableCell.classList.add('status-stopped')
        : null
      break
  }
}

const fillTable = () => {
  const bookSheet = JSON.parse(xhr.response).result
  const booksRoot = document.getElementById('books')
  const table = document.getElementById('booksTable')
  const tbody = document.createElement('TBODY')
  const thead = document.createElement('THEAD')

  bookSheet.forEach((row, i, arr) => {
    let tr = document.createElement('TR')
    i === 0 ? thead.appendChild(tr) : tbody.appendChild(tr)
    row.forEach((cell, j, arr) => {
      const cellText = document.createTextNode(bookSheet[i][j])
      i === 0
        ? createTableCell(tr, cellText, j, 'TH')
        : createTableCell(tr, cellText, j, 'TD')
    })
  })

  table.appendChild(thead)
  table.appendChild(tbody)
}

xhr.status != 200 ? console.log(errorMessage) : fillTable()
