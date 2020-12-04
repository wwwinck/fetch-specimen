// retrieving information on PokéAPI
const fetchSpecimen = (specimen) => {
  const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    name: `${specimen}`,
  };

  // url destructuring
  const { url, type, name } = apiData;
  const apiUrl = `${url}${type}/${name}`;

  // data processing
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => generateHtml(data));

  const generateHtml = (pokemon) => {
    const html = `
      <div class="container ${pokemon.types[0].type.name}">
        <div class="card ${pokemon.types[0].type.name}">
          <img class="card-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" />
          <div class="card-data">
            <p class="card-id">#${pokemon.id}</p>
            <p class="card-name">${pokemon.name}</p>
          </div>
        </div>
      </div>
    `;

    // data injection
    const app = document.querySelector('#app');
    app.innerHTML = html;
  };
};

// event creation
const fetchPKMN = document.querySelector('.fetch-btn');

fetchPKMN.addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * 884 + 1);
  fetchSpecimen(randomNumber);
});

// pikachu init
fetchSpecimen(25);
