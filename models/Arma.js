const { DataTypes } = require("sequelize");
const sequelize = require("../config/banco");

const Arma = sequelize.define(
  "Armas",
  {
    id_arma:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_personagem:{
        type: DataTypes.INTEGER
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM(  
        'Corpo a Corpo',
        'Longo Alcance',
        'Mágica',
        'Defensiva'),
      allowNull: false,
    },
    habilidade_nome:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "armas", // 👈 nome REAL da tabela
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Arma;
