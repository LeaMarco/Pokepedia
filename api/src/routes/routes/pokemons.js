const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon } = require("../../db.js");
const router = Router();

let initialId = 10000;

router.post("/", (req, res) => {
  if (req.body.name !== undefined) {
    Pokemon.create({
      name: `${req.body.name}`,
      id: initialId++,
      Hp: req.body.hp !== undefined ? `${req.body.hp}` : null,
      Attack: req.body.attack !== undefined ? `${req.body.attack}` : null,
      Defense: req.body.defense !== undefined ? `${req.body.defense}` : null,
      Speed: req.body.speed !== undefined ? `${req.body.speed}` : null,
      Height: req.body.height !== undefined ? `${req.body.height}` : null,
      Weight: req.body.weight !== undefined ? `${req.body.weight}` : null,
    });
    res.send("pokemon creado");
  } else {
    res.send("datos invalidos");
  }
});


router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    console.log("entré acá 1")
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
      console.log("entré acá 2")
      let pokemonDb = await Pokemon.findOne({ where: {id: id} });
        if(pokemonDb===null){
          return res.send("pokemon no encontradoooooooo")
        } else{
          res.json(pokemonDb)
        }
    } catch (error) {
      console.log(error)
    }
  }
});

router.get("/:name", async (req, res) => {
  let name = req.query.name
  try {
    pokemonApi= await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    pokemon = {
      img: pokemonApi.data.sprites.other.dream_world.front_default,
      name: pokemonApi.data.name,
      types: pokemonApi.data.types.map(element => element.type.name),
      id: pokemonApi.data.id,
      hp: pokemonApi.data.stats[0].base_stat,
      attack: pokemonApi.data.stats[1].base_stat,
      defense: pokemonApi.data.stats[2].base_stat,
      speed: pokemonApi.data.stats[5].base_stat,
      height: pokemonApi.data.height,
      weight: pokemonApi.data.weight,
    }
    res.json(pokemon)
  } catch (error) {
    try {
      pokemonDb = await Pokemon.findAll({ attributes: ['name'] });
      res.send("hola") 
    } catch (error) {
      res.send("pokemon no encontrado")
    }
  }
});

router.get("/", (req, res) => {
  let pokemons=[]
  for (let i = 1; i < 5; i++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response=> {pokemons.push(response.data.name),console.log(pokemons, "POKEMONS")})
  }
  setTimeout(()=>console.log(pokemons, "POKEMONS5555555555555555555555555558888888888888888888"), 300) 


  
  // axios
  //   .get("https://pokeapi.co/api/v2/pokemon", {
  //     params: {
  //       limit: 12,
  //       //offset: 50
  //     },
  //   })
    // .then((response) => res.json(response.data.results));
    res.send("holi")
});

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
