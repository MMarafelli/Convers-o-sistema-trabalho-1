const Sequelize = require('sequelize');
const db = require('../config/database');

const LanHouse = db.define('lanhouse', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pagamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tempoDeMaquina: {
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

module.exports = LanHouse;