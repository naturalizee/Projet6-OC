// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user'); // Importer les routes d'utilisateur
const app = express();

app.use(express.json()); // Pour parser le JSON des requêtes

// Middleware CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// MONGOOSE CONNECT
mongoose.connect('mongodb+srv://naturalizee:4nskdAwEHtvvNYcx@cluster0.evt76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Utiliser les routes d'utilisateur
app.use('/api/auth', userRoutes);

module.exports = app;
