const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const types = require('./routes/getPokemonByType')
const pokemon = require('./routes/pokemons')
const byId= require('./routes/getPokemonByID')
const create= require('./routes/pokemonCreate')
const byName= require('./routes/getPokemonByName')

const router = Router();

router.use('/types', types)
router.use('/', pokemon)
router.use('/pokemon', byId)
router.use('/find', byName)
router.use('/create', create)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
