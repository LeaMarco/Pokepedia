const axios = require("axios").default;
const { Router } = require("express");
const { Type } = require("../../db.js");
const router = Router();

router.get("/", async (req, res) => {
  let typesArray = [];
  const typesRaw = await Type.findAll({ attributes: ["name"] });
  typesRaw.map((type) => typesArray.push(type.dataValues.name));
  res.send(typesArray);
});

module.exports = router;

