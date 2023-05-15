import { daysStay } from "./modules/daysStay.js";
//import { displayTasks } from "./modules/local_storage.js";
import { addList, taskButton } from "./modules/task_creation.js";
import { statusUpdate, updateTaskStatus } from "./modules/task_status.js";
import { sortTasks } from "./sortTasks.js";



//displayTasks();
taskButton.addEventListener("click", addList);

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

document.body.appendChild(sortContainer);


//Function to add a class using status-checkboxes


