const db = require("../models");
const PersonalTrabajo= db.personalTrabajo;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
personalCtrl={};
/*
  agregarPersonal
  Descripcion: Método para la inserción de personal en el sistema
  Parámetros: JSON ={
                        nombre: Nombre del funcionario
                        idTipo:
                                 1(Medicos)
                                 2(Enfermeros)
                        email: email del funcionario
                        idStatus:
                                1 (Activo)
                                2 (Inactivo)
  }
  Retorno: id del funcionario insertado
*/
personalCtrl.agregarPersonal = async(req, res)=>{
    try {
      const personal = {
        idPersonal:req.body.idPersonal,
        nombre:req.body.nombre,
        //avatar: req.body.avatar,
        idTipo: req.body.idTipo,
        email: req.body.email,
        idStatus: req.body.idStatus,
      };
  
      PersonalTrabajo.create(personal)
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
personalCtrl.getPersonal=async(req, res)=>{
    try {      
      await sq.query("CALL getPersonal()").then(data => {
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
  getMedicos
  Descripcion: Obtiene la lista de medicos insertado en el sistema
  Parámetros: no aplica
  Retorno: JSON con la lista de pacientes
*/
personalCtrl.getMedicos=async(req, res)=>{
    try {      
      await sq.query("CALL getPersonalXTipo(1)").then(data => {
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
  getTipoPersonal
  Descripcion: Obtiene la lista con los tipos de funcionarios
  Parámetros: no aplica
  Retorno: JSON con la lista de pacientes
*/
personalCtrl.getTipoPersonal=async(req, res)=>{
  try {      
    await sq.query("CALL getTipoPersonal()").then(data => {
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
module.exports= personalCtrl;