module.exports = (sequelize, Sequelize) => {
    const medicamentos = sequelize.define("MS_Medicamentos", {
      idMedicamento: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.BIGINT,
      },
      precio: {
        type: Sequelize.BIGINT
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return medicamentos;
  };