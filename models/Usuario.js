const { DataTypes } = require("sequelize");
const sequelize = require("../config/banco");

const Usuario = sequelize.define(
  "Usuario",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "usuario", // 👈 nome REAL da tabela
    freezeTableName: true, // 👈 não pluraliza
    timestamps: false, // opcional
  }
);

module.exports = Usuario;
