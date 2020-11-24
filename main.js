const poke_container = document.getElementById("poke_container");
// const pokemons_number = 150;
const pokemonStore = []

const PokemonCard = function (pokemon) {
  // pokemon = each item of data
  // const name = pokemon.name
}

const fetchPokemons = async () => {
  getPokemon(i);
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  // createPokemonCard(pokemon);

  // Pass in the data to the class
  const card = new PokemonCard(pokemon)
  pokemonStore.push(card)
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const { id, name, sprites, types } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();

const Pokemon = function () {

}



/*

  0) Do a single netwrok request for all of the pokemon cards
  1) Fetch the pokemon cards and add them to an array.
  2) Once this array has been populated, then loop through the array and add them to the DOM.
  3) Create a Pokemon class and create a new class for each Pokemon.

*/
