// function Addelement() {
//     var taskList = document.getElementById('task-list');
    
//     var taskCard = document.createElement('div');
//     taskCard.classList.add('task-card');

//     var taskContent = document.createElement('p');
//     taskContent.textContent = "Enter project name here....";

//     let newcard = document.createElement('button');
//     newcard.textContent = "Add Task"

//     // Make the task content editable
//     taskContent.setAttribute('contenteditable', 'true');

//     taskCard.appendChild(taskContent);
//     taskList.appendChild(taskCard);
    
// }

function Addelement() {
    var taskList = document.getElementById('task-list');
    
    // Create the task card div
    var taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    
    // Create the input field for project name
    var taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = "Enter project name here..."; // Placeholder text for the input

    // Create the "Add Task" button
    let newCardButton = document.createElement('button');
    newCardButton.textContent = "Add Task";

    // Attach a click event listener to the "Add Task" button
    newCardButton.addEventListener('click', function() {
        var taskName = taskInput.value.trim(); // Get the value from the input field
        if (taskName === "") {
            alert("Please enter a valid project name.");
            return;
        }
        
        // Create a new task element
        var taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.textContent = taskName;
        
        // Append the task item to the task card
        taskCard.appendChild(taskItem);
        
        // Optionally, you can clear the input field after adding the task
        taskInput.value = "";
    });
    
    // Append input and button to the task card
    taskCard.appendChild(taskInput);
    taskCard.appendChild(newCardButton);
    
    // Append the task card to the task list
    taskList.appendChild(taskCard);
}
