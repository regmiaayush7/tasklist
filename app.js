//Define UI vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

//load all event listeners 
loadEventListeners();

//load all event listeners 
function loadEventListeners(){
    //Add Task 
    form.addEventListener('submit', addTask);    
    //Remove Task
    taskList.addEventListener('click', removeTask);
    //Clear Task
    clearBtn.addEventListener('click', clearTasks);
    //Filter Task
    filter.addEventListener('keyup', filterTasks);
}

//AddTask
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
   //Create li 
   const li = document.createElement('li');
   //Add Class 
   li.className = 'collection-item';
   //Add text and append to li 
   li.appendChild(document.createTextNode(taskInput.value));
   //Add link and the icon 
   const link = document.createElement('a');
   //Add class
   link.className='delete-item secondary-content';
   //append icon to the link 
   link.innerHTML = '<i class="fa fa-remove"></i>';
   //Append link to li 
   li.appendChild(link);
   //Append li to tasklist or ul
    taskList.appendChild(li);
    //Clear taskInput
    taskInput.value = '';
    
   e.preventDefault();
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        confirm('Are you sure?');
        e.target.parentElement.parentElement.remove();
    }
}

//Clear Task
function clearTasks(){
    //taskList.innerHTML ='';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
          task.style.display = 'block';
        } else {
          task.style.display = 'none';
        }
      });
}