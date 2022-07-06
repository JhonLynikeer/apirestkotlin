const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./config/router')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(process.env.PORT || 21262, () => {
    console.log('express started at http://localhost:21262')
})