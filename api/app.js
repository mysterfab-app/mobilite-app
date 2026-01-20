// api/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Sécurité
app.use(helmet());

// CORS - autorise uniquement ton front
app.use(cors({
  origin: process.env.FRONT_URL || 'https://tondomaine.org'
}));

// Body parser JSON
app.use(express.json());

// Exemple d'endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello UNESCO Project!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
