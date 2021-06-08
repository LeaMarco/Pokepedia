const axios = require("axios").default;
const { Router } = require("express");
const { Type } = require("../../db.js");
const router = Router();




router.get("/:id", async (req, res) => {
let id = rep.params
pokemon= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
console.log(pokemon.dataValues, "TIPOSSSS")
res.send("holi")
  });


//   router.get('/', async function(req, res){
//     let typesArray = [];
//      await Diet_type.findAll({attributes:['name']}).then(types =>
//          types.map(type => typesArray.push(type.dataValues.name)))
//      res.send(typesArray);
// });

// module.exports = router;
