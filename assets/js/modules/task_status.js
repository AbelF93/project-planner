export function statusUpdate(e){
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










/*export function updateTaskStatus(task) {
  // Get all the checkboxes within the task element
  
  // Loop through the checkboxes to see which one is checked
  let checkedCount = 0;
  let checkedIndex = -1;
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      checkedCount++;
      checkedIndex = index;
    }
  });

  // If there is only one checkbox checked, add the appropriate class to the task element
  if (checkedCount === 1) {
    switch (checkedIndex) {
      case 0:
        task.classList.add('to-do');
        task.classList.remove('doing', 'done');
        break;
      case 1:
        task.classList.add('doing');
        task.classList.remove('to-do', 'done');
        break;
      case 2:
        task.classList.add('done');
        task.classList.remove('to-do', 'doing');
        break;
    }
  } else {
    // If no checkboxes are checked or more than one is checked, remove all classes from the task element
    task.classList.remove('to-do', 'doing', 'done');
  }
}*/