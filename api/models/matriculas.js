'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matriculas extends Model {
    static associate(models) {
      matriculas.belongsTo(models.Pessoas, { foreignKey: 'estudante_id' })
      matriculas.belongsTo(models.turmas)
      // define association here
    }
  }
  matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matriculas',
  });
  return matriculas;
};