let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let tasks = [];
let savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
}
function renderTask(task) {
  let li = document.createElement("li");
  li.innerText = task.text;
  li.classList.add(task.priority);
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  if (task.completed) {
    li.classList.add("completed");
  }
  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
    task.completed = checkbox.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    //IMPORTANT FOR FILTERING AND ALSO WITH WHOLE LOOP TRAVERSAL
    tasks = tasks.filter(function (t) {
      return t !== task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  li.prepend(checkbox);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
//IMPORTANT LOOP TRAVERSAL
tasks.forEach(function (task) {
  renderTask(task);
});
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

addBtn.addEventListener("click", function () {
  let taskText = taskInput.value;
  if (taskText === "") {
    return;
  }
  let priority = document.getElementById("priority").value;
  let task = {
    text: taskText,
    priority: priority,
    completed: false,
  };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask(task);
  taskInput.value = "";
});
