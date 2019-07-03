const Sequelize = require('sequelize');
const db = require('../config/database');

const Livro = db.define('games', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    classe: {
        type: Sequelize.STRING,
        allowNull: false
    },
    censura: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anoLancamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Game;