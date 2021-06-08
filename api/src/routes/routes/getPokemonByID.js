const axios = require("axios").default;
const { Router } = require("express");
const { Type } = require("../../db.js");
const router = Router();


router.get("/", async (req, res) => {

let types= Type.findAll({ attributes: ["name"] })
console.log(types, "TIPOSSSS")
res.send("holi")
  });

//   router.get('/', async function(req, res){
//     let typesArray = [];
//      await Diet_type.findAll({attributes:['name']}).then(types =>
//          types.map(type => typesArray.push(type.dataValues.name)))
//      res.send(typesArray);
// });

// module.exports = router;
