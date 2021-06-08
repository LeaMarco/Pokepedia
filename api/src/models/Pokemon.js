const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
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
      allowNull: true,
    },
    Attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },{initialAutoIncrement: 2000});
  
};
