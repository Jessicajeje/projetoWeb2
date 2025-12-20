// controllers/armaController.js
const Arma = require("../models/Arma");

async function criarArma(req, res) {
    try {
        const { nome, tipo, habilidade_nome, id_personagem } = req.body;
        
        // Se id_personagem for obrigatório, você precisará pegá-lo do localStorage 
        // ou passar via query string e incluir aqui:
        const novaArma = await Arma.create({ 
            nome, 
            tipo, 
            habilidade_nome,
                id_personagem 
            // id_personagem: req.body.id_personagem (se estiver enviando)
        });

        return res.status(201).json(novaArma);
    } catch (error) {
        console.error("ERRO NO SEQUELIZE:", error);
        return res.status(500).json({ error: error.message });
    }
}
module.exports = {
    criarArma,
};