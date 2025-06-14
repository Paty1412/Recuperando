const Obra = require('../models/obra');
const nodemailer = require('nodemailer');

exports.listarObras = async (req, res) => {
  try {
    const obras = await Obra.find();
    res.json(obras);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar obras' });
  }
};

exports.obterObraPorId = async (req, res) => {
  try {
    const obra = await Obra.findById(req.params.id);
    if (!obra) return res.status(404).json({ error: 'Obra não encontrada' });
    res.json(obra);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter obra' });
  }
};

exports.criarObra = async (req, res) => {
  try {
    const obra = new Obra(req.body);
    await obra.save();
    res.status(201).json(obra);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar obra', details: err.message });
  }
};

exports.atualizarObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!obra) return res.status(404).json({ error: 'Obra não encontrada' });
    res.json(obra);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar obra' });
  }
};

exports.deletarObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndDelete(req.params.id);
    if (!obra) return res.status(404).json({ error: 'Obra não encontrada' });
    res.json({ message: 'Obra deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar obra' });
  }
};

// Envio de email com detalhes da obra
exports.enviarDetalhesPorEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const obra = await Obra.findById(req.params.id);
    if (!obra) return res.status(404).json({ error: 'Obra não encontrada' });

    const emailService = require('../utils/emailService');

    const textoEmail = `Informações da obra:
Nome: ${obra.nome}
Responsável: ${obra.responsavel}
Data início: ${obra.dataInicio.toDateString()}
Data fim: ${obra.dataFim.toDateString()}
Descrição: ${obra.descricao}
`;

    await emailService.sendEmail({
      to: email,
      subject: `Detalhes da obra: ${obra.nome}`,
      text: textoEmail,
    });

    res.json({ message: 'Email enviado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
};

