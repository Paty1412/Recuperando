const express = require('express');
const router = express.Router();
const fiscalizacaoController = require('../controllers/fiscalizacaoController');


router.get('/obra/:obraId/fiscalizacoes', async (req, res) => {
  const { obraId } = req.params;
  try {
    const fiscalizacoes = await Fiscalizacao.find({ obraId });
    res.json(fiscalizacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar fiscalizações' });
  }
});
router.get('/', fiscalizacaoController.listarFiscalizacoes);
router.get('/:id', fiscalizacaoController.obterFiscalizacaoPorId);
router.post('/', fiscalizacaoController.criarFiscalizacao);
router.put('/:id', fiscalizacaoController.atualizarFiscalizacao);
router.delete('/:id', fiscalizacaoController.deletarFiscalizacao);

module.exports = router;
