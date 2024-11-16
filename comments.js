// Create web server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Comments service')
})

app.listen(port, () => {
    console.log(`Comments service listening at http://localhost:${port}`)
})