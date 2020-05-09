const express = require('express');
const router = express.Router();//generador de rutas

const proyectoController = require('../controllers/proyectoController')

router.get('/',proyectoController.list);
router.post('/add',proyectoController.save)

module.exports = router;