const app = require('./app')

//change if needed
const port = 9999


app.listen(port, function () {
    console.log(`Back-end Server started on port ${port}`)
})