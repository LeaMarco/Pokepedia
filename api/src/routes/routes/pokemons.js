const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();
const { createPreviewPokemon } = require("./Utils/CreatePreviewPokemon");
const { createFullPokemon } = require("./Utils/CreateFullPokemon");

router.post("/", async (req, res) => {
  let pokemons = [];
  pokemonsUrls = [];
  const { index } = req.body.params;
  if (index < 1117) {
    var limit = index + 12;
  } else {
    var limit = 1118;
  }
  for (let i = index; i < limit; i++) {
    if (i > 898) {
      pokemonsUrls.push(`https://pokeapi.co/api/v2/pokemon/${i + 9102}`);
    } else {
      pokemonsUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
  }
  var responses = await Promise.all(
    pokemonsUrls.map((pokemon) => axios.get(pokemon))
  );
  responses.map(async (pokemon) => {
    var pokemonMain = await createPreviewPokemon(pokemon);
    pokemons.push(pokemonMain);
  });
  var PokemonsFromDb = await Pokemon.findAll({ include: [Type] }); //traer los pokemons de la bd
  PokemonsFromDb.map((pokemon) => {
    var eachPokemonDB = {
      name: pokemon.name,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      types: pokemon.types.map((type) => type.name),
    };
    console.log(pokemons.length, "LENGTH");
    if (pokemons.length < 12) {
      pokemons.push(eachPokemonDB);
    }
  });

  res.json(pokemons);
});

router.get("/", async (req, res) => {
  let name = req.query.name;
  console.log(name, "NAMEEE");
  try {
    pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    pokemon = createFullPokemon(pokemonApi);
    res.json(pokemon);
  } catch (error) {
    pokemonDb = await Pokemon.findOne({ where: { name: name } });
    if (pokemonDb === null) {
      return res.status(404).send("pokemon no encontrado");
    } else {
      res.json(pokemonDb);
    }
  }
});

module.exports = router;
