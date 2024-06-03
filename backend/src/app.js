const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors())
app.use(express.json())
app.use(router)

module.exports = app