const router = require('express').Router();
const personalCtrl= require('../controllers/personalTrabajo.controller');
router.post('/personal', personalCtrl.agregarPersonal);
router.get('/personal',  personalCtrl.getPersonal);
router.get('/personal/medicos',  personalCtrl.getMedicos);
router.get('/personal/tipo',  personalCtrl.getTipoPersonal);

module.exports=router;