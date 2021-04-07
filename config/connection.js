require('dotenv').config();
const Sequelize = require('sequelize');
let sequelize;


// create connection to our db
if (process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PASSWORD, {
        host: process.env.HOST,
        dialect: 'mysql',
        port: 3306
    });
    
}

module.exports = sequelize;