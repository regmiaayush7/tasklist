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
    form.addEventListener('submit', addTask);    
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
