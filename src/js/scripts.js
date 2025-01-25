const myButtons = document.querySelectorAll('button');

for (const myButton of myButtons) {
    myButton.addEventListener('click', () => {
        myButton.remove();
    });
}
