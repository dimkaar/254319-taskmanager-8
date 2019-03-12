import {Task} from "./task";
import {TaskEdit} from "./taskEdit";

const FALSE_VALUE = 0;
const TRUE_VALUE = 2;

const fragment = document.createDocumentFragment();
export const tasksContainer = document.querySelector(`.board__tasks`);

export const Units = {
  millisecondsInSecond: 1000,
  secondsInMinute: 60,
  minutesInHour: 60,
  hoursInDay: 24,
  daysInWeek: 7,
  months: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
  startUnit: 1,
};

export const getRandomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomBoolean = () => {
  return getRandomIntegerFromInterval(FALSE_VALUE, TRUE_VALUE);
};

export const render = (root, content) => {
  root.innerHTML = content;
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const getHHMMTime = (date) => {
  const dueDate = new Date(date);
  return (dueDate.getHours() + Units.startUnit) + `:` + dueDate.getMinutes();
};

export const getDDMMDate = (taskDueDate) => {
  const dueDate = new Date(taskDueDate);
  return (dueDate.getDate() + Units.startUnit) + ` ` + Units.months[dueDate.getMonth()];
};

export const checkExpiration = (dateInMilliseconds) => {
  const currentTime = Date.now();
  return currentTime > dateInMilliseconds;
};

export const renderTasks = (array) => {

  let i = 0;
  while (i < array.length) {
    let task = new Task(array[i]);
    let editedTask = new TaskEdit(array[i]);


    task.onEdit = () => {
      editedTask.render();
      tasksContainer.replaceChild(editedTask.element, task.element);
      task.unrender();
    };

    editedTask.onSubmit = () => {
      task.render();
      tasksContainer.replaceChild(task.element, editedTask.element);
      editedTask.unrender();
    };

    fragment.appendChild(task.render());
    i++;
  }

  tasksContainer.appendChild(fragment);
};
