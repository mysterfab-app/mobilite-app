const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Servir le frontend buildé
app.use(express.static(path.join(__dirname, "../front/dist")));

// API de test
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/dist/index.html"));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log("mobilite-app running on port", PORT);
});
