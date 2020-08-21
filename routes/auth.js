//Rutas para autenticar usuarios
const express  = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authControllers =  require('../controllers/authControllers');
const auth = require('../middleware/auth');

//Crear un usuario
//api/auth
router.post('/',
    authControllers.autentificarUsuario
);

//Obtiene el usuario aunteticado
router.get('/',
    auth,
    authControllers.usaurioAutenticado

);



module.exports =  router;