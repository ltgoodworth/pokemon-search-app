const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const pokemonImg = document.getElementById("img-div");


const fetchData = async () => {
  try {
    
    const pokemonSearch = userInput.value.toLowerCase().replace(/ /g, "-");
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonSearch}`);
    const data = await res.json();

    pokemonName.innerText = `${data.name.toUpperCase()}`;
    pokemonId.innerText = `#${data.id}`;
    weight.innerText = `Weight: ${data.weight}`;
    height.innerText = `Height: ${data.height}`;
    
    hp.innerText = data.stats[0].base_stat;
    attack.innerText = data.stats[1].base_stat;
    defense.innerText = data.stats[2].base_stat;
    specialAttack.innerText = data.stats[3].base_stat;
    specialDefense.innerText = data.stats[4].base_stat;
    speed.innerText = data.stats[5].base_stat;

    pokemonImg.innerHTML = `<img id="sprite" src=${data.sprites.front_default}>`;

    types.innerHTML = data.types.map(obj => 
      `<div>${obj.type.name}</div>`
    );


  } catch (err) {
    console.log(err);
    alert("Pokémon not found");
    resetDisplay();
  }
};

const resetDisplay = () => {
    pokemonName.innerText = "";
    pokemonId.innerText = "";
    weight.innerText = "";
    height.innerText = "";    
    hp.innerText = "";
    attack.innerText = "";
    defense.innerText = "";
    specialAttack.innerText = "";
    specialDefense.innerText = "";
    speed.innerText = "";

    pokemonImg.innerHTML = "";

    types.innerText = "";

    userInput.value = "";
};

searchBtn.addEventListener("click", () => {
  fetchData();   
});