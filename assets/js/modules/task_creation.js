const inputList = document.getElementById("task-storage");
const inputContent = document.getElementById("task-content");
const inputDate = document.getElementById("task-date");

const taskSection = document.createElement("section");

taskSection.innerHTML = `<ul class="task-list"></ul>`;
const taskList = taskSection.querySelector(".task-list");
const body = document.querySelector("body");
body.appendChild(taskSection);
export const taskButton = document.getElementsByClassName("task-button")[0];

export function addList() {
  if ((inputList.value === "")||(inputContent.value === "")||(inputDate.value === "")) {
    alert("Please, write something.");
  } else {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-list__task");
    taskItem.innerHTML = inputList.value;
    const taskContent = document.createElement("p");
    taskContent.classList.add("task-list__content");
    taskContent.innerHTML = inputContent.value;
    const taskDate = document.createElement("p");
    taskDate.classList.add("task-list__date");
    taskDate.innerHTML = inputDate.value;
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskDate);
    taskList.appendChild(taskItem);
  }
  inputList.value = "";
  inputContent.value = "";
  inputDate.value = "";
}
