import { addList, taskButton } from "./modules/task_creation.js";
import { doneBox, doneStatus } from "./modules/task_status.js";


taskButton.addEventListener('click', addList);  

doneBox.addEventListener('click',doneStatus);
