const express = require('express')
const hbs = require('express-handlebars')
const router = require('./router')

const server = express()

const quizData = require('./quiz.json')
const animalData = require('./animals.json')


// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view options', {layout: 'main'})
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))
server.use('/', router)


  









module.exports = server