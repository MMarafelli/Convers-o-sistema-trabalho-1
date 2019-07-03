const express = require('express');
const Game = require('../models/games');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
    Game.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        })
});

router.get('/:id', (req, res) => {
    Game.findOne({
        where: { codigo: req.params.id }
    }).then(result => {
        if(result) res.json(result);
        else res.sendStatus(404);
    }).catch(error => {
        res.status(412).json({ msg: error.message });;
    });
});

router.get('/search/params', (req, res) => {
    let query = `%${req.query.nome}%`;

    console.log(query);
    Game.findAll({ where: { nome: { [Op.like]: query } } })
        .then(game => res.json(game))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    console.log(req.body);
    Game.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.put('/', (req, res) => {
    Game.update(req.body, {
        where: { codigo: req.body.codigo }
    })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.delete('/:id', (req, res) => {
    Game.destroy({
        where: { codigo: req.params.id }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({ msg: error.message });
    });
});

module.exports = router;