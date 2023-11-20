const db = require("../models");
const Niveles= db.niveles;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
nivelesCtrl={};
nivelesCtrl.getNiveles=async(req, res)=>{
    try {      
      await sq.query("CALL getNiveles()").then(data => {
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
  module.exports= nivelesCtrl;