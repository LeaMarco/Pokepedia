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
      Hp: req.body.hp !== undefined ? `${req.body.hp}` : null,
      Attack: req.body.attack !== undefined ? `${req.body.attack}` : null,
      Defense: req.body.defense !== undefined ? `${req.body.defense}` : null,
      Speed: req.body.speed !== undefined ? `${req.body.speed}` : null,
      Height: req.body.height !== undefined ? `${req.body.height}` : null,
      Weight: req.body.weight !== undefined ? `${req.body.weight}` : null,
    })


    conn.sync({alter:true}).then ( async ()=>{
      req.body.types.map(async tipo =>{
        var typeSelected= await Type.findOne({where: {name: tipo}})
        pokemonCreated.addType(typeSelected)
      })
    })
    res.send("pokemon creado");
  } else {
    res.send("datos invalidos");
  }
  
});

module.exports = router;
