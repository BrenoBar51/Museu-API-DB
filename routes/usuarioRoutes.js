const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController.js');

router.post('/login', async (req, res) => {
    res.send(await controller.logar(req.body));
});

router.get('/', async (req, res) => {
    res.send(await controller.listar());
})

module.exports = router;