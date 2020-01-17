const express = require('express')
const hbs = require('express-handlebars')
const router = require('./router')
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
let blobFishScore = 0;
let grouseScore = 0;
let fennicFox = 0;
let otherAnimal = 0;


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

server.post('/quiz/answer/1', (req, res) => {
  blobFishScore++
  console.log(blobFishScore) 
  res.redirect('/')
})

server.post('/quiz/answer/2', (req, res) => {
  grouseScore++
  console.log(grouseScore) 
  res.redirect('/')
})

server.post('/quiz/answer/3', (req, res) => {
  fennicFox++
  console.log(fennicFox) 
  res.redirect('/')
})

server.post('/quiz/answer/4', (req, res) => {
  otherAnimal++
  console.log(otherAnimal) 
  res.redirect('/')
})



module.exports = server