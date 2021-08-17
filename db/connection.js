const mysql = require('mysql');
const util = require("util");
const connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
    // Your password
    password: 'Blacksnake123',
    database: 'trackerDB',
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;