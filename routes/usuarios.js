//Rutas para crear usuario
const express  = require('express');
const router = express.Router();
const usuarioControllers = require('../controllers/usuariosControllers');
const { check } = require('express-validator');

//Crear un usuario
//api/usuarios
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],

    usuarioControllers.crearUsuario);
module.exports =  router;