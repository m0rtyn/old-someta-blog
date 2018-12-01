const xhr = new XMLHttpRequest()

xhr.open(
  'GET',
  'https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec',
  false
)

xhr.send()

if (xhr.status != 200) {
  console.log(xhr.status + ': ' + xhr.statusText) // пример вывода: 404: Not Found
} else {
  console.log(JSON.parse(xhr.responseText))
  const booksheet = JSON.parse(xhr.responseText)
  const booksRoot = document.getElementById('books')
  let table = booksRoot.getElementsByTagName('table')
  const tbody = document.createElement('TBODY')

  for (let i = 0; i < booksheet.result.length; i++) {
    var tr = document.createElement('TR')
    tbody.appendChild(tr)
    for (var j = 0; j < booksheet.result[i].length; j++) {
      var td = document.createElement('td')
      tr.appendChild(td)
      td.appendChild(document.createTextNode(booksheet.result[i][j]))
    }
  }

  table[0].appendChild(tbody)
}
