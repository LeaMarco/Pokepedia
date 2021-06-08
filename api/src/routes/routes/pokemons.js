const axios = require("axios").default;
const { Router } = require("express");
const {Pokemon} = require("../../db.js");
const router = Router();

let initialId= 10000


router.post("/", (req, res) => {
    if(req.body.name !== undefined){
      Pokemon.create({
        name: `${req.body.name}`,
        id: initialId++,
        Hp: req.body.hp!==undefined? `${req.body.hp}`: null,
        Attack: req.body.attack!==undefined? `${req.body.attack}`: null,
        Defense: req.body.defense!==undefined? `${req.body.defense}`: null,
        Speed: req.body.speed!==undefined? `${req.body.speed}`: null,
        Height: req.body.height!==undefined? `${req.body.height}`: null,
        Weight: req.body.weight!==undefined? `${req.body.weight}`: null,
        })
      res.send ("pokemon creado")
    } else {
      res.send("datos invalidos")
    }
  });


  router.get("/", async (req, res) => {
    
    axios.get("https://pokeapi.co/api/v2/pokemon",{
        params: {
        limit: 12,
        //offset: 50
       }
    }).then(response => res.json(response.data.results))
  })

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