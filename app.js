const todo = [];
function addTodoList(event) {
  event.preventDefault(); 
  console.log('addtodo function called');
  const inputElement = document.querySelector('.js-input');
  const inputValue = inputElement.value.trim(); 
  if (inputValue === '') {
    alert('Please enter a valid todo');
    return;
  }
  todo.push(inputValue);
  console.log(todo); 
  inputElement.value = ''; 
  renderTodos();
}
function renderTodos() {
  const todoList = document.querySelector('.js-todo-list');
  todoList.innerHTML = ''; 
  todo.forEach((item, index) => { // Fixed syntax here
    const todoItem = `
      <li class="todo">
        <input type="checkbox" id="todo-${index}" class="todo-checkbox">
        <label class="custom-checkbox" for="todo-${index}">
          <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
          </svg>
        </label>
        <label class="todo-text" for="todo-${index}">
          ${item} <!-- Properly formatted -->
        </label>
        <button class="delete-button" onclick="deleteTodo(${index})">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
          </svg>
        </button>
      </li>
    `;
    todoList.insertAdjacentHTML('beforeend', todoItem);
  });
}
function deleteTodo(index) {
  todo.splice(index, 1); // Remove the item from the array
  renderTodos(); // Re-render the updated list
}


