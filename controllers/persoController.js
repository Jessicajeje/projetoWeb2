const personagem = require("../models/Personagem");

// 1. Função Criar
async function criarPersonagem(req, res) { 
    const { nome, classe, sexo } = req.body;
    try {
        const novoPersonagem = await personagem.create({
            nome,
            classe,
            sexo
        });
        res.status(201).json(novoPersonagem);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar personagem" });
    }
}

// 2. Função Atualizar
async function atualizarPersonagem(req, res) {
    try {
        const { id } = req.params;
        const { nome, classe, sexo } = req.body;

        // Executa a atualização real no banco (Sequelize)
        await personagem.update(
            { nome, classe, sexo }, 
            { where: { id_personagem: id } } // Verifique se o nome da coluna é id ou id_personagem
        );

        res.status(200).json({ 
            id_personagem: id, 
            nome, 
            classe, 
            sexo 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro interno ao atualizar" });
    }
}

// 3. EXPORTAÇÃO ÚNICA (Corrigido)
module.exports = {
    criarPersonagem,
    atualizarPersonagem
};