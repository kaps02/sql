const  Sequelize  = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'mysql', // Or any other dialect such as 'postgres', 'sqlite' etc.
  host: 'localhost',
  username: 'root',
  password: 'Kapil@12345678',
  database: 'nodecomplete',//database name
})

module.exports = sequelize;