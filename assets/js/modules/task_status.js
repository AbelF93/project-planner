//adding a class by using checkboxes
const statusCheckboxes = document.querySelectorAll('input[type="checkbox"]');

export const doneBox = document.getElementById('checkbox__done');
const doingBox = document.getElementById('checkbox__doing');
const toDoBox = document.getElementById('checkbox__to-do');

export function doneStatus(e){
    if(e.target === "LI"){
        e.target.classList.toggle('task__done');
    }
};

// Add event listeners to each checkbox
/*export function doneStatus(){ 
   const task = document.querySelector('li');
   if (task !== 0){
    task.classList.toggle('task__done');
   }   
}


const doneBox = document.getElementById('checkbox__done');
const doingBox = document.getElementById('checkbox__doing');
const toDoBox = document.getElementById('checkbox__to-do');
const taskElement = document.querySelectorAll('li');
 

}*/