// Select the whole item list
var itemList = document.querySelector(".list-group");
// Select all delete buttons
var selectedBtns = document.querySelectorAll(".btn-delete");

// Click button to add items
document.querySelector(".addItemButton").addEventListener("click", addItemToList);

// Use 'enter' key to add items
// ?? How to avoid empty input??
document.querySelector(".newItemBox").addEventListener("keydown", function(e){
  if(e.keyCode === 13) {
      e.preventDefault();
      addItemToList();
    }
});

// Function to add item & delete button
function addItemToList() {
  // Add new item
  // Step 1 - create new node <li>
  var newItem = document.createElement("li");
  // Step 2 - style new node
  newItem.className = "list-group-item";
  // Step 3 - create text node with input value
  var newItemText = document.createTextNode(document.querySelector(".newItemBox").value);
  // Step 4 - add text into node
  newItem.appendChild(newItemText);
  // Step 5 - append node to <ul>
  itemList.appendChild(newItem);

  // Add delete button for each new item
  // Step 1 - create new node <button>
  var newBtn = document.createElement("button");
  // Step 2 - style new node
  newBtn.className = "btn btn-danger btn-sm float-right btn-delete";
  // Step 3 - create text node with input value
  var newBtnText = document.createTextNode("x");
  // Step 4 - add text into node
  newBtn.appendChild(newBtnText);
  // Step 5 - append node to new <li>
  newItem.appendChild(newBtn);

  // Empty input box
  document.querySelector(".newItemBox").value = "";

  // Update selectedBtn - querySelectorAll not live data
  selectedBtns = document.querySelectorAll(".btn-delete");
}


// ?? Can it remove new added item?? It works in console, not from file. why???
// Click delete button to remove items
// Change node list to array & add function for each
Array.from(selectedBtns).forEach(selectedFunction);
// Add eventlistener to each delete button
function selectedFunction(selectedBtn) {
  selectedBtn.addEventListener("click", deleteItem);
}
// Function to remove item from the list
function deleteItem(e) {
  var selectedItem = e.target.parentElement;
  itemList.removeChild(selectedItem);
  // Update selectedBtn - querySelectorAll not live data
  selectedBtns = document.querySelectorAll(".btn-delete");
}
