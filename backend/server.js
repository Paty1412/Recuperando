const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis do .env

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/obrasdb';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB conectado');
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Erro ao conectar no MongoDB:', err);
});
