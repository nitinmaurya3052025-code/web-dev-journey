let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let taskText = taskInput.value;
  if (taskText === "") {
    return;
  }
  let priority = document.getElementById("priority").value;
  let li = document.createElement("li");
  li.innerText = taskText;
  li.classList.add(priority);
  let checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed"); //added class for checkbox
  });
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  li.prepend(checkbox);
  taskList.appendChild(li);
  li.appendChild(deleteBtn);
  taskInput.value = "";
});
