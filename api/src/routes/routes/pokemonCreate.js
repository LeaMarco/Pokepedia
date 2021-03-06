const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();
const { conn } = require('../../../src/db');



var idCounter=100000

router.post("/", async (req, res) => {
  if (req.body.name !== undefined) {
    var pokemonCreated= await Pokemon.create({
      name: `${req.body.name}`,
      id: idCounter++,
      hp: `${req.body.hp}`,
      attack: req.body.attack !== undefined ? `${req.body.attack}` : null,
      defense: req.body.defense !== undefined ? `${req.body.defense}` : null,
      speed: req.body.speed !== undefined ? `${req.body.speed}` : null,
      height: req.body.height !== undefined ? `${req.body.height}` : null,
      weight: req.body.weight !== undefined ? `${req.body.weight}` : null,
    })
console.log(req.body, "REQ BODYYYYY")

    conn.sync({alter:true}).then ( async ()=>{
      req.body.types.map(async tipo =>{
        console.log("ENTRE ACÁ")
        var typeSelected= await Type.findOne({where: {name: tipo}})
        pokemonCreated.addType(typeSelected)
      })
    })
    res.status(200).send("pokemon creado");
  } else {
    res.status(404).send("datos invalidos");
  }
  
});

module.exports = router;
