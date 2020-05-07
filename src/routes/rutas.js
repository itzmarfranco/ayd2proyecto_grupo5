
const express = require('express');
const router = express.Router();//generador de rutas

const proyControladors = require('../controllers/proyControlador');



//router.post'/registry', proyControlador.registro);
//router.get('/',proyControlador.index);
router.get('/', proyControladors.index);
//router.get('/login',proyControlador.index);


router.get('/alarma', proyControladors.alarma);
router.post('/alarma', (req, res) => {
    var body = req.body;
    let { title, app_fin, fecha, lugar, recurrente, programacion, nota_especial, archivo, repetir, notificar_terceros } = body;
    var data = {
        message: `Alarma ${body.title} guardada con exito`
    }
    res.render('alarma', data);
});

module.exports = router;