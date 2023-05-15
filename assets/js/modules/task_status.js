
export function statusUpdate(){
  const toDoCheck = document.querySelectorAll('.checkbox__to-do');
  const doingCheck = document.querySelectorAll('.checkbox__doing');
  const doneCheck = document.querySelectorAll('.checkbox__done');
  
  // add event listener to the checkboxes:
  toDoCheck.forEach((checkbox)=>{
    checkbox.addEventListener('change',statusChange);
  });
  doingCheck.forEach((checkbox)=>{
    checkbox.addEventListener('change',statusChange);
  });
  doneCheck.forEach((checkbox)=>{
    checkbox.addEventListener('change',statusChange);
  });
  
  
  function statusChange(e){
    const checkbox =e.target;
    const taskItem = checkbox.parentElement.parentElement.parentElement;
    const status = checkbox.dataset.status;

    //remove all status classes from task Item:
    taskItem.classList.remove('to-do','doing','done');

    // add the appropriate status based on the checked checkbox
    if (status === 'to-do' && checkbox.checked){
      taskItem.classList.add('to-do');
    } else if (status === 'doing' && checkbox.checked){
      taskItem.classList.add('doing');
    } else if (status === 'done' && checkbox.checked){
      taskItem.classList.add('done');
    }
  }}
  /*let parent = e.target.parentElement.parentElement.parentElement;
  const li = document.querySelector('li');
  console.log(parent.classList);
  e.target.addEventListener('change',statusChange);
  function statusChange(){
        if (e.target.checked == true && e.targt == toDoCheck){
          parent.classList.add('to-do');
          parent.classList.remove('doing', 'done');
          doingCheck.checked=false;
          doneCheck.checked=false;
          console.log(toDoCheck.checked);
        }
       else if (e.target.checked == true && e.targt == doingCheck){
          parent.classList.add('doing');
          parent.classList.remove('to-do', 'done');
          toDoCheck.checked=false;
          doneCheck.checked=false;
          console.log(doingCheck.checked);
        }
      else  if (e.target.checked == true && e.targt == doneCheck){
          parent.classList.add('done');
          parent.classList.remove('to-do', 'doing');
          doingCheck.checked=false;
          toDoCheck.checked=false;
          console.log(doneCheck.checked);
        }
	
  }
}


/*export function statusUpdate(e){
	const toDoCheck = document.getElementById('checkbox__to-do');
	const doingCheck = document.getElementById('checkbox__doing');
	const doneCheck = document.getElementById('checkbox__done');
	let parent = e.target.parentElement.parentElement.parentElement;
	const li = document.querySelector('li');
	console.log(parent.classList);
	e.target.addEventListener('change',statusChange);
	function statusChange(){
		  if (e.target.checked == true){
			switch (e.target.classList == 'checkbox'){
			case 0:
			parent.classList.add('to-do');
			parent.classList.remove('doing', 'done');
			doingCheck.checked=false;
			doneCheck.checked=false;
			break;
			case 1:
			parent.classList.add('doing');
			parent.classList.remove('to-do', 'done');
			doingCheck.checked=false;
			doneCheck.checked=false;
			break;
			case 2:
			parent.classList.add('done');
			parent.classList.remove('doing', 'to-do');
			doingCheck.checked=false;
			doneCheck.checked=false;
			break;
		  }}
		  else {
			  li.classList.remove('to-do','doing','done');
			  doingCheck.checked=false;
			  doneCheck.checked=false;
			  toDoCheck.checked=false;
		  }
  }
  }
*/







export function updateTaskStatus(task) {
  // Get all the checkboxes within the task element
  const checkboxes = document.querySelectorAll('.checkbox')  // Loop through the checkboxes to see which one is checked
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