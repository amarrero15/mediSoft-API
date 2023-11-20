const db = require("../models");
const Consulta= db.consultas;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
consultaCtrl={};
/*
  agendarPersonal
  Descripcion: Método para la inserción de consultas medicas en el sistema
  Parámetros: JSON ={
                        idPaciente
                        idMédico
                        email
  }
  Retorno: id de la consulta generada
*/
consultaCtrl.agregarConsulta = async(req, res)=>{
    try {
      const personal = {
        idPaciente:req.body.idPaciente,
        idMedico: req.body.idMedico,
        email: req.body.email,
      };
  
      Consulta.create(personal)
      .then(data => {
        res.json({"idPersonal": data.idPersonal});
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
  getPersonal
  Descripcion: Obtiene la lista del personal insertado en el sistema
  Parámetros: no aplica
  Retorno: JSON con la lista de pacientes
*/
consultaCtrl.getConsultas=async(req, res)=>{
    try {      
      await sq.query("CALL getConsultas()").then(data => {
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
module.exports= consultaCtrl;