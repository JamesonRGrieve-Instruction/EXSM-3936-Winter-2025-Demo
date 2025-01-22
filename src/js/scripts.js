const myParagraph = document.querySelector('p');
const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
    myParagraph.textContent = 'The button was clicked!';
});
