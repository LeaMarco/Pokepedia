const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const types = require('./routes/getPokemonByType')

const router = Router();

router.use('/types', types)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
