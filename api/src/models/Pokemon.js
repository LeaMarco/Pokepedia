const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{initialAutoIncrement: 2000});
  
};
