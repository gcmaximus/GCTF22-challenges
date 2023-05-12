//npm install express
const express = require('express')
const serveStatic = require('serve-static')


const host = "localhost"    //change if needed
const port = 3030

const app = express()

app.use(function (req, res, next) {
    if (req.url == '/') {
        req.url = '/index.html'
    }
    next()
})

app.use(serveStatic(__dirname + '/public'))


app.listen(port, host, function() {
    console.log(`Server started on http://${host}:${port}`)
})