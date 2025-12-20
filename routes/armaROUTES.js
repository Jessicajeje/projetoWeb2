const express = require("express");
const router = express.Router();
const armaController = require("../controllers/armaController");



// Rota POST para cadastrar arma
router.post("/armas", armaController.criarArma);
module.exports = router;