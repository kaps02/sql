const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306, // Port number for MySQL server
    user: 'root', // Login User
    database: 'mysql', // Database name
    password: 'Kapil@12345678', // Password for the user
    
}) ;

module.exports = pool.promise();
