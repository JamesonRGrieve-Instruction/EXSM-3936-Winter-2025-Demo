const jokeButton = document.querySelector('#joke');
const punchLineButton = document.querySelector('#punchLine');
const jokeText = document.querySelector('#jokeText');
const punchLineText = document.querySelector('#punchLineText');
const jokes = [];
jokeButton.addEventListener('click', async () => {
  punchLineButton.classList.add('hidden');
  punchLineText.classList.add('hidden');
  let chosenJoke;
  do {
    await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
      .then((response) => response.json())
      .then((data) => {
        chosenJoke = data;
      });
  } while (jokes.includes(chosenJoke.id));
  if (chosenJoke.type === 'twopart') {
    punchLineButton.classList.remove('hidden');
    jokeText.textContent = chosenJoke.setup;
    punchLineText.textContent = chosenJoke.delivery;
  } else {
    jokeText.textContent = chosenJoke.joke;
    punchLineButton.classList.add('hidden');
  }
  jokes.push(chosenJoke.id);
});

punchLineButton.addEventListener('click', () => {
  punchLineText.classList.remove('hidden');
});