'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) return response.json();
  throw new Error('Request failed!');
}

function fetchAndPopulatePokemons(data) {
  const getPokemon = document.createElement('button');
  getPokemon.textContent = 'Get Pokemon!';
  getPokemon.setAttribute('type', 'button');
  document.body.appendChild(getPokemon);

  const selectDrop = document.createElement('select');
  getPokemon.addEventListener(
    'click',
    () => {
      document.body.appendChild(selectDrop);
    },
    { once: true }
  );
  data.results.forEach((result) => {
    const selectPokemon = document.createElement('option');
    selectPokemon.textContent = result.name;
    selectDrop.appendChild(selectPokemon);
  });

  selectDrop.addEventListener('change', async () => {
    const url = data.results.filter(
      (result) => result.name === selectDrop.value
    )[0].url;
    const poke = await fetchData(url);
    const pokeImage = await fetchData(poke.forms[0].url);
    const pokePicture = pokeImage.sprites.front_default;
    createImageElement(pokePicture);
  });
}

function createImageElement(url) {
  const noPic = document.querySelector('img');
  if (noPic) {
    noPic.src = url;
  } else {
    const pokemonImage = document.createElement('img');
    pokemonImage.src = url;
    document.body.appendChild(pokemonImage);
  }
}

async function main() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetchAndPopulatePokemons(data);
  } catch (error) {
    console.log(error.message);
  }
}

window.addEventListener('load', main);
