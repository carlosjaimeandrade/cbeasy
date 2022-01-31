const Sequelize = require('sequelize')

const connection = new Sequelize('cuba','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;