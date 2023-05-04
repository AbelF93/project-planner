const inputList = document.querySelector("input");
const taskSection = document.createElement("section");

taskSection.innerHTML = `<ul class="task-list"></ul>`;
export const taskList = taskSection.querySelector(".task-list");
const body = document.querySelector("body");
body.appendChild(taskSection);

export const taskButton = document.getElementsByClassName("task-button")[0];

export function addList() {
  if (inputList.value === "") {
    alert("Please, write something.");
  } else {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-list__task");
    taskItem.innerHTML = inputList.value;
    taskItem.dataset.duedate = "2023-10-20"; // Ajout après push
    taskList.appendChild(taskItem);
  }
  inputList.value = "";
}
