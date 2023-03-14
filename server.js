// DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})