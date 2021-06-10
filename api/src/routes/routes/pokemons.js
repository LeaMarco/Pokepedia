const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();


router.get("/", async (req, res) => {
  if(!req.query.name){
    let pokemons = [];
    for (let i = 1; i < 2; i++) { //////////////CAMBIAR MAS ADELANTE
      let eachPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      pokemonMain = {
        name: eachPokemon.data.name,
        img: eachPokemon.data.sprites.other.dream_world.front_default,
        types: eachPokemon.data.types.map((element) => element.type.name),
      };
      pokemons.push(pokemonMain);
    }
    var PokemonsFromDb= await Pokemon.findAll({include: [Type]})  //traer los pokemons de la bd
    PokemonsFromDb.map(pokemon =>{
      var eachPokemonDB= {
        name: pokemon.name,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        types: pokemon.types.map(type => type.name)
      }
      pokemons.push(eachPokemonDB)
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

