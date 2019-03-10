import {getRandomIntegerFromInterval, render} from "./constants";
import {renderTasks} from './constants';

export const FILTERS_NAMES = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
export const TASKS_AMOUNT = 20;

const mainFilter = document.querySelector(`.main__filter`);

const createFilter = (name, amount, checked = false, disabled = false) => {
  return `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${checked ? checked : ``}
    ${disabled ? disabled : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__all-count">${amount}</span>
    </label>`;
};

export const renderFilters = () => {
  let content = ``;
  FILTERS_NAMES.forEach((name) => {
    content += createFilter(name, getRandomIntegerFromInterval(0, TASKS_AMOUNT));
  });

  mainFilter.addEventListener(`click`, () => {
    renderTasks(getRandomIntegerFromInterval(0, TASKS_AMOUNT));
  }, true);

  render(mainFilter, content);
};
