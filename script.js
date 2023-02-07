let sinput = document.getElementById("searchInput");
    let mylist = document.getElementById("todo list");

function function1() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(sinput));
  mylist.appendChild(li);
}