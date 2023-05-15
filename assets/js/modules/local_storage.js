export function saveTasks() {
    // Create an array to hold the task data
    const tasks = [];
    const taskItem = document.querySelectorAll("li");
    // Loop through the task elements and collect their data
    taskItem.forEach((taskElement) => {
      const name = taskElement.querySelector('li.task-list__task').textContent;
      const description = taskElement.querySelector('.task-list__content').textContent;
      const date = taskElement.querySelector('.task-list__date').textContent;
      const dueDate = taskElement.querySelector('.task-list__date__due').textContent;
      const status = taskElement.id.contains('to-do')
        ? 'to-do'
        : taskElement.id.contains('doing')
        ? 'doing'
        : 'done';
  
      // Add the task data to the tasks array
      tasks.push({ name, description, date, dueDate, status });
    });
  
    // Convert the tasks array to a JSON string
    const tasksJSON = JSON.stringify(tasks);
  
    // Save the tasks to local storage
    localStorage.setItem('tasks', tasksJSON);
  }
  

  // display tasks

  export function displayTasks() {
    // Retrieve the tasks from local storage
    const tasksJSON = localStorage.getItem('tasks');
  
    // If there are no saved tasks, exit the function
    if (!tasksJSON) {
      return;
    }
  
    // Parse the tasks JSON string into an array of objects
    const tasks = JSON.parse(tasksJSON);
  
    // Loop through the tasks array and create list elements for each task
    tasks.forEach((task) => {
      const taskElement = document.createElement('li');
      taskElement.classList.add('task-list__item');
  
      const taskName = document.createElement('h3');
      taskName.classList.add('task-list__task');
      taskName.textContent = task.name;
      taskElement.appendChild(taskName);
  
      const taskContent = document.createElement('div');
      taskContent.classList.add('task-list__content');
      taskContent.textContent = task.description;
      taskElement.appendChild(taskContent);
  
      const taskDate = document.createElement('div');
      taskDate.classList.add('task-list__date');
      taskElement.appendChild(taskDate);
    });}
  