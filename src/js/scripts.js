const pendingTodos = document.querySelector('#pendingTodos');
const completedTodos = document.querySelector('#completedTodos');
const addTodo = document.querySelector('#addTodo');
const clearCompletedTodos = document.querySelector('#clearCompletedTodos');
const input = document.querySelector('input');

function handleClickCheckbox(event) {
  if (event.target.checked) {
    pendingTodos.removeChild(event.target.parentNode);
    completedTodos.appendChild(event.target.parentNode);
  } else {
    completedTodos.removeChild(event.target.parentNode);
    pendingTodos.appendChild(event.target.parentNode);
  }
}
function handleClickCopy(event) {
  const copy = event.target.parentNode.cloneNode(true);
  copy.querySelector('input').addEventListener('change', handleClickCheckbox);
  copy.querySelector('button').addEventListener('click', handleClickCopy);
  (event.target.parentNode.querySelector('input').checked ? completedTodos : pendingTodos).appendChild(copy);
}
addTodo.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const newTodo = document.createElement('li');
    const newTodoP = document.createElement('p');
    newTodoP.textContent = input.value;
    input.value = '';
    const newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newTodo.appendChild(newCheck);
    newTodo.appendChild(newTodoP);
    const newTodoCopy = document.createElement('button');
    newTodoCopy.textContent = 'Copy';
    newTodo.appendChild(newTodoCopy);
    newTodoCopy.addEventListener('click', handleClickCopy);
    newCheck.addEventListener('change', handleClickCheckbox);
    pendingTodos.appendChild(newTodo);
  }
});
clearCompletedTodos.addEventListener('click', () => {
  completedTodos.innerHTML = '';
});