var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
  // Create new list item
  var li = document.createElement("li");
  li.innerText = taskInput.value;
  
  // Add event listener to toggle completed status on click
  li.addEventListener("click", function() {
    this.classList.toggle("completed");
  });
  
  // Add new list item to the list
  taskList.appendChild(li);
  
  // Clear the input field
  taskInput.value = "";
}