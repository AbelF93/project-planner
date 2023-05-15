
import { daysStay } from "./daysStay.js";
import { deleteTaskHandler } from "./deleteTaskHandler.js";
import { saveTasks } from "./local_storage.js";
import { statusUpdate } from "./task_status.js";

const inputList = document.getElementById("task-storage");
const inputContent = document.getElementById("task-content");
const inputDate = document.getElementById("task-date");

const taskSection = document.createElement("section");

taskSection.innerHTML = `<ul class="task-list"></ul>`;
export const taskList = taskSection.querySelector(".task-list");
const body = document.querySelector("body");
body.appendChild(taskSection);

export const taskButton = document.getElementsByClassName("task-button")[0];
export const deleteBtn = document.getElementsByClassName("delete-task");
const inputDueDate = document.getElementById("task-due-date");

export function addList() {
  if (
    inputList.value === "" ||
    inputContent.value === "" ||
    inputDate.value === ""
  ) {
    alert("Please, write something.");
  } else {//Create a task name
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-list__task");
    taskItem.innerHTML = inputList.value;
    taskItem.dataset.duedate = inputDate.value;
    // Create a description
    const taskContent = document.createElement("p");
    taskContent.classList.add("task-list__content");
    taskContent.innerHTML = inputContent.value;
    // Create a date
    const taskDate = document.createElement("p");
    taskDate.classList.add("task-list__date");
    taskDate.innerHTML = inputDate.value;
    // Add the remaining days 
    const remainingDays = daysStay(inputDate.value);
    const taskDays = document.createElement("p");
    taskDays.classList.add("task-list__date__due");
    taskDays.innerHTML = `Days remaining: ${remainingDays}`;
    //Add Checkboxes
    const statusCheckboxes = document.createElement('div');
        statusCheckboxes.setAttribute("class","task__checkboxes");
              const toDoStatusBox = document.createElement('div');
              toDoStatusBox.setAttribute("class","status-checkbox");
                   const toDoCheckbox = document.createElement('input');
                   toDoCheckbox.setAttribute("type","checkbox");
				   toDoCheckbox.setAttribute("class","checkbox");
           toDoCheckbox.setAttribute("class","checkbox");
                   toDoCheckbox.setAttribute("class","checkbox__to-do");
                   toDoCheckbox.setAttribute("data-status","to-do");
                  // toDoCheckbox.checked = true;
                   const toDoLabel = document.createElement('label');
                   toDoLabel.setAttribute("for","to-do");
                   toDoLabel.setAttribute("class","label__to-do");
                   const toDoLabelText = document.createTextNode('To Do');
              const doingStatusBox = document.createElement('div');
              doingStatusBox.setAttribute("class","status-checkbox");
                    const doingCheckbox = document.createElement('input');
                    doingCheckbox.setAttribute("type","checkbox");
					doingCheckbox.setAttribute("class","checkbox");
                    doingCheckbox.setAttribute("class","checkbox__doing");
                    doingCheckbox.setAttribute("data-status","doing");
                    doingCheckbox.setAttribute("name","doing");
                    const doingLabel = document.createElement('label');
                    doingLabel.setAttribute("for","doing");
                    doingLabel.setAttribute("class","label__doing");
                    const doingLabelText = document.createTextNode('Doing');
              const doneStatusBox = document.createElement('div');
              doneStatusBox.setAttribute("class","status-checkbox");
                    const doneCheckbox = document.createElement('input');
                    doneCheckbox.setAttribute("type","checkbox");
					doneCheckbox.setAttribute("class","checkbox");
                    doneCheckbox.setAttribute("class","checkbox__done");
                    doneCheckbox.setAttribute("data-status","done");
                    doneCheckbox.setAttribute("name","done");
                    const doneLabel = document.createElement('label');
                    doneLabel.setAttribute("for","done");
                    doneLabel.setAttribute("class","label__done");
                    const doneLabelText = document.createTextNode('Done');
       // Parenting
       toDoLabel.appendChild(toDoLabelText);
       toDoStatusBox.appendChild(toDoLabel);
       toDoStatusBox.appendChild(toDoCheckbox);
     statusCheckboxes.appendChild(toDoStatusBox);
       doingLabel.appendChild(doingLabelText);
       doingStatusBox.appendChild(doingLabel);
       doingStatusBox.appendChild(doingCheckbox);
     statusCheckboxes.appendChild(doingStatusBox);
       doneLabel.appendChild(doneLabelText);
       doneStatusBox.appendChild(doneLabel);
       doneStatusBox.appendChild(doneCheckbox);
     statusCheckboxes.appendChild(doneStatusBox);
     taskItem.appendChild(statusCheckboxes);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskDate);
    taskItem.appendChild(taskDays);
    taskList.appendChild(taskItem);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-task");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", deleteTaskHandler);
    taskItem.appendChild(deleteBtn);
  }

  inputList.value = "";
  inputContent.value = "";
  inputDate.value = "";

  const page = document.querySelector('body');
  page.addEventListener('change',statusUpdate);
  //saveTasks();
}

