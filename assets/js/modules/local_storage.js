
export function taskStorage(){
    const taskBtn = document.getElementsByClassName('task-button');
taskBtn.onclick = () =>{
    const task = document.getElementsByClassName('task-list__task');
    localStorage.setItem('tasks',task.value);
}}