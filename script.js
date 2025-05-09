// Variáveis globais para armazenar o time
let team = [];

// Função para adicionar Pokémon ao time
function addToTeam(pokemonName) {
  if (team.length < 6) {
    team.push({ name: pokemonName });
    updateTeamDisplay();
  } else {
    alert("Você já tem 6 Pokémon no time!");
  }
}

// Função para atualizar a exibição do time
function updateTeamDisplay() {
  const teamContainer = document.getElementById("team");
  teamContainer.innerHTML = ""; // Limpar a exibição atual

  team.forEach((pokemon, index) => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");
    pokemonElement.innerHTML = `
      <h3>${pokemon.name}</h3>
      <button onclick="editPokemon(${index})">Editar</button>
      <button onclick="removeFromTeam(${index})">Remover</button>
    `;
    teamContainer.appendChild(pokemonElement);
  });
}

// Função para editar as informações de um Pokémon no time
function editPokemon(index) {
  const pokemon = team[index];
  // Exemplo de como abrir um formulário para editar informações (como Nature, IVs, EVs)
  const newNature = prompt("Qual a Nature de " + pokemon.name + "?", "Adamant");
  const newIVs = prompt("Insira os IVs para " + pokemon.name + " (separados por vírgula, ex: 31,31,31,31,31,31)", "31,31,31,31,31,31");
  const newEVs = prompt("Insira os EVs para " + pokemon.name + " (separados por vírgula, ex: 252,252,252,0,0,0)", "252,252,252,0,0,0");

  pokemon.nature = newNature;
  pokemon.ivs = newIVs.split(",").map(Number);
  pokemon.evs = newEVs.split(",").map(Number);
  
  updateTeamDisplay();
}

// Função para remover Pokémon do time
function removeFromTeam(index) {
  team.splice(index, 1);
  updateTeamDisplay();
}

// Função para pesquisar e adicionar Pokémon à equipe
function searchPokemon() {
  const searchQuery = document.getElementById("search-bar").value.toLowerCase();
  const searchResults = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery));

  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML = "";

  searchResults.forEach(pokemon => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon-result");
    pokemonElement.innerHTML = `
      <h4>${pokemon.name}</h4>
      <img src="${pokemon.sprite}" alt="${pokemon.name}" />
      <button onclick="addToTeam('${pokemon.name}')">Adicionar ao time</button>
    `;
    searchResultsContainer.appendChild(pokemonElement);
  });
}

// Dados simulados de Pokémon para pesquisa (substitua com PokeAPI ou outra fonte)
const pokemonData = [
  { name: "Pikachu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
  { name: "Charizard", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  { name: "Bulbasaur", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { name: "Squirtle", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }
];

document.getElementById("search-bar").addEventListener("input", searchPokemon);
