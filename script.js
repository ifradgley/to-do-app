let todos = [];
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.querySelector(".addTaskBtn");
const taskList = document.querySelector("#taskList");
let currentTimeOfDay = "Morning";

function addToDo(e) {
  if (e) e.preventDefault();

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
    timeOfDay: currentTimeOfDay,
  };
  todos.push(newToDo);
  displayToDo();

  taskInput.value = "";
  console.log(todos);
}

function displayToDo() {
  taskList.innerHTML = "";

  const filteredToDos = todos.filter(function (todo) {
    return todo.timeOfDay === currentTimeOfDay;
  });

  filteredToDos.forEach(function (todo) {
    const li = document.createElement("li");
    li.textContent = todo.text;

    const deleteBtn = deleteToDo(todo.id);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  function deleteToDo(todoId) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      todos = todos.filter(function (todo) {
        return todo.id !== todoId;
      });

      displayToDo();
    });

    return deleteBtn;
  }
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
}
addTaskBtn.addEventListener("click", addToDo);
displayToDo();

const timeOptions = document.querySelectorAll(
  'input[name="time-of-day--background"]',
);

timeOptions.forEach(function (radio) {
  radio.addEventListener("change", function () {
    currentTimeOfDay = this.value;
    displayToDo();

    const todoForm = document.getElementById("to-do-app");

    todoForm.addEventListener("submit", addToDo);
  });
});
displayToDo();
