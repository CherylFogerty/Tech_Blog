require('dotenv').config();
const Sequelize = require('sequelize');



// create connection to our db
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;