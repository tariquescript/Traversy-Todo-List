let addItem = document.getElementById("item");
let form = document.getElementById("addForm");
let ul = document.getElementById("items");
let delBtn = document.getElementsByName("button");
let filter = document.getElementById("filter");

form.addEventListener("submit", addLi);
ul.addEventListener("click", deleteLi);
filter.addEventListener("keyup", search);

function addLi(e) {
  e.preventDefault();
  li = document.createElement("li");
  li.className = "list-group-item";
  let text = document.createTextNode(addItem.value);
  li.appendChild(text);
  ul.appendChild(li);
  console.log(li);
  let button = document.createElement("button");
  button.textContent = "X";
  button.style.cssFloat = "right";
  button.className = "btn btn-danger btn-sm delete";
  li.appendChild(button);
  addItem.value = "";
}

function deleteLi(e) {
  if (e.target.classList.contains("delete")) {
    let li = e.target.parentElement;
    ul.removeChild(li);
  }
}

function search(e) {
  let text = e.target.value.toLowerCase();
  let li = ul.getElementsByTagName("li");
  console.log(li);
  let list = Array.from(li);
  list.forEach(function(item) {
    let itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
