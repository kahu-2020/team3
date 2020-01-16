const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view options', {layout: 'main'})
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

//Global Variables
let userName = '';


server.get('/', (req, res) => {
  res.render("home.hbs")
})

server.get('/1', (req, res) => {
  res.render("quiz.hbs")
})

server.post('/name', (req, res) => {
  username = req.body.name 
  res.redirect('/1')
})

module.exports = server