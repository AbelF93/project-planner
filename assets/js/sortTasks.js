import { taskList } from "./modules/task_creation.js";
import { daysStay } from "./modules/daysStay.js";
// Add Sort Tasks
export function sortTasks() {
  const sortBy = document.querySelector("select").value;
  const taskItems = taskList.querySelectorAll(".task-list__task");
  const sortedTasks = Array.from(taskItems).sort((a, b) => {
    if (sortBy === "name") {
      const aName = a.innerHTML.toLowerCase();
      const bName = b.innerHTML.toLowerCase();
      if (aName < bName) {
        return -1;
      }
      if (aName > bName) {
        return 1;
      }
      return 0;
    } else if (sortBy === "days") {
      const aDueDate = new Date(a.dataset.duedate);
      const bDueDate = new Date(b.dataset.duedate);
      const aDaysRemaining = daysStay(aDueDate);
      const bDaysRemaining = daysStay(bDueDate);
      return aDaysRemaining - bDaysRemaining;
    }
  });
  taskList.innerHTML = "";
  sortedTasks.forEach((task) => taskList.appendChild(task));
}
