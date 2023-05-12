//npm install express
//npm install cors
const express = require('express')
const app = express()

//middleware
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.options('*', cors())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const Model = require('./model/Model')

app.post('/search-id', function (req, res) {
    const productid = req.body.productid

    // filter #'s
    if (productid.includes('#')) {
        res.status(500)
        res.json({ errorThrown: "We see what you're trying to do.. No #'s allowed!!" })
        return
    }
    Model.searchProductByID(productid, function (err, result) {
        if (err) {
            res.status(500)
            res.json({ errorThrown: "Product ID not found" })
            return
        }

        res.status(200)
        res.json({ success: true, result: result, status: "Retrieving products" })
    })
})







module.exports = app