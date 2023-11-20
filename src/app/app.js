const express = require('express');
const config= require('../config/config');
const cors =require( 'cors');
const db = require("../models");
const app=express();

//Rutas
const consultasRoutes = require ('../routes/consultas.routes');
const medicamentosRoutes= require('../routes/medicamentos.routes');
const nivelesRoutes =require('../routes/niveles.routes');
const pacientesRoutes =require('../routes/pacientes.routes');
const personalTrabajoRoutes =require('../routes/personalTrabajo.routes');


app.use(cors());
app.use(express.json());
app.set('port',config.port);

app.use(consultasRoutes);
app.use(medicamentosRoutes);
app.use(nivelesRoutes);
app.use(pacientesRoutes);
app.use(personalTrabajoRoutes);

/*SEQUELIZE STARTS*/
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res)=>{
    res.send('<h1> MEDISOFT  API</h1>');

});
module.exports=app;