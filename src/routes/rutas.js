
const express = require('express');
const router = express.Router();//generador de rutas

const proyControladors = require('../controllers/proyControlador');



//router.post'/registry', proyControlador.registro);
//router.get('/',proyControlador.index);
router.get('/',proyControladors.index);
//router.get('/login',proyControlador.index);

module.exports = router;