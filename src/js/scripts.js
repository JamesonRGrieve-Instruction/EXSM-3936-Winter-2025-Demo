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
function handleClickEdit(event) {
  const targetLI = event.target.parentNode;
  if (targetLI.querySelector('p')) {
    const currentText = targetLI.querySelector('p').textContent;
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.value = currentText;
    targetLI.replaceChild(newInput, targetLI.querySelector('p'));
    event.target.innerText = 'Save';
  }
  else {
    const currentText = targetLI.querySelector('input[type="text"]').value;
    const newP = document.createElement('p');
    newP.innerText = currentText;
    targetLI.replaceChild(newP, targetLI.querySelector('input[type="text"]'));
    event.target.innerText = 'Edit';
  }
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
    const newTodoEdit = document.createElement('button');
    newTodoEdit.textContent = 'Edit';
    newTodo.appendChild(newTodoEdit);
    newTodoEdit.addEventListener('click', handleClickEdit);
    newTodoCopy.addEventListener('click', handleClickCopy);
    newCheck.addEventListener('change', handleClickCheckbox);
    pendingTodos.appendChild(newTodo);
  }
});
clearCompletedTodos.addEventListener('click', () => {
  completedTodos.innerHTML = '';
});