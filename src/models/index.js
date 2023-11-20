const config= require('../config/config');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.db_user, config.db_password, {
  host: config.db_host,
  port:25060,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Modelos
db.consultas=require("./consulta.model")(sequelize, Sequelize);
db.medicamentos= require("./medicamento.model")(sequelize, Sequelize);
db.niveles= require("./nivel-paciente.model")(sequelize, Sequelize);
db.pacientes= require("./paciente.model")(sequelize, Sequelize);
db.personalTrabajo= require("./personal-trabajo.model")(sequelize, Sequelize);

module.exports = db;