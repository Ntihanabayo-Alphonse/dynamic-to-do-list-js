document.addEventListener('DOMContentLoaded', addTask);

// Selecting the DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');



// Add task Function
function addTask() {
    let taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if(taskText != "") {
        // Create li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button element
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Make removeBtn delete tasks
        removeBtn.onclick = () => {
            li.style.display = 'none';
        }

        // Append button to li
        li.appendChild(removeBtn);
        // Append li to taskList
        taskList.appendChild(li);
        
        // Clear the input
        taskInput.value = "";
    } else {
        alert("Enter a task!");
    }
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if(event.key == "Enter") {
        addTask();
    }
});
