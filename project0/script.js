const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

let itemCount = 0;
let uncheckedCount = 0;

function createTodo(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  const deleteSpan = document.createElement('span');

  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', (e) => updateUnchekedCount(!e.target.checked));
  span.innerText = text;
  deleteSpan.innerText = 'x';
  deleteSpan.addEventListener('click', (e) => deleteTodo(e.target));

  li.classList.add(classNames.TODO_ITEM);
  checkbox.classList.add(classNames.TODO_CHECKBOX);
  span.classList.add(classNames.TODO_TEXT);
  deleteSpan.classList.add(classNames.TODO_DELETE);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteSpan);

  return li;
}

function newTodo() {
  const list = document.getElementById('todo-list');
  const text = prompt('What to do?', 'Todo text');
  const newTodo = createTodo(text);
  list.appendChild(newTodo);
  updateItemCount(true);
  updateUnchekedCount(true)
}

function deleteTodo(node) {
  // TODO: handle uncheckedCount correctly
  node.parentNode.remove();
  updateItemCount(false);
}

function updateItemCount(add) {
  const itemCountSpan = document.getElementById('item-count');
  if (add) {
    itemCountSpan.innerText = ++itemCount;
  } else {
    itemCountSpan.innerText = --itemCount;
  }
}

function updateUnchekedCount(add) {
  const uncheckedCountSpan = document.getElementById('unchecked-count');

  if (add) {
    uncheckedCountSpan.innerText = ++uncheckedCount;
  } else {
    uncheckedCountSpan.innerText = --uncheckedCount;
  }
}
