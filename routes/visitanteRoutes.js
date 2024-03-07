const express = require('express');
const router = express.Router();
const controller = require('../controllers/visitanteController.js');

router.post('/cadastrar', async (req, res) => {
    res.send(await controller.cadastrar(req.body));
});

router.get('/', async (req, res) => {
    res.send(await controller.listar());
})

router.get('/contar-generos', async (req, res) => {
    res.send(await controller.contarPorGenero());
})

router.get('/contar-cidade', async (req, res) => {
    res.send(await controller.contarPorCidade());
})

router.get('/contar-bairro', async (req, res) => {
    res.send(await controller.contarPorBairro());
})

module.exports = router;