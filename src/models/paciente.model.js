module.exports = (sequelize, Sequelize) => {
    const pacientes = sequelize.define("MS_Pacientes", {
      idPaciente: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      idNivel: {
        type: Sequelize.BIGINT,
      },
      edad: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return pacientes;
  };