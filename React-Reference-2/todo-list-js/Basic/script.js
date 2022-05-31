/* document -> DOM (Document Object Model)
 window -> BOM (Browser Object Model)
 */

/**
 * When add is clicked,
 * 1. read input with getNewTaskName()
 * 2. save that to "newTaskName"
 * 3. call addItemToList(newTaskName)
 * 4. clear input
 */

//!!Even these individual functions can be checked in the console in browser if script file is connected to the page.

let listItems = document.getElementById('listItems');
let inpTask = document.getElementById('inpTask');
let btnAdd = document.getElementById('btnAdd');

function addItemToList(taskName /*String*/) {
    let newListItem = document.createElement('li'); //creates a new element not in DOM yet
    newListItem.innerText = taskName;
    listItems.appendChild(newListItem); //Adding element to DOM
}

function getNewTaskName() {
    return inpTask.value;
} //returns a string

btnAdd.onclick = function () {
    if (inpTask.value === '') {
        alert('Please enter a task name');
    } else {
        let newTaskName = getNewTaskName();
        console.log('To be added' + newTaskName);
        addItemToList(newTaskName);
        inpTask.value = '';
    }
};

// btnAdd.addEventListener("click", function(){
//     let newTaskName = getNewTaskName();
//     console.log("To be added"+newTaskName)
//     addItemToList(newTaskName);
//     inpTask.value = "";
// })

/**
 * Further Requirements:
 * 1.When enter button is pressed,(cursor is on inpTask) do same thing as when add is clicked
 * 2.When input is empty show alert on add button or on enter button
 */
inpTask.addEventListener('keypress', function (event) {
    // console.log(event);
    if (event.keyCode === 13) {
        let newTaskName = getNewTaskName();
        if (newTaskName.length > 0) {
            console.log('To be added' + newTaskName);
            addItemToList(newTaskName);
            inpTask.value = '';
        } else {
            alert('Please enter a task name');
        }
    }
});
