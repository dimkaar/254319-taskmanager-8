import {renderFilters} from './filter';
import {renderTasks, tasksContainer} from './constants';
import {tasksData} from './data';

renderFilters();

while (tasksContainer.hasChildNodes()) {
  tasksContainer.removeChild(tasksContainer.firstChild);
}

renderTasks(tasksData);
