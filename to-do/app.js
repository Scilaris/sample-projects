'use strict'
// Set UI variables
const todoForm = document.getElementById('todo');
const addTaskButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo-input');
const todoList = document.querySelector('.todo__list');
const clearAllButton = document.getElementById('clear-all');
const filter = document.getElementById('filter');

// Init todo app
init();

function init() {
  todoForm.addEventListener('submit', addNewTodo);
  todoList.addEventListener('click', deleteTodoTask);
  clearAllButton.addEventListener('click', clearTodoList);
  document.addEventListener('DOMContentLoaded', loadStorageTodos)
  filter.addEventListener('keyup', filterTodos);
}

// Load storage todos
function loadStorageTodos() {
  let tasks;

  localStorage.getItem('tasks') === null ? tasks = [] :
    tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.forEach((task) => {
    createTodoElement(task);
  });
}

// Add new TODO
function addNewTodo(e) {
  e.preventDefault();

  if (todoInput.value === '') { console.log('add task'); return };

  // Create todo element
  createTodoElement(todoInput.value);

  // set TODO to LocalStorage
  setToLocalStorage(todoInput.value);

  // Clear todo input
  todoInput.value = '';

  // Focus todo input
  todoInput.focus();
}

// Create TODO
function createTodoElement(inputValue) {
  // Create te element
  const todoElement = document.createElement('li');
  todoElement.className = 'todo__task';

  // Create todo text element
  const todoTextElement = document.createElement('span');
  todoTextElement.className = 'todo__text';
  todoTextElement.textContent = inputValue;

  // Create todo delete element
  const todoDeleteElement = document.createElement('button');
  todoDeleteElement.type = 'button';
  todoDeleteElement.textContent = 'x';
  todoDeleteElement.className = 'todo__delete button button_delete';

  // Append text and delete button to todo element
  todoElement.appendChild(todoTextElement);
  todoElement.appendChild(todoDeleteElement);

  // Append todo element to task list
  todoList.appendChild(todoElement);
}

// Сlear TODO list
function clearTodoList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  localStorage.clear();
}

// Delete TODO task
function deleteTodoTask(e) {
  if (e.target.classList.contains('todo__delete')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.remove();
    }
  }

  let tasks;
  tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.forEach((task, index) => {
    if (task === e.target.previousSibling.textContent) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function setToLocalStorage(data) {
  let tasks;

  localStorage.getItem('tasks') === null ? tasks = [] :
    tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.push(data);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function filterTodos(e) {
  const value = e.target.value.toLowerCase();
  const todos = document.querySelectorAll('.todo__task');

  todos.forEach((task) => {
    const item = task.firstElementChild.textContent;

    console.log(item.indexOf(value));

    if (item.toLowerCase().indexOf(value) != -1) {
      task.style.display = 'flex'
    } else {
      task.style.display = 'none'
    }
  });
}
