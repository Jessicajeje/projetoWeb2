const express = require("express");
const router = express.Router();

const Usuario = require("../models/Usuario");

// Rota POST para cadastrar usuário
router.post("/registrar", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verifica se veio tudo
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    // Salva no banco
    const usuario = await Usuario.create({ nome, email, senha });

    res.json({ sucesso: true, usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar usuário" });
  }
});

module.exports = router;