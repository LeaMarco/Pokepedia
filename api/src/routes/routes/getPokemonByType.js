const axios = require("axios").default;
const { Router } = require("express");
const { Type } = require("../../db.js");
const router = Router();

router.get("/", (req, res) => {
    var array=[]
  Type.findAll({ attributes: ["id"] }).then((types) => {
    array.push(types)})
    console.log(array)
    if (array) {
      axios.get("https://pokeapi.co/api/v2/type").then((response) => {
        response.data.results.map((type) => Type.create({ name: `${type.name}` }));
        res.send('termine');
      });
    }
  });


module.exports = router;
