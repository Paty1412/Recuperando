const Fiscalizacao = require('../models/fiscalizacao');

exports.listarFiscalizacoes = async (req, res) => {
  try {
    const fiscalizacoes = await Fiscalizacao.find();
    res.json(fiscalizacoes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar fiscalizações' });
  }
};

exports.obterFiscalizacaoPorId = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.findById(req.params.id);
    if (!fiscalizacao) return res.status(404).json({ error: 'Fiscalização não encontrada' });
    res.json(fiscalizacao);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter fiscalização' });
  }
};

exports.criarFiscalizacao = async (req, res) => {
  try {
    const fiscalizacao = new Fiscalizacao(req.body);
    await fiscalizacao.save();
    res.status(201).json(fiscalizacao);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar fiscalização', details: err.message });
  }
};

exports.atualizarFiscalizacao = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fiscalizacao) return res.status(404).json({ error: 'Fiscalização não encontrada' });
    res.json(fiscalizacao);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar fiscalização' });
  }
};

exports.deletarFiscalizacao = async (req, res) => {
  try {
    const fiscalizacao = await Fiscalizacao.findByIdAndDelete(req.params.id);
    if (!fiscalizacao) return res.status(404).json({ error: 'Fiscalização não encontrada' });
    res.json({ message: 'Fiscalização deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar fiscalização' });
  }
};
