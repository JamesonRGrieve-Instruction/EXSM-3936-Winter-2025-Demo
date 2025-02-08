const pendingTodos = document.querySelector('#pendingTodos');
const completedTodos = document.querySelector('#completedTodos');
const addTodo = document.querySelector('#addTodo');
const clearCompletedTodos = document.querySelector('#clearCompletedTodos');
const searchTodos = document.querySelector('#searchTodos');
const sortPendingTodosAlpha = document.querySelector('#sortPendingTodosAlpha');
const sortPendingTodosChrono = document.querySelector('#sortPendingTodosChrono');
const sortCompletedTodosAlpha = document.querySelector('#sortCompletedTodosAlpha');
const sortCompletedTodosChrono = document.querySelector('#sortCompletedTodosChrono');
const sortCompletedTodosChronoCompleted = document.querySelector('#sortCompletedTodosChronoCompleted');
const todoBody = document.querySelector('#todoBody');
const todoThumb = document.querySelector('#todoThumb');
const pendingTodoList = [];
const completedTodoList = [];
const sortModesAsc = {
  pendingAlpha: true,
  pendingChrono: true,
  completedAlpha: true,
  completedChrono: true,
  completedChronoCompleted: true
};

searchTodos.addEventListener('input', () => {
  console.log([...pendingTodos.children, ...completedTodos.children]);
  for (const child of [...pendingTodos.children, ...completedTodos.children]) {
    console.log('Checking', child);
    if (!child.querySelector('p').textContent.toLowerCase().includes(searchTodos.value.toLowerCase())) {
      console.log('Hiding', child);
      child.classList.add('hidden');
    }
    else {
      console.log('Showing', child);
      child.classList.remove('hidden');
    }
  }
})
function handleClickCheckbox(event) {
  if (event.target.checked) {
    const target = pendingTodoList.find(todo => todo.ref === event.target.parentNode);
    target.completedAt = new Date();
    pendingTodos.removeChild(event.target.parentNode);
    completedTodos.appendChild(event.target.parentNode);
    pendingTodoList.splice(pendingTodoList.indexOf(target), 1);
    completedTodoList.push(target);
  } else {
    const target = completedTodoList.find(todo => todo.ref === event.target.parentNode);
    target.completedAt = null;
    completedTodos.removeChild(event.target.parentNode);
    pendingTodos.appendChild(event.target.parentNode);
    completedTodoList.splice(completedTodoList.indexOf(target), 1);
    pendingTodoList.push(target);
  }
}
function sortTodos(list, mode, asc) {
  list.sort((a, b) => {
    if (mode === 'chrono') {
      return asc ? new Date(a.addedAt) - new Date(b.addedAt) : new Date(b.addedAt) - new Date(a.addedAt);
    }
    if (mode === 'completed') {
      return asc ? new Date(a.completedAt) - new Date(b.completedAt) : new Date(b.completedAt) - new Date(a.completedAt);
    }
    if (mode === 'alpha') {
      return asc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text);
    }
  });
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
  if (todoBody.value.trim() !== '') {
    const newTodo = document.createElement('li');
    const newTodoP = document.createElement('p');
    newTodoP.textContent = todoBody.value.trim();
    const newTodoImg = document.createElement('img');
    newTodoImg.alt = todoBody.value.trim();
    newTodoImg.title = todoBody.value.trim();
    newTodoImg.classList.add('todoThumb');
    newTodoImg.src = todoThumb.value.trim();
    todoBody.value = '';
    todoThumb.value = '';
    const newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newTodo.appendChild(newCheck);
    newTodo.appendChild(newTodoImg);
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
    pendingTodoList.push({ ref: newTodo, text: newTodoP.textContent, img: newTodoImg.src, addedAt: new Date(), completedAt: null });
  }
});
clearCompletedTodos.addEventListener('click', () => {
  completedTodos.innerHTML = '';
});
sortPendingTodosAlpha.addEventListener('click', () => {
  sortTodos(pendingTodoList, 'alpha', sortModesAsc.pendingAlpha);
  sortModesAsc.pendingAlpha = !sortModesAsc.pendingAlpha;
  pendingTodos.innerHTML = '';
  pendingTodoList.forEach(todo => pendingTodos.appendChild(todo.ref));
});
sortPendingTodosChrono.addEventListener('click', () => {
  sortTodos(pendingTodoList, 'chrono', sortModesAsc.pendingChrono);
  sortModesAsc.pendingChrono = !sortModesAsc.pendingChrono;
  pendingTodos.innerHTML = '';
  pendingTodoList.forEach(todo => pendingTodos.appendChild(todo.ref));
});
sortCompletedTodosAlpha.addEventListener('click', () => {
  sortTodos(completedTodoList, 'alpha', sortModesAsc.completedAlpha);
  sortModesAsc.completedAlpha = !sortModesAsc.completedAlpha;
  completedTodos.innerHTML = '';
  completedTodoList.forEach(todo => completedTodos.appendChild(todo.ref));
});
sortCompletedTodosChrono.addEventListener('click', () => {
  sortTodos(completedTodoList, 'chrono', sortModesAsc.completedChrono);
  sortModesAsc.completedChrono = !sortModesAsc.completedChrono;
  completedTodos.innerHTML = '';
  completedTodoList.forEach(todo => completedTodos.appendChild(todo.ref));
});
sortCompletedTodosChronoCompleted.addEventListener('click', () => {
  sortTodos(completedTodoList, 'completed', sortModesAsc.completedChronoCompleted);
  sortModesAsc.completedChronoCompleted = !sortModesAsc.completedChronoCompleted;
  completedTodos.innerHTML = '';
  completedTodoList.forEach(todo => completedTodos.appendChild(todo.ref));
});