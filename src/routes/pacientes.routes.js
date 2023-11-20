const router = require('express').Router();
const pacientesCtrl= require('../controllers/pacientes.controller');
router.post('/pacientes', pacientesCtrl.agregarPaciente);
router.get('/pacientes',  pacientesCtrl.getPacientes);
router.get('/pacientes/:id',  pacientesCtrl.getPaciente);

module.exports=router;
