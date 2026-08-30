let todos = [];
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addToDo() {
  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }
  const id = Date.now();
  const completed = false;

  const newToDo = {
    text: text,
    id: id,
    completed: completed,
  };
  todos.push(newToDo);
  displayToDo();

  taskInput.value = "";
  console.log(todos);
}

addTaskBtn.addEventListener("click", addToDo);

function displayToDo() {
  taskList.innerHTML = "";
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.innerHTML = todo.text;
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", addToDo);
displayToDo();
