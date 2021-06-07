const { Router } = require('express');
const router = Router();
// const {Diet_type} = require('./src/db.js')
// const pepe = require('./src/db.js')


router.get('/', function(req, res){
    // Diet_type.findAll().then((types)=>
    // res.render("Types",{types}))
    res.send("entro el get de types")
});

module.exports = router;