const sequelize = require('sequelize');

require('dotenv').config();

//creates connection to database using dotenv
const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
    host:'localhost',
    dialect:'mysql',
    port: 3001
});

Model.exports = sequelize;