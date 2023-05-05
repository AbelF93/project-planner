import { addList, taskButton } from "./modules/task_creation.js";

taskButton.addEventListener('click', addList);  

const doneBox = document.getElementById('checkbox__done');

function doneStatus(){ 
    const task = document.querySelector('li');
    if (task === document.getElementsByClassName("task-list__task")){
     task.classList.toggle('task__done');
    }   
 };
doneBox.addEventListener('change',doneStatus);