const mysql = require('mysql');
const util = require("util");
const connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
    // Your password
    password: 'root',
    database: 'top_songsDB',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
});

connection.query = util.promisify(connection.query);

module.exports = connection;