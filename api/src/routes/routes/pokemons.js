const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();
const { createPreviewPokemon } = require("./Utils/CreatePreviewPokemon");
const { createFullPokemon } = require("./Utils/CreateFullPokemon");

router.post("/", async (req, res) => {
  let pokemons = [];
  pokemonsUrls = [];
  const { type, pageNumber, order } = req.body;


//////////CREO EL ARRAY CON LAS URLS ///////////////////
  if (type=== "none" ) {
    for (let i = 1; i < 1119; i++) {
      if (i > 898) {
        pokemonsUrls.push(`https://pokeapi.co/api/v2/pokemon/${i + 9102}`);
      } else {
        pokemonsUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
  }} else {
    allTypeProperties= await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    pokemonsUrls= allTypeProperties.data.pokemon.map(element => element.pokemon.url)
  }
  if(order===false) {pokemonsUrls.reverse()}
  ///////////////////////////////////////////////////////

///////////////PAGINADO////////////////////////
  lastPage= Math.ceil(pokemonsUrls.length/12)
  console.log(lastPage, "laspage")

  firstPokemon=(1+(12*(pageNumber-1)))
  lastPokemon= pageNumber*12
  actualPagePokemons=pokemonsUrls.slice(firstPokemon,lastPokemon+1)
    
  var responses = await Promise.all(actualPagePokemons.map((pokemon) => axios.get(pokemon))
      );
      responses.map(async (pokemon) => {
        var previewPokemon = await createPreviewPokemon(pokemon);
        pokemons.push(previewPokemon);
      });
    
  var PokemonsFromDb = await Pokemon.findAll({ include: [Type] }); //traer los pokemons de la bd
  PokemonsFromDb.map((pokemon) => {
    var eachPokemonDB = {
      name: pokemon.name,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      types: pokemon.types.map((type) => type.name),
    };
    if (pokemons.length < 12) {
      pokemons.push(eachPokemonDB);
    }
  });
  res.json([pokemons, lastPage]);
});


module.exports = router;
