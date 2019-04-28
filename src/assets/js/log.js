/* eslint-disable */

(function () {
  const birthDate = new Date('1993-10-13');
  const now = new Date();
  const weeksInYear = 52;
  const week = 1000 * 60 * 60 * 24 * 7;
  const passedWeeks = (now - birthDate) / week;
  const lifespan = 60;

  function renderWeek(number) {
    const node = document.createElement('div');

    node.classList.add('week');

    if (number <= passedWeeks) {
      node.classList.add('week-passed');
    }

    return node;
  }

  function renderTimeline(targetNode) {
    for (let week = 1; week <= weeksInYear * lifespan; week++) {
      targetNode.appendChild(renderWeek(week));
    }
  }

  renderTimeline(document.getElementById('life-calendar'));
}());
