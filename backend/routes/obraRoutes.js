const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obraController');

router.get('/', obraController.listarObras);
router.get('/:id', obraController.obterObraPorId);
router.post('/', obraController.criarObra);
router.put('/:id', obraController.atualizarObra);
router.delete('/:id', obraController.deletarObra);

// Rota para enviar email com detalhes da obra
router.post('/:id/enviar-email', obrasController.enviarDetalhesPorEmail);

module.exports = router;
