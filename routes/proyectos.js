const express =  require('express');
const router =  express.Router();
const proyectoControllers =  require('../controllers/proyectoControllers');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//Crea un proyecto
//api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()

    ],
    proyectoControllers.crearProyecto
);

//Obtener todo los proyectos
router.get('/',
    auth,
    proyectoControllers.obtenerProyectos
);

//Actualizar proyecto via ID
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoControllers.actualizarProyecto
);

//Eliminar un proyecto
//Actualizar proyecto via ID
router.delete('/:id',
    auth,
    proyectoControllers.eliminarProyecto
);



module.exports = router;