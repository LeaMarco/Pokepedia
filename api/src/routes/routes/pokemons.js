const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon } = require("../../db.js");
const router = Router();


router.get("/", async (req, res) => {
  let pokemons = [];
  for (let i = 1; i < 41; i++) {
    let eachPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokemonMain = {
      name: eachPokemon.data.name,
      img: eachPokemon.data.sprites.other.dream_world.front_default,
      types: eachPokemon.data.types.map((element) => element.type.name),
    };
    pokemons.push(pokemonMain);
  }
  res.json(pokemons);
});

// router.get("/:name", async (req, res) => {
//   let name = req.query.name;
//   try {
//     pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     pokemon = {
//       img: pokemonApi.data.sprites.other.dream_world.front_default,
//       name: pokemonApi.data.name,
//       types: pokemonApi.data.types.map((element) => element.type.name),
//       id: pokemonApi.data.id,
//       hp: pokemonApi.data.stats[0].base_stat,
//       attack: pokemonApi.data.stats[1].base_stat,
//       defense: pokemonApi.data.stats[2].base_stat,
//       speed: pokemonApi.data.stats[5].base_stat,
//       height: pokemonApi.data.height,
//       weight: pokemonApi.data.weight,
//     };
//     res.json(pokemon);
//   } catch (error) {
//     try {
//       pokemonDb = await Pokemon.findAll({ attributes: ["name"] });
//       res.send("hola");
//     } catch (error) {
//       res.send("pokemon no encontrado");
//     }
//   }
// });

module.exports = router;

//   router.post('/', function(req, res){
//     if (req.body.name !== undefined && req.body.resume !== undefined && req.body.puntuation !== undefined){
//         Recipe.create({
//             name:${req.body.name},
//             resume:${req.body.resume},
//             puntuation:${req.body.puntuation},
//         })
//         res.send("Nunca taxi")
//     }
//     else{
//         res.send("Falta un dato pa")
//     }
//     }
// )
