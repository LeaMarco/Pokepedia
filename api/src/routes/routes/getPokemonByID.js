const axios = require("axios").default;
const { Router } = require("express");
const router = Router();
const { Pokemon } = require("../../db.js");

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    var imgDreamWorld = pokemonApi.data.sprites.other.dream_world.front_default
      var imgOfficial = pokemonApi.data.sprites.other['official-artwork'].front_default
      var imgFrontDefault = pokemonApi.data.sprites.front_default
    let pokemon = {
      img: imgDreamWorld? imgDreamWorld : imgOfficial ? imgOfficial : imgFrontDefault,
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
      let pokemonDb = await Pokemon.findOne({ where: { id: id } });
      if (pokemonDb === null) {
        return res.status(404).send("pokemon no encontrado");
      } else {
        res.json(pokemonDb);
      }
  }
});

module.exports = router;
