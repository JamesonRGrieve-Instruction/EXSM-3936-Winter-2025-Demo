const pendingTodos = document.querySelector('#pendingTodos');
const completedTodos = document.querySelector('#completedTodos');
const addTodo = document.querySelector('#addTodo');
const clearCompletedTodos = document.querySelector('#clearCompletedTodos');
const input = document.querySelector('input');
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
    newCheck.addEventListener('change', () => {
      if (newCheck.checked) {
        pendingTodos.removeChild(newTodo);
        completedTodos.appendChild(newTodo);
      } else {
        completedTodos.removeChild(newTodo);
        pendingTodos.appendChild(newTodo);
      }
    });
    pendingTodos.appendChild(newTodo);

  }
});
clearCompletedTodos.addEventListener('click', () => {
  completedTodos.innerHTML = '';
});