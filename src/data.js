import {getRandomIntegerFromInterval, getRandomBoolean, Units} from './constants';

const CARDS_COLORS = [`black`, `pink`, `yellow`, `blue`, `red`];

const titleAmount = 3;
const maxTagsAmount = 3;

const getNearestWeekendRandomDate = () => {
  return Date.now() + Math.floor(getRandomIntegerFromInterval(-Units.daysInWeek, Units.daysInWeek + 1)) * Units.hoursInDay * Units.minutesInHour * Units.secondsInMinute * Units.millisecondsInSecond;
};

const getRandomSlicedTagsSet = (tagsSet, maxAmount) => {
  const croppedRandomlySortedTagsSet = [...tagsSet];
  return new Set(croppedRandomlySortedTagsSet.sort(() => (Math.random() - 0.5)).slice(0, maxAmount));
};

export const getTaskData = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][getRandomIntegerFromInterval(0, titleAmount)],
  dueDate: getNearestWeekendRandomDate(),
  tags: getRandomSlicedTagsSet(new Set([
    `cinema`,
    `entertainment`,
    `myself`,
    `cinema`,
    `event`,
    `work`,
    `study`,
    `sports`
  ]), maxTagsAmount),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  color: CARDS_COLORS[getRandomIntegerFromInterval(0, CARDS_COLORS.length)],
  repeatingDays: {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  },
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean(),
  isRepeat: getRandomBoolean(),
});
