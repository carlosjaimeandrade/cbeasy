const Sequelize = require('sequelize')
const connection = require('../database/database')

const Cubagem = connection.define('cubagem',{
    l:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    a:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    c:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    caixa:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cubagem:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

//Cubagem.sync({force: true})

module.exports = Cubagem;