const Sequelize = require('sequelize');
const db = require('../config/database');

const Game = db.define('games', {
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
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Game;