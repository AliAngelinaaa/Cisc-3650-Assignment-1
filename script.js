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
  `;    
  list.appendChild(newItem);
  }
  newItem.querySelector(".btn-close").addEventListener("click", function (event) {
    let toDoItem = event.target.parentElement;
    toDoItem.remove();
  });
  newItem.querySelector(".calendarButton").addEventListener("click", function() {
    let dateInput = prompt("Enter the date (MM/DD/YYYY)");
    if (dateInput) {
      this.nextElementSibling.innerHTML = "Due " + dateInput;
    }
  });
  newItem.querySelector("input[type='checkbox']").addEventListener("change", function(){
    if(this.checked){
      taskFinImg.style.display = "block";
      setTimeout(function(){
        taskFinImg.style.display = "none";
      },3000)
    }
  })
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
    button.addEventListener('click', function() {
      const dateInput = prompt("Enter the date (MM/DD/YYYY)");
      if (dateInput) {
        this.nextElementSibling.innerHTML = "Due " + dateInput;
      }
    });
  });

  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  let taskFinImg = document.querySelector(".taskFin");

  checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("change", function () {
      if(this.checked){
        taskFinImg.style.display = "block";
        setTimeout(function(){
          taskFinImg.style.display = "none";
        },3000)
      }
    });
  })