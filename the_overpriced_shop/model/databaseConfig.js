//npm install mysql
const mysql = require('mysql')
const dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: 'localhost',  //change if needed
            port: 3306,
            user: 'root',
            password: 'woodgrove',  //change if needed
            database: 'the_overpriced_shop', //do not change this
            dateStrings: true
        });
        return conn;
    }
};
module.exports = dbconnect