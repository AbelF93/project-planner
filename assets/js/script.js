import { daysStay } from "./modules/daysStay.js";
import { addList, taskButton } from "./modules/task_creation.js";
import { sortTasks } from "./sortTasks.js";


// Button add Task
taskButton.addEventListener("click", addList);

// Add Due Date
// const dueDate = "2023-10-20";
const days = daysStay(dueDate);
const message = document.createElement("p");
// Pour tester le nb de jours restants en brut
// message.textContent = `Il reste ${days} jours avant la date limite.`;
const body = document.querySelector("body");
body.appendChild(message);

// Add sortTask
const sortContainer = document.createElement("div");

const sortLabel = document.createElement("label");
sortLabel.textContent = "Trier par :";
sortContainer.appendChild(sortLabel);

const sortSelect = document.createElement("select");
sortSelect.addEventListener("change", sortTasks);
sortContainer.appendChild(sortSelect);

const sortOptionName = document.createElement("option");
sortOptionName.value = "name";
sortOptionName.textContent = "Nom";
sortSelect.appendChild(sortOptionName);

const sortOptionDays = document.createElement("option");
sortOptionDays.value = "days";
sortOptionDays.textContent = "Jours restants";
sortSelect.appendChild(sortOptionDays);

const sortButton = document.createElement("button");
sortButton.textContent = "Trier";
sortButton.addEventListener("click", sortTasks);
sortContainer.appendChild(sortButton);

body.appendChild(sortContainer);

// Add localStorage
const taskInput = document.getElementById("task-storage");
const taskList = document.querySelector(".task-list");

if (localStorage.getItem("tasks")) {
  taskList.innerHTML = localStorage.getItem("tasks");
}

taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const taskName = taskInput.value;

    // Create a new task element
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-list__task");
    taskItem.innerHTML = taskName;
    taskList.appendChild(taskItem);
    localStorage.setItem("tasks", taskList.innerHTML);
    taskInput.value = "";
  }
});
