const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./Routes')


const app = express()
const PORT = 5000


app.use(bodyParser.json())
app.use(cors())
app.use('/', router)


app.listen(PORT, () => {
    console.log("I am listening at :",PORT)
})
