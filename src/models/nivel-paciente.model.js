module.exports = (sequelize, Sequelize) => {
    const niveles = sequelize.define("MS_NivelPaciente", {
      idNivel: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: Sequelize.STRING
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return niveles;
  };