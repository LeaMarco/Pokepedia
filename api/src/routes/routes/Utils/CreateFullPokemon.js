
module.exports={ createFullPokemon:  (pokemon)=>{
    var imgDreamWorld = pokemon.data.sprites.other.dream_world.front_default
    var imgOfficial =  pokemon.data.sprites.other['official-artwork'].front_default
    var imgFrontDefault = pokemon.data.sprites.front_default
    console.log(pokemon, "DATA DEL POLEMON EN EL BACK!")
var pokemonDetails = {
    img: imgDreamWorld ? imgDreamWorld : imgOfficial ? imgOfficial : imgFrontDefault,
    name: pokemon.data.name,
    types: pokemon.data.types.map((element) => element.type.name),
    id: pokemon.data.id,
    hp: pokemon.data.stats[0].base_stat,
    attack: pokemon.data.stats[1].base_stat,
    defense: pokemon.data.stats[2].base_stat,
    speed: pokemon.data.stats[5].base_stat,
    height: pokemon.data.height,
    weight: pokemon.data.weight,
  }
    return pokemonDetails
}
}