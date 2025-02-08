const jokeButton = document.querySelector('#joke');
const punchLineButton = document.querySelector('#punchLine');
const jokeText = document.querySelector('#jokeText');
const punchLineText = document.querySelector('#punchLineText');

jokeButton.addEventListener('click', () => {
  punchLineButton.classList.add('hidden');
  punchLineText.classList.add('hidden');
  fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
    .then((response) => response.json())
    .then((data) => {
      if (data.type === 'twopart') {
        punchLineButton.classList.remove('hidden');
        jokeText.textContent = data.setup;
        punchLineText.textContent = data.delivery;
      } else {
        jokeText.textContent = data.joke;
        punchLineButton.classList.add('hidden');
      }
    });
});

punchLineButton.addEventListener('click', () => {
  punchLineText.classList.remove('hidden');
});