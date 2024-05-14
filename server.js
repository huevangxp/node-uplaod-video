const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({limit: 500000, extended: true, parameterLimit: '50000000'}))

app.listen(port, ()=>{console.log('Server Running on port: ' , port)})