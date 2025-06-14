const mongoose = require('mongoose');

const FiscalizacaoSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  status: { type: String, required: true },
  observacao: { type: String, required: false },
  localizacao: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  foto: { type: String }, // Base64 ou URL
  obraId: { type: mongoose.Schema.Types.ObjectId, ref: 'Obra', required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('fiscalizacao', FiscalizacaoSchema);
