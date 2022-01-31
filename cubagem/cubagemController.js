const express = require('express');
const router = new express.Router();
const Cubagem = require('./cubagem')

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

    Cubagem.create({
        l: largura,
        a: altura,
        c: comprimento,
        caixa: total,
        cubagem: cuba
    }).then(()=>{
        req.flash('message', `Total: ${cuba} m³` );
        res.redirect('/')
    })
})

router.get('/historico', (req,res)=>{
    Cubagem.findAll({
        order: [['id', 'DESC']]
    }).then((dados)=>{
        res.render('historico',{
            dados: dados,
            mensagem: req.flash('message')
        })
    })
   
})

router.get('/historico/delete/:id', (req,res)=>{
    const id = req.params.id
    Cubagem.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        req.flash('message', `Deletado com sucesso` );
        res.redirect('/historico')
    })
})

module.exports = router