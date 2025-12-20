// 1️⃣ VARIÁVEIS DE AMBIENTE
require("dotenv").config();

// 2️⃣ IMPORTAÇÕES
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/banco");

// 3️⃣ CONFIGURAÇÃO DO APP
const app = express();
const PORT = process.env.PORT || 3000;

/* ======================
   4️⃣ MIDDLEWARES (Essencial vir antes das rotas)
====================== */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ======================
   5️⃣ TEMPLATE ENGINE (Handlebars)
====================== */
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

/* ======================
   6️⃣ ROTAS
====================== */
// Importação das rotas
const apiRoutes = require("./routes/api");
const armaRoutes = require("./routes/armaROUTES");
const personagemRoutes = require("./routes/personagemROUTES");

// Uso das rotas com prefixo /api
app.use("/api", apiRoutes);
app.use("/api", armaRoutes);
app.use("/api", personagemRoutes);

// Rotas de páginas (Frontend)
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/arma", (req, res) => {
  res.render("arma");
});

/* ======================
   7️⃣ CONEXÃO COM BANCO E INICIALIZAÇÃO
====================== */
// Sincroniza o banco primeiro, depois sobe o servidor
sequelize
  .sync({ alter: true }) //ajusta a tabela sem apagar os dados
  .then(() => {
    console.log("✅ Banco de dados sincronizado com sucesso!");
    
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Falha ao sincronizar o banco de dados:", err);
    process.exit(1); // Fecha o app se o banco falhar
  });
