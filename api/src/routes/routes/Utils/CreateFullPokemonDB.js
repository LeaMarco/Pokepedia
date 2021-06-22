
module.exports={ createFullPokemonDB:  (pokemon)=>{

var pokemonDetails = {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
    name: pokemon.name,
    types: pokemon.types.map(type=>type.name),
    id: pokemon.id,
    hp: pokemon.hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    speed: pokemon.speed,
    height: pokemon.height,
    weight: pokemon.weight,
  }
  console.log(pokemon)
    return pokemonDetails
}
}