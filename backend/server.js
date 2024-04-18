const express = require('express')
const color = require('colors')
const dotenv = require('dotenv')
dotenv.config()
const {errorHandler} = require('./middleware/middleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/routes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});