const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    res.render('index',{
        mensagem: req.flash('message')
    })
})

router.post('/', (req, res) => {
    const largura = req.body.largura
    const altura = req.body.altura
    const comprimento = req.body.comprimento
    const total = req.body.total

    const cuba = (largura * altura * comprimento) *total

    req.flash('message', `Total: ${cuba} m³` );
    res.redirect('/')
})

module.exports = router