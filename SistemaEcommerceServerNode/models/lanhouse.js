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
    }
});

module.exports = LanHouse;