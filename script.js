let sinput = document.getElementById("searchInput");
let mylist = document.getElementById("todo-list");



function function1() {
  var input = document.querySelector("input").value;
  var list = document.querySelector("#todo-list");
  var newItem = document.createElement("li");
  newItem.classList.add("list-group-item");
  if (input.length > 2) {
    newItem.innerHTML = `
    <input class="form-check-input me-1" type="checkbox" value="">
    <label class="form-check-label">${input}</label>
    <button type="button" class="btn-close" aria-label="Close"></button>
    <button class="btn small calendarButton"><i class="fas fa-calendar input-prefix"></i></button>
    <span class="task-date"></span>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Priority
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">High Priority</a>
              <a class="dropdown-item" href="#">Middle Priority</a>
              <a class="dropdown-item" href="#">Low Priority</a>
            </div>
            <ul class="subtask-list"></ul>
        <div class="input-group">
          <input type="text" class="form-control subtask-input" placeholder="Add a subtask...">
          <button onclick="addTask(this)" class="btn btn-outline-dark subtaskButton" type="button">Add subtask</button>
        </div>
    </div>
  `;
    list.appendChild(newItem);
  }
  newItem.querySelector(".btn-close").addEventListener("click", function (event) {
    let toDoItem = event.target.parentElement;
    toDoItem.remove();
  });
  newItem.querySelector(".calendarButton").addEventListener("click", function () {
    let dateInput = prompt("Enter the date (MM/DD/YYYY)");
    if (dateInput) {
      this.nextElementSibling.innerHTML = "Due " + dateInput;
    }
  });
  newItem.querySelector("input[type='checkbox']").addEventListener("change", function () {
    if (this.checked) {
      taskFinImg.style.display = "block";
      setTimeout(function () {
        taskFinImg.style.display = "none";
      }, 3000)
    }
  })

  newItem.querySelector('.dropdown-item').addEventListener('click', (event) => {
    event.preventDefault();
    let priority = event.target.textContent;
    event.target.parentElement.previousElementSibling.textContent = priority;
  });

}

function addTask(button) {
  const taskInput = button.previousElementSibling;
  const subtaskList = button.closest('.list-group-item').querySelector('.subtask-list');
  const subtaskText = taskInput.value.trim();
  if (subtaskText !== '') {
    const subtaskItem = document.createElement('li');
    subtaskItem.classList.add('list-group-item', 'subtask-item');
    subtaskItem.innerHTML = `
      <input class="form-check-input me-1" type="checkbox" value="">
      <label class="form-check-label">${subtaskText}</label>
      <button type="button" class="btn-close" aria-label="Close"></button>
      <span class="task-date"></span>
    `;
    subtaskItem.querySelector(".btn-close").addEventListener("click", function (event) {
      let subtaskItem = event.target.parentElement;
      subtaskItem.remove();
    });
    subtaskList.appendChild(subtaskItem);
    taskInput.value = '';
  }
}

let closeButtons = document.querySelectorAll(".btn-close");
for (let button of closeButtons) {
  button.addEventListener("click", function (event) {
    let toDoItem = event.target.parentElement;
    toDoItem.remove();
  });
}


const calendarButtons = document.querySelectorAll('.calendarButton');
calendarButtons.forEach(button => {
  button.addEventListener('click', function () {
    const dateInput = prompt("Enter the date (MM/DD/YYYY)");
    if (dateInput) {
      this.nextElementSibling.innerHTML = "Due " + dateInput;
    }
  });
});

let checkboxes = document.querySelectorAll("input[type='checkbox']");
let taskFinImg = document.querySelector(".taskFin");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      taskFinImg.style.display = "block";
      setTimeout(function () {
        taskFinImg.style.display = "none";
      }, 3000)
    }
  });
})

let priorityLevels = document.querySelectorAll('.dropdown-item');

priorityLevels.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    let priority = event.target.textContent;
    event.target.parentElement.previousElementSibling.textContent = priority;
  });
});
