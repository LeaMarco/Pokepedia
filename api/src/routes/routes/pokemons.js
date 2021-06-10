const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon } = require("../../db.js");
const router = Router();


router.get("/", async (req, res) => {
  if(!req.query.name){
    let pokemons = [];
    for (let i = 1; i < 1; i++) { 
      let eachPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      pokemonMain = {
        name: eachPokemon.data.name,
        img: eachPokemon.data.sprites.other.dream_world.front_default,
        types: eachPokemon.data.types.map((element) => element.type.name),
      };
      pokemons.push(pokemonMain);
    }
    var PokemonsFromDb= await Pokemon.findAll({attributes: ['name']})  //traer los pokemons de la bd
    var namestypes= PokemonsFromDb.map(poke=> [poke.dataValues]) // map para trabajar en cada pokemon
    console.log(namestypes, "HOLAAAAAAA")// ese de la bd filtrar 3 prop
    // agregarle el tipo 
    // pushearlo en el array
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

