import * as constants from './constants';
import renderTasks from './tasks';

const createFilter = (name, amount, checked = false, disabled = false) => {
  return `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${checked === true ? checked : ``}
    ${disabled === true ? disabled : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__all-count">${amount}</span>
    </label>`;
};

export const renderFilters = () => {
  let content = ``;
  constants.FILTERS_NAMES.forEach((name) => {
    content += createFilter(name, constants.getRandomInt(0, constants.TASKS_AMOUNT));
  });

  constants.mainFilter.addEventListener(`click`, () => {
    renderTasks(constants.getRandomInt(0, constants.TASKS_AMOUNT));
  }, true);

  constants.render(constants.mainFilter, content);
};

export {default as renderTasks} from './tasks';
