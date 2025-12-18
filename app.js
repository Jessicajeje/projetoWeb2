// 1️⃣ VARIÁVEIS DE AMBIENTE
require("dotenv").config();

// 2️⃣ IMPORTAÇÕES
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/banco");
require("./models/Usuario");
// 3️⃣ APP
const app = express();
const PORT = process.env.PORT || 3000;

/* ======================
   4️⃣ MIDDLEWARES
====================== */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ======================
   5️⃣ TEMPLATE ENGINE
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
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// rotas de páginas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form2", (req, res) => {
  res.render("form2");
});

/* ======================
   7️⃣ BANCO DE DADOS
====================== */
sequelize
  .sync({ force: true })
  .then(() => console.log("✅ Banco sincronizado"))
  .catch((err) => console.error("❌ Erro no banco:", err));

/* ======================
   8️⃣ SERVIDOR
====================== */
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
