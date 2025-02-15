const search = document.querySelector("#input");
const go = document.querySelector("#go");
const output = document.querySelector("#output");

go.addEventListener("click", (e) => {
  e.preventDefault();
  output.innerHTML = "";
  const pokemon = search.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      const name = document.createElement("h2");
      name.textContent = pokemon.name;
      const sprite = document.createElement("img");
      sprite.src = pokemon.sprites.front_default;
      const types = document.createElement("p");
      types.textContent = "Types: ";
      for (let i = 0; i < pokemon.types.length; i++) {
        if (i > 0) {
          types.textContent += ", ";
        }
        types.textContent += pokemon.types[i].type.name;
      }
      const weight = document.createElement("p");
      weight.textContent = `Weight: ${pokemon.weight}`;
      const height = document.createElement("p");
      height.textContent = `Height: ${pokemon.height}`;
      const experience = document.createElement("p");
      experience.textContent = `Base Experience: ${pokemon.base_experience}`;
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = pokemon.cries.latest;
      output.appendChild(name);
      output.appendChild(sprite);
      output.appendChild(types);
      output.appendChild(weight);
      output.appendChild(height);
      output.appendChild(experience);
      output.appendChild(audio);
    });
});
