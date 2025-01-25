const myButtons = document.querySelectorAll('button:not(#create)');
const createButton = document.querySelector('#create');

for (const myButton of myButtons) {
    myButton.addEventListener('click', () => {
        myButton.remove();
    });
}
createButton.addEventListener('click', () => {
    const newButton = document.createElement('button');
    newButton.textContent = 'Remove Me!';
    newButton.addEventListener('click', () => {
        newButton.remove();
    });
    document.body.appendChild(newButton);
});