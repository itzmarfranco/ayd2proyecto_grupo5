
const express = require('express');
const router = express.Router();//generador de rutas

const proyControladors = require('../controllers/proyControlador');



//router.post'/registry', proyControlador.registro);
//router.get("/", proyControladors.index);
//router.get("/", proyControladors.register);
//router.get('/login',proyControlador.index);



router.get("/", proyControladors.signup);
router.post("/", proyControladors.index);

router.get("/login", proyControladors.log_user);
router.post("/login", proyControladors.login_user);

router.get("/dashboard", proyControladors.dashboard);


router.get("/:id/alarma/", proyControladors.alarma);
router.post('/:id/alarma/', (req, res) => {
    var body = req.body;
    let { title, app_fin, fecha, lugar, recurrente, programacion, nota_especial, archivo, repetir, notificar_terceros } = body;
    var data = {
        message: `Alarma ${body.title} guardada con exito`
    }
    res.render('alarma', data);
});

module.exports = router;