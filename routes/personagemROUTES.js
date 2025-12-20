const express = require("express");
const router = express.Router();
const persoController = require("../controllers/persoController");


// Rota POST para cadastrar personagem
router.post("/personagem", persoController.criarPersonagem);
router.put("/personagem/:id", persoController.atualizarPersonagem);


module.exports = router;