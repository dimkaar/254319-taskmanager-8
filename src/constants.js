const FALSE_VALUE = 0;
const TRUE_VALUE = 2;

export const Units = {
  millisecondsInSecond: 1000,
  secondsInMinute: 60,
  minutesInHour: 60,
  hoursInDay: 24,
  daysInWeek: 7,
};

export const getRandomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomBoolean = () => {
  return getRandomIntegerFromInterval(FALSE_VALUE, TRUE_VALUE);
};

export const render = (root, content) => {
  root.innerHTML = content;
};
