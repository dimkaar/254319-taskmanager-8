export const FILTERS_NAMES = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
export const CARDS_CLASSES = [`card--black`, `card--pink`, `card--yellow`, `card--blue`, `card--red`];
export const TASKS_AMOUNT = 20;

export const main = document.querySelector(`.main`);
export const mainFilter = main.querySelector(`.main__filter`);
export const tasksContainer = main.querySelector(`.board__tasks`);
export const tasksNumber = 7;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const render = (root, content) => {
  root.innerHTML = content;
};
