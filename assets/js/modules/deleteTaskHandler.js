import { taskList } from "./task_creation.js";
export const deletebtn = document.getElementsByClassName('delete-task');
export function deleteTaskHandler(event) {
  const taskItem = event.target.closest(".task-list__task");
  taskList.removeChild(taskItem);
}
