const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();
const { createFullPokemon } = require("./Utils/CreateFullPokemon");
const { createFullPokemonDB } = require("./Utils/CreateFullPokemonDB");


router.post("/", async (req, res) => {
  let pokemons = [];
  let pokemonsUrls = [];
  let PokemonsFromDb= [];
  const { type, order } = req.body;


//////////CREO EL ARRAY CON LAS URLS ///////////////////
  if (type=== "none" ) {
    for (let i = 1; i < 41; i++) {
        pokemonsUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  }} else {
    allTypeProperties= await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    pokemonsUrls= allTypeProperties.data.pokemon.map(element => element.pokemon.url)
    pokemonsUrls.slice(1, 41) 
  }
  if(order===false) {pokemonsUrls.reverse()}
  ///////////////////////////////////////////////////////
  
  var responses = await Promise.all(pokemonsUrls.map((pokemon) => axios.get(pokemon))
      );
      responses.map( (pokemon) => {
        var Pokemon = createFullPokemon(pokemon);
        pokemons.push(Pokemon);
      });
    
  PokemonsFromDb = await Pokemon.findAll({ include: [Type] }); //traer los pokemons de la bd
  if(type!=="none") PokemonsFromDb= PokemonsFromDb.filter(pokemon=> pokemon.dataValues.types.map(t => t.dataValues.name).includes(type))
  PokemonsFromDb.map((pokemon) => {
    var eachPokemonDB = createFullPokemonDB(pokemon)
      ;
      pokemons.push(eachPokemonDB);
  });
  res.json(pokemons);
});


module.exports = router;
