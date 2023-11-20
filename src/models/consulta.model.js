module.exports = (sequelize, Sequelize) => {
    const consultas = sequelize.define("MS_Consultas", {
      idConsulta: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      idPaciente: {
        type: Sequelize.BIGINT,
      },
      idMedico: {
        type: Sequelize.BIGINT,
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return consultas;
  };