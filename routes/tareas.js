const express =  require('express');
const router =  express.Router();
const tareaControllers =  require('../controllers/tareaControllers');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//Crear una tarea
//api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El Proyecto es obligatorio').not().isEmpty()
    ],
    tareaControllers.crearTarea
);

//Obtener las tareas por proyecto
router.get('/',
    auth,
    tareaControllers.obtenerTareas
);

//Actualizar tarea
router.put('/:id',
    auth,
    tareaControllers.actualizarTarea

);

//Eliminar una Tarea
router.delete('/:id',
    auth,
    tareaControllers.eliminarTarea

);


module.exports = router;
