const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();



router.post("/", async (req, res) => {
  if(!req.query.name){
    let pokemons = [];
    pokemonsUrls=[]
    const {index} = req.body.params
    console.log(index, "PARAMS")
    if(index<1117) {var limit=index+12}
    else {var limit=1118}
    for (let i = index; i < limit; i++) {
      if(i>898){pokemonsUrls.push(`https://pokeapi.co/api/v2/pokemon/${i+9102}`)}
      else{pokemonsUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)}
    }
    var responses= await Promise.all(pokemonsUrls.map(pokemon => axios.get(pokemon)))
    responses.map(pokemon => {
      var imgDreamWorld = pokemon.data.sprites.other.dream_world.front_default
      var imgOfficial = pokemon.data.sprites.other['official-artwork'].front_default
      var imgFrontDefault = pokemon.data.sprites.front_default
      var pokemonMain = {
            name: pokemon.data.name,
            img: imgDreamWorld? imgDreamWorld : imgOfficial ? imgOfficial : imgFrontDefault,
            types: pokemon.data.types.map((element) => element.type.name),
          }; pokemons.push(pokemonMain)}
           )
    
      ;
    // }
    var PokemonsFromDb= await Pokemon.findAll({include: [Type]})  //traer los pokemons de la bd
    PokemonsFromDb.map(pokemon =>{
      var eachPokemonDB= {
        name: pokemon.name,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        types: pokemon.types.map(type => type.name)
      }
      console.log(pokemons.length, "LENGTH")
      if (pokemons.length<12) {pokemons.push(eachPokemonDB)}
    })

    res.json(pokemons);
  } else {
    let name = req.query.name;
  try {
    pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    pokemon = {
      img: pokemonApi.data.sprites.other.dream_world.front_default,
      name: pokemonApi.data.name,
      types: pokemonApi.data.types.map((element) => element.type.name),
      id: pokemonApi.data.id,
      hp: pokemonApi.data.stats[0].base_stat,
      attack: pokemonApi.data.stats[1].base_stat,
      defense: pokemonApi.data.stats[2].base_stat,
      speed: pokemonApi.data.stats[5].base_stat,
      height: pokemonApi.data.height,
      weight: pokemonApi.data.weight,
    };
    res.json(pokemon);
  } catch (error) {
      pokemonDb = await Pokemon.findOne({where: { name: name }});
      if (pokemonDb === null) {
        return res.status(404).send("pokemon no encontrado");
      } else {
        res.json(pokemonDb);
      };
  }
  }
});

module.exports = router;

