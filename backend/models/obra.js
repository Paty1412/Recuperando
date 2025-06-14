const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  responsavel: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true },
  localizacao: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  descricao: { type: String, required: false },
  foto: { type: String }, // Base64 ou URL
}, {
  timestamps: true,
});

module.exports = mongoose.model('obra', ObraSchema);
