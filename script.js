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

function displayToDo() {
  taskList.innerHTML = "";
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.innerHTML = todo.text;
    taskList.appendChild(li);

    li.addEventListener("dblclick", function () {
      const editInput = document.createElement("input");
      editInput.classList.add("edit-input");
      console.log(editInput.outerHTML);
      editInput.value = todo.text;
      li.innerHTML = "";
      li.appendChild(editInput);
      editInput.focus();

      editInput.addEventListener("blur", function () {
        todo.text = editInput.value;
        displayToDo();
      });
    });
  });
}

addTaskBtn.addEventListener("click", addToDo);
displayToDo();
