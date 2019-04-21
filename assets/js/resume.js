"use strict";

/* eslint-env browser */
var MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

var a = new Date('2016-05-01');
var b = new Date();
var diffInDays = dateDiffInDays(a, b); // const integerYears = Math.floor(diffInDays / 365);
// const integerMonthes = Math.floor((diffInDays - integerYears * 365) / 30.5);
// const integerDays = Math.floor(
//   diffInDays - integerYears * 365 - integerMonthes * 30.5,
// );

var output = document.getElementById('time'); // const passedTime = `${integerYears}y ${integerMonthes}m ${integerDays}d`;

var roundedPassedDays = Math.floor(diffInDays / 10) * 10;
output.innerHTML = "~".concat(roundedPassedDays, " \u0434\u043D\u0435\u0439");