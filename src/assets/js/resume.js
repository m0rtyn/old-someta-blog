const _MS_PER_DAY = 1000 * 60 * 60 * 24

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

  return Math.floor((utc2 - utc1) / _MS_PER_DAY)
}

const a = new Date('2016-05-01')
const b = new Date()
const diffInDays = dateDiffInDays(a, b)
const integerYears = Math.floor(diffInDays / 365)
const integerMonthes = Math.floor((diffInDays - integerYears * 365) / 30.5)
const integerDays = Math.floor(
  diffInDays - integerYears * 365 - integerMonthes * 30.5
)
const output = document.getElementById('time')
const passedTime = `${integerYears}y ${integerMonthes}m ${integerDays}d`
const roundedPassedDays = Math.floor(diffInDays / 10) * 10

output.innerHTML = `~${roundedPassedDays} дней`
