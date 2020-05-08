
const express = require('express');
const router = express.Router();//generador de rutas

const proyControladors = require('../controllers/proyControlador');

const mysql = require('mysql');
const hostDB = '18.188.212.217';
const userDB = 'reminder';
const passDB = '#Reminder1S2020';
const nameDB = 'REMINDER';
const portDB = '3306';

var connection = mysql.createConnection(
    {
        connectionLimit: 10,
        host: `${hostDB}`,
        user: `${userDB}`,
        password: `${passDB}`,
        database: `${nameDB}`,
        port: `${portDB}`
    }
);

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