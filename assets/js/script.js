import { addList, taskButton } from "./modules/task_creation.js";

taskButton.addEventListener('click', addList);  
import { doneBox,doneStatus } from "./modules/task_status.js";
  
doneBox.addEventListener('click',doneStatus);