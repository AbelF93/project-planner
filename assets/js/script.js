import { daysStay } from "./modules/daysStay.js";
import { displayTasks } from "./modules/local_storage.js";
import { addList, taskButton } from "./modules/task_creation.js";
import { sortTasks } from "./sortTasks.js";



displayTasks();
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

const page = document.querySelector('body');
/*document.addEventListener('DOMContentLoaded', function(){
  page.addEventListener('change',statusChanged);
})*/
page.addEventListener('change',statusUpdate);

function statusUpdate(e){
  let parent = e.target.parentElement.parentElement.parentElement;
  const li = document.querySelector('li');
  console.log(parent.classList);
  e.target.addEventListener('click',statusChange);
  function statusChange(){
        if (e.target.id=='chexbox__to-do'){
          parent.classList.add('to-do');
          parent.classList.remove('doing', 'done');
        }
        else if (e.target.id=='chexbox__doing'){
          parent.classList.add('doing');
          parent.classList.remove('to-do', 'done');
        }
        else if (e.target.id=='chexbox__done'){
          parent.classList.add('done');
          parent.classList.remove('to-do', 'doing');
        }
        else {
          parent.classList.remove('to-do','doing','done');
        }
}
}