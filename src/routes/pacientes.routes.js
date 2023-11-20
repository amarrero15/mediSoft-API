const router = require('express').Router();
const pacientesCtrl= require('../controllers/pacientes.controller');
router.post('/pacientes', pacientesCtrl.agregarPaciente);
router.get('/pacientes',  pacientesCtrl.getPacientes);
router.get('/pacientes/:id',  pacientesCtrl.getPaciente);
router.put('/pacientes', pacientesCtrl.updatePaciente);
router.delete('/pacientes/:id', pacientesCtrl.deletePaciente);

module.exports=router;
