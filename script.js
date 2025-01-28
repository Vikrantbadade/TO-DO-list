let crt = 1;

function del_task(index) {
    const task = document.getElementById(index);
    if (task) {
        task.parentNode.removeChild(task); // Safely remove the task element.
    }
}

function add_task() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value.trim(); // Remove unnecessary whitespace.

    // Prevent adding empty tasks
    if (!value) {
        alert("Please enter a task!");
        return;
    }

    // Increment the unique ID counter
    crt++;

    // Create the task container
    const taskDiv = document.createElement("div");
    taskDiv.className = "etask";
    taskDiv.id = crt;

    // Add task content
    const taskContent = document.createElement("div");
    taskContent.textContent = value;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => del_task(crt);

    // Append content and button to the task container
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteBtn);

    // Append task container to the task list
    document.getElementById("kal").appendChild(taskDiv);

    // Clear the input field
    inputEl.value = "";
}
