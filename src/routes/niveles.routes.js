const router = require('express').Router();
const nivelesCtrl= require('../controllers/nivelesPaciente.controller');
//router.post('/pacientes', pacientesCtrl.agregarPaciente);
router.get('/niveles',  nivelesCtrl.getNiveles);

module.exports=router;