import { addList, taskButton, inputList} from "./modules/task_creation.js";

//local-storage
//get data
if(localStorage.getItem("taskname") != null){
    const taskElement = document.createElement("li");
    const taskGroup = document.createElement('ul');
    const listPage = document.querySelector('body');
    taskElement.textContent = localStorage.getItem("taskname");
    taskElement.classList.add("task-list__task");
    taskGroup.appendChild(taskElement);
    listPage.appendChild(taskGroup);
}

//store data
taskButton.onclick = () =>{
    localStorage.setItem('taskname',inputList.value);
}

//generate list
taskButton.addEventListener('click', addList);

