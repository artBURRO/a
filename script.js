// Placeholder for the search function
const pokemonSearch = document.getElementById('pokemon-search');
const pokemonInfoDiv = document.querySelector('.pokemon-info');

// Função para mostrar as informações do Pokémon
function showPokemonInfo(pokemon) {
  pokemonInfoDiv.innerHTML = `
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <div class="info">
      <h3>${pokemon.name}</h3>
      <p>Tipos: ${pokemon.types.join(', ')}</p>
      <p>Altura: ${pokemon.height}m | Peso: ${pokemon.weight}kg</p>
      <p>Stats: HP: ${pokemon.stats.hp}, Attack: ${pokemon.stats.attack}, Defense: ${pokemon.stats.defense}</p>
    </div>
  `;
}

// Exemplo de Pokémon (isso seria dinâmico com a API)
const examplePokemon = {
  name: 'Pikachu',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  types: ['Elétrico'],
  height: 0.4,
  weight: 6.0,
  stats: { hp: 35, attack: 55, defense: 40 }
};

// Quando o usuário pesquisa, mostra as informações
pokemonSearch.addEventListener('input', function() {
  if (pokemonSearch.value.toLowerCase() === 'pikachu') {
    showPokemonInfo(examplePokemon);
  }
});
