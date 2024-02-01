let date = new Date();
let currentDate = date.getDate();
let currentMonth = date.getMonth() + 1; // Adding 1 because months are zero-indexed
let currentYear = date.getFullYear();
let fullDate = `${currentYear}-${currentMonth}-${currentDate}`;

let todoList = getStoredTodoList();

displayItems();

function getStoredTodoList() {
  let storedTodoList = localStorage.getItem('todoList');
  return storedTodoList ? JSON.parse(storedTodoList) : [];
}

function storeTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  let inputElement = document.querySelector('#todo-Input');
  let dateElement = document.querySelector('#todo-Date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  if (todoItem === '') {
    alert('Enter some activity');
  } else if (todoDate === '') {
    alert('Enter a date');
  } else {
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
    storeTodoList();
  }
}

function displayItems() {

  let containerElement = document.querySelector('.todo-Container');
  let newHtml = '';
  if (todoList.length > 0) {
    document.querySelector('#divContainer').classList.add("grid-Container");
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml +=
      `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="deleteItem(${i});" class="btn-Delete">Delete</button>
      `;
  }
}
else{
  document.querySelector('#divContainer').classList.remove("grid-Container");
  newHtml = '<p class="no-activities">No activities added yet. Start by adding a new todo!</p>';
}

  containerElement.innerHTML = newHtml;
}


function deleteItem(index) {
  todoList.splice(index, 1);
  displayItems();
  storeTodoList();
}
