const { DataTypes,ENUM } = require("sequelize");
const sequelize = require("../config/banco");

const Personagem = sequelize.define(
  "Personagem",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classe: {
      type: DataTypes.ENUM('Berserker', 'Mago', 'Arqueiro', 'Paladino', 'Assassino'),
      allowNull: false,
    },
    sexo:{
      type: DataTypes.ENUM('Masculino','Feminino','Outro'),
      allowNull: false,
      defaultValue: 'Outro',
    }
  },
  {
    tableName: "personagem", // 👈 nome REAL da tabela
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Personagem;
