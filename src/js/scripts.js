const myList = document.querySelector('ul');
const myInput = document.querySelector('input');
const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
    const newListItem = document.createElement('li');
    newListItem.textContent = myInput.value;
    myList.appendChild(newListItem);
    myInput.value = '';
});
