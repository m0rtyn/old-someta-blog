const xhr = new XMLHttpRequest()

xhr.open(
  'GET',
  'https://script.google.com/macros/s/AKfycbyncOZcKRu3_shSLYYescpIelkontkjdTuCRONzfXIXK0Jl5Vqb/exec',
  false
)

xhr.send();

if (xhr.status != 200) {
  alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
} else {
  alert(xhr.responseText); // responseText -- текст ответа.
