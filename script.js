let taskIdCounter = 0;

function delTask(taskId) {
    const taskEl = document.getElementById(taskId);
    if (taskEl) {
        taskEl.classList.add("fade-out");
        setTimeout(() => taskEl.remove(), 300);
    }
}

function toggleComplete(taskText) {
    taskText.classList.toggle("completed");
}

function addTask() {
    const inputEl = document.getElementById("task-input");
    const taskValue = inputEl.value.trim();

    if (!taskValue) {
        alert("Please enter a task!");
        return;
    }

    taskIdCounter++;

    // Create task element
    const taskEl = document.createElement("div");
    taskEl.className = "task";
    taskEl.id = `task-${taskIdCounter}`;

    // Task text
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    taskText.onclick = () => toggleComplete(taskText);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => delTask(taskEl.id);

    // Append elements
    taskEl.appendChild(taskText);
    taskEl.appendChild(deleteBtn);
    document.getElementById("task-container").appendChild(taskEl);

    // Clear input field
    inputEl.value = "";
}

// Event listener for add button
document.getElementById("add-task-btn").addEventListener("click", addTask);
