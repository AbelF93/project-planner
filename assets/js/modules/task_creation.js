const inputList = document.querySelector("input");
const taskSection = document.createElement("section");

taskSection.innerHTML = `<ul class="task-list"></ul>`;
const taskList = taskSection.querySelector(".task-list");
const body = document.querySelector("body");
body.appendChild(taskSection);
export const taskButton = document.getElementsByClassName("task-button")[0];

export function addList() {
  if (inputList.value === "") {
    alert("Please, write something.");
  } else {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-list__task");
    taskItem.textContent = inputList.value;
        const statusCheckboxes = document.createElement('div');
        statusCheckboxes.setAttribute("class","task__checkboxes");
              const toDoStatusBox = document.createElement('div');
              toDoStatusBox.setAttribute("class","status-checkbox");
                   const toDoCheckbox = document.createElement('input');
                   toDoCheckbox.setAttribute("type","checkbox");
                   toDoCheckbox.setAttribute("id","checkbox__to-do");
                   toDoCheckbox.setAttribute("name","to-do");
                   let toDoLabel = document.createElement('label');
                   toDoLabel.setAttribute("for","to-do");
                   toDoLabel.setAttribute("id","label__to-do");
                   const toDoLabelText = document.createTextNode('To Do');
              const doingStatusBox = document.createElement('div');
              doingStatusBox.setAttribute("class","status-checkbox");
                    const doingCheckbox = document.createElement('input');
                    doingCheckbox.setAttribute("type","checkbox");
                    doingCheckbox.setAttribute("id","checkbox__doing");
                    doingCheckbox.setAttribute("name","doing");
                    let doingLabel = document.createElement('label');
                    doingLabel.setAttribute("for","doing");
                    doingLabel.setAttribute("id","label__doing");
                    const doingLabelText = document.createTextNode('Doing');
              const doneStatusBox = document.createElement('div');
              doneStatusBox.setAttribute("class","status-checkbox");
                    const doneCheckbox = document.createElement('input');
                    doneCheckbox.setAttribute("type","checkbox");
                    doneCheckbox.setAttribute("id","checkbox__done");
                    doneCheckbox.setAttribute("name","done");
                    let doneLabel = document.createElement('label');
                    toDoLabel.setAttribute("for","done");
                    toDoLabel.setAttribute("id","label__done");
                    const doneLabelText = document.createTextNode('Done');
          doneLabel.appendChild(doneLabelText);
       doneStatusBox.appendChild(doneLabel);
       doneStatusBox.appendChild(doneCheckbox);
     statusCheckboxes.appendChild(doneStatusBox);
        doingLabel.appendChild(doingLabelText);
       doingStatusBox.appendChild(doingLabel);
       doingStatusBox.appendChild(doingCheckbox);
     statusCheckboxes.appendChild(doingStatusBox);
       toDoLabel.appendChild(toDoLabelText);
       toDoStatusBox.appendChild(toDoLabel);
       toDoStatusBox.appendChild(toDoCheckbox);
     statusCheckboxes.appendChild(toDoStatusBox);
     taskItem.appendChild(statusCheckboxes);
     taskList.appendChild(taskItem);
  }
  inputList.value = "";
}
