import { daysStay } from "./modules/daysStay.js";
import { addList, taskButton } from "./modules/task_creation.js";

// Add Button Task
taskButton.addEventListener('click', addList);

// Add Due Date
const dueDate = "2023-10-20";
const days = daysStay(dueDate);
const message = document.createElement("p");
message.textContent = `Il reste ${days} jours avant la date limite.`;
const body = document.querySelector("body");
body.appendChild(message);

//