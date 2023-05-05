import { daysStay } from "./daysStay.js";
import { deleteTaskHandler } from "./deleteTaskHandler.js";
const inputList = document.querySelector("input");
const taskSection = document.createElement("section");

taskSection.innerHTML = `<ul class="task-list"></ul>`;
export const taskList = taskSection.querySelector(".task-list");
const body = document.querySelector("body");
body.appendChild(taskSection);

export const taskButton = document.getElementsByClassName("task-button")[0];
export const deleteBtn = document.getElementsByClassName('delete-task');

export function addList() {
  if (inputList.value === "") {
    alert("Please, write something.");
  } else {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-list__task");
    taskItem.innerHTML = inputList.value;
    

    const deleteTask = document.createElement("button");
    deleteTask.type = 'button';
    deleteTask.classList.add('delete-task');

    deleteBtn.deleteTaskHandler(taskItem);

    taskItem.appendChild(deleteTask);
    taskList.appendChild(taskItem);
  
    inputList.value = "";
  }
}


const inputElement = document.createElement("input");
inputElement.type = "date";
inputElement.id = "dueDate";
const message = document.createElement("p");


inputElement.addEventListener("change", () => {
  const dueDate = document.querySelector("#dueDate").value;
  const days = daysStay(dueDate);
  message.textContent = `Il reste ${days} jours avant la date limite.`;
});

body.appendChild(inputElement);
body.appendChild(message);
