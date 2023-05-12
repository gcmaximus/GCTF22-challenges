const db = require("./databaseConfig");
const Model = {
    searchProductByID: function (productid, callback) {
        const conn = db.getConnection()
        conn.connect(function (err) {
            if (err) {
                return callback(err, null)
            }
            else {
                //connected to database
                const sql = `SELECT * FROM products WHERE id = '${productid}'`
                console.log(sql)
                conn.query(sql, (err, result) => {
                    conn.end()
                    if (err) {
                        return callback(err, null)
                    }
                    else if (result.length == 0) {
                        var err2 = new Error("No products found.");
                        err2.statusCode = 500;
                        return callback(err2, null);
                    }
                    else {
                        return callback(null, result)
                    }
                })
            }
        })
    }
}

module.exports = Model