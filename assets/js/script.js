import { daysStay } from "./modules/daysStay.js";
import { addList, taskButton } from "./modules/task_creation.js";
import { sortTasks } from "./sortTasks.js";


// Button add Task
taskButton.addEventListener("click", addList);

const message = document.createElement("p");
message.classList.add('task-list__date__echeance')

const body = document.querySelector("body");
body.appendChild(message);

const dueDateElem = document.querySelector(".task-list__date");
if (dueDateElem !== null) {
  const dueDateStr = dueDateElem.textContent.trim();
  const dueDateObj = new Date(dueDateStr);
  const days = daysStay(dueDateObj);
  message.textContent = `Days remaining: ${days}`;
  dueDateElem.parentNode.appendChild(message);
}


// Add sortTask
const sortContainer = document.createElement("div");

const sortLabel = document.createElement("label");
sortLabel.textContent = "Sort by :";
sortContainer.appendChild(sortLabel);

const sortSelect = document.createElement("select");
sortSelect.addEventListener("change", sortTasks);
sortContainer.appendChild(sortSelect);

const sortOptionName = document.createElement("option");
sortOptionName.value = "name";
sortOptionName.textContent = "Name";
sortSelect.appendChild(sortOptionName);

const sortOptionDays = document.createElement("option");
sortOptionDays.value = "days";
sortOptionDays.textContent = "Days remaining";
sortSelect.appendChild(sortOptionDays);

const sortButton = document.createElement("button");
sortButton.textContent = "Sort";
sortButton.addEventListener("click", sortTasks);
sortContainer.appendChild(sortButton);

document.body.appendChild(sortContainer);

