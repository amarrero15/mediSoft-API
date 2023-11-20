const db = require("../models");
const Pacientes= db.pacientes;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
pacientesCtrl={};
/*
  agregarPaciente
  Descripcion: Método para la inserción de pacientes en el sistema
  Parámetros: JSON
  Retorno: id del paciente insertado
*/
pacientesCtrl.agregarPaciente = async(req, res)=>{
    try {
      const paciente = {
        idPaciente:req.body.idPaciente,
        nombre:req.body.nombre,
        //avatar: req.body.avatar,
        idNivel: req.body.idNivel,
        edad: req.body.edad,
        email: req.body.email,
      };
  
      Pacientes.create(paciente)
      .then(data => {
        res.json({"idPaciente": data.idPaciente});
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the ."
        });
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }   
};
/*
  getPacientes
  Descripcion: Obtiene la lista de pacientes insertados en el sistema
  Parámetros: no aplica
  Retorno: JSON con la lista de pacientes
*/
pacientesCtrl.getPacientes=async(req, res)=>{
    try {      
      await sq.query("CALL getPacientes()").then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data"
        });
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

/*
  getPaciente
  Descripcion: Obtiene la información de un paciente en el sistema
  Parámetros: id del Paciente
  Retorno: JSON con la informacion del paciente
*/
pacientesCtrl.getPaciente=async(req, res)=>{
  try {   
    const {id}=req.params;   
    await sq.query("CALL getPaciente(?)", {replacements:[id]}).then(data => {
      res.json(data[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data"
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




  module.exports= pacientesCtrl;