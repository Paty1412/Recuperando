const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const obraRoutes = require('./routes/obraRoutes');
const fiscalizacaoRoutes = require('./routes/fiscalizacaoRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/obras', obraRoutes);
app.use('/fiscalizacoes', fiscalizacaoRoutes);
app.use('/obras', require('./routes/obrasRoutes'));

// Listar fiscalizações por obra
const Fiscalizacao = require('./models/fiscalizacao'); // corrigido aqui, caminho relativo e minúsculo
app.get('/obra/:id/fiscalizacoes', async (req, res) => {
  try {
    const fiscalizacoes = await Fiscalizacao.find({ obraId: req.params.id });
    res.json(fiscalizacoes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar fiscalizações por obra' });
  }
});

module.exports = app;
