module.exports = (sequelize, Sequelize) => {
    const personalTrabajo = sequelize.define("MS_PersonalTrabajo", {
      idPersonal: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      idTipo: {
        type: Sequelize.BIGINT,
      },
      email: {
        type: Sequelize.STRING,
      },
      idStatus: {
        type: Sequelize.BIGINT,
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return personalTrabajo;
  };