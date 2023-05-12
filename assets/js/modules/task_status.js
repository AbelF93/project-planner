const task = document.querySelector('li');
const checkboxes = task.querySelectorAll('input[type="checkbox"]');

export function updateTaskStatus(task) {
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
}
