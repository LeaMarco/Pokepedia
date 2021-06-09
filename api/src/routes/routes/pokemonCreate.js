const axios = require("axios").default;
const { Router } = require("express");
const { Pokemon } = require("../../db.js");
const router = Router();

var idCounter=100000

router.post("/", async (req, res) => {
  console.log(req.body, "BODYYY")
  if (req.body.name !== undefined) {
    await Pokemon.create({
      name: `${req.body.name}`,
      id: idCounter++,
      Hp: req.body.hp !== undefined ? `${req.body.hp}` : null,
      Attack: req.body.attack !== undefined ? `${req.body.attack}` : null,
      Defense: req.body.defense !== undefined ? `${req.body.defense}` : null,
      Speed: req.body.speed !== undefined ? `${req.body.speed}` : null,
      Height: req.body.height !== undefined ? `${req.body.height}` : null,
      Weight: req.body.weight !== undefined ? `${req.body.weight}` : null,
    })
    res.send("pokemon creado");
  } else {
    res.send("datos invalidos");
  }
  
});