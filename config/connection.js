const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize('techblog_db', 'root', 'Whitley#1', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;