const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();
const { createFullPokemon } = require("./Utils/CreateFullPokemon");




router.get("/", async (req, res) => {
    let name = req.query.name;
  try {
    pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    pokemon= createFullPokemon(pokemonApi);
    res.json(pokemon);
  } catch (error) {
      pokemonDb = await Pokemon.findOne({where: { name: name }});
      if (pokemonDb === null) {
        return res.status(404).send("pokemon no encontrado");
      } else {
        res.json(pokemonDb);
      };
  }
  
});

module.exports = router;