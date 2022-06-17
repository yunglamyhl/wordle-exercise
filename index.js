const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()

app.use(cors())

app.use(express.static('static'))

app.get('/check', (req, res) => {
    const word = req.query.word
    const seed = req.query.seed

    const options = {
        method: 'GET',
        url: `https://v1.wordle.k2bd.dev/random?guess=${word}&seed=${seed}`,
    }
    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))
