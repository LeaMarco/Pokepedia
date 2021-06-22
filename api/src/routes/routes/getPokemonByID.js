const axios = require("axios").default;
const { Router } = require("express");
const router = Router();
const { Pokemon, Type } = require("../../db.js");
const { createFullPokemon } = require("./Utils/CreateFullPokemon");
const { createFullPokemonDB } = require("./Utils/CreateFullPokemonDB");

router.get("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    let pokemon = createFullPokemon(pokemonApi);
    res.json(pokemon);
  } catch (error) {
    if(!isNaN(id)){
      var pokemonDb = await Pokemon.findOne({
        where: { id: id },
        include: [Type],
      });
    } else {
      var pokemonDb = await Pokemon.findOne({
        where: { name: id },
        include: [Type],
      });
    }

    if (pokemonDb === null) {
      return res.status(404).send("pokemon no encontrado");
    } else {
      res.status(200).json(createFullPokemonDB(pokemonDb));
    }
  }
});

module.exports = router;
