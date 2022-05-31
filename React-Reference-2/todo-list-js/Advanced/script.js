let inpTask = document.getElementById('inpTask');
let btnAdd = document.getElementById('btnAdd');
let taskList = document.getElementById('taskList');
let btnClear = document.getElementById('btnClear');

let tasks = [
    "Sample Task 1",
    "Sample Task 2",
]

//Saving the task in local storage to keep the list
function saveTasks(){
    console.log("Saving to local storage"+tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks)); //convert array to string using JSON.stringify   
}

function retriveList(){
    //Getting from local storage
    let retrivedLists =  localStorage.getItem("tasks");
    if(retrivedLists){
        //Coverting string to JSON array using JSON.parse
        tasks = JSON.parse(retrivedLists);
        renderTaskList();
    }
}

//Render the task list
function renderTaskList(){
    taskList.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        let task = tasks[i];
        let li = document.createElement('li');
        li.innerText = task;
        taskList.appendChild(li);
    }    
}

//Add a task to the list and call RenderTaskList
function addTask(){
    let task = inpTask.value;
    if(task.length > 0){
        tasks.push(task);
        //saving to local storage on each task addition
        saveTasks()
        inpTask.value = "";
        renderTaskList();
    }
    else{
        alert("Please enter a task");
    }
    
}

//Call addTask on button click
btnAdd.onclick = function(){
    addTask();
}

// Enter button to add task
inpTask.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        addTask();
    }
})

//Clear the list
btnClear.addEventListener('click', function(){
    tasks = [];
    saveTasks();
    renderTaskList();   
})

retriveList()
renderTaskList();