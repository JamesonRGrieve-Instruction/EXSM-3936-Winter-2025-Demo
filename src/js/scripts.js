const myList = document.querySelector('ul');
const myInput = document.querySelector('input');
const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
  const newListItem = document.createElement('li');
  newListItem.textContent = myInput.value;
  myList.appendChild(newListItem);
  myInput.value = '';
});


setTimeout(() => {
  console.log('Hello, world!');
}, 5000);
setTimeout(() => {
  console.log('Hello, world!');
}, 6000);

let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log('Counter:', counter);
  if (counter === 10) {
    clearInterval(interval);
  }
}, 1000);