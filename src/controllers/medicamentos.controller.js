const db = require("../models");
const Medicamentos= db.medicamentos;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
medicamentosCtrl={};
/*
  agregarMedicamento
  Descripcion: Método para la inserción de medicamentos en el sistema
  Parámetros: JSON
  Retorno: id del medicamento insertado
*/
medicamentosCtrl.agregarMedicamento = async(req, res)=>{
    try {
      const medicamento = {
        idPaciente:req.body.idMedicamento,
        nombre:req.body.nombre,
        //avatar: req.body.avatar,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
      };
  
      Medicamentos.create(medicamento)
      .then(data => {
        res.json({"idMedicamento": data.idMedicamento});
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
  getMedicamentos
  Descripcion: Obtiene la lista de medicamentos insertados en el sistema
  Parámetros: no aplica
  Retorno: JSON con la lista de pacientes
*/
medicamentosCtrl.getMedicamentos=async(req, res)=>{
    try {      
      await sq.query("CALL getMedicamentos()").then(data => {
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
  module.exports= medicamentosCtrl;