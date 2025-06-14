const express = require('express');
const router = express.Router();
const fiscalizacaoController = require('../controllers/fiscalizacaoController');

router.get('/', fiscalizacaoController.listarFiscalizacoes);
router.get('/:id', fiscalizacaoController.obterFiscalizacaoPorId);
router.post('/', fiscalizacaoController.criarFiscalizacao);
router.put('/:id', fiscalizacaoController.atualizarFiscalizacao);
router.delete('/:id', fiscalizacaoController.deletarFiscalizacao);

module.exports = router;
