export const mainElement = document.querySelector(`.main`);

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const render = (root, content) => {
  root.innerHTML = content;
};
