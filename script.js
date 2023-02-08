let sinput = document.getElementById("searchInput");
let mylist = document.getElementById("todo-list");
let closeButtons = document.querySelectorAll(".btn-close");

function function1() {
  var input = document.querySelector("input").value;
  var list = document.querySelector("#todo-list");
  var newItem = document.createElement("li");
  newItem.classList.add("list-group-item");
  newItem.innerHTML = `
    <input class="form-check-input me-1" type="checkbox" value="" id="checkbox">
    <label class="form-check-label" for="checkbox">${input}</label>
    <button type="button" class="btn-close" style="background-color:transparent; outline-color:transparent" aria-label="Close"></button>
  `;
  list.appendChild(newItem);
}

for (let button of closeButtons) {
  button.addEventListener("click", function(event) {
    let toDoItem = event.target.parentElement;
    toDoItem.remove();
  });
}