//adding buttons to add status to the task
const task = document.getElementsByClassName("task-list__task");
//adding buttons
export function addCheckbox(){
    task.innerhtml =`<div class="task__checkboxes">
                     <input type="checkbox" id="checkbox__to-do" name="to-do">
                     <label for="to-do">To Do</label><br>
                     <input type="checkbox" id="checkbox__doing" name="doing">
                     <label for="doing">Doing</label><br>
                     <input type="checkbox" id="checkbox__done" name="done">
                     <label for="done">Done</label><br>
                     </div>`;
}