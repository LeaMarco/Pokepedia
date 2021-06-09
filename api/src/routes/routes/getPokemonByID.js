const axios = require("axios").default;
const { Router } = require("express");
const { Type } = require("../../db.js");
const router = Router();
const { Pokemon } = require("../../db.js");



router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    console.log("entré acá 1");
    pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = {
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
    try {
      console.log("entré acá 2");
      let pokemonDb = await Pokemon.findOne({ where: { globalId: id } });
      if (pokemonDb === null) {
        return res.send("pokemon no encontradoooooooo");
      } else {
        res.json(pokemonDb);
      }
    } catch (error) {
      console.log(error);
    }
  }
});



module.exports = router;
