const router = require('express').Router();
const medicamentosCtrl= require('../controllers/medicamentos.controller');
router.post('/medicamentos', medicamentosCtrl.agregarMedicamento);
router.get('/medicamentos',  medicamentosCtrl.getMedicamentos);

module.exports=router;