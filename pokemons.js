const grid = document.getElementById("pokemonGrid");
let offset = 0;
const limit = 9;

async function carregarPokemons() {
  grid.innerHTML = "";
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    for (const poke of data.results) {
      const res = await fetch(poke.url);
      const pokemon = await res.json();
      mostrarPokemon(pokemon);
    }
  } catch {
    grid.innerHTML = "<p class='text-danger'>Erro ao carregar os Pokémons.</p>";
  }
}

function mostrarPokemon(pokemon) {
  const tipos = pokemon.types.map(t => t.type.name).join(", ");
  const card = `
    <div class="col-md-4 col-sm-6">
      <div class="card text-center shadow hover-scale" data-bs-toggle="modal" data-bs-target="#pokemonModal" onclick="verDetalhes('${pokemon.name}')">
        <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
        <div class="card-body">
          <h5>${pokemon.name}</h5>
          <p>Altura: ${pokemon.height} | Peso: ${pokemon.weight}</p>
          <small>${tipos}</small>
        </div>
      </div>
    </div>
  `;
  grid.innerHTML += card;
}

async function verDetalhes(nome) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  const p = await res.json();
  document.getElementById("pokemonName").innerText = p.name;
  document.getElementById("pokemonDetails").innerHTML = `
    <img src="${p.sprites.front_default}" alt="${p.name}">
    <img src="${p.sprites.back_default}" alt="${p.name}">
    <p>Altura: ${p.height}</p>
    <p>Peso: ${p.weight}</p>
    <p>Tipos: ${p.types.map(t => t.type.name).join(", ")}</p>
  `;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  offset += limit;
  carregarPokemons();
});
document.getElementById("prevBtn").addEventListener("click", () => {
  if (offset >= limit) offset -= limit;
  carregarPokemons();
});

document.getElementById("searchBtn").addEventListener("click", async () => {
  const nome = document.getElementById("searchInput").value.toLowerCase();
  if (!nome) return carregarPokemons();
  grid.innerHTML = "";
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const p = await res.json();
    mostrarPokemon(p);
  } catch {
    grid.innerHTML = "<p class='text-danger'>Pokémon não encontrado!</p>";
  }
});

carregarPokemons();
