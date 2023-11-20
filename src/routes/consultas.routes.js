const router = require('express').Router();
const consultasCtrl= require('../controllers/consultas.controller');
router.post('/consultas', consultasCtrl.agregarConsulta);
router.get('/consultas',  consultasCtrl.getConsultas);

module.exports=router;