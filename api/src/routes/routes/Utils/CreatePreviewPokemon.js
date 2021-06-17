
module.exports={ createPreviewPokemon: async (pokemon)=>{
    var imgDreamWorld = pokemon.data.sprites.other.dream_world.front_default
    var imgOfficial =  pokemon.data.sprites.other['official-artwork'].front_default
    var imgFrontDefault = pokemon.data.sprites.front_default
    


var pokemonMain = {
      name: pokemon.data.name,
      img: imgDreamWorld? imgDreamWorld : imgOfficial ? imgOfficial : imgFrontDefault,
      types: pokemon.data.types.map((element) => element.type.name),
    }
    return pokemonMain
}
}